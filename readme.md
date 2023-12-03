# Express

Install node. Express won't work without node.

Also have npm install as well.

Also have a text editor like VS code.

Also download postman to make post and pull requests.

create a new directory and call it express_tutorial

```
mkdir express_tutorial

cd express_tutorial

npm init -y

npm i express

code .

npm i -D nodemon
```

Create a file called src

Then create index.js

Go to package.json and edit the scripts

```
"start": "node ./src/index.js",
"dev": "nodemon ./src/index.js"
```

Run the script with 

```
npm run dev
```

edit index.js:

```
console.log("hello");
```

