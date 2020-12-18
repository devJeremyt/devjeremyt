---
title: "Connecting Node to Microsoft Sql Server"
category: "posts"
date: "2020-12-18"
---

## For Starters

There are a few potential modules that can be used to connect to a Microsoft SQL Database. But for this we are going to be using [tediousjs's node-mssql](https://github.com/tediousjs/node-mssql). From the documentation and issues logs I could tell that this open source project had been idle for a short period, but it has been picked up and maintained by the Tediousjs team which is who wrote the driver for the connection. I will note that there is another driver for Node V8 that is separate from the examples I use here. So first things first, assuming you already have the project started you are wanting to add a sql server to, install the package.

```
npm install mssql
```

## Create a Connection Pool

In almost all applications you will be running more than one query in more than one spot in your code. If you were, it would be sensible to not use a connection pool, and only connect to the database when you need it. For all other instances, you'll want to establish a connection the to database upon starting your application and hold a pool of connections that can be used anywhere throughout your application to run queries against the database. In the root of your project create a js file, like the db.js file below.

```javascript
const sql = require('mssql');

//Configuration used to connect to SQL
const config = {
    user: process.env.SQLUSER,
    password: process.env.SQLPASS,
    server: process.env.DBSERVER,
    database: process.env.DBNAME
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool =>{
        return pool;
    })
    .catch(err => console.log('Database Connection Failed', err));

module.exports = {sql, poolPromise};
```

To connect to the database, mssql needs a configuration object with the minimum properties: user, password, server, database. The user and password are a user account in the database, if your database is managed by someone else ask the database administrator to create an account for you, else you can google how to create the account. Do not use the sa account, the account used should only have the permissions that are necessary to run the queries you expect to use. The server is likely the computer name of where the server is hosted, and the database is the actual instance you are connecting to. I suggest storing all this information in an .env file that loads at the start of your application. I may do another post on that at some point, but if you aren't familiar with setting up environment variables do some reading on that before continuing. __You do not want to put any of the actual connection properties in clear text in your configuration object.__ If you were to save this connection information in clear text and push to your open cloud repo, anyone that stumbles to your project would be able to see how to get into your database. 

## Using a Connection

The connections used in the manner I show above provide a promise that can be used throughout the application. Alternatively you could use callbacks. Here we will be using the promise in an async function, that awaits for the pool's promise to resolve. The first time your application awaits for the pool's promise is when the pool of connections is created, you may experience a slight delay compared to subsequent connections.

First require the poolPromise exported from the db.js file
```javascript
{ poolPromise } = require('../db');
```

Then create a function that awaits the poolPromise

```javascript
async function(req, res){
    const pool = await poolPromise
}
```

In that function, I usually write out the query as a string literal, this way you could use the same technique to write a query for a store procedure or any query. If you are using stored procedures, there is a better method that allows you to pass the parameters though.

```javascript
let queryStr = `Select * FROM people WHERE name = 'Jack';`
```

Finally use that string in a query to the DB

```javascript
pool.request().query(queryStr, (err, result)=>{
    if(err){
        // Handle error
    }else{
        res.status(200).json(result)
    }
})
```

So all together

```javascript
{ poolPromise } = require('../db');

async function(req, res){
    const pool = await poolPromise
    let queryStr = `Select * FROM people WHERE name = 'Jack';`

    pool.request().query(queryStr, (err, result)=>{
    if(err){
        // Handle error
    }else{
        res.status(200).json(result)
    }
})
}
```

This is just one example of how to how to run a query. TediousJS has good documentation for alternate ways.