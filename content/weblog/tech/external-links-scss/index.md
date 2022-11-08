---
title: Targeting external links using SCSS
date: 2020-07-21
lastUpdated: 2020-08-17
spoiler: ''
tags: ['css', 'scss', 'programming']
type: tech
slug: s0p
---

Here is part of the snippet I use to target external links on this site:

Check out the source [here](https://github.com/rsapkf/www/blob/main/src/styles/global.scss) (feel free to copy the entire thing).

```scss{numberLines: true}
a {
  // ... link styles

  // Target external links
  // If you want to indicate websites with specific icons, make sure you add them here
  // If using FontAwesome icons, font-family and font-weight need to be set based on whether you are using Brand or Regular icons
  // https://fontawesome.com/v5.0.13/how-to-use/on-the-web/advanced/css-pseudo-elements
  &:not([href*='rsapkf.org']):not([href^='/']):not([href^='#']):not([href*='mozilla.org']):not([href*='github.com'])::after {
    content: '\f35d'; // or url(/img/external-link.svg) ...
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
  }

  &::after {
    font-family: 'Font Awesome 5 Brands';
    font-weight: 400;
    color: rgb(85, 78, 78);
    font-size: 0.7rem;
    padding: 0.15rem;
    position: relative;
    bottom: 0.2rem;
  }

  // Now, add individual icons from FontAwesome (https://fontawesome.com/cheatsheet)
  &[href*='mozilla.org']::after {
    content: '\f269';
  }

  &[href*='github.com']::after {
    content: '\f09b';
  }
}
```

You'll also notice some links do a <a href="https://example.org/" target="_blank" rel="noopener noreferrer">bumpy animation</a> thing on hover. These are links with `target` attribute set to `_blank`. Here is how to do it:

```scss{numberLines: true}
a {
  // ... link styles

  // Target links with target attribute
  &[target^='_blank']:hover::after {
    position: relative;
    bottom: 0.5rem;
    transition: ease 0.2s;
  }
```

### Further reading

- [CSS-Tricks - Target Only External Links](https://css-tricks.com/snippets/jquery/target-only-external-links/)
- [w3.org - Substring matching attribute selectors](https://www.w3.org/TR/selectors/#attribute-substrings)
- [MDN - Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
