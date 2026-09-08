# 🎭 Master Unicode Homoglyphs Reference

> ⚠️ **Note**: This document maps Unicode character look-alikes across **Alphabetic** and **Mathematical Symbols**.

---

## 🅰️ Section 1: Alphabetic Script Look-Alikes

| Original | Look-Alike | Unicode Hex | Category / Type | Status / Notes |
| :---: | :---: | :---: | :--- | :--- |
| `a` | <mark>а</mark> | `U+0430` | 🟢 `Cyrillic Small Letter A` | Identical in most sans-serif fonts |
| `c` | <mark>с</mark> | `U+0441` | 🟢 `Cyrillic Small Letter Es` | Standard Cyrillic substitute |
| `d` | <mark>ԁ</mark> | `U+0501` | 🟢 `Cyrillic Small Letter Komi De` | Rare Cyrillic script variant |
| `d` | <mark>ɗ</mark> | `U+0257` | 🟡 `Latin Small Letter D with Hook` | IPA phonetic symbol |
| `e` | <mark>е</mark> | `U+0435` | 🟢 `Cyrillic Small Letter Ie` | High visual match |
| `g` | <mark>ġ</mark> | `U+0121` | 🟡 `Latin Small Letter G with Dot` | Extended Latin diacritic |
| `h` | <mark>һ</mark> | `U+04BB` | 🟢 `Cyrillic Small Letter Shha` | Bashkir / Tatar letter |
| `i` | <mark>і</mark> | `U+0456` | 🟢 `Cyrillic Small Letter Ukrainian I` | Perfect match for lowercase `i` |
| `j` | <mark>ј</mark> | `U+045F` | 🟢 `Cyrillic Small Letter Je` | Used in Serbian / Macedonian |
| `k` | <mark>κ</mark> | `U+03BA` | 🔵 `Greek Small Letter Kappa` | Lowercase Greek variant |
| `l` | <mark>ӏ</mark> | `U+04CF` | 🟢 `Cyrillic Small Letter Palochka` | Caucasian language script |
| `n` | <mark>ո</mark> | `U+0570` | 🟣 `Armenian Small Letter Now` | Armenian script match |
| `o` | <mark>о</mark> | `U+043E` | 🟢 `Cyrillic Small Letter O` | Indistinguishable from Latin `o` |
| `o` | <mark>ο</mark> | `U+03BF` | 🔵 `Greek Small Letter Omicron` | Greek lowercase counterpart |
| `o` | <mark>օ</mark> | `U+0580` | 🟣 `Armenian Small Letter Oh` | Armenian script match |
| `p` | <mark>р</mark> | `U+0440` | 🟢 `Cyrillic Small Letter Er` | Exact match for lowercase `p` |
| `q` | <mark>զ</mark> | `U+0566` | 🟣 `Armenian Small Letter Za` | Armenian script match |
| `s` | <mark>ʂ</mark> | `U+0282` | 🟡 `Latin Small Letter S with Hook` | Retroflex sibilant symbol |
| `u` | <mark>υ</mark> | `U+03C5` | 🔵 `Greek Small Letter Upsilon` | Lowercase Greek letter |
| `v` | <mark>ѵ</mark> | `U+0475` | 🟢 `Cyrillic Small Letter Izhitsa` | Archaic Cyrillic letter |
| `x` | <mark>х</mark> | `U+0445` | 🟢 `Cyrillic Small Letter Kha` | Exact visual match |
| `x` | <mark>ҳ</mark> | `U+04B7` | 🟢 `Cyrillic Small Letter Kha + Descender` | Extended Cyrillic |
| `y` | <mark>у</mark> | `U+0443` | 🟢 `Cyrillic Small Letter U` | Cyrillic counterpart |
| `z` | <mark>ż</mark> | `U+017C` | 🟡 `Latin Small Letter Z with Dot` | Polish / Kashubian character |
| `A` | <mark>Α</mark> | `U+0391` | 🔵 `Greek Capital Letter Alpha` | Identical to Latin `A` |
| `B` | <mark>Β</mark> | `U+0392` | 🔵 `Greek Capital Letter Beta` | Identical to Latin `B` |
| `E` | <mark>Ε</mark> | `U+0395` | 🔵 `Greek Capital Letter Epsilon` | Identical to Latin `E` |
| `H` | <mark>Η</mark> | `U+0397` | 🔵 `Greek Capital Letter Eta` | Identical to Latin `H` |
| `I` | <mark>Ι</mark> | `U+0399` | 🔵 `Greek Capital Letter Iota` | Identical to Latin `I` |
| `K` | <mark>Κ</mark> | `U+039A` | 🔵 `Greek Capital Letter Kappa` | Identical to Latin `K` |
| `M` | <mark>Μ</mark> | `U+039C` | 🔵 `Greek Capital Letter Mu` | Identical to Latin `M` |
| `N` | <mark>Ν</mark> | `U+039D` | 🔵 `Greek Capital Letter Nu` | Identical to Latin `N` |
| `O` | <mark>Ο</mark> | `U+039F` | 🔵 `Greek Capital Letter Omicron` | Identical to Latin `O` |
| `P` | <mark>Ρ</mark> | `U+03A1` | 🔵 `Greek Capital Letter Rho` | Identical to Latin `P` |
| `T` | <mark>Τ</mark> | `U+03A4` | 🔵 `Greek Capital Letter Tau` | Identical to Latin `T` |
| `X` | <mark>Χ</mark> | `U+03A7` | 🔵 `Greek Capital Letter Chi` | Identical to Latin `X` |
| `Y` | <mark>Υ</mark> | `U+03A5` | 🔵 `Greek Capital Letter Upsilon` | Identical to Latin `Y` |
| `Z` | <mark>Ζ</mark> | `U+0396` | 🔵 `Greek Capital Letter Zeta` | Identical to Latin `Z` |

---

## 🧮 Section 2: Mathematical Symbol Look-Alikes

> 💡 **Notice**: Symbols in the `U+1Dxxx` range belong to the **Supplementary Multilingual Plane (SMP)** and require surrogate pair handling in JavaScript (`String.fromCodePoint`).

| Original | Look-Alike | Unicode Hex | Category / Type | Status / Notes |
| :---: | :---: | :---: | :--- | :--- |
| `A` | <mark>𝐀</mark> | `U+1D400` | 🟧 `Math Bold Capital A` | High stealth / Styling overhead |
| `A` | <mark>𝐴</mark> | `U+1D434` | 🟧 `Math Italic Capital A` | Italic math variable |
| `A` | <mark>𝑨</mark> | `U+1D468` | 🟧 `Math Bold Italic Capital A` | Bold italic math symbol |
| `A` | <mark>𝖛</mark> | `U+1D57B` | 🟧 `Math Bold Fraktur Small V` | Stylized math character |
| `A` | <mark>𝙰</mark> | `U+1D670` | 🟧 `Math Monospace Capital A` | Fixed-width font |
| `A` | <mark>𝔸</mark> | `U+1D538` | 🟧 `Math Double-Struck Capital A` | Blackboard bold font |
| `B` | <mark>𝐁</mark> | `U+1D401` | 🟧 `Math Bold Capital B` | SMP block symbol |
| `B` | <mark>𝐵</mark> | `U+1D435` | 🟧 `Math Italic Capital B` | Italic math representation |
| `B` | <mark>𝑩</mark> | `U+1D469` | 🟧 `Math Bold Italic Capital B` | Bold italic representation |
| `B` | <mark>𝙱</mark> | `U+1D671` | 🟧 `Math Monospace Capital B` | Fixed-width font |
| `B` | <mark>𝔹</mark> | `U+1D539` | 🟧 `Math Double-Struck Capital B` | Blackboard bold representation |
| `C` | <mark>𝐂</mark> | `U+1D402` | 🟧 `Math Bold Capital C` | SMP block symbol |
| `C` | <mark>𝐶</mark> | `U+1D436` | 🟧 `Math Italic Capital C` | Italic math representation |
| `C` | <mark>𝑪</mark> | `U+1D46A` | 🟧 `Math Bold Italic Capital C` | Bold italic representation |
| `C` | <mark>𝙲</mark> | `U+1D672` | 🟧 `Math Monospace Capital C` | Fixed-width font |
| `C` | <mark>ℂ</mark> | `U+2102` | 🟥 `Double-Struck Capital C` | Letterlike Symbols block |
| `D` | <mark>𝐃</mark> | `U+1D403` | 🟧 `Math Bold Capital D` | SMP block symbol |
| `D` | <mark>𝐷</mark> | `U+1D437` | 🟧 `Math Italic Capital D` | Italic math representation |
| `D` | <mark>𝑫</mark> | `U+1D46B` | 🟧 `Math Bold Italic Capital D` | Bold italic representation |
| `D` | <mark>𝙳</mark> | `U+1D673` | 🟧 `Math Monospace Capital D` | Fixed-width font |
| `D` | <mark>𝔻</mark> | `U+1D53B` | 🟧 `Math Double-Struck Capital D` | Blackboard bold representation |
| `E` | <mark>𝐄</mark> | `U+1D404` | 🟧 `Math Bold Capital E` | SMP block symbol |
| `E` | <mark>𝐸</mark> | `U+1D438` | 🟧 `Math Italic Capital E` | Italic math representation |
| `E` | <mark>𝑬</mark> | `U+1D46C` | 🟧 `Math Bold Italic Capital E` | Bold italic representation |
| `a` | <mark>𝐚</mark> | `U+1D41A` | 🟧 `Math Bold Small A` | Lowercase bold symbol |
| `a` | <mark>𝑎</mark> | `U+1D44E` | 🟧 `Math Italic Small A` | Lowercase italic variable |
| `a` | <mark>𝒂</mark> | `U+1D482` | 🟧 `Math Bold Italic Small A` | Lowercase bold italic |
| `a` | <mark>𝚊</mark> | `U+1D68A` | 🟧 `Math Monospace Small A` | Lowercase monospace |
| `a` | <mark>𝕒</mark> | `U+1D552` | 🟧 `Math Double-Struck Small A` | Lowercase blackboard bold |
| `b` | <mark>𝐛</mark> | `U+1D41B` | 🟧 `Math Bold Small B` | Lowercase bold symbol |
| b | <mark>𝑏</mark> | `U+1D44F` | 🟧 `Math Italic Small B` | Lowercase italic variable |
| `b` | <mark>𝒃</mark> | `U+1D483` | 🟧 `Math Bold Italic Small B` | Lowercase bold italic |
| `b` | <mark>𝚋</mark> | `U+1D68B` | 🟧 `Math Monospace Small B` | Lowercase monospace |
| `b` | <mark>𝕓</mark> | `U+1D553` | 🟧 `Math Double-Struck Small B` | Lowercase blackboard bold |
| `c` | <mark>𝐜</mark> | `U+1D41C` | 🟧 `Math Bold Small C` | Lowercase bold symbol |
| `c` | <mark>𝑐</mark> | `U+1D450` | 🟧 `Math Italic Small C` | Lowercase italic variable |
| `c` | <mark>𝒄</mark> | `U+1D484` | 🟧 `Math Bold Italic Small C` | Lowercase bold italic |
| `c` | <mark>𝚌</mark> | `U+1D68C` | 🟧 `Math Monospace Small C` | Lowercase monospace |
| `c` | <mark>𝕔</mark> | `U+1D554` | 🟧 `Math Double-Struck Small C` | Lowercase blackboard bold |
| `d` | <mark>𝐝</mark> | `U+1D41D` | 🟧 `Math Bold Small D` | Lowercase bold symbol |
| `d` | <mark>𝑑</mark> | `U+1D451` | 🟧 `Math Italic Small D` | Lowercase italic variable |
| `d` | <mark>𝒅</mark> | `U+1D485` | 🟧 `Math Bold Italic Small D` | Lowercase bold italic |
| `e` | <mark>𝐞</mark> | `U+1D41E` | 🟧 `Math Bold Small E` | Lowercase bold symbol |
| `e` | <mark>𝑒</mark> | `U+1D452` | 🟧 `Math Italic Small E` | Lowercase italic variable |
| `e` | <mark>𝒆</mark> | `U+1D486` | 🟧 `Math Bold Italic Small E` | Lowercase bold italic |
| `o` | <mark>∘</mark> | `U+2218` | 🟨 `Ring Operator` | Operator look-alike for `o` |
| `x` | <mark>✕</mark> | `U+2715` | 🟨 `Multiplication X` | Dingbats symbol look-alike |
| `v` | <mark>∨</mark> | `U+2228` | 🟨 `Logical OR` | Logic operator look-alike |
| `u` | <mark>∪</mark> | `U+222A` | 🟨 `Union Operator` | Set theory operator look-alike |
