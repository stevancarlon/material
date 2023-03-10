import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatFormFieldControlHarness } from '@angular/material/form-field/testing/control';
import { MatOptgroupHarness } from '@angular/material/core/testing';
import { MatOptionHarness } from '@angular/material/core/testing';
import { OptgroupHarnessFilters } from '@angular/material/core/testing';
import { OptionHarnessFilters } from '@angular/material/core/testing';

/** Harness for interacting with an MDC-based mat-select in tests. */
export declare class MatSelectHarness extends _MatSelectHarnessBase<typeof MatOptionHarness, MatOptionHarness, OptionHarnessFilters, typeof MatOptgroupHarness, MatOptgroupHarness, OptgroupHarnessFilters> {
    static hostSelector: string;
    protected _prefix: string;
    protected _optionClass: typeof MatOptionHarness;
    protected _optionGroupClass: typeof MatOptgroupHarness;
    /**
     * Gets a `HarnessPredicate` that can be used to search for a select with specific attributes.
     * @param options Options for filtering which select instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with<T extends MatSelectHarness>(this: ComponentHarnessConstructor<T>, options?: SelectHarnessFilters): HarnessPredicate<T>;
}

export declare abstract class _MatSelectHarnessBase<OptionType extends ComponentHarnessConstructor<Option> & {
    with: (options?: OptionFilters) => HarnessPredicate<Option>;
}, Option extends ComponentHarness & {
    click(): Promise<void>;
}, OptionFilters extends BaseHarnessFilters, OptionGroupType extends ComponentHarnessConstructor<OptionGroup> & {
    with: (options?: OptionGroupFilters) => HarnessPredicate<OptionGroup>;
}, OptionGroup extends ComponentHarness, OptionGroupFilters extends BaseHarnessFilters> extends MatFormFieldControlHarness {
    protected abstract _prefix: string;
    protected abstract _optionClass: OptionType;
    protected abstract _optionGroupClass: OptionGroupType;
    private _documentRootLocator;
    private _backdrop;
    /** Gets a boolean promise indicating if the select is disabled. */
    isDisabled(): Promise<boolean>;
    /** Gets a boolean promise indicating if the select is valid. */
    isValid(): Promise<boolean>;
    /** Gets a boolean promise indicating if the select is required. */
    isRequired(): Promise<boolean>;
    /** Gets a boolean promise indicating if the select is empty (no value is selected). */
    isEmpty(): Promise<boolean>;
    /** Gets a boolean promise indicating if the select is in multi-selection mode. */
    isMultiple(): Promise<boolean>;
    /** Gets a promise for the select's value text. */
    getValueText(): Promise<string>;
    /** Focuses the select and returns a void promise that indicates when the action is complete. */
    focus(): Promise<void>;
    /** Blurs the select and returns a void promise that indicates when the action is complete. */
    blur(): Promise<void>;
    /** Whether the select is focused. */
    isFocused(): Promise<boolean>;
    /** Gets the options inside the select panel. */
    getOptions(filter?: Omit<OptionFilters, 'ancestor'>): Promise<Option[]>;
    /** Gets the groups of options inside the panel. */
    getOptionGroups(filter?: Omit<OptionGroupFilters, 'ancestor'>): Promise<OptionGroup[]>;
    /** Gets whether the select is open. */
    isOpen(): Promise<boolean>;
    /** Opens the select's panel. */
    open(): Promise<void>;
    /**
     * Clicks the options that match the passed-in filter. If the select is in multi-selection
     * mode all options will be clicked, otherwise the harness will pick the first matching option.
     */
    clickOptions(filter?: OptionFilters): Promise<void>;
    /** Closes the select's panel. */
    close(): Promise<void>;
    /** Gets the selector that should be used to find this select's panel. */
    private _getPanelSelector;
}

/** A set of criteria that can be used to filter a list of `MatSelectHarness` instances. */
export declare interface SelectHarnessFilters extends BaseHarnessFilters {
}

export { }
