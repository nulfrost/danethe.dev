---
title: "Setting up a CI/CD environment for my discord bot using AWS CodeDeploy and CodePipeline"
description: "Creating a CI/CD environment using AWS services"
date: "2020-10-18"
---

### Introduction

So recently I passed my AWS CCP exam (yay me) and I've been exploring some AWS services more in-depth and seeing how I could use them with some of the many projects I have going on. There are _a lot_ of services in AWS and to be honest I was kind of overwhelmed at first but there is a ton of documentation and most things are pretty straight forward.

### Discord + Bots = ❤️

I've been writing bots for discord for a while now but they've always been small bots that only did one thing, I've decided recently to make something that did a bit of everything like Tatsumaki or Dyno (both very great bots by the way!). The bot is written in JavaScript and I am using the discord.js library.

### What is CodeDeploy and CodePipeline?

AWS CodeDeploy is a service that one can utilize to deploy an application or code to an AWS EC2 instance, AWS Lambda or AWS ECS. You can deploy an application in-place or use the blue/green method. With the in-place deployment the application is stopped on the EC2 instance, the latest version of the application is installed and started once again. The blue/green method consists of provisioning new instances that the latest version of the application will be installed on then eventually decomissioning the previous instances and routing all traffic to the new instances.

AWS CodePipeline is a service for automating deployments to CodeDeploy. With CodePipeline you can specify where your code is hosted as well as which branch should trigger the deployment process.

### Permissions and troubleshooting

So I didn't have much trouble setting up things like the EC2 instance as I've done so before but getting my deploys to succeed was a bit of a challenge. At first I wasn't really sure why my deploys were failing at the very first step. With a bit of googling and actually reading the documentation I found out that I needed to give CodeDeploy access to my instance 🤦🏾‍♂️. Anyways, along with adding the role and policy for CodeDeploy I needed to add a role for EC2 with a policy to allow it access to S3 (I think I needed to allow HTTP traffic from my EC2 also through the security group). Another issue I had was trying to figure out where to store my environment variables, for local development I use a `.env.development` file but I needed somewhere to store them securely so that they weren't exposed. After a few minutes of searching I found that Parameter Store located inside of the Systems Manager service was exactly what I needed. I could store my environment variables there then access them inside of my bot using the AWS SDK which is exactly what I did. The only other problem I had was getting my bash scripts working for the deploying process which didn't take me that long as I found a few examples online.

![Image of my scripts for CodeDeploy](https://i.imgur.com/crrlvIP.png)

This is what I ended up with and what worked for me, all they do is install node & yarn and installs the bots dependencies as well as using PM2 to stop and start the bot in daemon mode.

### Problems fixed ✅

All in all it was a pretty neat experience and wasn't too hard to set up. With CodeDeploy I was able to deploy my bot to my EC2 instance and with CodePipeline I was able to automate the process so that I wouldn't have to manually deploy my updates. This service also includes CodeCommit and CodeBuild which lets you host your code on AWS as well as if your code has a build step you're able to integrate it inside the CI/CD process. Together this makes it a one stop shop for writing and deploying code in one service which I really like. I've used things like github actions and heroku in the past and while that works too I think this solution is nice for people wanting to have all of their hosting and deployment services in the same place.

![Successful deployment](https://i.imgur.com/DKSHiaR.png)

### Conclusion

Overall setting up a CI/CD environment inside of AWS was a pretty good experience, aside from the permission issues it was pretty straight forward and I'm really excited to continue exploring other services.
