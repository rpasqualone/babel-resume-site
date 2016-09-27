#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

# Some common configuration
TARGET_BRANCH="gh-pages"
SOURCE_DIRS=("./build")
DEST_DIRS=("./")

REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Clone target branch for this repo
echo "------------------------ Cloning target branch ${TARGET_BRANCH} into temporary directory"
git clone $REPO out
cd ./out
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH

# Delete everything in the branch, including dotfiles, except .git
rm -rf *
find . -path ./.git -prune -o -exec rm -rf {} \; 2> /dev/null
cd ..

# Run the build
echo "------------------------ Executing build"
npm run build

# Copy the build contents to the repo
for i in "${!SOURCE_DIRS[@]}"; do
	SOURCE_DIR="${SOURCE_DIRS[$i]}"
	DEST_DIR="${DEST_DIRS[$i]}"

	echo "------------------------ Copying build files from ${SOURCE_DIR} into clone of target branch ${TARGET_BRANCH}"
	mkdir -p ./out/$DEST_DIR
	cp -R $SOURCE_DIR/* ./out/$DEST_DIR
done

cd ./out

git add .

# Nothing to do if there are no files changed
if [[ -z `git diff --cached --exit-code` ]]; then
	echo "------------------------ No changes for this push. Canceling pages deployment."
	# Cleaning up
	cd ..
	rm -rf ./out
	exit 0
fi

# Committing and pushing all changes
echo "------------------------ Committing and pushing changes made to clone of target branch ${TARGET_BRANCH}"
git status
git commit -a -m "Automatically deploying build from working directory. Latest commit: ${SHA}"
git push origin $TARGET_BRANCH

# Cleaning up
echo "------------------------ Deleting temporary clone of target branch ${TARGET_BRANCH}"
cd ..
rm -rf ./out
