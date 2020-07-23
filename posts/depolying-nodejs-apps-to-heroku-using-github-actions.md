---
title: "Deploying Nodejs applications using Github Actions"
description: "This is how I deploy my Nodejs applications"
date: "2020-07-23"
---

### Introduction

I learned about Github Actions a few months back and have really liked setting up for testing and deploying my applications. Before Github Actions I had been using TravisCI which I liked but it's nice having everything all in one place which is why I switched over to Github Actions.

### What is Heroku?

Heroku is a cloud platform that allows you to host your applications for free (but goes to sleep if no activity) and supports a wide range of programming languages. They also offer addons such as databases, monitoring, caching and so much more. It has been my go-to whenever I've needed to host my backend somewhere. You can check out more on their [site](https://www.heroku.com/home).

### Github Actions

Github Actions are a way to automate your workflows within Github using "actions", which are just steps you write in a configuration file that run your test, build and deploy scripts for your application. There are wide range of predefined actions in the [marketplace](https://github.com/marketplace?type=actions) that you can add to your workflows which make it that much easier to get up and running.

### The setup

[I've setup this repo so that you're able to follow along](https://github.com/Danex2/heroku-actions-example), it's just a simple express application with a single route.

To get started, make an account with [Heroku](https://signup.heroku.com/). Next you'll need to create the application and get an API key from Heroku. To make the application go to your heroku dashboard and click 'New' then 'Create new app'.

![Heroku Dashboard](https://imgur.com/pQJDZXi.png)

Give your app a name and then click 'Create app'.

![Heroku application create page](https://imgur.com/bEj9pSL.png)

To get an API key click the profile icon in the top right and select account settings. Once in the account settings scroll down until you see the API key section.

![API key section in account settings](https://imgur.com/TKH3WCf.png)

To see your key click reveal and make a note, you'll need it for the next steps.

### Creating a workflow

At the root of the express application make two folders. One called `.github` and another one inside of that one called `workflows`. Inside of the workflow folder make a file called `main.yml`. This is where our "actions" will go.

[This](https://github.com/marketplace/actions/deploy-to-heroku) is the action we will use to deploy the application to Heroku. If you scroll down a bit it has instructions on what to do and also the code to put inside the `main.yml` file. I'll explain a bit what each part means.

```javascript
name: Deploy

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: akhileshns/heroku-deploy@v3.3.6 # This is the action
        with:
          heroku_api_key: ${{secrets.HEROKU_API_KEY}}
          heroku_app_name: "YOUR APP's NAME" #Must be unique in Heroku
          heroku_email: "YOUR EMAIL"
```

- The `Name` is just what it'll show up as when you go to the Actions tab in your repo.
- The second line is saying whenever you push to master, run this job. You can change it to on pull request, on a new issue created or closed and so on. Those are the webhook event payloads and a full list of them can be found [here](https://developer.github.com/webhooks/event-payloads/).
- The next part is the meat of where the deploy happens and what it says is, run this job on the latest ubuntu, checkout the repository with the checkout action, use the heroku-deploy action with these settings (API key, application name which must be the same as the name created on Heroku, and your email used to sign up with Heroku)

That's essentially all the action does and it'll deploy to Heroku after it's done. Go ahead and place the code above inside the `main.yml` file. Remember to replace the parts where it says "YOUR ..." with your information.

The last and final thing you'll need to do is to add the API key to your repository, navigate to your repository settings and then click secrets. Click "New Secret" and for the name type in `HEROKU_API_KEY` and for the value paste in your API key and then click "Add secret".

![Github repository settings](https://imgur.com/WGPKA2i.png)

That's it! To test and see if this works make some changes to the application and push it to your repository then go to the actions tab in your repository. You should see your action running. A green checkmark means it ran successfully and a red X means something failed during the action.

![Github action in process](https://imgur.com/vRL1rRi.png)

If all goes well go back to your Heroku dashboard and click on the application you made then "Open app", your app is now running on Heroku!

### Notes

While writing this I realized Heroku had an option to connect your github to heroku and do this exact same thing with less steps, I still think this is a good intro to Github Actions though as there are many different things that can be done with them.

### Conclusion

These are just the first steps into CI/CD and I hope to learn more in the coming months, automating deploys saves so much time and effort once set up correctly the first time and allows me to focus on just developing the application.
