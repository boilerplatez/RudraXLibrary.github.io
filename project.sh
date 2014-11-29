#!/bin/bash

#git push
echo "Rudrax Shell"

if [ "$1" = "clear" ]
then
     sudo rm -r build/*
elif [ "$1" = "setup" ]
then
	mkdir -p build
	sudo chmod 777 build
elif [ "$1" = "composer" ]
then
	echo "cleaning..."
	mkdir -p build
	sudo chmod 777 build
	echo "updating trasitive dependency..."
	composer.phar update
elif [ "$1" = "build" ]
then
	echo "cleaning..."
	mkdir -p build
	echo "building project..."
	zip -9 -r --exclude=*.git* --exclude="build/*/*" --exclude="local/*/*" build/webapp.zip *
elif [ "$1" = "status" ]
then
	find lib -maxdepth 2 -type d -exec echo "************* "{}" " \; \
	-exec  git --git-dir={}/.git --work-tree=$PWD/{} status -s -b \; \
	-exec echo  \; 
	git status -s -b
else
    echo "no action"
fi

