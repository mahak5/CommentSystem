#Commentupdown
This is a comment creating and voting system built on MEAN stack.
The user can post a comment after writing it in the text field provided.
It also prompts if an empty comment is tried to be submitted.
The posted comments can be seen below the post comments area.
One can also upvote and downvote the comments.

##Pre-requisites
A MEAN enviroment local testing server
MongoDB cloud

Node.js

A web browser
Google Chrome

##Steps to run the application

####Step 1
Install npm in root and root>api using command prompt
npm install

####Step 2
Install Angular CLI in root using command prompt
npm install -g @angular/cli

####Step 3
After having cloned the repository the user needs to modify the DB.js file in api folder.

'mongodb://<DBusername>:<DBpassword>@host:port/dbname'
```
Proper data should be fed in place of DBusername, DBpassword, @host, port, dbname

The app will automatically reload if you change any of the source files.

####Step 4

Inside the api folder run `nodemon server` for a MongoDB server. 

####Step 5

Inside the repository folder run `ng serve -o` for a dev server. The app will automatically load or you may navigate to `http://localhost:4200/`

##Screenshots
