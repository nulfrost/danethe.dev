---
title: 'Docker for Frontend Developers'
description: 'How I utilize docker to make developing and deploying websites easier'
date: '2021-03-18'
layout: blog
---

# {title}

I'll be honest, it took me a while to understand what docker was and why/how one would even use it in a typical workflow. I've read the documentation months ago to understand the basics but never knew how I could apply it into my own workflow or projects until recently. That's when I started to use it wherever I could.

## A tl;dr of what docker is

Docker is a platform for developing and deploying applications wherever docker is installed. Before docker there were VMs (such as virtualbox) where you could take an image, usually an operating system, and stick it on some virtual hardware that you would then configure to your needs and then use that image in production to run whatever service you configured it for. Docker is similar to that but much lighter and much easier to get up and running.

With docker you're able to pull pre-configured images from the docker "hub" and get up and running in a matter of minutes. Docker also allows you to create an environment that is consistent no matter where the application is running which I think is a huge plus because I've run into situations where I switch computers and for whatever reason the thing I'm working on just doesn't work!

## Getting up and running, fast

Typically when I start a new project, be it a website or a discord bot, I'll usually end up needing some sort of database. Usually I would download the software needed to run the database on my computer and maybe a client to view the data in the database. Now, I'd just use docker and pull whatever image I needed for the database I'm using.

```
docker pull postgres
docker run --name -d -p 5432:5432 -e POSTGRES_PASSWORD=password postgres
```

That's it! That's all I would need to get a postgres database running.

I'll explain what some of these command line options mean.

```
docker pull postgres
```

With this command I'm saying, "On docker hub, find the postgres image and download it".

There are a ton of images on docker hub for services you may neeed such as redis, apache, mongoDB, etc.

```
docker run --name postgres -d -p 5432:5432 -e POSTGRES_PASSWORD=password postgres
```

This command is a little more involved so I'll break it down.

`` docker run` --name postgres `` is how you would spin up a new container (a new, tiny instance of postgres) and the name of the container would be postgres. By default if no name is given then docker will generate a random one. It's good practice to give your containers a name because they become easier to identify and easy to remember should you need to stop or start the container.

`-d` just means run the container in daemon mode, instead of in the foreground.

`-p 5432:5432` this is where you would set the port for the container so that the docker host can communicate with the container. Postgres runs on the port 5432 so we would need to say port 5432 on the host maps to port 5432 on the container.

`-e POSTGRES_PASSWORD=password` to set environment variables at runtime you would need to provide the -e flag. An alternative to this would be to have a file where your secrets live and use `--env-file .env` instead.

`postgres` last but not least the image you want to run. You can see a list of images you have dowloaded on your machine with `docker images`.

## Conclusion

This post is mostly just a tl;dr of how to get started with docker as well as showing how easy it is. There are other things I wanted to cover such as building your own image, pushing an image to docker hub as well as deploying an image but I felt that would be a lot for a blog post so I'll leave some resources that helped me a bunch when I was learning about docker.

[Docker and Kubernetes for beginners (FreeCodeCamp)](https://www.youtube.com/watch?v=Wf2eSG3owoA&t=1999s)

[Docker documentation](https://docs.docker.com/reference/)

[Deploying docker images to Heroku](https://devcenter.heroku.com/categories/deploying-with-docker)
