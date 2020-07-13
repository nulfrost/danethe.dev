---
title: "Prettify your terminal"
description: "Making your terminal look a little cooler."
date: "2020-07-13"
---

#### In this short guide I'll go through some steps I usually go through to make my terminal look a little less boring whenever I use a linux distro / mac OS (this can also be done on windows through WSL).

So, you've installed (or re-installed) your shiny new OS, installed all of your developer tools, got a super nice VS code theme and are ready to make your next project. Maybe you'll take a good look at your terminal a few times and think, "Hmm I wonder if I can spruce this up a bit" and I'm here to tell you that you can.

## ZSH

Zsh, or Z shell, is an extension of the Bourne shell with extra features such as not needing to type `cd` when navigating to directories as well as moving up to directories (just typing `..` moves back one directory and having four dots moves back two and so on). There are a ton more features in ZSH that are very useful but it's one of the dependencies you'll need before moving onto the real stuff which is making your terminal pretty.

### Installation

Mac OS:

- `brew install zsh`

Ubuntu/WSL (if installed ubuntu):

- `apt install zsh`

Arch/Manjaro:

- `pacman -S zsh`

For any other operating systems a complete list can be found here: https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH

## Oh My ZSH

Now for the stuff you've come here for, the making your terminal pretty part! Oh my ZSH is a framework for managing your zsh config, so things like adding aliases for commands, adding plugins for things like shorter and memorable commands for various services such as docker, aws, git etc. Oh my ZSH makes this process simple and painless.

### Installation

The installation script is just a [one line script](https://github.com/ohmyzsh/ohmyzsh) which can be found on the github repository.

Here is what it looks like: `sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

That is pretty much it for the installation and now we can start adding things like themes and plugins.

### Config

To start open the config file which is located at `~/.zshrc` using vim or whatever text editor you like. ex. `vim ~/.zshrc`

In here there are a ton of config options but the only one we'll be focusing on today is the `ZSH_THEME` option. It'll be set to the default theme that comes with the installation but whenever you install a theme you'll need to change it here also.

For example, this is what I currently have as my theme:
![my-current-theme](https://imgur.com/IUnGvTo.png)

More themes can be found here: https://github.com/ohmyzsh/ohmyzsh/wiki/Themes and here https://github.com/ohmyzsh/ohmyzsh/wiki/External-themes as well as using githubs search to find more that aren't included in these lists by typing this in the search bar `*.zsh-theme`.

### Installing a theme

You can look through the theme lists posted above and find one that you like but for this tutorial we'll be using [this](https://github.com/tylerreckart/hyperzsh) one.

Most repositories have instructions for installing a theme which generally includes fetching the theme from the repository and placing it in the `/themes` folder in your zsh directory which can be found at `~/.oh-my-zsh/themes/`.

For this theme it gives you the command to do that so copy and paste this command into your terminal: `wget -O $ZSH_CUSTOM/themes/hyperzsh.zsh-theme https://raw.githubusercontent.com/tylerreckart/hyperzsh/master/hyperzsh.zsh-theme` and it should get the theme and place it into your themes folder.

Next all we have to do is change the theme in the zsh config which again is located at `~/.zshrc`.

Go ahead and open that file and edit the line where it says `ZSH_THEME`, it should look like this now

![setting-a-new-theme](https://imgur.com/sa0EKj7.png)

(You may need to restart your terminal if you don't see any changes)

Save and close the file then type `source ~/.zshrc`, all this command does is commit the changes you made to the ZSH config which you'll have to do every time you make a change so it's a good idea to make an alias for that command so you don't have to type that long line all the time.

That is pretty much it for installing a theme and making your terminal look a little less boring, I'd take some time to explore the oh my ZSH repository as there is a lot of good information there for any extra customizations you may want to do.

### Tips

Make an alias for opening and updating the config

- Open the zsh config again
- Go to the bottom of the file
- You sould see commented out lines similar to this `alias zshconfig="mate ~/.zshrc"`
- Under those lines add these two aliases
  - alias u="source ~/.zshrc"
  - alias config="vim ~/.zshrc"

You can change the name for the alias but I just have it set as "u" and "config" because it's easy for me to remember.

### Conclusion

That's it, that's all you have to do to add a theme and make your terminal a little less boring. For more customization I'd suggest looking into changing your terminal colours and adding plugins to your zsh config to make your workflow a little better.
