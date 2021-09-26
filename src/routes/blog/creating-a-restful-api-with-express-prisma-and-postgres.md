---
title: 'Creating a RESTful API with Express, Prisma and Postgres'
description: 'A short walk-through on how to create an API and follow some best practices'
date: '2021-05-03'
layout: markdown
---

# {title}

In my journey to becoming a web developer at some point I needed a way to store and retrieve data from an application I wanted to build. At the time I wasn't really sure how to do it but I at least knew I would need a database to store information. Other components needed are a web server to handle the requests and a way to talk to the database to store and retrieve information. This can be done with just raw SQL or with an ORM. In this blog post I'll go over the different pieces needed to create RESTful API.

## What exactly is RESTful API?

REST is a set of constraints used to describe how a client and server should communicate. An API that follows the REST guidelines makes can make use of the 5 HTTP methods as they were intended to be used.

- **GET**: Retrieve data from the resource
- **PUT**: Replace a resource entirely
- **PATCH**: Replace some properties of a resource
- **POST**: Create new data
- **DELETE**: Delete data from the resource

There have been questions that I've seen that ask what the difference is between PUT and PATCH since technically they can both be used to update a resource but I think the major difference between them is that PATCH is used to update some parts of a resource while PUT would be used to replace a resource entirely.

## What is an ORM?

At the beginning of the post I mentioned using an ORM and while I think it's a good thing to use if you're not well versed in writing raw SQL I think it's still very worthwhile to learn SQL just to understand how things like joins, querying data from tables, relationships and data normalization work. With that being said though an ORM lets you create database schemas and query the database in an object oriented way. A lot easier to use as opposed to raw SQL if you wanted to get up and running quickly.

For example in mongoose, an ODM for mongoDB, querying for data would look something like this

```javascript
User.findOne({ name: 'Dane' });
```

which would return a document where the name matches "Dane".

## Relational vs Non-relational databases

Relational and non-relational databases both have their uses, typically you would use a relational database when your data is structured and you need consistency. Non-relational databases are good for rapid development and allow businesses to scale quickly.

### Relational databases

Say we were creating a database of books. Books have titles and pages but they also have authors. Now we could have that author's data inside of that book table but what if we wanted to query information just about that author? We could write a query that searches the book table for that author but we'd also be getting the book information when we just care about the author. That's when we would create a separate table for the author and store the information about them there.

The way you would link a book with its author would be to store a foreign key, which is usually some unique identifier, on the book table which would be the same as primary key on the author table. When creating tables in a relational database it's best to just have information that is related to that entity on that table. That way you're able to be more flexible with your queries when querying for data.

The language used to retrieve, update and delete data from a relational database is SQL (Structured Query Language). Writing raw SQL is very powerful as it gives the developer full control and allows them to optimize as much as they want to to interact with the database.

### Non-relational databases

Non-relational databases are great if your data doesn't really have a structure or if your structure is constantly changing and you care about moving quickly. Non-relational databases can store information as documents, key / value stores, graphs or columns. Personally for most of the projects I work on I use a relational database because that's what I'm most comfortable with and it makes sense for the stuff I make. I think it's a good idea to think about the data you are storing and whether you need the schema flexibility and scaling that a non-relational database provides.

## Express, Prisma and Postgres

Now with getting a basic understanding about the components involved in creating a RESTful API out of the way I'll go over the libraries / database I use for my backends.

- Express: A web server framework for node.js
- Prisma: A very powerful ORM for node.js
- Postgres: My database of choice when working with relational databases

## Installing dependencies

Now for some actual programming, to get start create a folder called `express-api` and run these commands to install express and prisma.

```bash
npm init -y
npm install express @prisma/client
npm install prisma --save-dev
```

For this walkthrough you'll need postgres, for macOS you can do `brew install postgresql` and for windows you can install it through the postgres website or use docker.

## Creating your first RESTful route

Inside of your project folder create an `index.js` file and copy this code into your editor.

```javascript
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
	response.status(200).send('Hello from my API!');
});

app.listen(3005, () => console.log('Express server running at: http://localhost:3005'));
```

That's it! That's enough to get your first API up and running! In your terminal run `node index.js` and go to `http://localhost:3005`. You should see a message in the browser.

## Proper naming conventions

It's helpful to list out the needs of your API beforehand to get a better picture of what functionality you'll need. We'll need ways to create, query, update and delete cars but how would that look like as API routes?

### GET and POST routes

Our GET and POST routes will be pretty simple, for example our route for getting all cars will look like `/cars`. Now you may be thinking that for getting information about a single car we could make a route like `/car/:id` and while you could make an endpoint like this it would not be consistent with the rest of the API where we use the plural version instead of the singular version. Having consistency not only helps the developer but also anyone that would end up consuming the API.

### PUT, PATCH and DELETE routes

Our PUT, PATCH and DELETE routes will look similar in that they will be expecting an ID to be passed in along with the route since we will be updating and deleting specific resources. Our GET routes will also be expecting an ID if we wanted to get a specific car. An example would be `/cars/:id` where `:id` would be the id for the resource.

These are what our routes will look like.

**GET**

```bash
/cars
/cars/:id
```

**POST**

```bash
/cars
```

**PUT, PATCH and DELETE**

```bash
/cars/:id
```

And this is what it look like in code.

```javascript
const express = require('express');

const app = express();

app.get('/', (request, response) => {
	response.status(200).send('Hello from my API!');
});

app.get('/cars', async (request, response) => {
	response.send('Get all cars');
});

app.get('/cars/:id', async (request, response) => {
	response.send('Get a single car');
});

app.post('/cars', async (request, response) => {
	response.send('Create a new car');
});

app.put('/cars/:id', async (request, response) => {
	response.send('Replace all properties about a certain car');
});

app.patch('/cars/:id', async (request, response) => {
	response.send('Replace some properties about a certain car');
});

app.delete('/cars/:id', async (request, response) => {
	response.send('Delete a car entirely');
});

app.listen(3005, () => console.log('Express server running at: http://localhost:3005'));
```

Next we'll quickly set up our database schema so we can store data.

## Prisma schema

I like using prisma because it allows me to visualize what my tables will look like through code and the prisma client is insanely good because it includes advanced filtering and pagination out of the box! I'll go over the schema quickly but I highly suggest heading over to the [prisma docs](https://www.prisma.io/) and reading about what it offers and how cool it is.

To get started, run `npx prisma init`. This command will create a `prisma` folder and inside of that is where we will define the schema for the database and also where the database migrations will live. It also should have created a `.env` file, update the database url string with the correct username and password and database name for your postgres server.

**NOTE**: Remember to initialize the prisma client inside of the index.js file

```javascript
const prisma = new PrismaClient({
	log: ['query', 'info', `warn`, `error`]
});
```

**Database URL**

```bash
DATABASE_URL="postgresql://<postgres username>:<postgres password>@localhost:5432/<database name>?schema=public
```

**Prisma Schema**

```bash
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Car {
  id           String @id @default(uuid())
  year         Int    @db.Integer
  color        String @db.VarChar(100)
  manufacturer String @db.VarChar(255)
  model        String @db.VarChar(100)
}
```

This is a pretty basic schema but I want to keep it as simple as possible to get the point across. Next we'll want to run a migration to build this table and generate the client code so we can query and modify items in the database. To do that run `npx prisma migrate dev --name init`. To see that the table was created successfully run `npx prisma studio`. With all of the setup out of the way we can finally start filling out our routes.

## Status codes, data responses and error messages

So now we're at a point where we can start sending data back to the client but an important part that goes with sending data back is also using the correct status codes. Here are some examples of status codes that can be sent back.

```bash
200 - Everything OK
201 - Created resource OK
202 - Accepted but processing
204 - Successful but no message body
400 - Bad request or invalid request (from client)
401 - Unauthorized, insufficient permissions
404 - Not found on the server
500 - Server error
```

For example, say the client sent a request for the author with an id of 1. We would send back the 200 status code provided everything went well on the server and there was no error. I also think sending the correct response code helps with debugging because you can quickly identify what type of error you're getting just by the status code and go from there.

### Data response

Proper structure of the data being sent back is also important, before I used to just take whatever data came back from the ORM and send it to the client but after some research I learned that it's better to namespace responses in the event that I wanted to add other data onto the response.

Say if I was sending an array of data back to the client

```javascript
{
   "data":[
      {
         "name":"Hulk Hogan",
         "id":"100002"
      },
      {
         "name":"Mick Foley",
         "id":"100003"
      }
   ],
	 "total": 2
}
```

I could add things like the total amount of records onto the response if that were a requirement or anything else that would be needed in the future.

### Error messages

Error messages were also another thing I overlooked early into working with APIs. This isn't even just good for developers but also good for clients. Nothing is more frustrating than getting a very vague error message and having to figure out for hours what the heck is wrong. Usually I'll include the status code, a title that gives a brief summary of the error and then a detail field that gives a little more information about what went wrong, usually the error message from the error stack.

With all of that information handy our GET route for all cars route would look something like this.

```javascript
app.get('/cars', async (request, response) => {
	try {
		const cars = await prisma.car.findMany();
		return response.status(200).json({ data: cars, total: cars.length });
	} catch (error) {
		return response.status(500).json({
			data: {
				status: 500,
				title: 'Server error: This error occurred on the server',
				details: error.message
			}
		});
	}
});
```

To test this out use something like postman or insomnia to send a GET request to `http://localhost:3005/cars`

![Image of GET request](https://i.imgur.com/5EFYw1R.png)

With this in place we can start adding functionality to the rest of the cars routes.

```javascript
app.get('/cars/:id', async (request, response) => {
	try {
		const { id } = request.params;
		const car = await prisma.car.findUnique({
			where: {
				id
			}
		});
		return response.status(200).json({
			data: {
				car
			}
		});
	} catch (error) {
		return response.status(500).json({
			data: {
				status: 500,
				title: 'Server error: This error occurred on the server',
				details: error.message
			}
		});
	}
});

app.post('/cars', async (request, response) => {
	try {
		const { year, color, manufacturer, model } = request.body;

		const car = await prisma.car.create({
			data: {
				year,
				color,
				model,
				manufacturer
			}
		});

		return response.status(201).json({
			data: {
				car
			}
		});
	} catch (error) {
		return response.status(500).json({
			data: {
				status: 500,
				title: 'Server error: This error occurred on the server',
				details: error.message
			}
		});
	}
});

app.put('/cars/:id', async (request, response) => {
	try {
		const { model, year, color, manufacturer } = request.body;
		const { id } = request.params;

		const car = await prisma.car.update({
			where: {
				id
			},
			data: {
				model,
				color,
				year,
				manufacturer
			}
		});
		return response.status(200).json({ data: { car } });
	} catch (error) {
		return response.status(500).json({
			data: {
				status: 500,
				title: 'Server error: This error occurred on the server',
				details: error.message
			}
		});
	}
});

app.patch('/cars/:id', async (request, response) => {
	try {
		const { model, year, color, manufacturer } = request.body;
		const { id } = request.params;

		const car = await prisma.car.update({
			where: {
				id
			},
			data: {
				model,
				color,
				year,
				manufacturer
			}
		});
		return response.status(200).json({ data: { car } });
	} catch (error) {
		return response.status(500).json({
			data: {
				status: 500,
				title: 'Server error: This error occurred on the server',
				details: error.message
			}
		});
	}
});

app.delete('/cars/:id', async (request, response) => {
	try {
		const { id } = request.params;
		await prisma.car.delete({
			where: {
				id
			}
		});
		return response.status(200).json({
			data: {
				message: 'Car deleted successfully'
			}
		});
	} catch (error) {
		return response.status(500).json({
			data: {
				status: 500,
				title: 'Server error: This error occurred on the server',
				details: error.message
			}
		});
	}
});
```

Now we'll test out the rest of the API routes.

Create a new car entry
![Image of POST request](https://i.imgur.com/favCcHd.png)

Update a car
![Image of PUT request](https://i.imgur.com/syLhXIW.png)

![Image of PATCH request](https://i.imgur.com/lRBIq9x.png)

Delete a car
![Image of DELETE request](https://i.imgur.com/VfQxJeI.png)

That's it! That is our API in its entirety using all of the HTTP methods.

## Conclusion and next steps

I hope this blog post is a good jumping point for developers wanting to start building their own APIs for their web applications. Things I didn't cover but would be great next steps to look into are:

- **Caching API requests**: caching helps reduce load on the server as well as serve responses back to the client faster. If you're using express then I highly recommended checking out the [apicache](https://www.npmjs.com/package/apicache) middleware on NPM. It is very simple to get started with and you can add it at the app level or route level.

- **Testing**: testing is very important because it gives you the confidence that your API is working the way it is supposed to. My preferred way of testing express backends is using [supertest](https://www.npmjs.com/package/supertest) and [jest](https://jestjs.io/).

- **API Versioning**: APIs change all the time and starting off with versioning will help you iterate on your API design. For example, for the cars API we could start on version 1 (`/v1/cars`) and then maybe down the line we start making changes or maybe move to graphql but want to keep the REST version of our API we could then have that next version under version 2 (`/v2/cars`). That way for anyone already using our API their websites / apps will continue working normally but for anyone new that is consuming the API they would use the new version.
