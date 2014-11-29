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
else
    echo "no action"
fi

