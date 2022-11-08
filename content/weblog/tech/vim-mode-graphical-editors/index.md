---
title: Enabling Vim mode in all major graphical text editors
date: 2019-10-19
lastUpdated: 2019-10-19
spoiler: ''
tags: ['vim', 'programming']
type: tech
slug: a9i
---

All major editors with a plugin ecosystem today allow you to enable or install vim emulation. Here are some plugins for the major ones.

### VS Code

Install [vscodevim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim) ([GitHub](https://github.com/VSCodeVim/Vim)) plugin from the Marketplace.<br />
[VSCode Neovim](https://marketplace.visualstudio.com/items?itemName=asvetliakov.vscode-neovim) ([Source](https://github.com/asvetliakov/vscode-neovim)) is a more advanced plugin that provides embedded Neovim integration with custom `init.vim` and Vim plugins by using Neovim as the backend.

### Sublime Text

Go to user settings (**Settings** > **Preferences**) and remove `Vintage` from `ignored_packages` array.
Details can be found in the [official Sublime Text docs](https://www.sublimetext.com/docs/3/vintage.html).

### Atom

Install the [atom-vim-mode-plus](https://atom.io/packages/vim-mode-plus) ([GitHub](https://github.com/t9md/atom-vim-mode-plus)) plugin.

### PyCharm/IntelliJ IDEA

Install [IdeaVim](https://www.jetbrains.com/help/pycharm/using-product-as-the-vim-editor.html) ([GitHub](https://github.com/JetBrains/ideavim)) plugin from the Marketplace.

### Eclipse

Install [Vrapper](http://vrapper.sourceforge.net/home/) ([GitHub](https://github.com/vrapper/vrapper)) plugin from the Marketplace.
I found a few other options on the web but they are either completely dead or closed-source projects.
