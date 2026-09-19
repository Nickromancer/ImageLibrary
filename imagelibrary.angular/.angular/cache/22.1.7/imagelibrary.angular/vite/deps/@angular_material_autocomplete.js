import { $n as Output, Ca as ɵɵconditional, Dc as Injector, Dl as ɵɵdefineInjector, Dr as ViewEncapsulation, Ea as ɵɵcontentQuery, Ec as InjectionToken, En as ElementRef, Er as ViewContainerRef, Fc as NgZone, In as Input, Ks as ɵɵtextInterpolate1, Mr as afterNextRender, O as booleanAttribute, S as ViewChild, Ta as ɵɵconditionalCreate, Wi as setClassMetadata, Ws as ɵɵtext, Xo as ɵɵloadQuery, Yo as ɵɵlistener, Zo as ɵɵnextContext, a as ContentChildren, as as ɵɵprojectionDef, ba as ɵɵclassMap, bc as EventEmitter, bo as ɵɵelementEnd, cn as Component, da as ɵɵadvance, do as ɵɵdomElementEnd, fo as ɵɵdomElementStart, go as ɵɵelement, ho as ɵɵdomTemplate, ir as Renderer2, is as ɵɵprojection, la as ɵɵNgOnChangesFeature, mo as ɵɵdomProperty, no as ɵɵdefineDirective, os as ɵɵproperty, qn as NgModule, r as ChangeDetectorRef, rl as forwardRef, ro as ɵɵdefineNgModule, sc as ɵɵviewQuery, sl as inject, to as ɵɵdefineComponent, ua as ɵɵProvidersFeature, ul as isSignal, vc as EnvironmentInjector, vr as TemplateRef, vs as ɵɵqueryRefresh, wn as Directive, xa as ɵɵclassProp, xl as signal, xo as ɵɵelementStart, ya as ɵɵattribute } from "./core-CVHS-hD8.js";
import { Ct as take, Qn as Subject, Xt as filter, b as switchMap, jn as of, m as tap, rr as Observable, tn as merge, un as defer, ur as Subscription, vn as map, x as startWith, yt as delay } from "./esm5-ChK3bs0s.js";
import { r as Platform } from "./_element-chunk-DcF6XJbO.js";
import { i as Directionality, t as BidiModule } from "./bidi-BIOWbFqv.js";
import { _ as ViewportRuler, i as CdkScrollableModule } from "./scrolling-CqcNghO1.js";
import { l as BreakpointObserver, m as _getFocusedElementPierceShadowDom, n as Breakpoints, p as _getEventTarget, t as _animationsDisabled, u as coerceArray } from "./_animation-chunk-DRH3F-gu.js";
import { t as _CdkPrivateStyleLoader } from "./_style-loader-chunk-CvMh5ar0.js";
import { t as _VisuallyHiddenLoader } from "./private-CSMSo6mO.js";
import { n as MatPseudoCheckbox, r as ListKeyManager, t as MatPseudoCheckboxModule } from "./_pseudo-checkbox-module-chunk-AXLgOfoG.js";
import { t as hasModifierKey } from "./keycodes-BvDTxKgo.js";
import { t as _IdGenerator } from "./_id-generator-chunk-C7F9aB7K.js";
import "./platform-DUvAx4Dz.js";
import { c as createOverlayRef, l as createRepositionScrollStrategy, m as TemplatePortal, o as createFlexibleConnectedPositionStrategy, r as OverlayModule, t as OverlayConfig } from "./overlay-DiPgXHWU.js";
import { i as MatRipple, n as _StructuralStylesLoader, t as MatRippleModule } from "./_ripple-module-chunk-Ce6aaHID.js";
import { NG_VALUE_ACCESSOR } from "./@angular_forms.js";
import { n as MAT_FORM_FIELD } from "./_form-field-chunk-ByDamWPp.js";
//#region node_modules/@angular/cdk/fesm2022/_activedescendant-key-manager-chunk.mjs
var ActiveDescendantKeyManager = class extends ListKeyManager {
	setActiveItem(index) {
		if (this.activeItem) this.activeItem.setInactiveStyles();
		super.setActiveItem(index);
		if (this.activeItem) this.activeItem.setActiveStyles();
	}
};
//#endregion
//#region node_modules/@angular/material/fesm2022/_option-chunk.mjs
var _c0$1 = ["*", [["mat-option"], ["ng-container"]]];
var _c1$1 = ["*", "mat-option, ng-container"];
var _c2 = ["text"];
var _c3 = [[["mat-icon"]], "*"];
var _c4 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "mat-pseudo-checkbox", 1);
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵproperty("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
	}
}
function MatOption_Conditional_5_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "mat-pseudo-checkbox", 3);
	if (rf & 2) ɵɵproperty("disabled", ɵɵnextContext().disabled);
}
function MatOption_Conditional_6_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 4);
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵtextInterpolate1("(", ctx_r0.group.label, ")");
	}
}
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var MatOptgroup = class MatOptgroup {
	label;
	disabled = false;
	_labelId = inject(_IdGenerator).getId("mat-optgroup-label-");
	_inert;
	constructor() {
		const parent = inject(MAT_OPTION_PARENT_COMPONENT, { optional: true });
		this._inert = parent?.inertGroups ?? false;
	}
	static ɵfac = function MatOptgroup_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatOptgroup)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: MatOptgroup,
		selectors: [["mat-optgroup"]],
		hostAttrs: [1, "mat-mdc-optgroup"],
		hostVars: 3,
		hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵattribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
		},
		inputs: {
			label: "label",
			disabled: [
				2,
				"disabled",
				"disabled",
				booleanAttribute
			]
		},
		exportAs: ["matOptgroup"],
		features: [ɵɵProvidersFeature([{
			provide: MAT_OPTGROUP,
			useExisting: MatOptgroup
		}])],
		ngContentSelectors: _c1$1,
		decls: 5,
		vars: 4,
		consts: [[
			"role",
			"presentation",
			1,
			"mat-mdc-optgroup-label",
			3,
			"id"
		], [1, "mdc-list-item__primary-text"]],
		template: function MatOptgroup_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef(_c0$1);
				ɵɵdomElementStart(0, "span", 0)(1, "span", 1);
				ɵɵtext(2);
				ɵɵprojection(3);
				ɵɵdomElementEnd()();
				ɵɵprojection(4, 1);
			}
			if (rf & 2) {
				ɵɵclassProp("mdc-list-item--disabled", ctx.disabled);
				ɵɵdomProperty("id", ctx._labelId);
				ɵɵadvance(2);
				ɵɵtextInterpolate1("", ctx.label, " ");
			}
		},
		styles: [".mat-mdc-optgroup {\n  color: var(--%NS%mat-optgroup-label-text-color, var(--%NS%mat-sys-on-surface-variant));\n  font-family: var(--%NS%mat-optgroup-label-text-font, var(--%NS%mat-sys-title-small-font));\n  line-height: var(--%NS%mat-optgroup-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));\n  font-size: var(--%NS%mat-optgroup-label-text-size, var(--%NS%mat-sys-title-small-size));\n  letter-spacing: var(--%NS%mat-optgroup-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));\n  font-weight: var(--%NS%mat-optgroup-label-text-weight, var(--%NS%mat-sys-title-small-weight));\n}\n\n.mat-mdc-optgroup-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  outline: none;\n}\n.mat-mdc-optgroup-label.mdc-list-item--disabled {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup-label .mdc-list-item__primary-text {\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  white-space: normal;\n  color: inherit;\n}\n"],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
		type: Component,
		args: [{
			selector: "mat-optgroup",
			exportAs: "matOptgroup",
			encapsulation: ViewEncapsulation.None,
			host: {
				"class": "mat-mdc-optgroup",
				"[attr.role]": "_inert ? null : \"group\"",
				"[attr.aria-disabled]": "_inert ? null : disabled.toString()",
				"[attr.aria-labelledby]": "_inert ? null : _labelId"
			},
			providers: [{
				provide: MAT_OPTGROUP,
				useExisting: MatOptgroup
			}],
			template: "<span\n  class=\"mat-mdc-optgroup-label\"\n  role=\"presentation\"\n  [class.mdc-list-item--disabled]=\"disabled\"\n  [id]=\"_labelId\">\n  <span class=\"mdc-list-item__primary-text\">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
			styles: [".mat-mdc-optgroup {\n  color: var(--mat-optgroup-label-text-color, var(--mat-sys-on-surface-variant));\n  font-family: var(--mat-optgroup-label-text-font, var(--mat-sys-title-small-font));\n  line-height: var(--mat-optgroup-label-text-line-height, var(--mat-sys-title-small-line-height));\n  font-size: var(--mat-optgroup-label-text-size, var(--mat-sys-title-small-size));\n  letter-spacing: var(--mat-optgroup-label-text-tracking, var(--mat-sys-title-small-tracking));\n  font-weight: var(--mat-optgroup-label-text-weight, var(--mat-sys-title-small-weight));\n}\n\n.mat-mdc-optgroup-label {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  outline: none;\n}\n.mat-mdc-optgroup-label.mdc-list-item--disabled {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup-label .mdc-list-item__primary-text {\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  white-space: normal;\n  color: inherit;\n}\n"]
		}]
	}], () => [], {
		label: [{ type: Input }],
		disabled: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}]
	});
})();
var MatOptionSelectionChange = class {
	source;
	isUserInput;
	constructor(source, isUserInput = false) {
		this.source = source;
		this.isUserInput = isUserInput;
	}
};
var MatOption = class MatOption {
	_element = inject(ElementRef);
	_changeDetectorRef = inject(ChangeDetectorRef);
	_parent = inject(MAT_OPTION_PARENT_COMPONENT, { optional: true });
	group = inject(MAT_OPTGROUP, { optional: true });
	_signalDisableRipple = false;
	_selected = false;
	_active = false;
	_mostRecentViewValue = "";
	get multiple() {
		return this._parent && this._parent.multiple;
	}
	get selected() {
		return this._selected;
	}
	value;
	id = inject(_IdGenerator).getId("mat-option-");
	get disabled() {
		return this.group && this.group.disabled || this._disabled();
	}
	set disabled(value) {
		this._disabled.set(value);
	}
	_disabled = signal(false, ...ngDevMode ? [{ debugName: "_disabled" }] : []);
	get disableRipple() {
		return this._signalDisableRipple ? this._parent.disableRipple() : !!this._parent?.disableRipple;
	}
	get hideSingleSelectionIndicator() {
		return !!(this._parent && this._parent.hideSingleSelectionIndicator);
	}
	onSelectionChange = new EventEmitter();
	_text;
	_stateChanges = new Subject();
	constructor() {
		const styleLoader = inject(_CdkPrivateStyleLoader);
		styleLoader.load(_StructuralStylesLoader);
		styleLoader.load(_VisuallyHiddenLoader);
		this._signalDisableRipple = !!this._parent && isSignal(this._parent.disableRipple);
	}
	get active() {
		return this._active;
	}
	get viewValue() {
		return (this._text?.nativeElement.textContent || "").trim();
	}
	select(emitEvent = true) {
		if (!this._selected) {
			this._selected = true;
			this._changeDetectorRef.markForCheck();
			if (emitEvent) this._emitSelectionChangeEvent();
		}
	}
	deselect(emitEvent = true) {
		if (this._selected) {
			this._selected = false;
			this._changeDetectorRef.markForCheck();
			if (emitEvent) this._emitSelectionChangeEvent();
		}
	}
	focus(_origin, options) {
		const element = this._getHostElement();
		if (typeof element.focus === "function") element.focus(options);
	}
	setActiveStyles() {
		if (!this._active) {
			this._active = true;
			this._changeDetectorRef.markForCheck();
		}
	}
	setInactiveStyles() {
		if (this._active) {
			this._active = false;
			this._changeDetectorRef.markForCheck();
		}
	}
	getLabel() {
		return this.viewValue;
	}
	_handleKeydown(event) {
		if ((event.keyCode === 13 || event.keyCode === 32) && !hasModifierKey(event)) {
			this._selectViaInteraction();
			event.preventDefault();
		}
	}
	_selectViaInteraction() {
		if (!this.disabled) {
			this._selected = this.multiple ? !this._selected : true;
			this._changeDetectorRef.markForCheck();
			this._emitSelectionChangeEvent(true);
		}
	}
	_getTabIndex() {
		return this.disabled ? "-1" : "0";
	}
	_getHostElement() {
		return this._element.nativeElement;
	}
	ngAfterViewChecked() {
		if (this._selected) {
			const viewValue = this.viewValue;
			if (viewValue !== this._mostRecentViewValue) {
				if (this._mostRecentViewValue) this._stateChanges.next();
				this._mostRecentViewValue = viewValue;
			}
		}
	}
	ngOnDestroy() {
		this._stateChanges.complete();
	}
	_emitSelectionChangeEvent(isUserInput = false) {
		this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
	}
	static ɵfac = function MatOption_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatOption)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: MatOption,
		selectors: [["mat-option"]],
		viewQuery: function MatOption_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c2, 7);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._text = _t.first);
			}
		},
		hostAttrs: [
			"role",
			"option",
			1,
			"mat-mdc-option",
			"mdc-list-item"
		],
		hostVars: 11,
		hostBindings: function MatOption_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("click", function MatOption_click_HostBindingHandler() {
				return ctx._selectViaInteraction();
			})("keydown", function MatOption_keydown_HostBindingHandler($event) {
				return ctx._handleKeydown($event);
			});
			if (rf & 2) {
				ɵɵdomProperty("id", ctx.id);
				ɵɵattribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
				ɵɵclassProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
			}
		},
		inputs: {
			value: "value",
			id: "id",
			disabled: [
				2,
				"disabled",
				"disabled",
				booleanAttribute
			]
		},
		outputs: { onSelectionChange: "onSelectionChange" },
		exportAs: ["matOption"],
		ngContentSelectors: _c4,
		decls: 8,
		vars: 5,
		consts: [
			["text", ""],
			[
				"aria-hidden",
				"true",
				1,
				"mat-mdc-option-pseudo-checkbox",
				3,
				"disabled",
				"state"
			],
			[1, "mdc-list-item__primary-text"],
			[
				"state",
				"checked",
				"aria-hidden",
				"true",
				"appearance",
				"minimal",
				1,
				"mat-mdc-option-pseudo-checkbox",
				3,
				"disabled"
			],
			[1, "cdk-visually-hidden"],
			[
				"aria-hidden",
				"true",
				"mat-ripple",
				"",
				1,
				"mat-mdc-option-ripple",
				"mat-focus-indicator",
				3,
				"matRippleTrigger",
				"matRippleDisabled"
			]
		],
		template: function MatOption_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef(_c3);
				ɵɵconditionalCreate(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
				ɵɵprojection(1);
				ɵɵelementStart(2, "span", 2, 0);
				ɵɵprojection(4, 1);
				ɵɵelementEnd();
				ɵɵconditionalCreate(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3);
				ɵɵconditionalCreate(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
				ɵɵelement(7, "div", 5);
			}
			if (rf & 2) {
				ɵɵconditional(ctx.multiple ? 0 : -1);
				ɵɵadvance(5);
				ɵɵconditional(!ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
				ɵɵadvance();
				ɵɵconditional(ctx.group && ctx.group._inert ? 6 : -1);
				ɵɵadvance();
				ɵɵproperty("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
			}
		},
		dependencies: [MatPseudoCheckbox, MatRipple],
		styles: [".mat-mdc-option {\n  -webkit-user-select: none;\n  user-select: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));\n  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));\n  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));\n  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));\n  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));\n}\n.mat-mdc-option:hover:not(.mdc-list-item--disabled) {\n  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {\n  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));\n  outline: 0;\n}\n.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {\n  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));\n}\n.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {\n  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-option .mat-pseudo-checkbox {\n  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));\n}\n.mat-mdc-option.mdc-list-item {\n  align-items: center;\n  background: transparent;\n}\n.mat-mdc-option.mdc-list-item--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 32px;\n}\n[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 16px;\n  padding-right: 32px;\n}\n.mat-mdc-option .mat-icon,\n.mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-icon,\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-right: 16px;\n  margin-left: 0;\n}\n.mat-mdc-option .mat-mdc-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-option .mdc-list-item__primary-text {\n  white-space: normal;\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-right: auto;\n}\n[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {\n  margin-right: 0;\n  margin-left: auto;\n}\n@media (forced-colors: active) {\n  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-option-multiple {\n  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);\n}\n\n.mat-mdc-option-active .mat-focus-indicator::before {\n  content: \"\";\n}\n"],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
		type: Component,
		args: [{
			selector: "mat-option",
			exportAs: "matOption",
			host: {
				"role": "option",
				"[class.mdc-list-item--selected]": "selected",
				"[class.mat-mdc-option-multiple]": "multiple",
				"[class.mat-mdc-option-active]": "active",
				"[class.mdc-list-item--disabled]": "disabled",
				"[id]": "id",
				"[attr.aria-selected]": "selected",
				"[attr.aria-disabled]": "disabled.toString()",
				"(click)": "_selectViaInteraction()",
				"(keydown)": "_handleKeydown($event)",
				"class": "mat-mdc-option mdc-list-item"
			},
			encapsulation: ViewEncapsulation.None,
			imports: [MatPseudoCheckbox, MatRipple],
			template: "<!-- Set aria-hidden=\"true\" to this DOM node and other decorative nodes in this file. This might\n be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead\n of the Option node (#23202). Most assistive technology will generally ignore non-role,\n non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->\n@if (multiple) {\n    <mat-pseudo-checkbox\n        class=\"mat-mdc-option-pseudo-checkbox\"\n        [disabled]=\"disabled\"\n        [state]=\"selected ? 'checked' : 'unchecked'\"\n        aria-hidden=\"true\"></mat-pseudo-checkbox>\n}\n\n<ng-content select=\"mat-icon\"></ng-content>\n\n<span class=\"mdc-list-item__primary-text\" #text><ng-content></ng-content></span>\n\n<!-- Render checkmark at the end for single-selection. -->\n@if (!multiple && selected && !hideSingleSelectionIndicator) {\n    <mat-pseudo-checkbox\n        class=\"mat-mdc-option-pseudo-checkbox\"\n        [disabled]=\"disabled\"\n        state=\"checked\"\n        aria-hidden=\"true\"\n        appearance=\"minimal\"></mat-pseudo-checkbox>\n}\n\n<!-- See a11y notes inside optgroup.ts for context behind this element. -->\n@if (group && group._inert) {\n    <span class=\"cdk-visually-hidden\">({{ group.label }})</span>\n}\n\n<div class=\"mat-mdc-option-ripple mat-focus-indicator\" aria-hidden=\"true\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
			styles: [".mat-mdc-option {\n  -webkit-user-select: none;\n  user-select: none;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: hidden;\n  min-height: 48px;\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));\n  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));\n  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));\n  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));\n  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));\n}\n.mat-mdc-option:hover:not(.mdc-list-item--disabled) {\n  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));\n}\n.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {\n  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));\n  outline: 0;\n}\n.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {\n  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));\n}\n.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {\n  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-option .mat-pseudo-checkbox {\n  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));\n}\n.mat-mdc-option.mdc-list-item {\n  align-items: center;\n  background: transparent;\n}\n.mat-mdc-option.mdc-list-item--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {\n  opacity: 0.38;\n}\n.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 32px;\n}\n[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {\n  padding-left: 16px;\n  padding-right: 32px;\n}\n.mat-mdc-option .mat-icon,\n.mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-icon,\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {\n  margin-right: 0;\n  margin-left: 16px;\n}\n.mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-left: 16px;\n  flex-shrink: 0;\n}\n[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {\n  margin-right: 16px;\n  margin-left: 0;\n}\n.mat-mdc-option .mat-mdc-option-ripple {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  pointer-events: none;\n}\n.mat-mdc-option .mdc-list-item__primary-text {\n  white-space: normal;\n  font-size: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  text-decoration: inherit;\n  text-transform: inherit;\n  margin-right: auto;\n}\n[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {\n  margin-right: 0;\n  margin-left: auto;\n}\n@media (forced-colors: active) {\n  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    right: 16px;\n    transform: translateY(-50%);\n    width: 10px;\n    height: 0;\n    border-bottom: solid 10px;\n    border-radius: 10px;\n  }\n  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {\n    right: auto;\n    left: 16px;\n  }\n}\n\n.mat-mdc-option-multiple {\n  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);\n}\n\n.mat-mdc-option-active .mat-focus-indicator::before {\n  content: \"\";\n}\n"]
		}]
	}], () => [], {
		value: [{ type: Input }],
		id: [{ type: Input }],
		disabled: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		onSelectionChange: [{ type: Output }],
		_text: [{
			type: ViewChild,
			args: ["text", { static: true }]
		}]
	});
})();
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
	if (optionGroups.length) {
		let optionsArray = options.toArray();
		let groups = optionGroups.toArray();
		let groupCounter = 0;
		for (let i = 0; i < optionIndex + 1; i++) if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) groupCounter++;
		return groupCounter;
	}
	return 0;
}
function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
	if (optionOffset < currentScrollPosition) return optionOffset;
	if (optionOffset + optionHeight > currentScrollPosition + panelHeight) return Math.max(0, optionOffset - panelHeight + optionHeight);
	return currentScrollPosition;
}
//#endregion
//#region node_modules/@angular/material/fesm2022/_option-module-chunk.mjs
var MatOptionModule = class MatOptionModule {
	static ɵfac = function MatOptionModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatOptionModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: MatOptionModule,
		imports: [
			MatRippleModule,
			MatPseudoCheckboxModule,
			MatOption,
			MatOptgroup
		],
		exports: [
			MatOption,
			MatOptgroup,
			BidiModule
		]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ imports: [
		MatRippleModule,
		MatPseudoCheckboxModule,
		MatOption,
		BidiModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
		type: NgModule,
		args: [{
			imports: [
				MatRippleModule,
				MatPseudoCheckboxModule,
				MatOption,
				MatOptgroup
			],
			exports: [
				MatOption,
				MatOptgroup,
				BidiModule
			]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@angular/material/fesm2022/autocomplete.mjs
var _c0 = ["panel"];
var _c1 = ["*"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵdomElementStart(0, "div", 1, 0);
		ɵɵprojection(2);
		ɵɵdomElementEnd();
	}
	if (rf & 2) {
		const formFieldId_r1 = ctx.id;
		const ctx_r1 = ɵɵnextContext();
		ɵɵclassMap(ctx_r1._classList);
		ɵɵclassProp("mat-mdc-autocomplete-visible", ctx_r1.showPanel)("mat-mdc-autocomplete-hidden", !ctx_r1.showPanel)("mat-autocomplete-panel-animations-enabled", !ctx_r1._animationsDisabled)("mat-primary", ctx_r1._color === "primary")("mat-accent", ctx_r1._color === "accent")("mat-warn", ctx_r1._color === "warn");
		ɵɵdomProperty("id", ctx_r1.id);
		ɵɵattribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby(formFieldId_r1));
	}
}
var MatAutocompleteSelectedEvent = class {
	source;
	option;
	constructor(source, option) {
		this.source = source;
		this.option = option;
	}
};
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
	providedIn: "root",
	factory: () => ({
		autoActiveFirstOption: false,
		autoSelectActiveOption: false,
		hideSingleSelectionIndicator: false,
		requireSelection: false,
		hasBackdrop: false
	})
});
var MatAutocomplete = class MatAutocomplete {
	_changeDetectorRef = inject(ChangeDetectorRef);
	_elementRef = inject(ElementRef);
	_defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS);
	_animationsDisabled = _animationsDisabled();
	_activeOptionChanges = Subscription.EMPTY;
	_keyManager;
	showPanel = false;
	get isOpen() {
		return this._isOpen && this.showPanel;
	}
	_isOpen = false;
	_latestOpeningTrigger;
	_setColor(value) {
		this._color = value;
		this._changeDetectorRef.markForCheck();
	}
	_color;
	template;
	panel;
	options;
	optionGroups;
	ariaLabel;
	ariaLabelledby;
	displayWith = null;
	autoActiveFirstOption;
	autoSelectActiveOption;
	requireSelection;
	panelWidth;
	disableRipple = false;
	optionSelected = new EventEmitter();
	opened = new EventEmitter();
	closed = new EventEmitter();
	optionActivated = new EventEmitter();
	set classList(value) {
		this._classList = value;
		this._elementRef.nativeElement.className = "";
	}
	_classList;
	get hideSingleSelectionIndicator() {
		return this._hideSingleSelectionIndicator;
	}
	set hideSingleSelectionIndicator(value) {
		this._hideSingleSelectionIndicator = value;
		this._syncParentProperties();
	}
	_hideSingleSelectionIndicator;
	_syncParentProperties() {
		if (this.options) for (const option of this.options) option._changeDetectorRef.markForCheck();
	}
	id = inject(_IdGenerator).getId("mat-autocomplete-");
	inertGroups;
	constructor() {
		const platform = inject(Platform);
		this.inertGroups = platform?.SAFARI || false;
		this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
		this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
		this.requireSelection = !!this._defaults.requireSelection;
		this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
	}
	ngAfterContentInit() {
		this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap().skipPredicate(this._skipPredicate);
		this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
			if (this.isOpen) this.optionActivated.emit({
				source: this,
				option: this.options.toArray()[index] || null
			});
		});
		this._setVisibility();
	}
	ngOnDestroy() {
		this._keyManager?.destroy();
		this._activeOptionChanges.unsubscribe();
	}
	_setScrollTop(scrollTop) {
		if (this.panel) this.panel.nativeElement.scrollTop = scrollTop;
	}
	_getScrollTop() {
		return this.panel ? this.panel.nativeElement.scrollTop : 0;
	}
	_setVisibility() {
		this.showPanel = !!this.options?.length;
		this._changeDetectorRef.markForCheck();
	}
	_emitSelectEvent(option) {
		const event = new MatAutocompleteSelectedEvent(this, option);
		this.optionSelected.emit(event);
	}
	_getPanelAriaLabelledby(labelId) {
		if (this.ariaLabel) return null;
		const labelExpression = labelId ? labelId + " " : "";
		return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
	}
	_skipPredicate() {
		return false;
	}
	static ɵfac = function MatAutocomplete_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatAutocomplete)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: MatAutocomplete,
		selectors: [["mat-autocomplete"]],
		contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuery(dirIndex, MatOption, 5)(dirIndex, MAT_OPTGROUP, 5);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.options = _t);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.optionGroups = _t);
			}
		},
		viewQuery: function MatAutocomplete_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(TemplateRef, 7)(_c0, 5);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.template = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.panel = _t.first);
			}
		},
		hostAttrs: [1, "mat-mdc-autocomplete"],
		inputs: {
			ariaLabel: [
				0,
				"aria-label",
				"ariaLabel"
			],
			ariaLabelledby: [
				0,
				"aria-labelledby",
				"ariaLabelledby"
			],
			displayWith: "displayWith",
			autoActiveFirstOption: [
				2,
				"autoActiveFirstOption",
				"autoActiveFirstOption",
				booleanAttribute
			],
			autoSelectActiveOption: [
				2,
				"autoSelectActiveOption",
				"autoSelectActiveOption",
				booleanAttribute
			],
			requireSelection: [
				2,
				"requireSelection",
				"requireSelection",
				booleanAttribute
			],
			panelWidth: "panelWidth",
			disableRipple: [
				2,
				"disableRipple",
				"disableRipple",
				booleanAttribute
			],
			classList: [
				0,
				"class",
				"classList"
			],
			hideSingleSelectionIndicator: [
				2,
				"hideSingleSelectionIndicator",
				"hideSingleSelectionIndicator",
				booleanAttribute
			]
		},
		outputs: {
			optionSelected: "optionSelected",
			opened: "opened",
			closed: "closed",
			optionActivated: "optionActivated"
		},
		exportAs: ["matAutocomplete"],
		features: [ɵɵProvidersFeature([{
			provide: MAT_OPTION_PARENT_COMPONENT,
			useExisting: MatAutocomplete
		}])],
		ngContentSelectors: _c1,
		decls: 1,
		vars: 0,
		consts: [["panel", ""], [
			"role",
			"listbox",
			1,
			"mat-mdc-autocomplete-panel",
			"mdc-menu-surface",
			"mdc-menu-surface--open",
			3,
			"id"
		]],
		template: function MatAutocomplete_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵdomTemplate(0, MatAutocomplete_ng_template_0_Template, 3, 17, "ng-template");
			}
		},
		styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocomplete, [{
		type: Component,
		args: [{
			selector: "mat-autocomplete",
			encapsulation: ViewEncapsulation.None,
			exportAs: "matAutocomplete",
			host: { "class": "mat-mdc-autocomplete" },
			providers: [{
				provide: MAT_OPTION_PARENT_COMPONENT,
				useExisting: MatAutocomplete
			}],
			template: "<ng-template let-formFieldId=\"id\">\n  <div\n    class=\"mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open\"\n    role=\"listbox\"\n    [id]=\"id\"\n    [class]=\"_classList\"\n    [class.mat-mdc-autocomplete-visible]=\"showPanel\"\n    [class.mat-mdc-autocomplete-hidden]=\"!showPanel\"\n    [class.mat-autocomplete-panel-animations-enabled]=\"!_animationsDisabled\"\n    [class.mat-primary]=\"_color === 'primary'\"\n    [class.mat-accent]=\"_color === 'accent'\"\n    [class.mat-warn]=\"_color === 'warn'\"\n    [attr.aria-label]=\"ariaLabel || null\"\n    [attr.aria-labelledby]=\"_getPanelAriaLabelledby(formFieldId)\"\n    #panel>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
			styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));\n  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"]
		}]
	}], () => [], {
		template: [{
			type: ViewChild,
			args: [TemplateRef, { static: true }]
		}],
		panel: [{
			type: ViewChild,
			args: ["panel"]
		}],
		options: [{
			type: ContentChildren,
			args: [MatOption, { descendants: true }]
		}],
		optionGroups: [{
			type: ContentChildren,
			args: [MAT_OPTGROUP, { descendants: true }]
		}],
		ariaLabel: [{
			type: Input,
			args: ["aria-label"]
		}],
		ariaLabelledby: [{
			type: Input,
			args: ["aria-labelledby"]
		}],
		displayWith: [{ type: Input }],
		autoActiveFirstOption: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		autoSelectActiveOption: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		requireSelection: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		panelWidth: [{ type: Input }],
		disableRipple: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		optionSelected: [{ type: Output }],
		opened: [{ type: Output }],
		closed: [{ type: Output }],
		optionActivated: [{ type: Output }],
		classList: [{
			type: Input,
			args: ["class"]
		}],
		hideSingleSelectionIndicator: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}]
	});
})();
var MatAutocompleteOrigin = class MatAutocompleteOrigin {
	elementRef = inject(ElementRef);
	static ɵfac = function MatAutocompleteOrigin_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatAutocompleteOrigin)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: MatAutocompleteOrigin,
		selectors: [[
			"",
			"matAutocompleteOrigin",
			""
		]],
		exportAs: ["matAutocompleteOrigin"]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteOrigin, [{
		type: Directive,
		args: [{
			selector: "[matAutocompleteOrigin]",
			exportAs: "matAutocompleteOrigin"
		}]
	}], null, null);
})();
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => MatAutocompleteTrigger),
	multi: true
};
function getMatAutocompleteMissingPanelError() {
	return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy", {
	providedIn: "root",
	factory: () => {
		const injector = inject(Injector);
		return () => createRepositionScrollStrategy(injector);
	}
});
var MatAutocompleteTrigger = class MatAutocompleteTrigger {
	_environmentInjector = inject(EnvironmentInjector);
	_element = inject(ElementRef);
	_injector = inject(Injector);
	_viewContainerRef = inject(ViewContainerRef);
	_zone = inject(NgZone);
	_changeDetectorRef = inject(ChangeDetectorRef);
	_dir = inject(Directionality, { optional: true });
	_formField = inject(MAT_FORM_FIELD, {
		optional: true,
		host: true
	});
	_viewportRuler = inject(ViewportRuler);
	_scrollStrategy = inject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY);
	_renderer = inject(Renderer2);
	_animationsDisabled = _animationsDisabled();
	_defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, { optional: true });
	_overlayRef = null;
	_portal;
	_componentDestroyed = false;
	_initialized = new Subject();
	_keydownSubscription;
	_outsideClickSubscription;
	_cleanupWindowBlur;
	_previousValue = null;
	_valueOnAttach = null;
	_valueOnLastKeydown = null;
	_positionStrategy;
	_manuallyFloatingLabel = false;
	_closingActionsSubscription;
	_viewportSubscription = Subscription.EMPTY;
	_breakpointObserver = inject(BreakpointObserver);
	_handsetLandscapeSubscription = Subscription.EMPTY;
	_canOpenOnNextFocus = true;
	_valueBeforeAutoSelection;
	_pendingAutoselectedOption = null;
	_closeKeyEventStream = new Subject();
	_overlayPanelClass = coerceArray(this._defaults?.overlayPanelClass || []);
	_windowBlurHandler = () => {
		this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus();
	};
	_onChange = () => {};
	_onTouched = () => {};
	autocomplete;
	position = "auto";
	connectedTo;
	autocompleteAttribute = "off";
	autocompleteDisabled = false;
	_aboveClass = "mat-mdc-autocomplete-panel-above";
	ngAfterViewInit() {
		this._initialized.next();
		this._initialized.complete();
		this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler);
	}
	ngOnChanges(changes) {
		if (changes["position"] && this._positionStrategy) {
			this._setStrategyPositions(this._positionStrategy);
			if (this.panelOpen) this._overlayRef.updatePosition();
		}
	}
	ngOnDestroy() {
		this._cleanupWindowBlur?.();
		this._handsetLandscapeSubscription.unsubscribe();
		this._viewportSubscription.unsubscribe();
		this._componentDestroyed = true;
		this._destroyPanel();
		this._closeKeyEventStream.complete();
	}
	get panelOpen() {
		return this._overlayAttached && this.autocomplete.showPanel;
	}
	_overlayAttached = false;
	openPanel() {
		this._openPanelInternal();
	}
	closePanel() {
		this._resetLabel();
		if (!this._overlayAttached) return;
		if (this.panelOpen) this._zone.run(() => {
			this.autocomplete.closed.emit();
		});
		if (this.autocomplete._latestOpeningTrigger === this) {
			this.autocomplete._isOpen = false;
			this.autocomplete._latestOpeningTrigger = null;
		}
		this._overlayAttached = false;
		this._pendingAutoselectedOption = null;
		if (this._overlayRef && this._overlayRef.hasAttached()) {
			this._overlayRef.detach();
			this._closingActionsSubscription.unsubscribe();
		}
		this._updatePanelState();
		if (!this._componentDestroyed) this._changeDetectorRef.detectChanges();
	}
	updatePosition() {
		if (this._overlayAttached) this._overlayRef.updatePosition();
	}
	get panelClosingActions() {
		return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(map((event) => event instanceof MatOptionSelectionChange ? event : null));
	}
	optionSelections = defer(() => {
		const options = this.autocomplete ? this.autocomplete.options : null;
		if (options) return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
		return this._initialized.pipe(switchMap(() => this.optionSelections));
	});
	get activeOption() {
		if (this.autocomplete && this.autocomplete._keyManager) return this.autocomplete._keyManager.activeItem;
		return null;
	}
	_getOutsideClickStream() {
		return new Observable((observer) => {
			const listener = (event) => {
				const clickTarget = _getEventTarget(event);
				const formField = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null;
				const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
				if (this._overlayAttached && clickTarget !== this._element.nativeElement && !this._hasFocus() && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget)) observer.next(event);
			};
			const cleanups = [
				this._renderer.listen("document", "click", listener),
				this._renderer.listen("document", "auxclick", listener),
				this._renderer.listen("document", "touchend", listener)
			];
			return () => {
				cleanups.forEach((current) => current());
			};
		});
	}
	writeValue(value) {
		Promise.resolve(null).then(() => this._assignOptionValue(value));
	}
	registerOnChange(fn) {
		this._onChange = fn;
	}
	registerOnTouched(fn) {
		this._onTouched = fn;
	}
	setDisabledState(isDisabled) {
		this._element.nativeElement.disabled = isDisabled;
	}
	_handleKeydown(e) {
		const event = e;
		const keyCode = event.keyCode;
		const hasModifier = hasModifierKey(event);
		if (keyCode === 27 && !hasModifier) event.preventDefault();
		this._valueOnLastKeydown = this._element.nativeElement.value;
		if (this.activeOption && keyCode === 13 && this.panelOpen && !hasModifier) {
			this.activeOption._selectViaInteraction();
			this._resetActiveItem();
			event.preventDefault();
		} else if (this.autocomplete) {
			const prevActiveItem = this.autocomplete._keyManager.activeItem;
			const isArrowKey = keyCode === 38 || keyCode === 40;
			if (keyCode === 9 || isArrowKey && !hasModifier && this.panelOpen) this.autocomplete._keyManager.onKeydown(event);
			else if (isArrowKey && this._canOpen()) this._openPanelInternal(this._valueOnLastKeydown);
			if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
				this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
				if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
					if (!this._pendingAutoselectedOption) this._valueBeforeAutoSelection = this._valueOnLastKeydown;
					this._pendingAutoselectedOption = this.activeOption;
					this._assignOptionValue(this.activeOption.value);
				}
			}
		}
	}
	_handleInput(event) {
		let target = event.target;
		let value = target.value;
		if (target.type === "number") value = value == "" ? null : parseFloat(value);
		if (this._previousValue !== value) {
			this._previousValue = value;
			this._pendingAutoselectedOption = null;
			if (!this.autocomplete || !this.autocomplete.requireSelection) this._onChange(value);
			if (!value) this._clearPreviousSelectedOption(null, false);
			else if (this.panelOpen && !this.autocomplete.requireSelection) {
				const selectedOption = this.autocomplete.options?.find((option) => option.selected);
				if (selectedOption) {
					const display = this._getDisplayValue(selectedOption.value);
					if (value !== display) selectedOption.deselect(false);
				}
			}
			if (this._canOpen() && this._hasFocus()) {
				const valueOnAttach = this._valueOnLastKeydown ?? this._element.nativeElement.value;
				this._valueOnLastKeydown = null;
				this._openPanelInternal(valueOnAttach);
			}
		}
	}
	_handleFocus() {
		if (!this._canOpenOnNextFocus) this._canOpenOnNextFocus = true;
		else if (this._canOpen()) {
			this._previousValue = this._element.nativeElement.value;
			this._attachOverlay(this._previousValue);
			this._floatLabel(true);
		}
	}
	_handleClick() {
		if (this._canOpen() && !this.panelOpen) this._openPanelInternal();
	}
	_hasFocus() {
		return _getFocusedElementPierceShadowDom() === this._element.nativeElement;
	}
	_floatLabel(shouldAnimate = false) {
		if (this._formField && this._formField.floatLabel === "auto") {
			if (shouldAnimate) this._formField._animateAndLockLabel();
			else this._formField.floatLabel = "always";
			this._manuallyFloatingLabel = true;
		}
	}
	_resetLabel() {
		if (this._manuallyFloatingLabel) {
			if (this._formField) this._formField.floatLabel = "auto";
			this._manuallyFloatingLabel = false;
		}
	}
	_subscribeToClosingActions() {
		return merge(new Observable((subscriber) => {
			afterNextRender(() => {
				subscriber.next();
			}, { injector: this._environmentInjector });
		}), this.autocomplete.options?.changes.pipe(tap(() => this._positionStrategy.reapplyLastPosition()), delay(0)) ?? of()).pipe(switchMap(() => this._zone.run(() => {
			const wasOpen = this.panelOpen;
			this._resetActiveItem();
			this._updatePanelState();
			this._changeDetectorRef.detectChanges();
			if (this.panelOpen) this._overlayRef.updatePosition();
			if (wasOpen !== this.panelOpen) if (this.panelOpen) this._emitOpened();
			else this.autocomplete.closed.emit();
			return this.panelClosingActions;
		})), take(1)).subscribe((event) => this._setValueAndClose(event));
	}
	_emitOpened() {
		this.autocomplete.opened.emit();
	}
	_destroyPanel() {
		if (this._overlayRef) {
			this.closePanel();
			this._overlayRef.dispose();
			this._overlayRef = null;
		}
	}
	_getDisplayValue(value) {
		const autocomplete = this.autocomplete;
		return autocomplete && autocomplete.displayWith ? autocomplete.displayWith(value) : value;
	}
	_assignOptionValue(value) {
		const toDisplay = this._getDisplayValue(value);
		if (value == null) this._clearPreviousSelectedOption(null, false);
		this._updateNativeInputValue(toDisplay != null ? toDisplay : "");
	}
	_updateNativeInputValue(value) {
		if (this._formField) this._formField._control.value = value;
		else this._element.nativeElement.value = value;
		this._previousValue = value;
	}
	_setValueAndClose(event) {
		const panel = this.autocomplete;
		const toSelect = event ? event.source : this._pendingAutoselectedOption;
		if (toSelect) {
			this._clearPreviousSelectedOption(toSelect);
			this._assignOptionValue(toSelect.value);
			this._onChange(toSelect.value);
			panel._emitSelectEvent(toSelect);
			this._element.nativeElement.focus();
		} else if (panel.requireSelection && this._element.nativeElement.value !== this._valueOnAttach) {
			this._clearPreviousSelectedOption(null);
			this._assignOptionValue(null);
			this._onChange(null);
		}
		this.closePanel();
	}
	_clearPreviousSelectedOption(skip, emitEvent) {
		this.autocomplete?.options?.forEach((option) => {
			if (option !== skip && option.selected) option.deselect(emitEvent);
		});
	}
	_openPanelInternal(valueOnAttach = this._element.nativeElement.value) {
		this._attachOverlay(valueOnAttach);
		this._floatLabel();
	}
	_attachOverlay(valueOnAttach) {
		if (!this.autocomplete) if (typeof ngDevMode === "undefined" || ngDevMode) throw getMatAutocompleteMissingPanelError();
		else return;
		let overlayRef = this._overlayRef;
		if (!overlayRef) {
			this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, { id: this._formField?.getLabelId() });
			overlayRef = createOverlayRef(this._injector, this._getOverlayConfig());
			this._overlayRef = overlayRef;
			this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
				if (this.panelOpen && overlayRef) overlayRef.updateSize({ width: this._getPanelWidth() });
			});
			this._handsetLandscapeSubscription = this._breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe((result) => {
				if (result.matches) this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8);
				else this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);
			});
		} else {
			this._positionStrategy.setOrigin(this._getConnectedElement());
			overlayRef.updateSize({ width: this._getPanelWidth() });
		}
		if (overlayRef && !overlayRef.hasAttached()) {
			overlayRef.attach(this._portal);
			this._valueOnAttach = valueOnAttach;
			this._valueOnLastKeydown = null;
			this._closingActionsSubscription = this._subscribeToClosingActions();
		}
		const wasOpen = this.panelOpen;
		this.autocomplete._isOpen = this._overlayAttached = true;
		this.autocomplete._latestOpeningTrigger = this;
		this.autocomplete._setColor(this._formField?.color);
		this._updatePanelState();
		if (this.panelOpen && wasOpen !== this.panelOpen) this._emitOpened();
	}
	_handlePanelKeydown = (event) => {
		if (event.keyCode === 27 && !hasModifierKey(event) || event.keyCode === 38 && hasModifierKey(event, "altKey")) {
			if (this._pendingAutoselectedOption) {
				this._updateNativeInputValue(this._valueBeforeAutoSelection ?? "");
				this._pendingAutoselectedOption = null;
			}
			this._closeKeyEventStream.next();
			this._resetActiveItem();
			event.stopPropagation();
			event.preventDefault();
		}
	};
	_updatePanelState() {
		this.autocomplete._setVisibility();
		if (this.panelOpen) {
			const overlayRef = this._overlayRef;
			if (!this._keydownSubscription) this._keydownSubscription = overlayRef.keydownEvents().subscribe(this._handlePanelKeydown);
			if (!this._outsideClickSubscription) this._outsideClickSubscription = overlayRef.outsidePointerEvents().subscribe();
		} else {
			this._keydownSubscription?.unsubscribe();
			this._outsideClickSubscription?.unsubscribe();
			this._keydownSubscription = this._outsideClickSubscription = void 0;
		}
	}
	_getOverlayConfig() {
		return new OverlayConfig({
			positionStrategy: this._getOverlayPosition(),
			scrollStrategy: this._scrollStrategy(),
			width: this._getPanelWidth(),
			direction: this._dir ?? void 0,
			hasBackdrop: this._defaults?.hasBackdrop,
			backdropClass: this._defaults?.backdropClass || "cdk-overlay-transparent-backdrop",
			panelClass: this._overlayPanelClass,
			disableAnimations: this._animationsDisabled
		});
	}
	_getOverlayPosition() {
		const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPopoverLocation("inline");
		this._setStrategyPositions(strategy);
		this._positionStrategy = strategy;
		return strategy;
	}
	_setStrategyPositions(positionStrategy) {
		const belowPositions = [{
			originX: "start",
			originY: "bottom",
			overlayX: "start",
			overlayY: "top"
		}, {
			originX: "end",
			originY: "bottom",
			overlayX: "end",
			overlayY: "top"
		}];
		const panelClass = this._aboveClass;
		const abovePositions = [{
			originX: "start",
			originY: "top",
			overlayX: "start",
			overlayY: "bottom",
			panelClass
		}, {
			originX: "end",
			originY: "top",
			overlayX: "end",
			overlayY: "bottom",
			panelClass
		}];
		let positions;
		if (this.position === "above") positions = abovePositions;
		else if (this.position === "below") positions = belowPositions;
		else positions = [...belowPositions, ...abovePositions];
		positionStrategy.withPositions(positions);
	}
	_getConnectedElement() {
		if (this.connectedTo) return this.connectedTo.elementRef;
		return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
	}
	_getPanelWidth() {
		return this.autocomplete.panelWidth || this._getHostWidth();
	}
	_getHostWidth() {
		return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
	}
	_resetActiveItem() {
		const autocomplete = this.autocomplete;
		if (autocomplete.autoActiveFirstOption) {
			let firstEnabledOptionIndex = -1;
			for (let index = 0; index < autocomplete.options.length; index++) if (!autocomplete.options.get(index).disabled) {
				firstEnabledOptionIndex = index;
				break;
			}
			autocomplete._keyManager.setActiveItem(firstEnabledOptionIndex);
		} else autocomplete._keyManager.setActiveItem(-1);
	}
	_canOpen() {
		const element = this._element.nativeElement;
		return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
	}
	_scrollToOption(index) {
		const autocomplete = this.autocomplete;
		const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
		if (index === 0 && labelCount === 1) autocomplete._setScrollTop(0);
		else if (autocomplete.panel) {
			const option = autocomplete.options.toArray()[index];
			if (option) {
				const element = option._getHostElement();
				const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
				autocomplete._setScrollTop(newScrollPosition);
			}
		}
	}
	static ɵfac = function MatAutocompleteTrigger_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatAutocompleteTrigger)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: MatAutocompleteTrigger,
		selectors: [[
			"input",
			"matAutocomplete",
			""
		], [
			"textarea",
			"matAutocomplete",
			""
		]],
		hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
		hostVars: 7,
		hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
			if (rf & 1) ɵɵlistener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
				return ctx._handleFocus();
			})("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
				return ctx._onTouched();
			})("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
				return ctx._handleInput($event);
			})("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
				return ctx._handleKeydown($event);
			})("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
				return ctx._handleClick();
			});
			if (rf & 2) ɵɵattribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-controls", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete?.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
		},
		inputs: {
			autocomplete: [
				0,
				"matAutocomplete",
				"autocomplete"
			],
			position: [
				0,
				"matAutocompletePosition",
				"position"
			],
			connectedTo: [
				0,
				"matAutocompleteConnectedTo",
				"connectedTo"
			],
			autocompleteAttribute: [
				0,
				"autocomplete",
				"autocompleteAttribute"
			],
			autocompleteDisabled: [
				2,
				"matAutocompleteDisabled",
				"autocompleteDisabled",
				booleanAttribute
			]
		},
		exportAs: ["matAutocompleteTrigger"],
		features: [ɵɵProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), ɵɵNgOnChangesFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteTrigger, [{
		type: Directive,
		args: [{
			selector: `input[matAutocomplete], textarea[matAutocomplete]`,
			host: {
				"class": "mat-mdc-autocomplete-trigger",
				"[attr.autocomplete]": "autocompleteAttribute",
				"[attr.role]": "autocompleteDisabled ? null : \"combobox\"",
				"[attr.aria-autocomplete]": "autocompleteDisabled ? null : \"list\"",
				"[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
				"[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
				"[attr.aria-controls]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
				"[attr.aria-haspopup]": "autocompleteDisabled ? null : \"listbox\"",
				"(focusin)": "_handleFocus()",
				"(blur)": "_onTouched()",
				"(input)": "_handleInput($event)",
				"(keydown)": "_handleKeydown($event)",
				"(click)": "_handleClick()"
			},
			exportAs: "matAutocompleteTrigger",
			providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
		}]
	}], null, {
		autocomplete: [{
			type: Input,
			args: ["matAutocomplete"]
		}],
		position: [{
			type: Input,
			args: ["matAutocompletePosition"]
		}],
		connectedTo: [{
			type: Input,
			args: ["matAutocompleteConnectedTo"]
		}],
		autocompleteAttribute: [{
			type: Input,
			args: ["autocomplete"]
		}],
		autocompleteDisabled: [{
			type: Input,
			args: [{
				alias: "matAutocompleteDisabled",
				transform: booleanAttribute
			}]
		}]
	});
})();
var MatAutocompleteModule = class MatAutocompleteModule {
	static ɵfac = function MatAutocompleteModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatAutocompleteModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: MatAutocompleteModule,
		imports: [
			OverlayModule,
			MatOptionModule,
			MatAutocomplete,
			MatAutocompleteTrigger,
			MatAutocompleteOrigin
		],
		exports: [
			CdkScrollableModule,
			MatAutocomplete,
			MatOptionModule,
			BidiModule,
			MatAutocompleteTrigger,
			MatAutocompleteOrigin
		]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ imports: [
		OverlayModule,
		MatOptionModule,
		CdkScrollableModule,
		MatOptionModule,
		BidiModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteModule, [{
		type: NgModule,
		args: [{
			imports: [
				OverlayModule,
				MatOptionModule,
				MatAutocomplete,
				MatAutocompleteTrigger,
				MatAutocompleteOrigin
			],
			exports: [
				CdkScrollableModule,
				MatAutocomplete,
				MatOptionModule,
				BidiModule,
				MatAutocompleteTrigger,
				MatAutocompleteOrigin
			]
		}]
	}], null, null);
})();
//#endregion
export { MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MAT_AUTOCOMPLETE_VALUE_ACCESSOR, MatAutocomplete, MatAutocompleteModule, MatAutocompleteOrigin, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, MatOptgroup, MatOption, getMatAutocompleteMissingPanelError };
