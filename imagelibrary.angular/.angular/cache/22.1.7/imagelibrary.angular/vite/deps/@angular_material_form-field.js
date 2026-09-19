import { Dl as ɵɵdefineInjector, Wi as setClassMetadata, qn as NgModule, ro as ɵɵdefineNgModule } from "./core-CVHS-hD8.js";
import { t as BidiModule } from "./bidi-BIOWbFqv.js";
import { c as ObserversModule } from "./_animation-chunk-DRH3F-gu.js";
import "./platform-DUvAx4Dz.js";
import { a as MAT_SUFFIX, c as MatFormFieldControl, d as MatPrefix, f as MatSuffix, h as getMatFormFieldPlaceholderConflictError, i as MAT_PREFIX, l as MatHint, m as getMatFormFieldMissingControlError, n as MAT_FORM_FIELD, o as MatError, p as getMatFormFieldDuplicatedHintError, r as MAT_FORM_FIELD_DEFAULT_OPTIONS, s as MatFormField, t as MAT_ERROR, u as MatLabel } from "./_form-field-chunk-ByDamWPp.js";
//#region node_modules/@angular/material/fesm2022/form-field.mjs
var MatFormFieldModule = class MatFormFieldModule {
	static ɵfac = function MatFormFieldModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MatFormFieldModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: MatFormFieldModule,
		imports: [
			ObserversModule,
			MatFormField,
			MatLabel,
			MatError,
			MatHint,
			MatPrefix,
			MatSuffix
		],
		exports: [
			MatFormField,
			MatLabel,
			MatHint,
			MatError,
			MatPrefix,
			MatSuffix,
			BidiModule
		]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ imports: [
		ObserversModule,
		MatFormField,
		BidiModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFormFieldModule, [{
		type: NgModule,
		args: [{
			imports: [
				ObserversModule,
				MatFormField,
				MatLabel,
				MatError,
				MatHint,
				MatPrefix,
				MatSuffix
			],
			exports: [
				MatFormField,
				MatLabel,
				MatHint,
				MatError,
				MatPrefix,
				MatSuffix,
				BidiModule
			]
		}]
	}], null, null);
})();
//#endregion
export { MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPrefix, MatSuffix, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError };
