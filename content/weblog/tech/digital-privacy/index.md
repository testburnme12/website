---
title: Beginner's guide to digital privacy
date: 2020-09-12
lastUpdated: 2020-12-03
spoiler: ''
tags: ['privacy']
type: tech
slug: b6f
---

_\* Slightly advanced tips_

## Basics

- Understand why maintaining privacy is important. Start here:

  - [privacytools.io](https://privacytools.io/)
  - [r/privacy wiki](https://old.reddit.com/r/privacy/wiki)
  - [Permanent Record - Edward Snowden](<https://en.wikipedia.org/wiki/Permanent_Record_(autobiography)>)

- Always look for well known open source alternatives to services that you use:

  - [AlternativeTo.net](https://alternativeto.net/)
  - [ethical.net](https://ethical.net/)
  - [Restore Privacy](https://restoreprivacy.com/)

- Start by using reliable open source web browsers:

  - [Firefox](https://www.mozilla.org/en-US/firefox/)
  - [Ungoogled Chromium](https://github.com/Eloston/ungoogled-chromium)
  - [Tor](https://torproject.org)

- Install privacy addons:

  - [Privacy Badger](https://github.com/EFForg/privacybadger/)
  - [uBlock Origin](https://github.com/gorhill/uBlock/)
  - [Decentraleyes](https://decentraleyes.org/)
  - [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)
  - [ClearURLs](https://gitlab.com/KevinRoebert/ClearUrls), etc.

  See also: [Recommended privacy addons](https://addons.mozilla.org/en-US/firefox/search/?category=privacy-security&sort=recommended%2Cusers&type=extension) for Firefox.

- Use a search engine that doesn't log your search queries:

  - [DuckDuckGo](https://duckduckgo.com/)
  - [Startpage](https://www.startpage.com/)
  - [Searx](https://searx.me/)
  - [Qwant](https://qwant.com/)

- Disable tracking, fingerprinting, cryptominers and telemetry from browser preferences. Clear cookies frequently, disable location access to sites and cover your webcam unless necessary.

- Quit using Google, Microsoft, Apple, Facebook products for **personal/sensitive use cases**.

  These companies are great for security of your data (for the most part), they hire top engineers from around the world but are worse for your privacy, esp. if they rely on advertisement for their revenue. If you have to use Google, go to your account settings and turn off all the [activity controls](https://myactivity.google.com/activitycontrols) and [ads personalization](https://adssettings.google.com/). Go through similar settings on your dashboard for other accounts.

- **Always** choose "Sign up with Email" while signing up on websites. ([?](https://en.wikipedia.org/wiki/OAuth))

  Unless mandatory, you should not continue with social signup (Sign up with Google/Microsoft/Twitter/Facebook/Apple/Amazon, etc).

  If you are required to do so, take care of what scopes and information you are permitting the service to use. Platforms usually provide a way to manage this info from your account settings:

  - [Twitter Connected Apps](https://twitter.com/settings/connected_apps)
  - [Facebook Apps and Websites](https://www.facebook.com/settings?tab=applications)
  - [Apps with access to your Google account](https://myaccount.google.com/permissions)
  - [Apps and services with access to your Microsoft account](https://go.microsoft.com/fwlink/p/?LinkId=829203)
  - [Manage Login with Amazon](https://www.amazon.com/ap/adam)

- Create separate email accounts/aliases for signups, newsletters, communication, banking, music, gaming, etc.

  Many email providers like ProtonMail and Google allow for unlimited aliases by adding a dot(.) in your email username. For example, `ricksanchez@protonmail.com` and `rick.sanchez@protonmail.com` or `ric.ksanch.ez@protonmail.com` are essentially the same addresses. The messages sent to either of these address will arrive at the same inbox. **This tip won't work for Tutanota**. These services also allow [plus addressing](https://blog.mailfence.com/plus-addressing-to-track-spammers/). For example, `john.doe@gmail.com` or `john.doe+twitter@gmail.com` are the same. You can use these tricks to create aliases for signing up on different sites without putting your main address everywhere.

- Avoid using the same username across multiple platforms and websites.

  Your first priority should be using a long, unique and random password for every site but having different usernames is also [important](https://nordpass.com/blog/unique-username-importance/). Tools like [sherlock](https://github.com/sherlock-project/sherlock) can be used to hunt down your identities across sites within seconds. Use a random [username](https://www.lastpass.com/username-generator/) [generator](https://nordpass.com/username-generator). For random passwords, I use [this](https://duckduckgo.com/?q=password+40+strong&t=brave&ia=answer) DuckDuckGo query and my [password manager](https://bitwarden.com/password-generator/). There are tons of [strong](https://www.lastpass.com/password-generator) [password/pass-phrase](https://1password.com/password-generator/) [generators](https://www.dashlane.com/features/password-generator) that you can use. Ideally, you should also use randomly generated strings as answers to your security questions for sites that require them and save them on your password manager using custom fields.

- Research in advance if the service you're signing up for allows for an (easy) way to delete your account. You might regret later when you find out you can't delete your account/subscription. Some websites have tricky account deletion procedure:

  - Amazon, Adobe (require contacting support)
  - TED (no delete account option in account settings)
  - Shopify (you must have a premium subsciption to close your store/account)

  Read this post on Hacker News: [Before buying a NYT subscription, here's what it'll take to cancel it](https://news.ycombinator.com/item?id=26174269)

- Make use of [email aliases](https://protonmail.com/support/knowledge-base/addresses-and-aliases/) or email forwarding services:

  - [AnonAddy](https://github.com/anonaddy/anonaddy)
  - [SimpleLogin](https://github.com/simple-login/app)

- Use disposable email addresses for temporary signups:

  - [Temp Mail](https://temp-mail.org/)
  - [10 Minute Mail](https://10minutemail.com/)

- Use alternative frontends for platforms like YouTube, Twitter, Reddit, and Instagram:

  - [Invidious](https://invidio.us/) (See also: [NewPipe](https://newpipe.net/) for Android.)
  - [nitter](https://nitter.net/)
  - [teddit](https://teddit.net/) / [libreddit](https://libredd.it/)
  - [Bibliogram](https://bibliogram.art/)

  Use [Privacy Redirect](https://addons.mozilla.org/en-US/firefox/addon/privacy-redirect/) addon that redirects Twitter, YouTube, Instagram & Google Maps requests to privacy friendly alternatives.

- Instead of liking/saving anything on Facebook, YouTube and social platforms, use an end-to-end encrypted bookmark service like [Firefox Sync](https://www.mozilla.com/en-US/firefox/sync/).

  Platforms these days track everything from what your see, what you click on, share or comment on, and even [how long you looked at](https://www.theverge.com/2015/6/13/8775587/facebook-news-feed-uses-time-read-to-promote-posts) a particular item on your feed. Reduce your digital footprint as much as you can. Export your personal data from Facebook, Google from your account settings and work on deleting all of it.

  - [Download your Facebook Information](https://facebook.com/dyi)
  - [Google Takeout](https://takeout.google.com)

- Use decentralized services if you need:

  - [Mastodon](https://mastodon.social/)
  - [PixelFed](https://pixelfed.org/)
  - [Diaspora](https://diasporafoundation.org/)
  - [Fediverse](https://fediverse.party/)

- Use end-to-end encypted messaging applications for communication:

  - [Signal](https://signal.org/)
  - [Wire](https://wire.com)

- Use E2E encrypted email services:

  - [Tutanota](https://tutanota.com/)
  - [Protonmail](https://protonmail.com/)

- Use E2E encrypted note-taking apps:

  - [Standard Notes](https://standardnotes.org/)
  - [Joplin](https://joplinapp.org/) (E2EE is [not](https://joplinapp.org/e2ee/) enabled by default)

- Use E2E encrypted cloud storage solutions:

  - [Tresorit](https://tresorit.com/)
  - [pCloud Crypto](https://pcloud.com/)
  - [Sync.com](https://sync.com/)

- Encrypt your files before uploading them to Dropbox, Google Drive or Microsoft OneDrive:

  - [VeraCrypt](https://veracrypt.fr/)
  - [Cryptomator](https://cryptomator.org/)

- Use a reliable VPN:

  - [ProtonVPN](https://protonvpn.com/)
  - [WireGuard](https://www.wireguard.com/)

- \*Use a better DNS resolver:

  - [Cloudflare WARP](https://1.1.1.1/)

- \*Use Linux/BSD:

  - Made for privacy: [Tails](https://tails.boum.org/), [Whonix](https://www.whonix.org/), [Trisquel](https://trisquel.info/)...
  - Debian based: [Debian](https://www.debian.org/), [Ubuntu](https://www.ubuntu.com/)...
  - Arch based: [Arch](https://www.archlinux.org/), [ArcoLinux](https://arcolinux.info/), [Manjaro](https://manjaro.org/)...
  - BSDs: [OpenBSD](https://github.com/openbsd/src), [NetBSD](https://www.netbsd.org/), [FreeBSD](https://github.com/freebsd/freebsd/)...

- \*Switch the OS on your smartphone:

  - [LineageOS](https://lineageos.org/)
  - [Ubuntu Touch](https://ubuntu-touch.io/)
  - [GrapheneOS](https://grapheneos.org/)
  - [postmarketOS](https://postmarketos.org/)

- \*Self-host software on your own server by renting a VPS.

- \*Use [PGP](https://www.openpgp.org/) for encrypted communication.

## Security tips

- Use an open source password manager:

  - [Bitwarden](https://bitwarden.com/)
  - [Keepass](https://keepass.info/)

- Enable [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) on as many accounts as you can. Use an authenticator app like [FreeOTP](https://github.com/freeotp/) or [Aegis](https://github.com/beemdevelopment/Aegis/) instead of giving out your phone number to services (**Don't forget to set necessary recovery options and backup 2FA recovery codes for important accounts!**).

- Monitor if you’ve been part of an online data breach:
  - [Firefox Monitor](https://monitor.firefox.com/)
  - [Have I Been Pwned](https://haveibeenpwned.com/)

## Further reading

This is just a list of the most basic options for getting started on digital privacy. There are comprehensive guides, articles, books and websites for more advanced tips. Make sure to research every option thoroughly to determine what works best for you.

- [Digital Privacy](https://en.wikipedia.org/wiki/Digital_privacy)
- [Awesome-Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) - Free Software network services and web applications which can be hosted locally.
- [Two Factor Auth](https://twofactorauth.org/) - List of websites and whether or not they support 2FA.
- [Mozilla Blog](https://blog.mozilla.org/)
- [Electronic Frontier Foundation](https://eff.org/)
- [Prism ⚡ Break](https://prism-break.org/) - Opt out of global data surveillance programs like PRISM, XKeyscore and Tempora.
- [privacytools.io](https://privacytools.io/)
- [r/privacy](https://old.reddit.com/r/privacy/)
- [The Social Dilemma - Netflix documentary](https://en.wikipedia.org/wiki/The_Social_Dilemma)
