---
title: Making OLL and PLL visualizations using VisualCube and Python
date: 2020-06-03
lastUpdated: 2020-06-05
tags: ['cfop', 'cubing']
type: diversions
slug: v2c
---

[VisualCube](http://cube.rider.biz/visualcube.php) ([Source](https://github.com/Cride5/visualcube)) is a PHP script that allows you to make visualizations for the Rubik's Cube for demonstration purposes. Well-known speedcubing guides use this tool. I wanted to download all OLL and PLL cases in SVG and PNG formats for my <Link to="/weblog/b6z/">PLL recognition guide</Link>. Here's how I did it using few short Python and JavaScript scripts.

VisualCube allows you to create several types of visuals—changing transparency, masking pieces that are not related to a specific step in CFOP, tweaking the angle of the cube, etc. All these variables can be specified using URL query parameters. For PLL, the URL I wanted was:

```
http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&case=<algorithm>
```

The parameters work like this:

- `fmt`: Specify the type of image extension.
- `pzl`: Specify the puzzle type (e.g. 3 for 3x3, 4 for 4x4, etc).
- `view`: Specify special view for the image. `plan` rotates the cube to expose the U face which is what we want for PLL.
- `case`: Specify the alg which _**solves**_ a specific case.

[Example for H perm](http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&case=M2UM2U2M2UM2)<br />
[Example for OLL 45](http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&stage=oll&case=FRUR'U'F')

The first 3 parts of the URL are static. What I want is a list of all PLL algorithms and use them one by one to form a URL and then download the page to my local disk.

For the algorithms, I visited [AlgDb.net's PLL page](http://algdb.net/puzzle/333/pll), opened the developer console (CTRL+Shift+I), and ran this JavaScript code in Firefox's multi-line editor mode:

```javascript{numberLines: true}
let algs = ''

document.querySelectorAll('.case-img').forEach(img => {
  let params = new URLSearchParams(img.src)
  // Get the value of case parameter from URL and remove all spaces
  // I found that AlgDb uses its own hosted version of VisualCube with a similar API for images
  let alg = params
    .get('case')
    .split(' ')
    .join('')
  // Extract the PLL case name from parent's href attribute
  let pll = img.parentNode.getAttribute('href').replace('/puzzle/333/pll/', '')
  // Capitalize the first letter of each PLL
  let capPll = pll.charAt(0).toUpperCase() + pll.slice(1)
  algs += `"${capPll}" : "${alg}",\n`
})

console.log(`plls = {\n${algs}}`)
```

This outputs a nicely formatted Python dictionary with all PLL names as keys and associated algorithms as values in the console which can be copied and pasted to a Python script.

Similarly, for OLLs, I visited [AlgDb's OLL page](http://algdb.net/puzzle/333/oll) and ran this code in the console:

```javascript{numberLines: true}
let algs = ''
// Since OLLs cases are just numbers, we can use this variable and increment it
let ollCase = 1

document.querySelectorAll('.case-img').forEach(img => {
  let params = new URLSearchParams(img.src)
  let alg = params
    .get('case')
    .split(' ')
    .join('')
  algs += `"${ollCase}" : "${alg}",\n`
  ollCase++
})

console.log(`olls = {\n${algs}}`)
```

The following Python script iterates through these dicts to get the images and saves them locally as **<oll_number>.svg** and **<pll_name>.svg** respectively in separate directories. Notice the `oll_url` has an additional parameter called `stage` equal to `oll` so that irrelevant stickers are masked from being colored and makes the result clearer. Just replace the occurences of `svg` in the file to `png` and run the script again to get all images as PNG files.

Make sure to run this from an empty directory. Note that these algorithms may not be the best ones in terms of fingertricks and efficiency. In some algs, y/y'/y2 moves have been added at the beginning in order to output images at an angle in which I apply certain algs.

```python{numberLines: true}
import os
import urllib.request

oll_url = 'http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&stage=oll&case='
pll_url = 'http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&case='
plls = {
    "Aa": "R'FR'B2RF'R'B2R2",
    "Ab": "l'R'D2RUR'D2RU'Rx'",
    "E": "yLR'U'RUL'U'R'URrUR'U'r'FRF'",
    "F": "y'R'URU'R2F'U'FURFR'F'R2",
    "Ga": "R2uR'UR'U'Ru'R2y'R'UR",
    "Gb": "R'U'RyR2uR'URU'Ru'R2",
    "Gc": "R2u'RU'RUR'uR2yRU'R'",
    "Gd": "RUR'y'R2u'RU'R'UR'uR2",
    "H": "M2UM2U2M2UM2",
    "Ja": "y'L'U2LUL'U2RU'LUR'",
    "Jb": "RUR'F'RUR'U'R'FR2U'R'U'",
    "Na": "LU'RU2L'UR'LU'RU2L'UR'",
    "Nb": "R'UL'U2RU'LR'UL'U2RU'L",
    "Ra": "y'LU2L'U2LF'L'U'LULFL2",
    "Rb": "R'U2RU2R'FRUR'U'R'F'R2",
    "T": "RUR'U'R'FR2U'R'U'RUR'F'",
    "Ua": "y2R2U'R'U'RURURU'R",
    "Ub": "y2R'UR'U'R'U'R'URUR2",
    "V": "R'UR'd'R'F'R2U'R'UR'FRF",
    "Y": "FRU'R'U'RUR'F'RUR'U'R'FRF'",
    "Z": "M2UM2UM'U2M2U2M'",
}

olls = {
    "1": "RU2R2'FRF'U2R'FRF'",
    "2": "FRUR'U'F'fRUR'U'f'",
    "3": "yr'R2UR'UrU2r'UM'",
    "4": "yMU'rU2r'U'RU'R2r",
    "5": "r'U2RUR'Ur",
    "6": "rU2R'U'RU'r'",
    "7": "rUR'URU2r'",
    "8": "y2l'U'LU'L'U2l",
    "9": "y'RU2R'M'U'RU'R'UM",
    "10": "RUR'yR'FRU'R'F'R",
    "11": "r'R2UR'URU2R'UM'",
    "12": "yFRUR'U'F'UFRUR'U'F'",
    "13": "FURU'R2F'RURU'R'",
    "14": "R'FRUR'F'Ry'RU'R'",
    "15": "r'U'rR'U'RUr'Ur",
    "16": "rUr'RUR'U'rU'r'",
    "17": "RUR'UR'FRF'U2R'FRF'",
    "18": "l'U'r'U2LU2L'U2rUl",
    "19": "r'RURUR'U'rR2'FRF'",
    "20": "MURUR'U'M2URU'r'",
    "21": "y'RUR'URU'R'URU2R'",
    "22": "RU2R2U'R2U'R2U2R",
    "23": "R2DR'U2RD'R'U2R'",
    "24": "rUR'U'r'FRF'",
    "25": "R'FRB'R'F'RB",
    "26": "y'R'U'RU'R'U2R",
    "27": "RUR'URU2R'",
    "28": "rUR'U'MURU'R'",
    "29": "MURUR'U'R'FRF'M'",
    "30": "yr'U2RUR'UrRU2R'U'RU'R'",
    "31": "R'U'FURU'R'F'R",
    "32": "RUB'U'R'URBR'",
    "33": "RUR'U'R'FRF'",
    "34": "y2FRUR'U'R'F'rURU'r'",
    "35": "RU2R2'FRF'RU2R'",
    "36": "R'U'RU'R'URURyR'F'R",
    "37": "FR'F'RURU'R'",
    "38": "RUR'URU'R'U'R'FRF'",
    "39": "y'R'r'D'rU'r'DrUR",
    "40": "y'RrDr'UrD'r'U'R'",
    "41": "y2RU'R'U2RUyRU'R'U'F'",
    "42": "R'U'RU'R'U2RFRUR'U'F'",
    "43": "f'L'U'LUf",
    "44": "fRUR'U'f'",
    "45": "FRUR'U'F'",
    "46": "R'U'R'FRF'UR",
    "47": "F'L'U'LUL'U'LUF",
    "48": "FRUR'U'RUR'U'F'",
    "49": "y2RB'R2FR2BR2F'R",
    "50": "r'Ur2U'r2'U'r2Ur'",
    "51": "fRUR'U'RUR'U'f'",
    "52": "RUR'URd'RU'R'F'",
    "53": "r'U'RU'R'URU'R'U2r",
    "54": "rUR'URU'R'URU2r'",
    "55": "RU2R2U'RU'R'U2FRF'",
    "56": "rUr'URU'R'URU'R'rU'r'",
    "57": "RUR'U'rR'URU'r'",
}

os.makedirs('oll/svg', exist_ok=True)
os.makedirs('pll/svg', exist_ok=True)

def download_vis(stage, url, algs_dict):
    for case, alg in algs_dict.items():
        urllib.request.urlretrieve(
            f'{url}{alg}', f'{stage}/svg/{case}.svg')

download_vis('oll', oll_url, olls)
download_vis('pll', pll_url, plls)
```

## PLL cases with arrows

With VisualCube, it is also possible to make arrows for PLL cases. Additional parameters required for this are:

- `ac`: Default arrow color
- `arw`: Comma separated list of arrows to draw. Add `-s[0-9]` at the end to adjust the length of arrows. Check the following script to see how this works.

```python{numberLines: true}
import os
import urllib.request

pll_arrows_url = 'http://cube.rider.biz/visualcube.php?fmt=svg&pzl=3&view=plan&ac=black&case='
plls = {
    "Aa": "R'FR'B2RF'R'B2R2&arw=U0U2-s8,U2U8-s8,U8U0-s8",
    "Ab": "l'R'D2RUR'D2RU'Rx'&arw=U8U2-s8,U0U8-s8,U2U0-s8",
    "E": "yLR'U'RUL'U'R'URrUR'U'r'FRF'&arw=U0U6,U6U0,U2U8,U8U2",
    "F": "y'R'URU'R2F'U'FURFR'F'R2&arw=U2U8,U8U2,U1U7,U7U1",
    "Ga": "R2uR'UR'U'Ru'R2y'R'UR&arw=U0U2-s8,U2U6-s8,U6U0-s8,U1U3-s7,U3U5-s7,U5U1-s7",
    "Gb": "R'U'RyR2uR'URU'Ru'R2&arw=U0U6-s8,U6U8-s8,U8U0-s8,U1U7-s7,U7U3-s7,U3U1-s7",
    "Gc": "R2u'RU'RUR'uR2yRU'R'&arw=U0U6-s8,U6U8-s8,U8U0-s8,U7U3-s7,U3U5-s7,U5U7-s7",
    "Gd": "RUR'y'R2u'RU'R'UR'uR2&arw=U0U2-s8,U2U6-s8,U6U0-s8,U1U3-s7,U3U7-s7,U7U1-s7",
    "H": "M2UM2U2M2UM2&arw=U1U7,U7U1,U5U3,U3U5",
    "Ja": "y'L'U2LUL'U2RU'LUR'&arw=U0U2,U2U0,U3U1,U1U3",
    "Jb": "RUR'F'RUR'U'R'FR2U'R'U'&arw=U2U8,U8U2,U5U7,U7U5",
    "Na": "LU'RU2L'UR'LU'RU2L'UR'&arw=U1U7,U7U1,U0U8,U8U0",
    "Nb": "R'UL'U2RU'LR'UL'U2RU'L&arw=U1U7,U7U1,U6U2,U2U6",
    "Ra": "y'LU2L'U2LF'L'U'LULFL2&arw=U1U3,U3U1,U2U8,U8U2",
    "Rb": "R'U2RU2R'FRUR'U'R'F'R2&arw=U0U2,U2U0,U5U7,U7U5",
    "T": "RUR'U'R'FR2U'R'U'RUR'F'&arw=U3U5-s8,U5U3-s8,U2U8,U8U2",
    "Ua": "y2R2U'R'U'RURURU'R&arw=U5U3-s7,U3U7-s7,U7U5-s7",
    "Ub": "y2R'UR'U'R'U'R'URUR2&arw=U3U5-s7,U5U7-s7,U7U3-s7",
    "V": "R'UR'd'R'F'R2U'R'UR'FRF&arw=U1U5,U5U1,U0U8,U8U0",
    "Y": "FRU'R'U'RUR'F'RUR'U'R'FRF'&arw=U1U3,U3U1,U0U8,U8U0",
    "Z": "M2UM2UM'U2M2U2M'&arw=U1U3,U3U1,U5U7,U7U5",
}

os.makedirs('pll-arrows/svg', exist_ok=True)

for case, alg in plls.items():
    urllib.request.urlretrieve(
        f'{pll_arrows_url}{alg}', f'pll-arrows/svg/{case}.svg')
```
