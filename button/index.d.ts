import { _AbstractConstructor } from '@angular/material/core';
import { AfterViewInit } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { CanColor } from '@angular/material/core';
import { CanDisable } from '@angular/material/core';
import { CanDisableRipple } from '@angular/material/core';
import { _Constructor } from '@angular/material/core';
import { ElementRef } from '@angular/core';
import { FocusOrigin } from '@angular/cdk/a11y';
import * as i0 from '@angular/core';
import * as i4 from '@angular/material/core';
import { InjectionToken } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { NgZone } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { ThemePalette } from '@angular/material/core';

declare namespace i1 {
    export {
        MatButton,
        MatAnchor
    }
}

declare namespace i2 {
    export {
        MatIconButton,
        MatIconAnchor
    }
}

declare namespace i3 {
    export {
        MAT_FAB_DEFAULT_OPTIONS_FACTORY,
        MatFabDefaultOptions,
        MAT_FAB_DEFAULT_OPTIONS,
        MatFabButton,
        MatMiniFabButton,
        MatFabAnchor,
        MatMiniFabAnchor
    }
}

/** Injection token to be used to override the default options for FAB. */
export declare const MAT_FAB_DEFAULT_OPTIONS: InjectionToken<MatFabDefaultOptions>;

/** @docs-private */
export declare function MAT_FAB_DEFAULT_OPTIONS_FACTORY(): MatFabDefaultOptions;

/**
 * Material Design button component for anchor elements. Anchor elements are used to provide
 * links for the user to navigate across different routes or pages.
 * See https://material.io/components/buttons
 *
 * The `MatAnchor` class applies to native anchor elements and captures the appearances for
 * "text button", "outlined button", and "contained button" per the Material Design
 * specification. `MatAnchor` additionally captures an additional "flat" appearance, which matches
 * "contained" but without elevation.
 */
export declare class MatAnchor extends MatAnchorBase {
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string);
    static ??fac: i0.????FactoryDeclaration<MatAnchor, [null, null, null, { optional: true; }]>;
    static ??cmp: i0.????ComponentDeclaration<MatAnchor, "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", ["matButton", "matAnchor"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; "tabIndex": "tabIndex"; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], false, never>;
}

/**
 * Anchor button base.
 */
declare class MatAnchorBase extends MatButtonBase implements OnInit, OnDestroy {
    tabIndex: number;
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string);
    ngOnInit(): void;
    ngOnDestroy(): void;
    _haltDisabledEvents: (event: Event) => void;
    static ??fac: i0.????FactoryDeclaration<MatAnchorBase, never>;
    static ??dir: i0.????DirectiveDeclaration<MatAnchorBase, never, never, {}, {}, never, never, false, never>;
}

/**
 * Material Design button component. Users interact with a button to perform an action.
 * See https://material.io/components/buttons
 *
 * The `MatButton` class applies to native button elements and captures the appearances for
 * "text button", "outlined button", and "contained button" per the Material Design
 * specification. `MatButton` additionally captures an additional "flat" appearance, which matches
 * "contained" but without elevation.
 */
export declare class MatButton extends MatButtonBase {
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string);
    static ??fac: i0.????FactoryDeclaration<MatButton, [null, null, null, { optional: true; }]>;
    static ??cmp: i0.????ComponentDeclaration<MatButton, "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", ["matButton"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], false, never>;
}

/** Base class for all buttons.  */
declare class MatButtonBase extends _MatButtonMixin implements CanDisable, CanColor, CanDisableRipple, AfterViewInit, OnDestroy {
    _platform: Platform;
    _ngZone: NgZone;
    _animationMode?: string | undefined;
    private readonly _focusMonitor;
    /** Whether this button is a FAB. Used to apply the correct class on the ripple. */
    _isFab: boolean;
    /** Reference to the MatRipple instance of the button. */
    ripple: MatRipple;
    constructor(elementRef: ElementRef, _platform: Platform, _ngZone: NgZone, _animationMode?: string | undefined);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /** Focuses the button. */
    focus(_origin?: FocusOrigin, options?: FocusOptions): void;
    /** Gets whether the button has one of the given attributes. */
    private _hasHostAttributes;
    _isRippleDisabled(): boolean;
    static ??fac: i0.????FactoryDeclaration<MatButtonBase, never>;
    static ??dir: i0.????DirectiveDeclaration<MatButtonBase, never, never, {}, {}, never, never, false, never>;
}

/** @docs-private */
declare const _MatButtonMixin: _Constructor<CanColor> & _AbstractConstructor<CanColor> & _Constructor<CanDisable> & _AbstractConstructor<CanDisable> & _Constructor<CanDisableRipple> & _AbstractConstructor<CanDisableRipple> & {
    new (_elementRef: ElementRef): {
        _elementRef: ElementRef;
    };
};

export declare class MatButtonModule {
    static ??fac: i0.????FactoryDeclaration<MatButtonModule, never>;
    static ??mod: i0.????NgModuleDeclaration<MatButtonModule, [typeof i1.MatAnchor, typeof i1.MatButton, typeof i2.MatIconAnchor, typeof i3.MatMiniFabAnchor, typeof i3.MatMiniFabButton, typeof i2.MatIconButton, typeof i3.MatFabAnchor, typeof i3.MatFabButton], [typeof i4.MatCommonModule, typeof i4.MatRippleModule], [typeof i1.MatAnchor, typeof i1.MatButton, typeof i2.MatIconAnchor, typeof i2.MatIconButton, typeof i3.MatMiniFabAnchor, typeof i3.MatMiniFabButton, typeof i3.MatFabAnchor, typeof i3.MatFabButton, typeof i4.MatCommonModule]>;
    static ??inj: i0.????InjectorDeclaration<MatButtonModule>;
}

/**
 * Material Design floating action button (FAB) component for anchor elements. Anchor elements
 * are used to provide links for the user to navigate across different routes or pages.
 * See https://material.io/components/buttons-floating-action-button/
 *
 * The `MatFabAnchor` class has two appearances: normal and extended.
 */
export declare class MatFabAnchor extends MatAnchor {
    private _options?;
    _isFab: boolean;
    get extended(): boolean;
    set extended(value: BooleanInput);
    private _extended;
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string, _options?: MatFabDefaultOptions | undefined);
    static ??fac: i0.????FactoryDeclaration<MatFabAnchor, [null, null, null, { optional: true; }, { optional: true; }]>;
    static ??cmp: i0.????ComponentDeclaration<MatFabAnchor, "a[mat-fab]", ["matButton", "matAnchor"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; "tabIndex": "tabIndex"; "extended": "extended"; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], false, never>;
}

/**
 * Material Design floating action button (FAB) component. These buttons represent the primary
 * or most common action for users to interact with.
 * See https://material.io/components/buttons-floating-action-button/
 *
 * The `MatFabButton` class has two appearances: normal and extended.
 */
export declare class MatFabButton extends MatButtonBase {
    private _options?;
    _isFab: boolean;
    get extended(): boolean;
    set extended(value: BooleanInput);
    private _extended;
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string, _options?: MatFabDefaultOptions | undefined);
    static ??fac: i0.????FactoryDeclaration<MatFabButton, [null, null, null, { optional: true; }, { optional: true; }]>;
    static ??cmp: i0.????ComponentDeclaration<MatFabButton, "button[mat-fab]", ["matButton"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; "tabIndex": "tabIndex"; "extended": "extended"; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], false, never>;
}

/** Default FAB options that can be overridden. */
export declare interface MatFabDefaultOptions {
    color?: ThemePalette;
}

/**
 * Material Design icon button component for anchor elements. This button displays a single
 * interaction icon that allows users to navigate across different routes or pages.
 * See https://material.io/develop/web/components/buttons/icon-buttons/
 */
export declare class MatIconAnchor extends MatAnchorBase {
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string);
    static ??fac: i0.????FactoryDeclaration<MatIconAnchor, [null, null, null, { optional: true; }]>;
    static ??cmp: i0.????ComponentDeclaration<MatIconAnchor, "a[mat-icon-button]", ["matButton", "matAnchor"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; "tabIndex": "tabIndex"; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], false, never>;
}

/**
 * Material Design icon button component. This type of button displays a single interactive icon for
 * users to perform an action.
 * See https://material.io/develop/web/components/buttons/icon-buttons/
 */
export declare class MatIconButton extends MatButtonBase {
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string);
    static ??fac: i0.????FactoryDeclaration<MatIconButton, [null, null, null, { optional: true; }]>;
    static ??cmp: i0.????ComponentDeclaration<MatIconButton, "button[mat-icon-button]", ["matButton"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; }, {}, never, ["*"], false, never>;
}

/**
 * Material Design mini floating action button (FAB) component for anchor elements. Anchor elements
 * are used to provide links for the user to navigate across different routes or pages.
 * See https://material.io/components/buttons-floating-action-button/
 */
export declare class MatMiniFabAnchor extends MatAnchor {
    private _options?;
    _isFab: boolean;
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string, _options?: MatFabDefaultOptions | undefined);
    static ??fac: i0.????FactoryDeclaration<MatMiniFabAnchor, [null, null, null, { optional: true; }, { optional: true; }]>;
    static ??cmp: i0.????ComponentDeclaration<MatMiniFabAnchor, "a[mat-mini-fab]", ["matButton", "matAnchor"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; "tabIndex": "tabIndex"; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], false, never>;
}

/**
 * Material Design mini floating action button (FAB) component. These buttons represent the primary
 * or most common action for users to interact with.
 * See https://material.io/components/buttons-floating-action-button/
 */
export declare class MatMiniFabButton extends MatButtonBase {
    private _options?;
    _isFab: boolean;
    constructor(elementRef: ElementRef, platform: Platform, ngZone: NgZone, animationMode?: string, _options?: MatFabDefaultOptions | undefined);
    static ??fac: i0.????FactoryDeclaration<MatMiniFabButton, [null, null, null, { optional: true; }, { optional: true; }]>;
    static ??cmp: i0.????ComponentDeclaration<MatMiniFabButton, "button[mat-mini-fab]", ["matButton"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "color": "color"; }, {}, never, [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"], false, never>;
}

export { }
