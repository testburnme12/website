---
title: A definitive guide to 4-look last layer (CFOP)
date: 2021-02-07
lastUpdated: 2021-02-21
tags:
  [
    'cubing',
    'speedsolving',
    'puzzles',
    'cfop',
    'oll',
    'pll',
    'rubiks-cube',
    '3x3',
  ]
type: diversions
slug: a4o
---

In this guide, I will explain how 4-look last layer (4LLL) in CFOP works and provide the best algs and recommendations that will help to learn the full set later down the road.

Basically, the idea is to solve the last layer in no more than 4 steps. First you orient the last layer using a maximum of 2 algs and then permute the last layer using a max of 2 algs:

1. Edge Orientation (3 algs)
2. Corner Orientation (7 algs)
3. Corner Permutation (2 algs)
4. Edge Permutation (4 algs)

The total number of algs required for 4-look last layer is 10+6 = 16 whereas full OLL and PLL consist of a total of 57+21 = 78 algs. For beginners, this makes it a lot less intimidating and a lot more sense to learn 4-look LL first.

## 2-look OLL (10 algs)

**Steps**:

1. Orient the edges using one of 3 algs
2. Orient the corners using one of 7 algs

After F2L, there are 3 cases (excluding the one where all 4 edges are already oriented) that you can get:

- I shape (2 opposite edges oriented)
- L shape (2 adjacent edges oriented)
- Dot (No edges oriented)

| Cases                                                                  | Algs                                                                                             | Notes    |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| ![45](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/45.svg) | <ul><li>F (R U R' U') F'</li></ul>                                                               | OLL 45   |
| ![44](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/44.svg) | <ul><li>f (R U R' U') f'</li><li>y2 F (U R U' R') F'</li></ul>                                   | P/OLL 44 |
| ![2](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/2.svg)   | <ul><li>F (R U R' U') F' f (R U R' U') f'</li><li>F (R U R' U') F' U2 F (U R U' R') F'</li></ul> | OLL 2    |

Instead of using specifically OLL 45/44/2 algs, you could use one of many algs for cases that have I shape (27 OLLs), L shape (15 OLLs) and a Dot (8 OLLs) in them respectively. These algs are usually recommended because they are the easist to learn.

After the edges are correctly oriented, you can get one of the following 7 cases. I highly recommend learning alternative algs for more common cases like Sune and Antisune because a lot of OLLs have variations of Sune, Antisune and their mirrors in them. This will make it easier to learn full OLL.

| Cases                                                                  | Algs                                                                                                                    | Notes                    |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| ![27](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/27.svg) | <ul><li>(R U R' U R U2 R')</li><li>y' R' U2 R U R' U R</li></ul>                                                        | Sune/OLL 27              |
| ![26](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/26.svg) | <ul><li>(R U2 R' U' R U' R')</li><li>y' R' U' R U' R' U2 R</li></ul>                                                    | Antisune/OLL 26          |
| ![23](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/23.svg) | <ul><li>R2 D (R' U2 R) D' (R' U2 R')</li><li>y2 R2 D' (R U2 R') D (R U2 R)</li></ul>                                    | U/OLL 23                 |
| ![24](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/24.svg) | <ul><li>(r U R' U') (r' F R F')</li><li>y (R U R D) (R' U' R D') R2</li></ul>                                           | T/OLL 24                 |
| ![25](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/25.svg) | <ul><li>y F' (r U R' U') r' F R</li></ul>                                                                               | L/Bowtie/OLL 25          |
| ![22](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/22.svg) | <ul><li>R U2' (R2' U') (R2 U') R2' U2' R</li></ul>                                                                      | Pi/Air Jeff/Bruno/OLL 22 |
| ![21](https://raw.githubusercontent.com/rsapkf/20/main/oll/svg/21.svg) | <ul><li>(R U2 R') (U' R U R') (U' R U' R')</li><li>y (R U R' U) (R U' R' U) R U2 R'</li><li>F (R U R' U')3 F'</li></ul> | H/OLL 21                 |

## 2-look PLL (6 algs)

**Steps**:

1. Permute the corners using one of 2 algs
2. Permute the edges using one of 4 algs

When you are done with OLL, there are broadly 2 cases (excluding the one where all 4 corners are already permuted) that can appear:

- Headlights (One set of adjacent corners need to be swapped)

  Put the headlights on the left and apply T Perm.

- No headlights (One set of diagonal corners need to be swapped)

  Apply Y/Nb Perm from any angle.

Remember, instead of T and Y/Nb perms, any other algorithm that swaps one set of adjacent corners (Ra, Rb, Ja, Jb, F) or diagonal corners (Na, V) while swapping one set of edges can be used respectively. Since T and Y/Nb perms are the easiest to learn, these are usually recommended.

| Cases                                                                | Algs                                                                                                                 | Notes     |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | --------- |
| ![T](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/T.svg) | <ul><li>(R U R' U') (R' F R2 U') R' U' (R U R' F')</li></ul>                                                         | T Perm    |
| ![Y](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Y.svg) | <ul><li>F (R U' R' U') (R U R' F') (R U R' U') (R' F R F')</li><li>(R' U L' U2 R U' L) (R' U L' U2 R U' L)</li></ul> | Y/Nb Perm |

After permuting the corners, apply one of these 4 algs to finally solve the cube:

| Cases                                                                  | Algs                                                                                                                              | Notes   |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ![Ub](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ub.svg) | <ul><li>R2 U (R U R' U') R' U' (R' U R')</li><li>y2 (R' U R' U') R' U' (R' U R U) R2</li></ul>                                    | Ub Perm |
| ![Ua](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Ua.svg) | <ul><li>(R U' R U) R U (R U' R' U') R2</li><li>L2 U' (L' U' L U) L U (L U' L)</li><li>y2 (R2 U' R' U') R U R U (R U' R)</li></ul> | Ua Perm |
| ![H](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/H.svg)   | <ul><li>(M2 U M2) U2 (M2 U M2)</li></ul>                                                                                          | H Perm  |
| ![Z](https://raw.githubusercontent.com/rsapkf/20/main/pll/svg/Z.svg)   | <ul><li>(M2 U M2 U) (M' U2) (M2 U2 M')</li><li>y/y' (M2 U' M2 U') (M' U2) (M2 U2 M')</li></ul>                                    | Z Perm  |

Grok these algs and with good fingertricks, hardware, and decent lookahead during F2L, it's actually possible to be sub 30 on the 3x3.

## 3-look last layer

If you have learned 4LLL, the transition to learning the full set of algs for 2LLL is not as easy. It is recommended to learn full PLL first, then gradually pickup the remaining OLLs. This phase is known as "3LLL" or "3-look last layer". You would have to learn at least 10+21=31 algorithms to be able to solve the last layer in at most 3 algs.

## Further reading

- [CubeSkills - 4 Look Last Layer Algorithms](https://www.cubeskills.com/uploads/pdf/tutorials/4-look-last-layer.pdf)
