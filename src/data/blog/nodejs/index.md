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

Irrespective of the fact that you know javascript or not, you must have encountered these questions: What is NodeJS? Is it a server side programming language? Is it just another javascript framework like AngularJS?


**NO!** NodeJS is **none** of the above things.

As per the official docs:
 
_**Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine**_

Let's dig deeper and understand this better.

**History:**

It all started in 2009, when javascript was primarily used to run inside a browser. We could embed javascript code in a webpage’s HTML and achieve all sorts of benefits like adding events to pages, calling APIs, adding animations etc.

While all this was possible, 28-year-old Ryan criticized the Apache HTTP server for it's limited possibilities to handle concurrent connections. He explored several options to support javascript outside the browser and went on to become the creator of one of the hottest technologies of future.

But, how did he do it?
To answer this, we must first understand how javascript runs inside a browser.

**Javascript Engine:**

Every browser has a javascript engine that allows us to execute javascript code inside it. For example: Firefox has SpiderMonkey and Internet Explorer has Chakra (Yes, IE is alive). Join me in welcoming V8, the javascript Engine inside Google Chrome. V8 is special because this is what powers NodeJS. Ryan combined the V8 code with C++ to create NodeJS, that not only allow us to execute javascript outside browser but also gives us additional libraries to interact with the Operating System.

Now, the engine can execute the JS code but where exactly are we running this code?

**Javascript runtime:**

It's an environment where our javascript code is executed. For example: In case of ReactJS or AngularJS, the code runs inside a web browser. So our browser is the javascript runtime here. Similarly, NodeJS is the javascript environment for server. Think of it as a container that you place inside the server and send it all your javascript. 


If it's just a runtime, how is a NodeJS developer any different from a Javascript developer?

It's the same as asking the difference between a Frontend developer and Backend developer. A NodeJS developer is someone who breathes javascript and understands the fundamentals of server side development. A good understanding of javascript can save you the effort of learning a new language but there is no running away from the basics. This is one the reasons NodeJS became popular. I would let Ryan explain other reasons for it's popularity: https://youtu.be/ztspvPYybIY


At the time of writing this blog, NodeJS is 11 years old and loved by top companies like Paypal, LinkedIn, Uber, Yahoo, Medium, GoDaddy, Groupon and Walmart. However, many developers still have a hard time explaining the basics of NodeJS. I hope this blog answers the questions asked in the beginning. Don’t forget to share this with other javascript developers because knowledge has no value unless you use and share it.