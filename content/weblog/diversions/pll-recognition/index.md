---
title: PLL recognition guide
date: 2021-01-04
lastUpdated: 2021-01-07
tags: ['cubing', 'puzzles', 'cfop', 'pll', 'rubiks-cube', '3x3']
type: diversions
slug: b6z
---

One overlooked aspect of teaching PLL to beginner CFOP solvers in many tutorials online is PLL recognition. Unlike OLL cases that are generally easier to identify, have shorter algorithms and familiar triggers, PLL algorithms are longer and recognizing PLL cases takes a bit of effort. If you are a beginner CFOP learner who knows the basics (2-look PLL) and want to learn full PLL and find the task daunting, this guide will help you recognize, learn and practice PLL algs in no time.

PLL cases are usually represented by drawing arrows showing which pieces need to swap places. They are named using English alphabets which are chosen to roughly resemble the pattern of these arrows. But that can sometimes be confusing. So to give a simpler and more efficient way, I will completely omit the arrows from visualizations and will go over some basics first.

Out of 21 cases, only 13 are distinct. Other PLLs are either mirrors or inverses. For e.g. Ua perm is the mirror of Ub, meaning if you apply Ua alg to Ub case but by mirroring your moves with the left hand, you'll be able to solve Ub.

The 13 distinct perms are:

- U (Ua, Ub) \*
- H \*
- Z \*
- T (Adjacent corner swap alg in 2-look PLL) \*
- Y (Diagonal corner swap alg in 2-look PLL) \*
- F
- E
- V
- A (Aa, Ab)
- J (Ja, Jb)
- R (Ra, Rb)
- N (Na, Nb)
- G (Ga, Gb, Gc, Gd)

_\* 2-look PLL algs_

To recognize the rest, we will look whether certain "features" are available. There are 5 main features that are easily noticeable in PLL cases:

## Headlights

If you see one or more face on the last layer (LL) where two corner stickers have the same color and the middle one has either an adjacent or an opposite color, that's a headlight. 11 out of 21 PLLs have a headlights feature.

A "connected headlight" is when a 1x2 block is connected to a headlight. Depending on the case, there can be either 0, 1 or 2 connected headlights.

PLLs: **A**, **T**, **R**, **G** (+ **H**, **Z**)

| Name               | PLL                                                                                                                                                                                                                                                                                         | Notes                                                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| A (Aa, Ab)         | ![Aa](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Aa.svg) ![Ab](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ab.svg)                                                                                                                                               | <ul><li>Adjacent color between headlights</li><li>No connected headlights</li></ul>                                                    |
| R (Ra, Rb)         | ![Ra](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ra.svg) ![Rb](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Rb.svg)                                                                                                                                               | <ul><li>Adjacent color between headlights</li><li>1 connected headlight</li></ul>                                                      |
| T                  | ![T](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/T.svg)                                                                                                                                                                                                                        | <ul><li>Opposite color between headlights</li><li>2 connected headlights</li></ul>                                                     |
| G (Ga, Gb, Gc, Gd) | ![Ga](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ga.svg) ![Gb](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Gb.svg) ![Gc](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Gc.svg) ![Gd](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Gd.svg) | <ul><li>Ga/Gc - Adjacent color between headlights, Gb/Gd - Opposite color between headlights</li><li>No connected headlights</li></ul> |
| H                  | ![H](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/H.svg)                                                                                                                                                                                                                        | <ul><li>Headlights on all sides</li><li>No connected headlights</li></ul>                                                              |
| Z                  | ![Z](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Z.svg)                                                                                                                                                                                                                        | <ul><li>Headlights on all sides</li><li>No connected headlights</li></ul>                                                              |

## 1x3 block

Only 5 out of 21 cases have a 1x3 block of solved pieces on the last layer.

PLLs: **J**, **F**, **U**

| Name       | PLL                                                                                                                                           | Notes                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| J (Ja, Jb) | ![Ja](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ja.svg) ![Jb](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Jb.svg) | <ul><li>1 connected 1x3 block</li><li>Adjacent colors pair next to the 1x3 block</li></ul>  |
| F          | ![F](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/F.svg)                                                                          | <ul><li>No connected 1x3 block</li><li>Opposite colors pair next to the 1x3 block</li></ul> |
| U (Ua, Ub) | ![Ua](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ua.svg) ![Ub](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ub.svg) | <ul><li>Easy cases</li></ul>                                                                |

## 1x2 block

10 PLLs have 1x2 blocks on the last layer in them.

PLLs: **J**, **N**, **Y**, **G**

| Name               | PLL                                                                                                                                                                                                                                                                                         | Notes                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| J (Ja, Jb)         | ![Ja](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ja.svg) ![Jb](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Jb.svg)                                                                                                                                               | <ul><li>3 1x2 blocks (+1 full bar)</li></ul> |
| N (Na, Nb)         | ![Na](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Na.svg) ![Nb](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Nb.svg)                                                                                                                                               | <ul><li>4 distinct 1x2 blocks</li></ul>      |
| Y                  | ![Y](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Y.svg)                                                                                                                                                                                                                        | <ul><li>2 1x2 blocks</li></ul>               |
| T                  | ![T](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/T.svg)                                                                                                                                                                                                                        | <ul><li>2 1x2 blocks</li></ul>               |
| G (Ga, Gb, Gc, Gd) | ![Ga](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ga.svg) ![Gb](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Gb.svg) ![Gc](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Gc.svg) ![Gd](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Gd.svg) | <ul><li>1 1x2 block</li></ul>                |

## 2x2 square

This is just a solved 2x2 block on the top layer. 3 PLL cases have this feature.

PLLs: **A**, **V**

| Name       | PLL                                                                                                                                           | Notes                                                                            |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| A (Aa, Ab) | ![Aa](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Aa.svg) ![Ab](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ab.svg) | <ul><li>Has headlights</li><li>Same color in the diagonal corners</li></ul>      |
| V          | ![V](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/V.svg)                                                                          | <ul><li>No headlights</li><li>Different colors in the diagonal corners</li></ul> |

## No features

PLLs: **E**

![E](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/E.svg)

The main feature of the **E** perm is that it has no features. You can look around the last layer and see that there aren't any headlights, full bars, half-bars, or 2x2 squares.

This is just a beginner's guide to PLL recognition. There are advanced techniques that can help you recognize PLL by looking at just 2 sides of the last layer. Check out the links below to learn more.

## Further reading

- [badmephisto - Recognizing the PLLs (2009)](https://www.youtube.com/watch?v=qBYycb7hR4Y/)
- [CubeSkills - PLL Algs](https://www.cubeskills.com/uploads/pdf/tutorials/pll-algorithms.pdf)
- [CubeSkills - PLL Recognition Trainer](https://www.cubeskills.com/tools/pll-recognition-trainer) - 2 side PLL recognition trainer.
- [AlgDb.net - PLL](http://algdb.net/puzzle/333/pll/)
- [JPerm.net - PLL Trainer](http://jperm.net/algs/pll)
- [Speedsolving Wiki - PLL](https://www.speedsolving.com/wiki/index.php/PLL/)
- [How I Recognize PLL Fast](https://www.youtube.com/watch?v=sdz5EjWShCg), [Advanced PLL Recognition](https://www.youtube.com/watch?v=_gIAQm_B170) - J Perm

## Credits

All visualizations in this guide were created using [VisualCube](http://cube.rider.biz/visualcube.php). <Link to="/weblog/v2c/">Learn how</Link>.
