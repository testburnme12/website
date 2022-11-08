---
title: 'Bulk convert Twitter ids to usernames without Twitter API'
date: 2022-04-18
lastUpdated: 2022-05-26
spoiler: ''
tags: ['twitter']
type: tech
slug: b5l
---

I recently had a need to convert a big list of permanent Twitter user ids to
usernames. Here's how I did it.

Getting the username from an id is as easy as following what this URL redirects to: [https://twitter.com/intent/user?user_id=<Twitter_id>](https://twitter.com/intent/user?user_id=12). But doing this is bulk requires using the Twitter API in some way. Registering for Twitter developer account requires verifying your phone number and I didn't want to deal with credentials for this temporary task.

Meanwhile, I found [tweeterid.com](https://tweeterid.com). It allows you to convert Twitter ids to screen names but you have to do it one by one.

Inspecting the network tab in the developer console, I found that it makes a POST request to `https://tweeterid.com/ajax.php` with the data `input=<twitter_id>`. So for my list of ~400 ids, I made a file named `twids` with each line containing one id, and ran the following command in my terminal:

```shell
xargs -I {} curl -s -d 'input={}' 'https://tweeterid.com/ajax.php' -w '\n' < twids
```

This command takes each line of `twids` file, makes a POST request with the data, and writes out the output to stdout separated by newline characters.
