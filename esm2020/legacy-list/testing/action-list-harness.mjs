/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatLegacyListHarnessBase } from './list-harness-base';
import { getListItemPredicate, MatLegacyListItemHarnessBase } from './list-item-harness-base';
/**
 * Harness for interacting with a standard mat-action-list in tests.
 * @deprecated Use `MatActionListHarness` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyActionListHarness extends MatLegacyListHarnessBase {
    constructor() {
        super(...arguments);
        this._itemHarness = MatLegacyActionListItemHarness;
    }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatActionListHarness` that meets
     * certain criteria.
     * @param options Options for filtering which action list instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(MatLegacyActionListHarness, options);
    }
}
/** The selector for the host element of a `MatActionList` instance. */
MatLegacyActionListHarness.hostSelector = 'mat-action-list.mat-list';
/**
 * Harness for interacting with an action list item.
 * @deprecated Use `MatActionListItemHarness` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyActionListItemHarness extends MatLegacyListItemHarnessBase {
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatActionListItemHarness` that
     * meets certain criteria.
     * @param options Options for filtering which action list item instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return getListItemPredicate(MatLegacyActionListItemHarness, options);
    }
    /** Clicks on the action list item. */
    async click() {
        return (await this.host()).click();
    }
    /** Focuses the action list item. */
    async focus() {
        return (await this.host()).focus();
    }
    /** Blurs the action list item. */
    async blur() {
        return (await this.host()).blur();
    }
    /** Whether the action list item is focused. */
    async isFocused() {
        return (await this.host()).isFocused();
    }
}
/** The selector for the host element of a `MatListItem` instance. */
MatLegacyActionListItemHarness.hostSelector = `${MatLegacyActionListHarness.hostSelector} .mat-list-item`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWxpc3QtaGFybmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9sZWdhY3ktbGlzdC90ZXN0aW5nL2FjdGlvbi1saXN0LWhhcm5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFLN0QsT0FBTyxFQUFDLG9CQUFvQixFQUFFLDRCQUE0QixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFFNUY7Ozs7R0FJRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSx3QkFJL0M7SUFKRDs7UUFvQlcsaUJBQVksR0FBRyw4QkFBOEIsQ0FBQztJQUN6RCxDQUFDO0lBYkM7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUNULFVBQTBDLEVBQUU7UUFFNUMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLDBCQUEwQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ25FLENBQUM7O0FBYkQsdUVBQXVFO0FBQ2hFLHVDQUFZLEdBQUcsMEJBQTBCLENBQUM7QUFpQm5EOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sOEJBQStCLFNBQVEsNEJBQTRCO0lBSTlFOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FDVCxVQUE4QyxFQUFFO1FBRWhELE9BQU8sb0JBQW9CLENBQUMsOEJBQThCLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxLQUFLLENBQUMsS0FBSztRQUNULE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsS0FBSyxDQUFDLEtBQUs7UUFDVCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLEtBQUssQ0FBQyxJQUFJO1FBQ1IsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELCtDQUErQztJQUMvQyxLQUFLLENBQUMsU0FBUztRQUNiLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7O0FBakNELHFFQUFxRTtBQUM5RCwyQ0FBWSxHQUFHLEdBQUcsMEJBQTBCLENBQUMsWUFBWSxpQkFBaUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0hhcm5lc3NQcmVkaWNhdGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcbmltcG9ydCB7TWF0TGVnYWN5TGlzdEhhcm5lc3NCYXNlfSBmcm9tICcuL2xpc3QtaGFybmVzcy1iYXNlJztcbmltcG9ydCB7XG4gIExlZ2FjeUFjdGlvbkxpc3RIYXJuZXNzRmlsdGVycyxcbiAgTGVnYWN5QWN0aW9uTGlzdEl0ZW1IYXJuZXNzRmlsdGVycyxcbn0gZnJvbSAnLi9saXN0LWhhcm5lc3MtZmlsdGVycyc7XG5pbXBvcnQge2dldExpc3RJdGVtUHJlZGljYXRlLCBNYXRMZWdhY3lMaXN0SXRlbUhhcm5lc3NCYXNlfSBmcm9tICcuL2xpc3QtaXRlbS1oYXJuZXNzLWJhc2UnO1xuXG4vKipcbiAqIEhhcm5lc3MgZm9yIGludGVyYWN0aW5nIHdpdGggYSBzdGFuZGFyZCBtYXQtYWN0aW9uLWxpc3QgaW4gdGVzdHMuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE1hdEFjdGlvbkxpc3RIYXJuZXNzYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9saXN0L3Rlc3RpbmdgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hdExlZ2FjeUFjdGlvbkxpc3RIYXJuZXNzIGV4dGVuZHMgTWF0TGVnYWN5TGlzdEhhcm5lc3NCYXNlPFxuICB0eXBlb2YgTWF0TGVnYWN5QWN0aW9uTGlzdEl0ZW1IYXJuZXNzLFxuICBNYXRMZWdhY3lBY3Rpb25MaXN0SXRlbUhhcm5lc3MsXG4gIExlZ2FjeUFjdGlvbkxpc3RJdGVtSGFybmVzc0ZpbHRlcnNcbj4ge1xuICAvKiogVGhlIHNlbGVjdG9yIGZvciB0aGUgaG9zdCBlbGVtZW50IG9mIGEgYE1hdEFjdGlvbkxpc3RgIGluc3RhbmNlLiAqL1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gJ21hdC1hY3Rpb24tbGlzdC5tYXQtbGlzdCc7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc1ByZWRpY2F0ZWAgdGhhdCBjYW4gYmUgdXNlZCB0byBzZWFyY2ggZm9yIGEgYE1hdEFjdGlvbkxpc3RIYXJuZXNzYCB0aGF0IG1lZXRzXG4gICAqIGNlcnRhaW4gY3JpdGVyaWEuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGZpbHRlcmluZyB3aGljaCBhY3Rpb24gbGlzdCBpbnN0YW5jZXMgYXJlIGNvbnNpZGVyZWQgYSBtYXRjaC5cbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aChcbiAgICBvcHRpb25zOiBMZWdhY3lBY3Rpb25MaXN0SGFybmVzc0ZpbHRlcnMgPSB7fSxcbiAgKTogSGFybmVzc1ByZWRpY2F0ZTxNYXRMZWdhY3lBY3Rpb25MaXN0SGFybmVzcz4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZShNYXRMZWdhY3lBY3Rpb25MaXN0SGFybmVzcywgb3B0aW9ucyk7XG4gIH1cblxuICBvdmVycmlkZSBfaXRlbUhhcm5lc3MgPSBNYXRMZWdhY3lBY3Rpb25MaXN0SXRlbUhhcm5lc3M7XG59XG5cbi8qKlxuICogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhbiBhY3Rpb24gbGlzdCBpdGVtLlxuICogQGRlcHJlY2F0ZWQgVXNlIGBNYXRBY3Rpb25MaXN0SXRlbUhhcm5lc3NgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL2xpc3QvdGVzdGluZ2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICovXG5leHBvcnQgY2xhc3MgTWF0TGVnYWN5QWN0aW9uTGlzdEl0ZW1IYXJuZXNzIGV4dGVuZHMgTWF0TGVnYWN5TGlzdEl0ZW1IYXJuZXNzQmFzZSB7XG4gIC8qKiBUaGUgc2VsZWN0b3IgZm9yIHRoZSBob3N0IGVsZW1lbnQgb2YgYSBgTWF0TGlzdEl0ZW1gIGluc3RhbmNlLiAqL1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gYCR7TWF0TGVnYWN5QWN0aW9uTGlzdEhhcm5lc3MuaG9zdFNlbGVjdG9yfSAubWF0LWxpc3QtaXRlbWA7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc1ByZWRpY2F0ZWAgdGhhdCBjYW4gYmUgdXNlZCB0byBzZWFyY2ggZm9yIGEgYE1hdEFjdGlvbkxpc3RJdGVtSGFybmVzc2AgdGhhdFxuICAgKiBtZWV0cyBjZXJ0YWluIGNyaXRlcmlhLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBmaWx0ZXJpbmcgd2hpY2ggYWN0aW9uIGxpc3QgaXRlbSBpbnN0YW5jZXMgYXJlIGNvbnNpZGVyZWQgYSBtYXRjaC5cbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aChcbiAgICBvcHRpb25zOiBMZWdhY3lBY3Rpb25MaXN0SXRlbUhhcm5lc3NGaWx0ZXJzID0ge30sXG4gICk6IEhhcm5lc3NQcmVkaWNhdGU8TWF0TGVnYWN5QWN0aW9uTGlzdEl0ZW1IYXJuZXNzPiB7XG4gICAgcmV0dXJuIGdldExpc3RJdGVtUHJlZGljYXRlKE1hdExlZ2FjeUFjdGlvbkxpc3RJdGVtSGFybmVzcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKiogQ2xpY2tzIG9uIHRoZSBhY3Rpb24gbGlzdCBpdGVtLiAqL1xuICBhc3luYyBjbGljaygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS5jbGljaygpO1xuICB9XG5cbiAgLyoqIEZvY3VzZXMgdGhlIGFjdGlvbiBsaXN0IGl0ZW0uICovXG4gIGFzeW5jIGZvY3VzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLmZvY3VzKCk7XG4gIH1cblxuICAvKiogQmx1cnMgdGhlIGFjdGlvbiBsaXN0IGl0ZW0uICovXG4gIGFzeW5jIGJsdXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLmhvc3QoKSkuYmx1cigpO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGFjdGlvbiBsaXN0IGl0ZW0gaXMgZm9jdXNlZC4gKi9cbiAgYXN5bmMgaXNGb2N1c2VkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLmlzRm9jdXNlZCgpO1xuICB9XG59XG4iXX0=