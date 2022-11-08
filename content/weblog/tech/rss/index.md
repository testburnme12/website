---
title: 'Use RSS for privacy and efficiency'
date: 2021-01-15
lastUpdated: 2022-01-06
spoiler: ''
tags: ['rss', 'privacy']
type: tech
slug: q2z
---

Social media sites are riddled with ads, trackers, and dark patterns. As much as I'd love to avoid using them for privacy reasons or time concerns, it's just not possible to keep up to date with current events without them.

[RSS](https://en.wikipedia.org/wiki/RSS) ("Really Simple Syndication") gives you the best of both worlds. For the uninitiated, it is a way to "subscribe" to websites without having to browse them individually or signing up for newsletters. With a collection of RSS feeds, you can keep up with the latest updates from multiple sources (that offer an RSS feed) from within your feed reader.

Popular sites that offer private/public RSS feeds include GitHub, YouTube, Reddit, and Stack Overflow. There are ways to get RSS feeds for other sites like Twitter and Instagram. In this document, in addition to how to use and manage your RSS subscriptions, I want to suggest an overall general privacy tip to reduce your digital footprint by visiting privacy-respecting alternative frontends for social media sites like Reddit and YouTube.

## Moving everything to RSS

This might sound somewhat _selfish_ but I have stopped subscribing/following anything/anyone online. When every interaction on a site is being tracked and used against you to sell your data, serve targeted ads, I don't think this is surprising.

Instead I use my RSS feed reader. There is no need to log into YouTube and "subscribe" to channels to view new uploads from my favorite channels or "join" subreddits to keep up with top posts on Reddit, or "follow" an account on Twitter. These are things that can be managed with a good feed reader. There are excellent open source solutions to manage your feeds for various platforms:

- [Newsboat](https://newsboat.org) for blogs and text-based sites

  Newsboat is a commandline feed reader for \*nix systems that reads a list of feeds from a plain text file. It provides a powerful syntax to manage feeds with tags/folders, custom title, feed collections, create filtered lists, etc.

- [NewPipe](https://newpipe.net) for YouTube

  NewPipe is a third-party Android app that allows you to import subscriptions directly from `subscriptions.csv` provided by [Google Takeout](https://takeout.google.com). You can also add more subscriptions, save/create playlists, create custom channel groups and save them locally without using YouTube's interface.

  Other apps that provide similar functionality are [LibreTube](https://github.com/Libre-tube/LibreTube) for Android and [FreeTube](https://freetubeapp.io/) for desktop.

- [AntennaPod](https://antennapod.org) for podcasts

  In addition to an ad-free experience, it provides the ability to sync your feeds online with a [gPodder](https://gpodder.net/) account.

All of these apps support import/export so you can always be in control of your data.

There are cloud based services to manage your list like [Newsblur](https://github.com/samuelclay/NewsBlur), [QuiteRSS](https://github.com/QuiteRSS/quiterss), [Inoreader](https://www.inoreader.com), or [Feedly](https://feedly.com) as well as self-hosted solutions like [TinyTinyRSS](https://tt-rss.org/), or [FreshRSS](https://github.com/FreshRSS/FreshRSS).

## Getting RSS feeds for various sites

Some sites like YouTube still support RSS feed for resources on their sites while, others like Twitter do not. This section documents direct links to RSS feeds for various popular platforms. Use these tips to create your own collection or use a pre-made collection like [this one](https://github.com/peterc/engblogs).

### Hacker News

- Front page: [news.ycombinator.com/rss](https://news.ycombinator.com/rss)
- Show HN: [news.ycombinator.com/showrss](https://news.ycombinator.com/showrss)
- [hnrss](https:/hnrss.github.io) is an open-source project that provides RSS feeds for various HN resources. Some examples:
  - New threads with keyword "django": [hnrss.org/newest?q=django](https://hnrss.org/newest?q=django)
  - New posts submitted by user 'dang': [hnrss.org/submitted?id=dang](https://hnrss.org/submitted?id=dang)
  - New posts with 100+ upvotes and 25+ comments: [hnrss.org/show?points=100&comments=25](https://hnrss.org/show?points=100&comments=25)

### Lobsters

- Front page: [lobste.rs/rss](https://lobste.rs/rss)
- Tag(s)
  - [lobste.rs/t/programming.rss](https://lobste.rs/t/programming.rss) ([web](https://lobste.rs/t/programming))
  - [lobste.rs/t/programming,compsci.rss](https://lobste.rs/t/programming,compsci.rss) ([web](https://lobste.rs/t/programming,compsci))

### Reddit

Append `.rss` at the end of a URL:

- Front page: [https://reddit.com/.rss](https://www.reddit.com/.rss)
- Subreddit:
  - [reddit.com/r/programming.rss](https://reddit.com/r/programming.rss)
  - [reddit.com/r/LifeProTips/top.rss](https://www.reddit.com/r/LifeProTips/top.rss)
- User: [reddit.com/u/spez.rss](https://reddit.com/u/spez.rss)
- Multireddit:
  - [reddit.com/user/reddit/m/admin_faves.rss](https://www.reddit.com/user/reddit/m/admin_faves.rss)
  - [reddit.com/r/programming+javascript+unixporn.rss](https://reddit.com/r/programming+javascript+unixporn.rss)

### YouTube

- Channel: [youtube.com/feeds/videos.xml?channel_id=UCYO_jab_esuFRV4b17AJtAw](https://www.youtube.com/feeds/videos.xml?channel_id=UCYO_jab_esuFRV4b17AJtAw)
- Playlist: [youtube.com/feeds/videos.xml?playlist_id=PL3A5849BDE0581B19](https://www.youtube.com/feeds/videos.xml?playlist_id=PL3A5849BDE0581B19)

### GitHub

- Releases: [github.com/3b1b/manim/releases.atom](https://github.com/3b1b/manim/releases.atom)
- Commits: [github.com/3b1b/manim/commits/master.atom](https://github.com/3b1b/manim/commits/master.atom)
- Tags: [github.com/3b1b/manim/tags.atom](https://github.com/3b1b/manim/tags.atom)

For a private feed for your recent activity, you can click on "Subscribe to your news feed" at the bottom of your GitHub homepage.

### GitLab

- Activity: [gitlab.com/inkscape/inkscape.atom](https://gitlab.com/inkscape/inkscape.atom)
- Commits: [gitlab.com/inkscape/inkscape/-/commits/master?format=atom](https://gitlab.com/inkscape/inkscape/-/commits/master?format=atom)
- Tags: [gitlab.com/inkscape/inkscape/-/tags/master?format=atom](https://gitlab.com/inkscape/inkscape/-/tags?format=atom)
- Issues: [gitlab.com/inkscape/inkscape/-/issues.atom?state=opened](https://gitlab.com/inkscape/inkscape/-/issues.atom?state=opened)

### Stack Overflow

- Tag(s)
  - [stackoverflow.com/feeds/tag?tagnames=haskell&sort=newest](https://stackoverflow.com/feeds/tag?tagnames=haskell&sort=newest)
  - [stackoverflow.com/feeds/tag?tagnames=haskell+java&sort=newest](https://stackoverflow.com/feeds/tag?tagnames=haskell+java&sort=newest)

### Twitter

Twitter stopped providing official feeds in 2013. However, you can use [nitter.net](https://nitter.net) for this.

- User: [nitter.net/xkcd/rss](https://nitter.net/xkcd/rss)

### Mastodon

- User: [mastodon.social/@Gargron.rss](https://mastodon.social/@Gargron.rss) or [mastodon.social/users/Gargron.atom](https://mastodon.social/users/Gargron.atom)

### Medium

- User: [medium.com/feed/@Medium](https://medium.com/feed/@Medium)
- Tag: [medium.com/feed/tag/programming](https://medium.com/feed/tag/programming)<br />
  [More info](https://help.medium.com/hc/en-us/articles/214874118-RSS-feeds)

### Instagram

Bibliogram, a third party alternative instagram front-end provides RSS/Atom feeds for Instagram accounts:

- User: [bibliogram.art/u/starwars/rss.xml](https://bibliogram.art/u/starwars/rss.xml) or [bibliogram.art/u/starwars/atom.xml](https://bibliogram.art/u/starwars/atom.xml)

For sites that don't offer accessible RSS/Atom feeds like Facebook or Twitch and force users to subscribe with email, the [RSS-Bridge](https://rss-bridge.github.io/rss-bridge/) project provides feeds based on “bridges” developed for these sites. Consider using it if necessary.

[This gist](https://gist.github.com/thefranke/63853a6f8c499dc97bc17838f6cedcc2) has RSS links to many other platforms.

## Removing apps from your phone

In addition to taking up more space and bandwidth, mobile apps have more direct access to your personal information than websites. However, a browser configured with an adblocker like uBlock Origin and Privacy Badger along with built-in privacy options (geolocation/fingerprinting blocker, Multi-Account Containers, and Enhanced Tracking Protection on Firefox, etc) enabled will work across all sites you visit and block all sorts of trackers embedded in them.

If you are willing to give up a little bit of convenience for privacy, consider using these privacy-respecting frontends:

- [nitter](https://nitter.net/) for Twitter
- [teddit](https://teddit.net/) / [libreddit](https://libredd.it/) for Reddit
- [Bibliogram](https://bibliogram.art/) for Instagram

But the question remains, what about features like multireddits or Twitter lists? Well there are ways around it.

For Reddit, if your custom feed has &lt;25 subreddits, you can use the `+` trick to join multiple subreddit feeds and save the link as a bookmark. For example: [reddit.com/r/pics+videos+wtf](https://www.reddit.com/r/pics+videos+wtf) and [reddit.com/r/pics+videos+wtf.rss](https://reddit.com/r/pics+videos+wtf.rss).

There are public multireddits/Twitter lists created by other users for different topics like programming, Linux, security, cats, etc. Just search one and use it.

Use mobile sites if necessary. Most websites have perfectly usable mobile-responsive websites. If you must use mobile apps, you can use [NetGuard](https://github.com/M66B/NetGuard) to block access to the internet on a per-app basis.

## Conclusion

RSS is a really neat way of managing subscriptions while saving a lot of time. I urge all bloggers and webmasters to add an RSS/Atom feed to their site and respect their users instead of displaying an ugly, distracting modal asking for an email.

There are official and third-party ways to get RSS feeds for various websites. There are good open source feed readers to manage these subscriptions. Use alternative sites/apps instead of mobile apps to reduce data leaks.

Use RSS for privacy and efficiency.
