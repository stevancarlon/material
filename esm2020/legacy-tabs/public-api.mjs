/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { MatLegacyTabsModule } from './tabs-module';
export { MatLegacyTabGroup } from './tab-group';
export { MatLegacyInkBar } from './ink-bar';
export { MatLegacyTabBody, MatLegacyTabBodyPortal } from './tab-body';
export { MatLegacyTabHeader } from './tab-header';
export { MatLegacyTab } from './tab';
export { MatLegacyTabNav, MatLegacyTabLink, MatLegacyTabNavPanel } from './tab-nav-bar/index';
export { MatLegacyTabLabel } from './tab-label';
export { MatLegacyTabLabelWrapper } from './tab-label-wrapper';
export { MatLegacyTabContent } from './tab-content';
export { 
/**
 * @deprecated Use `_MatTabNavBase` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MatTabNavBase as _MatLegacyTabNavBase, 
/**
 * @deprecated Use `_MatTabLinkBase` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MatTabLinkBase as _MatLegacyTabLinkBase, 
/**
 * @deprecated Use `MAT_TABS_CONFIG` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
MAT_TABS_CONFIG as MAT_LEGACY_TABS_CONFIG, 
/**
 * @deprecated Use `_MatTabBase` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MatTabBase as _MatLegacyTabBase, 
/**
 * @deprecated Use `MAT_TAB` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
MAT_TAB as MAT_LEGACY_TAB, 
/**
 * @deprecated Use `MAT_TAB_GROUP` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
MAT_TAB_GROUP as MAT_LEGACY_TAB_GROUP, 
/**
 * @deprecated Use `_MatTabBodyBase` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MatTabBodyBase as _MatLegacyTabBodyBase, 
/**
 * @deprecated Use `matTabsAnimations` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
matTabsAnimations as matLegacyTabsAnimations, 
/**
 * @deprecated Use `MAT_TAB_CONTENT` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
MAT_TAB_CONTENT as MAT_LEGACY_TAB_CONTENT, 
/**
 * @deprecated Use `_MAT_INK_BAR_POSITIONER` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MAT_INK_BAR_POSITIONER as _MAT_LEGACY_INK_BAR_POSITIONER, 
/**
 * @deprecated Use `_MAT_INK_BAR_POSITIONER_FACTORY` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MAT_INK_BAR_POSITIONER_FACTORY as _MAT_LEGACY_INK_BAR_POSITIONER_FACTORY, 
/**
 * @deprecated Use `MatTabChangeEvent` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
MatTabChangeEvent as MatLegacyTabChangeEvent, 
/**
 * @deprecated Use `_MatTabGroupBase` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MatTabGroupBase as _MatLegacyTabGroupBase, 
/**
 * @deprecated Use `_MatTabHeaderBase` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MatTabHeaderBase as _MatLegacyTabHeaderBase, 
/**
 * @deprecated Use `MatPaginatedTabHeader` from `@angular/material/tabs` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
MatPaginatedTabHeader as MatLegacyPaginatedTabHeader, } from '@angular/material/tabs';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9sZWdhY3ktdGFicy9wdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUMxQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsc0JBQXNCLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDcEUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDbkMsT0FBTyxFQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzVGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTztBQUNMOzs7R0FHRztBQUNILGNBQWMsSUFBSSxvQkFBb0I7QUFFdEM7OztHQUdHO0FBQ0gsZUFBZSxJQUFJLHFCQUFxQjtBQVF4Qzs7O0dBR0c7QUFDSCxlQUFlLElBQUksc0JBQXNCO0FBRXpDOzs7R0FHRztBQUNILFdBQVcsSUFBSSxpQkFBaUI7QUFFaEM7OztHQUdHO0FBQ0gsT0FBTyxJQUFJLGNBQWM7QUFRekI7OztHQUdHO0FBQ0gsYUFBYSxJQUFJLG9CQUFvQjtBQUVyQzs7O0dBR0c7QUFDSCxlQUFlLElBQUkscUJBQXFCO0FBUXhDOzs7R0FHRztBQUNILGlCQUFpQixJQUFJLHVCQUF1QjtBQUU1Qzs7O0dBR0c7QUFDSCxlQUFlLElBQUksc0JBQXNCO0FBY3pDOzs7R0FHRztBQUNILHVCQUF1QixJQUFJLDhCQUE4QjtBQUV6RDs7O0dBR0c7QUFDSCwrQkFBK0IsSUFBSSxzQ0FBc0M7QUFFekU7OztHQUdHO0FBQ0gsaUJBQWlCLElBQUksdUJBQXVCO0FBRTVDOzs7R0FHRztBQUNILGdCQUFnQixJQUFJLHNCQUFzQjtBQVExQzs7O0dBR0c7QUFDSCxpQkFBaUIsSUFBSSx1QkFBdUI7QUFFNUM7OztHQUdHO0FBQ0gscUJBQXFCLElBQUksMkJBQTJCLEdBQ3JELE1BQU0sd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtNYXRMZWdhY3lUYWJzTW9kdWxlfSBmcm9tICcuL3RhYnMtbW9kdWxlJztcbmV4cG9ydCB7TWF0TGVnYWN5VGFiR3JvdXB9IGZyb20gJy4vdGFiLWdyb3VwJztcbmV4cG9ydCB7TWF0TGVnYWN5SW5rQmFyfSBmcm9tICcuL2luay1iYXInO1xuZXhwb3J0IHtNYXRMZWdhY3lUYWJCb2R5LCBNYXRMZWdhY3lUYWJCb2R5UG9ydGFsfSBmcm9tICcuL3RhYi1ib2R5JztcbmV4cG9ydCB7TWF0TGVnYWN5VGFiSGVhZGVyfSBmcm9tICcuL3RhYi1oZWFkZXInO1xuZXhwb3J0IHtNYXRMZWdhY3lUYWJ9IGZyb20gJy4vdGFiJztcbmV4cG9ydCB7TWF0TGVnYWN5VGFiTmF2LCBNYXRMZWdhY3lUYWJMaW5rLCBNYXRMZWdhY3lUYWJOYXZQYW5lbH0gZnJvbSAnLi90YWItbmF2LWJhci9pbmRleCc7XG5leHBvcnQge01hdExlZ2FjeVRhYkxhYmVsfSBmcm9tICcuL3RhYi1sYWJlbCc7XG5leHBvcnQge01hdExlZ2FjeVRhYkxhYmVsV3JhcHBlcn0gZnJvbSAnLi90YWItbGFiZWwtd3JhcHBlcic7XG5leHBvcnQge01hdExlZ2FjeVRhYkNvbnRlbnR9IGZyb20gJy4vdGFiLWNvbnRlbnQnO1xuZXhwb3J0IHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgX01hdFRhYk5hdkJhc2VgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgX01hdFRhYk5hdkJhc2UgYXMgX01hdExlZ2FjeVRhYk5hdkJhc2UsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgX01hdFRhYkxpbmtCYXNlYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIF9NYXRUYWJMaW5rQmFzZSBhcyBfTWF0TGVnYWN5VGFiTGlua0Jhc2UsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgTWF0VGFic0NvbmZpZ2AgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvdGFic2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gICAqL1xuICBNYXRUYWJzQ29uZmlnIGFzIE1hdExlZ2FjeVRhYnNDb25maWcsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgTUFUX1RBQlNfQ09ORklHYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIE1BVF9UQUJTX0NPTkZJRyBhcyBNQVRfTEVHQUNZX1RBQlNfQ09ORklHLFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYF9NYXRUYWJCYXNlYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIF9NYXRUYWJCYXNlIGFzIF9NYXRMZWdhY3lUYWJCYXNlLFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYE1BVF9UQUJgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgTUFUX1RBQiBhcyBNQVRfTEVHQUNZX1RBQixcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBTY3JvbGxEaXJlY3Rpb25gIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgU2Nyb2xsRGlyZWN0aW9uIGFzIExlZ2FjeVNjcm9sbERpcmVjdGlvbixcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBNQVRfVEFCX0dST1VQYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIE1BVF9UQUJfR1JPVVAgYXMgTUFUX0xFR0FDWV9UQUJfR1JPVVAsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgX01hdFRhYkJvZHlCYXNlYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIF9NYXRUYWJCb2R5QmFzZSBhcyBfTWF0TGVnYWN5VGFiQm9keUJhc2UsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgTWF0VGFiQm9keVBvc2l0aW9uU3RhdGVgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgTWF0VGFiQm9keVBvc2l0aW9uU3RhdGUgYXMgTWF0TGVnYWN5VGFiQm9keVBvc2l0aW9uU3RhdGUsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgbWF0VGFic0FuaW1hdGlvbnNgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgbWF0VGFic0FuaW1hdGlvbnMgYXMgbWF0TGVnYWN5VGFic0FuaW1hdGlvbnMsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgTUFUX1RBQl9DT05URU5UYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIE1BVF9UQUJfQ09OVEVOVCBhcyBNQVRfTEVHQUNZX1RBQl9DT05URU5ULFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYE1hdFRhYkJvZHlPcmlnaW5TdGF0ZWAgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvdGFic2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gICAqL1xuICBNYXRUYWJCb2R5T3JpZ2luU3RhdGUgYXMgTWF0TGVnYWN5VGFiQm9keU9yaWdpblN0YXRlLFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYF9NYXRJbmtCYXJQb3NpdGlvbmVyYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIF9NYXRJbmtCYXJQb3NpdGlvbmVyIGFzIF9NYXRMZWdhY3lJbmtCYXJQb3NpdGlvbmVyLFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYF9NQVRfSU5LX0JBUl9QT1NJVElPTkVSYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIF9NQVRfSU5LX0JBUl9QT1NJVElPTkVSIGFzIF9NQVRfTEVHQUNZX0lOS19CQVJfUE9TSVRJT05FUixcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBfTUFUX0lOS19CQVJfUE9TSVRJT05FUl9GQUNUT1JZYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIF9NQVRfSU5LX0JBUl9QT1NJVElPTkVSX0ZBQ1RPUlkgYXMgX01BVF9MRUdBQ1lfSU5LX0JBUl9QT1NJVElPTkVSX0ZBQ1RPUlksXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgTWF0VGFiQ2hhbmdlRXZlbnRgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgTWF0VGFiQ2hhbmdlRXZlbnQgYXMgTWF0TGVnYWN5VGFiQ2hhbmdlRXZlbnQsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgX01hdFRhYkdyb3VwQmFzZWAgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvdGFic2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gICAqL1xuICBfTWF0VGFiR3JvdXBCYXNlIGFzIF9NYXRMZWdhY3lUYWJHcm91cEJhc2UsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgTWF0VGFiSGVhZGVyUG9zaXRpb25gIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgTWF0VGFiSGVhZGVyUG9zaXRpb24gYXMgTWF0TGVnYWN5VGFiSGVhZGVyUG9zaXRpb24sXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgX01hdFRhYkhlYWRlckJhc2VgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL3RhYnNgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgX01hdFRhYkhlYWRlckJhc2UgYXMgX01hdExlZ2FjeVRhYkhlYWRlckJhc2UsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgTWF0UGFnaW5hdGVkVGFiSGVhZGVyYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC90YWJzYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIE1hdFBhZ2luYXRlZFRhYkhlYWRlciBhcyBNYXRMZWdhY3lQYWdpbmF0ZWRUYWJIZWFkZXIsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuIl19