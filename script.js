document.addEventListener('alpine:init', () => {
    Alpine.data('stealthV8Full', () => ({
        tab: 'encode',
        score: 0,
        config: {
            mode: '64',
            compress: false,
            space: false,
            punc: false,
            homo: false,
            redundancy: false
        },
        stats: {
            orig: 0,
            packed: 0,
            ratio: 0
        },
        encode: {
            secret: '',
            cover: '',
            result: ''
        },
        decode: {
            input: '',
            output: ''
        },
        strip: {
            input: '',
            output: '',
            removedCount: 0
        },
        platformRules: {
            'Discord': [2, 8],
            'Telegram': [2, 8, 16],
            'Messenger': [2, 8],
            'Zalo': [2, 8, 16],
            'X': [2],
            'MS Teams': [2, 8],
            'GitHub': [2, 8, 16, 32, 64]
        },
        platforms: [],

        // Bảng ZWC để mã hóa bit
        zwcMap: {
            '00': '\u200B', // Zero Width Space
            '01': '\u200C', // Zero Width Non-Joiner
            '10': '\u200D', // Zero Width Joiner
            '11': '\uFEFF'  // Zero Width No-Break Space
        },

        // Bảng Homoglyphs Look-Alikes từ Homoglyphs.md
        homoglyphs: {
            'a': ['а'],
            'c': ['с'],
            'd': ['ԁ', 'ɗ'],
            'e': ['е'],
            'g': ['ġ'],
            'h': ['һ'],
            'i': ['і'],
            'j': ['ј'],
            'k': ['κ'],
            'l': ['ӏ'],
            'n': ['ո'],
            'o': ['о', 'ο', 'օ'],
            'p': ['р'],
            'q': ['զ'],
            's': ['ʂ'],
            'u': ['υ'],
            'v': ['ѵ'],
            'x': ['х', 'ҳ'],
            'y': ['у'],
            'z': ['ż']
        },

        init() {
            this.checkPlatformCompatibility();
        },

        checkPlatformCompatibility() {
            const selectedMode = parseInt(this.config.mode, 10);
            this.platforms = Object.keys(this.platformRules).map(name => ({
                name: name,
                safe: this.platformRules[name].includes(selectedMode)
            }));
        },

        // Áp dụng Homoglyphs lên Cover Text
        applyHomoglyphs(text) {
            return text.split('').map(char => {
                const lower = char.toLowerCase();
                if (this.homoglyphs[lower] && Math.random() > 0.3) {
                    const replacements = this.homoglyphs[lower];
                    const picked = replacements[Math.floor(Math.random() * replacements.length)];
                    return char === lower ? picked : picked.toUpperCase();
                }
                return char;
            }).join('');
        },

        // Mã hóa Text -> ZWC
        textToZwc(text) {
            const encoder = new TextEncoder();
            const bytes = encoder.encode(text);
            let binaryStr = '';
            
            bytes.forEach(byte => {
                binaryStr += byte.toString(2).padStart(8, '0');
            });

            let zwcResult = '';
            for (let i = 0; i < binaryStr.length; i += 2) {
                const pair = binaryStr.substr(i, 2).padEnd(2, '0');
                zwcResult += this.zwcMap[pair];
            }
            return zwcResult;
        },

        // Giải mã ZWC -> Text
        zwcToText(zwcStr) {
            const revMap = {
                '\u200B': '00',
                '\u200C': '01',
                '\u200D': '10',
                '\uFEFF': '11'
            };

            let binaryStr = '';
            for (const char of zwcStr) {
                if (revMap[char] !== undefined) {
                    binaryStr += revMap[char];
                }
            }

            if (binaryStr.length === 0) return '';

            const bytes = [];
            for (let i = 0; i < binaryStr.length; i += 8) {
                const byteStr = binaryStr.substr(i, 8);
                if (byteStr.length === 8) {
                    bytes.push(parseInt(byteStr, 2));
                }
            }

            const decoder = new TextDecoder();
            return decoder.decode(new Uint8Array(bytes));
        },

        executeEncode() {
            if (!this.encode.secret) return;

            const hiddenZwc = this.textToZwc(this.encode.secret);
            let cover = this.encode.cover || ' ';

            // Xử lý Homoglyphs nếu checkbox được bật
            if (this.config.homo) {
                cover = this.applyHomoglyphs(cover);
            }

            // Chèn mã ZWC vào cover text
            if (cover.length > 1) {
                this.encode.result = cover.slice(0, 1) + hiddenZwc + cover.slice(1);
            } else {
                this.encode.result = cover + hiddenZwc;
            }

            // Cập nhật System Audit
            const encoder = new TextEncoder();
            this.stats.orig = encoder.encode(this.encode.secret).length;
            this.stats.packed = encoder.encode(this.encode.result).length;
            
            let baseScore = 50 + Math.floor((cover.trim().length) * 2);
            if (this.config.homo) baseScore += 20;
            this.score = Math.min(99, Math.max(30, baseScore));
        },

        executeDecode() {
            if (!this.decode.input) return;

            // Tách ZWC
            const zwcOnly = this.decode.input.replace(/[^\u200B\u200C\u200D\uFEFF]/g, '');
            const recovered = this.zwcToText(zwcOnly);

            this.decode.output = recovered || '❌ Không tìm thấy payload ẩn hợp lệ!';
        },

        executeStrip() {
            const originalLength = this.strip.input.length;
            // Xóa ZWC
            let cleaned = this.strip.input.replace(/[\u200B-\u200D\uFEFF]/g, '');
            
            // Xóa/khôi phục Homoglyphs về dạng Latin thường nếu muốn dọn sạch hoàn toàn
            Object.entries(this.homoglyphs).forEach(([latin, lookAlikes]) => {
                lookAlikes.forEach(glyph => {
                    cleaned = cleaned.replaceAll(glyph, latin);
                });
            });

            this.strip.output = cleaned;
            this.strip.removedCount = originalLength - this.strip.output.length;
        },

        copy(text) {
            if (!text) return;
            navigator.clipboard.writeText(text);
            alert('Copied to clipboard!');
        },

        scoreColor() {
            if (this.score < 40) return 'text-red-500';
            if (this.score < 75) return 'text-yellow-500';
            return 'text-emerald-500';
        },

        scoreBg() {
            if (this.score < 40) return 'bg-red-500';
            if (this.score < 75) return 'bg-yellow-500';
            return 'bg-emerald-500';
        },

        reset() {
            this.encode = { secret: '', cover: '', result: '' };
            this.decode = { input: '', output: '' };
            this.strip = { input: '', output: '', removedCount: 0 };
            this.score = 0;
            this.stats = { orig: 0, packed: 0, ratio: 0 };
        }
    }));
});