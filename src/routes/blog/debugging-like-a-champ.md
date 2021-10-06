---
title: 'Using the JavaScript debugger to squash bugs faster ⚡️'
description: 'Throw away your console.logs and debug quicker with the JavaScript debugger'
date: '2021-10-05T23:06:34.255Z'
layout: blog
---

<script context="module">
	export const hydrate = false;
    export const prerender = true;
</script>

<script>
    import Title from "../../components/PageTitle.svelte"
</script>

<Title {title} />

# {title}

I think the most useful thing I've learned since I started my new job was using the JavaScript debugger more when trying to figure out why something isn't working. Like most people I would litter my code with console.logs to figure out where things could have went wrong but I've noticed even that was a little slow.

## Stopping time with the debugger

There are two ways to activate the JavaScript debugger, either place a `debugger` statement in the code or place breakpoints on the line numbers you want to debug inside of your browser of choice in the `sources` tab. Simply refreshing after these are placed will cause the debugger to activate.

```javascript
function someFunkyCode() {
	debugger;
	console.log('This code will break at some point in time');
}
```

To find the file you want to debug in the browser you'll need to search for it using <kbd>CMD</kbd> + <kbd>P</kbd> and then typing in the file name.
![Viewing the debugger tab in the firefox devtools](https://i.imgur.com/fLvtpFq.png)

## Controlling the flow

There are 4 buttons that can be used to move through the code while in debugger mode. Play, Step Over, Step In and Step Out.

![Browser debugger controls](https://i.imgur.com/Rw16foy.png)

- **Play**: If there are any other breakpoints, move to the next breakpoint.
- **Step Over**: Moves to the next line in the function you're in.
- **Step In**: Moves to the next line in a function unless there is a function call inside of that function, then step into that function.
- **Step Out**: Run till the end of the function.

With these 4 operations you're able to move through your code and examine things line by line.

## Bonus cool thing: Logpoints

![Browser debugger log points](https://i.imgur.com/GWbpIjR.png)

The most recent feature I found that has been really useful for me was log points, you still get your console.logs but without having to place them all over your code and then having worry about cleaning them up after when you've merged your code into main. (This totally has not happened to me. 😅)
