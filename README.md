# 🥷 Stealth - Text Steganography & Shape Stealth Engine

> **ZWC Datahider** is a lightweight, high-performance web tool designed for invisible message encoding and text obfuscation using Zero-Width Characters (ZWC) and Advanced Unicode Homoglyphs.

---

## 🚀 Key Features

* **🔏 Invisible Payload Encoding**: Conceals encrypted/secret text inside ordinary cover text using zero-width Unicode characters (`\u200B`, `\u200C`, `\u200D`, `\uFEFF`).
* **🎭 Shape Stealth (Homoglyphs Replacement)**: Bypasses automated steganography detectors by swapping standard Latin characters with visually identical Unicode look-alikes across Cyrillic, Greek, Armenian, and Mathematical character sets.
* **🔓 Smart Payload Extraction & Reversion**: Seamlessly extracts hidden payloads while restoring homoglyph-altered cover text back to standard Latin characters.
* **🧹 ZWC Stripper**: Cleanly strips all hidden zero-width characters and restores modified text back to original plain text.
* **🛡️ Platform Safety Audit**: Real-time compatibility checks across major messaging platforms (Discord, Telegram, Messenger, Zalo, X, Teams, GitHub).

---

## 🛠️ How It Works

### 1. Zero-Width Encoding (ZWC)
Stealth converts input text into a binary stream using `TextEncoder` (full UTF-8 support) and maps 2-bit pairs into 4 invisible Unicode characters:

| Bit Pair | Character | Unicode Hex | Description |
| :---: | :---: | :---: | :--- |
| `00` | Zero Width Space | `U+200B` | Invisible separator |
| `01` | Zero Width Non-Joiner | `U+200C` | Break ligature |
| `10` | Zero Width Joiner | `U+200D` | Join characters |
| `11` | Zero Width No-Break Space | `U+FEFF` | Byte order mark |

### 2. Homoglyphs Obfuscation
When **HOMO** mode is enabled, standard Latin letters in the cover text are randomly swapped with visually identical characters from other script planes (Cyrillic, Greek, or Mathematical Alphanumeric Symbols).

---

## 💻 Tech Stack

* **Frontend Framework**: Alpine.js
* **UI Styling**: Tailwind CSS
* **Text Processing**: Native JS `TextEncoder` / `TextDecoder` & Unicode Regex

---

## 📁 Project Structure

```text
├── index.html              # Main UI Dashboard
├── script.js                  # ZWC Datahider Alpine.js core logic
├── Homoglyphs_Master.md    # Master reference for Unicode look-alikes
└── README.md                  # Project documentation introduction etc
