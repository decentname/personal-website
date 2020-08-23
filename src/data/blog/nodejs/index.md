---
category: 'blog'
cover: './cover.png'
title: 'What Is Node.js?'
description: 'Do you think you know the basics of this hot technology?'
date: '2020-08-23'
tags: ['Programming', 'NodeJS']
published: true
---

![Nodejs](./cover.png)

Irrespective of the fact that you know Javascript or not, you must have encountered these questions: What is NodeJS? Is it a server side programming language? Is it just another javascript framework like AngularJS?


**NO!** NodeJS is **none** of the above things.

As per the official docs:
 
_**Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine**_

Let's dig deeper and understand this better.

**History:**

It all started in 2009, when Javascript was primarily used to run inside a browser. We could embed Javascript code in a webpage’s HTML and achieve all sorts of benefits like adding events to pages, calling APIs, adding animations etc.

While all this was possible, 28-year-old Ryan criticized the Apache HTTP server for it's limited possibilities to handle concurrent connections. He explored several options to support Javascript outside the browser and went on to become the creator of one of the hottest technologies of future.

But, how did he do it?
To answer this, we must first understand how Javascript runs inside a browser.

**Javascript Engine:**

Every browser has a javascript engine that allows us to execute javascript code inside it. For example: Firefox has SpiderMonkey and Internet Explorer has Chakra (Yes, IE is alive). Join me in welcoming V8, the Javascript Engine inside Google Chrome. V8 is special because this is what powers NodeJS. It not only allows us to execute Javascript outside browser but also gives some over the top features that the browser JS lacks.

**Javascript runtime:**

It's an environment where our Javascript code is executed. For example: In case of ReactJS or AngularJS, browser acts as the environment that executes our JS code.

So, _**NodeJS is not a framework nor a language but a javascript runtime where the javascript code is executed.**_ 

At the time of writing this blog, NodeJS is 11 years old and loved by top companies like Paypal, LinkedIn, Uber, Yahoo, Medium, GoDaddy, Groupon and Walmart. However, many developers still have a hard time explaining the basics of NodeJS. I hope this blog answers the questions asked in the beginning. Don’t forget to share this with other Javascript developers because knowledge has no value unless you use and share it.

Ryan giving a talk on node.js in 2009: https://www.youtube.com/watch?v=ztspvPYybIY