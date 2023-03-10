import { AsyncFactoryFn } from '@angular/cdk/testing';
import { BaseHarnessFilters } from '@angular/cdk/testing';
import { ComponentHarness } from '@angular/cdk/testing';
import { ComponentHarnessConstructor } from '@angular/cdk/testing';
import { HarnessPredicate } from '@angular/cdk/testing';
import { TestElement } from '@angular/cdk/testing';

/** Harness for interacting with an MDC-based mat-radio-button in tests. */
export declare class MatRadioButtonHarness extends _MatRadioButtonHarnessBase {
    /** The selector for the host element of a `MatRadioButton` instance. */
    static hostSelector: string;
    /**
     * Gets a `HarnessPredicate` that can be used to search for a radio button with specific
     * attributes.
     * @param options Options for filtering which radio button instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with<T extends MatRadioButtonHarness>(this: ComponentHarnessConstructor<T>, options?: RadioButtonHarnessFilters): HarnessPredicate<T>;
    protected _textLabel: AsyncFactoryFn<TestElement>;
    protected _clickLabel: AsyncFactoryFn<TestElement>;
}

export declare abstract class _MatRadioButtonHarnessBase extends ComponentHarness {
    protected abstract _textLabel: AsyncFactoryFn<TestElement>;
    protected abstract _clickLabel: AsyncFactoryFn<TestElement>;
    private _input;
    /** Whether the radio-button is checked. */
    isChecked(): Promise<boolean>;
    /** Whether the radio-button is disabled. */
    isDisabled(): Promise<boolean>;
    /** Whether the radio-button is required. */
    isRequired(): Promise<boolean>;
    /** Gets the radio-button's name. */
    getName(): Promise<string | null>;
    /** Gets the radio-button's id. */
    getId(): Promise<string | null>;
    /**
     * Gets the value of the radio-button. The radio-button value will be converted to a string.
     *
     * Note: This means that for radio-button's with an object as a value `[object Object]` is
     * intentionally returned.
     */
    getValue(): Promise<string | null>;
    /** Gets the radio-button's label text. */
    getLabelText(): Promise<string>;
    /** Focuses the radio-button. */
    focus(): Promise<void>;
    /** Blurs the radio-button. */
    blur(): Promise<void>;
    /** Whether the radio-button is focused. */
    isFocused(): Promise<boolean>;
    /**
     * Puts the radio-button in a checked state by clicking it if it is currently unchecked,
     * or doing nothing if it is already checked.
     */
    check(): Promise<void>;
}

/** Harness for interacting with an MDC-based mat-radio-group in tests. */
export declare class MatRadioGroupHarness extends _MatRadioGroupHarnessBase<typeof MatRadioButtonHarness, MatRadioButtonHarness, RadioButtonHarnessFilters> {
    /** The selector for the host element of a `MatRadioGroup` instance. */
    static hostSelector: string;
    protected _buttonClass: typeof MatRadioButtonHarness;
    /**
     * Gets a `HarnessPredicate` that can be used to search for a radio group with specific
     * attributes.
     * @param options Options for filtering which radio group instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with<T extends MatRadioGroupHarness>(this: ComponentHarnessConstructor<T>, options?: RadioGroupHarnessFilters): HarnessPredicate<T>;
}

export declare abstract class _MatRadioGroupHarnessBase<ButtonType extends ComponentHarnessConstructor<Button> & {
    with: (options?: ButtonFilters) => HarnessPredicate<Button>;
}, Button extends ComponentHarness & {
    isChecked(): Promise<boolean>;
    getValue(): Promise<string | null>;
    getName(): Promise<string | null>;
    check(): Promise<void>;
}, ButtonFilters extends BaseHarnessFilters> extends ComponentHarness {
    protected abstract _buttonClass: ButtonType;
    /** Gets the name of the radio-group. */
    getName(): Promise<string | null>;
    /** Gets the id of the radio-group. */
    getId(): Promise<string | null>;
    /** Gets the checked radio-button in a radio-group. */
    getCheckedRadioButton(): Promise<Button | null>;
    /** Gets the checked value of the radio-group. */
    getCheckedValue(): Promise<string | null>;
    /**
     * Gets a list of radio buttons which are part of the radio-group.
     * @param filter Optionally filters which radio buttons are included.
     */
    getRadioButtons(filter?: ButtonFilters): Promise<Button[]>;
    /**
     * Checks a radio button in this group.
     * @param filter An optional filter to apply to the child radio buttons. The first tab matching
     *     the filter will be selected.
     */
    checkRadioButton(filter?: ButtonFilters): Promise<void>;
    /** Gets the name attribute of the host element. */
    private _getGroupNameFromHost;
    /** Gets a list of the name attributes of all child radio buttons. */
    private _getNamesFromRadioButtons;
    /** Checks if the specified radio names are all equal. */
    private _checkRadioNamesInGroupEqual;
    /**
     * Checks if a radio-group harness has the given name. Throws if a radio-group with
     * matching name could be found but has mismatching radio-button names.
     */
    protected static _checkRadioGroupName(harness: _MatRadioGroupHarnessBase<any, any, any>, name: string): Promise<boolean>;
}

/** A set of criteria that can be used to filter a list of `MatRadioButtonHarness` instances. */
export declare interface RadioButtonHarnessFilters extends BaseHarnessFilters {
    /** Only find instances whose label matches the given value. */
    label?: string | RegExp;
    /** Only find instances whose name attribute is the given value. */
    name?: string;
    /** Only find instances with the given checked value. */
    checked?: boolean;
}

/** A set of criteria that can be used to filter a list of `MatRadioGroupHarness` instances. */
export declare interface RadioGroupHarnessFilters extends BaseHarnessFilters {
    /** Only find instances whose name attribute is the given value. */
    name?: string;
}

export { }
