# DZBuild Attribution Protection

This document outlines the multi-layer protection system implemented to ensure the DZBuild attribution remains intact.

## Protection Layers

### 1. Visible Attribution Link
- The footer contains a clickable "Powered by dzbuild" link
- Link directs to https://dzbuild.com
- Styled with hover effects and yellow color scheme
- Uses `select-none` to prevent easy text selection

### 2. DOM Integrity Monitoring (protection.ts)
- **MutationObserver**: Monitors the entire document for changes
- Checks for presence of `data-integrity="dzb-2024"` attribute
- Checks for presence of `data-source="dzb"` attribute
- If removed: blurs the page and redirects to dzbuild.com

### 3. Content Verification (App.tsx)
- Interval-based text content verification every 5 seconds
- Scans footer element for "dzbuild" text
- Uses base64 encoded strings to obfuscate checks
- If removed: reduces opacity and redirects after 2 seconds

### 4. Full-Page Integrity Check (protection.ts)
- Scans entire document body HTML every 3 seconds
- Verifies "dzbuild" text presence anywhere on page
- If removed: hides page completely and redirects

### 5. Hidden Watermarks
- Base64 encoded text in hidden div elements
- Positioned off-screen with `position: absolute; left: -9999px`
- Zero opacity but still present in DOM
- HTML comments with encoded attribution

### 6. Window Object Protection
- Defines non-configurable, non-writable `__dzb__` property on window object
- Cannot be deleted or modified
- Serves as permanent marker

## Obfuscation Techniques

1. **Base64 Encoding**: Domain and brand name encoded
   - `ZHpidWlsZC5jb20=` = dzbuild.com
   - `ZHpidWlsZA==` = dzbuild

2. **Variable Name Obfuscation**: Using hex-style names
   - `_0x4a3b`, `_0x5c2d`, `_0x3f8e`, etc.
   - Makes code harder to read and understand

3. **Multiple References**: Attribution appears in:
   - Visible footer text
   - Hidden div elements
   - HTML comments (encoded)
   - Data attributes
   - Window object property
   - noscript tag

## Consequences of Removal

If someone attempts to remove the attribution:

1. **Immediate**: Page opacity reduces to 30%
2. **After 1 second**: Page blurs with 10px blur filter
3. **After 2 seconds**: Automatic redirect to https://dzbuild.com
4. **Console Warning**: Red warning message appears

## Files Modified

- `src/App.tsx` - Main component with inline checks
- `src/protection.ts` - Dedicated protection module
- `index.html` - Hidden HTML comments and noscript
- `README.md` - Updated tagline

## Technical Details

### React Component Protection
```typescript
- useRef hook for footer element reference
- useEffect with interval-based verification
- initProtection() called on component mount
```

### Mutation Observer
```typescript
- Observes: childList, subtree, attributes
- Target: entire document body
- Delay: 1000ms before activation
```

### Timing
- MutationObserver: Real-time
- Footer check: Every 5 seconds
- Full-page check: Every 3 seconds

## Maintenance Notes

⚠️ **IMPORTANT**: Do not remove or modify these protection mechanisms. They ensure proper attribution to DZBuild and are essential for the integrity of the application.

The protection system is designed to be:
- **Persistent**: Multiple layers ensure redundancy
- **Obfuscated**: Encoded strings make it harder to bypass
- **Automatic**: No manual intervention required
- **Fail-safe**: Multiple fallback mechanisms

---

**Protected by DZBuild Security System**
*Last Updated: 2024*
