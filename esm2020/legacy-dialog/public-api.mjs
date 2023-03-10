/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { MatLegacyDialogModule } from './dialog-module';
export { MAT_LEGACY_DIALOG_DATA, MAT_LEGACY_DIALOG_DEFAULT_OPTIONS, MAT_LEGACY_DIALOG_SCROLL_STRATEGY, MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_LEGACY_DIALOG_SCROLL_STRATEGY_PROVIDER, MatLegacyDialog, } from './dialog';
export { MatLegacyDialogContainer } from './dialog-container';
export { MatLegacyDialogClose, MatLegacyDialogTitle, MatLegacyDialogContent, MatLegacyDialogActions, } from './dialog-content-directives';
export { MatLegacyDialogRef } from './dialog-ref';
export { MatLegacyDialogConfig } from './dialog-config';
export { 
/**
 * @deprecated Use `_MatDialogBase` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MatDialogBase as _MatLegacyDialogBase, 
/**
 * @deprecated Use `_MatDialogContainerBase` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_MatDialogContainerBase as _MatLegacyDialogContainerBase, 
/**
 * @deprecated Use `_closeDialogVia` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
_closeDialogVia as _closeLegacyDialogVia, 
/**
 * @deprecated Use `matDialogAnimations` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
matDialogAnimations as matLegacyDialogAnimations, 
/**
 * @deprecated Use `MAT_DIALOG_SCROLL_STRATEGY_FACTORY` from `@angular/material/dialog` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
MAT_DIALOG_SCROLL_STRATEGY_FACTORY as MAT_LEGACY_DIALOG_SCROLL_STRATEGY_FACTORY, } from '@angular/material/dialog';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9sZWdhY3ktZGlhbG9nL3B1YmxpYy1hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixpQ0FBaUMsRUFDakMsaUNBQWlDLEVBQ2pDLGtEQUFrRCxFQUNsRCwwQ0FBMEMsRUFDMUMsZUFBZSxHQUNoQixNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU87QUFDTDs7O0dBR0c7QUFDSCxjQUFjLElBQUksb0JBQW9CO0FBRXRDOzs7R0FHRztBQUNILHVCQUF1QixJQUFJLDZCQUE2QjtBQW9CeEQ7OztHQUdHO0FBQ0gsZUFBZSxJQUFJLHFCQUFxQjtBQVF4Qzs7O0dBR0c7QUFDSCxtQkFBbUIsSUFBSSx5QkFBeUI7QUFFaEQ7OztHQUdHO0FBQ0gsa0NBQWtDLElBQUkseUNBQXlDLEdBQ2hGLE1BQU0sMEJBQTBCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuZXhwb3J0IHtNYXRMZWdhY3lEaWFsb2dNb2R1bGV9IGZyb20gJy4vZGlhbG9nLW1vZHVsZSc7XG5leHBvcnQge1xuICBNQVRfTEVHQUNZX0RJQUxPR19EQVRBLFxuICBNQVRfTEVHQUNZX0RJQUxPR19ERUZBVUxUX09QVElPTlMsXG4gIE1BVF9MRUdBQ1lfRElBTE9HX1NDUk9MTF9TVFJBVEVHWSxcbiAgTUFUX0xFR0FDWV9ESUFMT0dfU0NST0xMX1NUUkFURUdZX1BST1ZJREVSX0ZBQ1RPUlksXG4gIE1BVF9MRUdBQ1lfRElBTE9HX1NDUk9MTF9TVFJBVEVHWV9QUk9WSURFUixcbiAgTWF0TGVnYWN5RGlhbG9nLFxufSBmcm9tICcuL2RpYWxvZyc7XG5leHBvcnQge01hdExlZ2FjeURpYWxvZ0NvbnRhaW5lcn0gZnJvbSAnLi9kaWFsb2ctY29udGFpbmVyJztcbmV4cG9ydCB7XG4gIE1hdExlZ2FjeURpYWxvZ0Nsb3NlLFxuICBNYXRMZWdhY3lEaWFsb2dUaXRsZSxcbiAgTWF0TGVnYWN5RGlhbG9nQ29udGVudCxcbiAgTWF0TGVnYWN5RGlhbG9nQWN0aW9ucyxcbn0gZnJvbSAnLi9kaWFsb2ctY29udGVudC1kaXJlY3RpdmVzJztcbmV4cG9ydCB7TWF0TGVnYWN5RGlhbG9nUmVmfSBmcm9tICcuL2RpYWxvZy1yZWYnO1xuZXhwb3J0IHtNYXRMZWdhY3lEaWFsb2dDb25maWd9IGZyb20gJy4vZGlhbG9nLWNvbmZpZyc7XG5leHBvcnQge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBfTWF0RGlhbG9nQmFzZWAgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIF9NYXREaWFsb2dCYXNlIGFzIF9NYXRMZWdhY3lEaWFsb2dCYXNlLFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYF9NYXREaWFsb2dDb250YWluZXJCYXNlYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgX01hdERpYWxvZ0NvbnRhaW5lckJhc2UgYXMgX01hdExlZ2FjeURpYWxvZ0NvbnRhaW5lckJhc2UsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgQXV0b0ZvY3VzVGFyZ2V0YCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgQXV0b0ZvY3VzVGFyZ2V0IGFzIExlZ2FjeUF1dG9Gb2N1c1RhcmdldCxcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBEaWFsb2dSb2xlYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgRGlhbG9nUm9sZSBhcyBMZWdhY3lEaWFsb2dSb2xlLFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYERpYWxvZ1Bvc2l0aW9uYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgRGlhbG9nUG9zaXRpb24gYXMgTGVnYWN5RGlhbG9nUG9zaXRpb24sXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgX2Nsb3NlRGlhbG9nVmlhYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2dgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICAgKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICAgKi9cbiAgX2Nsb3NlRGlhbG9nVmlhIGFzIF9jbG9zZUxlZ2FjeURpYWxvZ1ZpYSxcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGBNYXREaWFsb2dTdGF0ZWAgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIE1hdERpYWxvZ1N0YXRlIGFzIE1hdExlZ2FjeURpYWxvZ1N0YXRlLFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYG1hdERpYWxvZ0FuaW1hdGlvbnNgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL2RpYWxvZ2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gICAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gICAqL1xuICBtYXREaWFsb2dBbmltYXRpb25zIGFzIG1hdExlZ2FjeURpYWxvZ0FuaW1hdGlvbnMsXG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBgTUFUX0RJQUxPR19TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWWAgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAgICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAgICovXG4gIE1BVF9ESUFMT0dfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUlkgYXMgTUFUX0xFR0FDWV9ESUFMT0dfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUlksXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG4iXX0=