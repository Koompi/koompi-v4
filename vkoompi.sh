#!/bin/bash

echo "Who?"
read name

if [ "$name" = "vuthy" ]; 
then

figlet $name


git add --all
git commit -m 'update'
git pull origin master
git push -u origin master

echo "Greate job $name"

else
    echo "Sorry you are not Vuthy"

fi