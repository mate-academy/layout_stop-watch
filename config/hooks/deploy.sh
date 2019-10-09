#!/usr/bin/env bash

git add src/
git commit -m "deploy static content"
git subtree push --prefix src origin gh-pages
