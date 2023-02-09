/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The Trusted Types policy, or null if Trusted Types are not
 * enabled/supported, or undefined if the policy has not been created yet.
 */
let policy;
/**
 * Returns the Trusted Types policy, or null if Trusted Types are not
 * enabled/supported. The first call to this function will create the policy.
 */
function getPolicy() {
    if (policy === undefined) {
        policy = null;
        if (typeof window !== 'undefined') {
            const ttWindow = window;
            if (ttWindow.trustedTypes !== undefined) {
                policy = ttWindow.trustedTypes.createPolicy('angular#components', {
                    createHTML: (s) => s,
                });
            }
        }
    }
    return policy;
}
/**
 * Unsafely promote a string to a TrustedHTML, falling back to strings when
 * Trusted Types are not available.
 * @security This is a security-sensitive function; any use of this function
 * must go through security review. In particular, it must be assured that the
 * provided string will never cause an XSS vulnerability if used in a context
 * that will be interpreted as HTML by a browser, e.g. when assigning to
 * element.innerHTML.
 */
export function trustedHTMLFromString(html) {
    return getPolicy()?.createHTML(html) || html;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJ1c3RlZC10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9pY29uL3RydXN0ZWQtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBNkJIOzs7R0FHRztBQUNILElBQUksTUFBNEMsQ0FBQztBQUVqRDs7O0dBR0c7QUFDSCxTQUFTLFNBQVM7SUFDaEIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyxNQUFNLFFBQVEsR0FBRyxNQUE4RCxDQUFDO1lBQ2hGLElBQUksUUFBUSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ3ZDLE1BQU0sR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDaEUsVUFBVSxFQUFFLENBQUMsQ0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QixDQUFDLENBQUM7YUFDSjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUscUJBQXFCLENBQUMsSUFBWTtJQUNoRCxPQUFPLFNBQVMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSyxJQUErQixDQUFDO0FBQzNFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBBIG1vZHVsZSB0byBmYWNpbGl0YXRlIHVzZSBvZiBhIFRydXN0ZWQgVHlwZXMgcG9saWN5IGludGVybmFsbHkgd2l0aGluXG4gKiBBbmd1bGFyIE1hdGVyaWFsLiBJdCBsYXppbHkgY29uc3RydWN0cyB0aGUgVHJ1c3RlZCBUeXBlcyBwb2xpY3ksIHByb3ZpZGluZ1xuICogaGVscGVyIHV0aWxpdGllcyBmb3IgcHJvbW90aW5nIHN0cmluZ3MgdG8gVHJ1c3RlZCBUeXBlcy4gV2hlbiBUcnVzdGVkIFR5cGVzXG4gKiBhcmUgbm90IGF2YWlsYWJsZSwgc3RyaW5ncyBhcmUgdXNlZCBhcyBhIGZhbGxiYWNrLlxuICogQHNlY3VyaXR5IEFsbCB1c2Ugb2YgdGhpcyBtb2R1bGUgaXMgc2VjdXJpdHktc2Vuc2l0aXZlIGFuZCBzaG91bGQgZ28gdGhyb3VnaFxuICogc2VjdXJpdHkgcmV2aWV3LlxuICovXG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcnVzdGVkSFRNTCB7XG4gIF9fYnJhbmRfXzogJ1RydXN0ZWRIVE1MJztcbn1cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFRydXN0ZWRUeXBlUG9saWN5RmFjdG9yeSB7XG4gIGNyZWF0ZVBvbGljeShcbiAgICBwb2xpY3lOYW1lOiBzdHJpbmcsXG4gICAgcG9saWN5T3B0aW9uczoge1xuICAgICAgY3JlYXRlSFRNTD86IChpbnB1dDogc3RyaW5nKSA9PiBzdHJpbmc7XG4gICAgfSxcbiAgKTogVHJ1c3RlZFR5cGVQb2xpY3k7XG59XG5cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBUcnVzdGVkVHlwZVBvbGljeSB7XG4gIGNyZWF0ZUhUTUwoaW5wdXQ6IHN0cmluZyk6IFRydXN0ZWRIVE1MO1xufVxuXG4vKipcbiAqIFRoZSBUcnVzdGVkIFR5cGVzIHBvbGljeSwgb3IgbnVsbCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBub3RcbiAqIGVuYWJsZWQvc3VwcG9ydGVkLCBvciB1bmRlZmluZWQgaWYgdGhlIHBvbGljeSBoYXMgbm90IGJlZW4gY3JlYXRlZCB5ZXQuXG4gKi9cbmxldCBwb2xpY3k6IFRydXN0ZWRUeXBlUG9saWN5IHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBUcnVzdGVkIFR5cGVzIHBvbGljeSwgb3IgbnVsbCBpZiBUcnVzdGVkIFR5cGVzIGFyZSBub3RcbiAqIGVuYWJsZWQvc3VwcG9ydGVkLiBUaGUgZmlyc3QgY2FsbCB0byB0aGlzIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIHRoZSBwb2xpY3kuXG4gKi9cbmZ1bmN0aW9uIGdldFBvbGljeSgpOiBUcnVzdGVkVHlwZVBvbGljeSB8IG51bGwge1xuICBpZiAocG9saWN5ID09PSB1bmRlZmluZWQpIHtcbiAgICBwb2xpY3kgPSBudWxsO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgdHRXaW5kb3cgPSB3aW5kb3cgYXMgdW5rbm93biBhcyB7dHJ1c3RlZFR5cGVzPzogVHJ1c3RlZFR5cGVQb2xpY3lGYWN0b3J5fTtcbiAgICAgIGlmICh0dFdpbmRvdy50cnVzdGVkVHlwZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb2xpY3kgPSB0dFdpbmRvdy50cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdhbmd1bGFyI2NvbXBvbmVudHMnLCB7XG4gICAgICAgICAgY3JlYXRlSFRNTDogKHM6IHN0cmluZykgPT4gcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBwb2xpY3k7XG59XG5cbi8qKlxuICogVW5zYWZlbHkgcHJvbW90ZSBhIHN0cmluZyB0byBhIFRydXN0ZWRIVE1MLCBmYWxsaW5nIGJhY2sgdG8gc3RyaW5ncyB3aGVuXG4gKiBUcnVzdGVkIFR5cGVzIGFyZSBub3QgYXZhaWxhYmxlLlxuICogQHNlY3VyaXR5IFRoaXMgaXMgYSBzZWN1cml0eS1zZW5zaXRpdmUgZnVuY3Rpb247IGFueSB1c2Ugb2YgdGhpcyBmdW5jdGlvblxuICogbXVzdCBnbyB0aHJvdWdoIHNlY3VyaXR5IHJldmlldy4gSW4gcGFydGljdWxhciwgaXQgbXVzdCBiZSBhc3N1cmVkIHRoYXQgdGhlXG4gKiBwcm92aWRlZCBzdHJpbmcgd2lsbCBuZXZlciBjYXVzZSBhbiBYU1MgdnVsbmVyYWJpbGl0eSBpZiB1c2VkIGluIGEgY29udGV4dFxuICogdGhhdCB3aWxsIGJlIGludGVycHJldGVkIGFzIEhUTUwgYnkgYSBicm93c2VyLCBlLmcuIHdoZW4gYXNzaWduaW5nIHRvXG4gKiBlbGVtZW50LmlubmVySFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRydXN0ZWRIVE1MRnJvbVN0cmluZyhodG1sOiBzdHJpbmcpOiBUcnVzdGVkSFRNTCB7XG4gIHJldHVybiBnZXRQb2xpY3koKT8uY3JlYXRlSFRNTChodG1sKSB8fCAoaHRtbCBhcyB1bmtub3duIGFzIFRydXN0ZWRIVE1MKTtcbn1cbiJdfQ==