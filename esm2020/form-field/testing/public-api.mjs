/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Re-export the base control harness from the "form-field/testing/control" entry-point. To
// avoid circular dependencies, harnesses for form-field controls (i.e. input, select)
// need to import the base form-field control harness through a separate entry-point.
export { MatFormFieldControlHarness } from '@angular/material/form-field/testing/control';
export * from './form-field-harness-filters';
export * from './form-field-harness';
export * from './error-harness';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9mb3JtLWZpZWxkL3Rlc3RpbmcvcHVibGljLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwyRkFBMkY7QUFDM0Ysc0ZBQXNGO0FBQ3RGLHFGQUFxRjtBQUNyRixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUV4RixjQUFjLDhCQUE4QixDQUFDO0FBQzdDLGNBQWMsc0JBQXNCLENBQUM7QUFDckMsY0FBYyxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBSZS1leHBvcnQgdGhlIGJhc2UgY29udHJvbCBoYXJuZXNzIGZyb20gdGhlIFwiZm9ybS1maWVsZC90ZXN0aW5nL2NvbnRyb2xcIiBlbnRyeS1wb2ludC4gVG9cbi8vIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY2llcywgaGFybmVzc2VzIGZvciBmb3JtLWZpZWxkIGNvbnRyb2xzIChpLmUuIGlucHV0LCBzZWxlY3QpXG4vLyBuZWVkIHRvIGltcG9ydCB0aGUgYmFzZSBmb3JtLWZpZWxkIGNvbnRyb2wgaGFybmVzcyB0aHJvdWdoIGEgc2VwYXJhdGUgZW50cnktcG9pbnQuXG5leHBvcnQge01hdEZvcm1GaWVsZENvbnRyb2xIYXJuZXNzfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkL3Rlc3RpbmcvY29udHJvbCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZm9ybS1maWVsZC1oYXJuZXNzLWZpbHRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtLWZpZWxkLWhhcm5lc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9lcnJvci1oYXJuZXNzJztcbiJdfQ==