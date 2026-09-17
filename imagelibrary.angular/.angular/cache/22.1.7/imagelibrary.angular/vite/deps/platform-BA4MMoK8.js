import { Dc as Injector, Dl as ɵɵdefineInjector, Ec as InjectionToken, Fc as NgZone, Wi as setClassMetadata, ao as ɵɵdefineService, dr as Service, mc as DOCUMENT, qn as NgModule, ro as ɵɵdefineNgModule, sl as inject, uc as APP_ID } from "./core-CVHS-hD8.js";
import { i as Platform, r as _CdkPrivateStyleLoader } from "./_element-chunk-C0UHEuvq.js";
import { i as FocusTrap, o as InteractivityChecker } from "./_animation-chunk-Clj_fr3p.js";
import { t as _VisuallyHiddenLoader } from "./private-CSMSo6mO.js";
//#region node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
	const ids = getAriaReferenceIds(el, attr);
	id = id.trim();
	if (ids.some((existingId) => existingId.trim() === id)) return;
	ids.push(id);
	el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
	const ids = getAriaReferenceIds(el, attr);
	id = id.trim();
	const filteredIds = ids.filter((val) => val !== id);
	if (filteredIds.length) el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
	else el.removeAttribute(attr);
}
function getAriaReferenceIds(el, attr) {
	return el.getAttribute(attr)?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId = 0;
var AriaDescriber = class AriaDescriber {
	_platform = inject(Platform);
	_document = inject(DOCUMENT);
	_messageRegistry = /* @__PURE__ */ new Map();
	_messagesContainer = null;
	_id = `${nextId++}`;
	constructor() {
		inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
		this._id = inject(APP_ID) + "-" + nextId++;
	}
	describe(hostElement, message, role) {
		if (!this._canBeDescribed(hostElement, message)) return;
		const key = getKey(message, role);
		if (typeof message !== "string") {
			setMessageId(message, this._id);
			this._messageRegistry.set(key, {
				messageElement: message,
				referenceCount: 0
			});
		} else if (!this._messageRegistry.has(key)) this._createMessageElement(message, role);
		if (!this._isElementDescribedByMessage(hostElement, key)) this._addMessageReference(hostElement, key);
	}
	removeDescription(hostElement, message, role) {
		if (!message || !this._isElementNode(hostElement)) return;
		const key = getKey(message, role);
		if (this._isElementDescribedByMessage(hostElement, key)) this._removeMessageReference(hostElement, key);
		if (typeof message === "string") {
			const registeredMessage = this._messageRegistry.get(key);
			if (registeredMessage && registeredMessage.referenceCount === 0) this._deleteMessageElement(key);
		}
		if (this._messagesContainer?.childNodes.length === 0) {
			this._messagesContainer.remove();
			this._messagesContainer = null;
		}
	}
	ngOnDestroy() {
		const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
		for (let i = 0; i < describedElements.length; i++) {
			this._removeCdkDescribedByReferenceIds(describedElements[i]);
			describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
		}
		this._messagesContainer?.remove();
		this._messagesContainer = null;
		this._messageRegistry.clear();
	}
	_createMessageElement(message, role) {
		const messageElement = this._document.createElement("div");
		setMessageId(messageElement, this._id);
		messageElement.textContent = message;
		if (role) messageElement.setAttribute("role", role);
		this._createMessagesContainer();
		this._messagesContainer.appendChild(messageElement);
		this._messageRegistry.set(getKey(message, role), {
			messageElement,
			referenceCount: 0
		});
	}
	_deleteMessageElement(key) {
		this._messageRegistry.get(key)?.messageElement?.remove();
		this._messageRegistry.delete(key);
	}
	_createMessagesContainer() {
		if (this._messagesContainer) return;
		const containerClassName = "cdk-describedby-message-container";
		const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
		for (let i = 0; i < serverContainers.length; i++) serverContainers[i].remove();
		const messagesContainer = this._document.createElement("div");
		messagesContainer.style.visibility = "hidden";
		messagesContainer.classList.add(containerClassName);
		messagesContainer.classList.add("cdk-visually-hidden");
		if (!this._platform.isBrowser) messagesContainer.setAttribute("platform", "server");
		this._document.body.appendChild(messagesContainer);
		this._messagesContainer = messagesContainer;
	}
	_removeCdkDescribedByReferenceIds(element) {
		const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
		element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
	}
	_addMessageReference(element, key) {
		const registeredMessage = this._messageRegistry.get(key);
		addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
		element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
		registeredMessage.referenceCount++;
	}
	_removeMessageReference(element, key) {
		const registeredMessage = this._messageRegistry.get(key);
		registeredMessage.referenceCount--;
		removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
		element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
	}
	_isElementDescribedByMessage(element, key) {
		const referenceIds = getAriaReferenceIds(element, "aria-describedby");
		const registeredMessage = this._messageRegistry.get(key);
		const messageId = registeredMessage && registeredMessage.messageElement.id;
		return !!messageId && referenceIds.indexOf(messageId) != -1;
	}
	_canBeDescribed(element, message) {
		if (!this._isElementNode(element)) return false;
		if (message && typeof message === "object") return true;
		const trimmedMessage = message == null ? "" : `${message}`.trim();
		const ariaLabel = element.getAttribute("aria-label");
		return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
	}
	_isElementNode(element) {
		return element.nodeType === this._document.ELEMENT_NODE;
	}
	static ɵfac = function AriaDescriber_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AriaDescriber)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: AriaDescriber,
		factory: AriaDescriber.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{ type: Service }], () => [], null);
})();
function getKey(message, role) {
	return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
	if (!element.id) element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
}
var ConfigurableFocusTrap = class extends FocusTrap {
	_focusTrapManager;
	_inertStrategy;
	get enabled() {
		return this._enabled;
	}
	set enabled(value) {
		this._enabled = value;
		if (this._enabled) this._focusTrapManager.register(this);
		else this._focusTrapManager.deregister(this);
	}
	constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
		super(_element, _checker, _ngZone, _document, config.defer, injector);
		this._focusTrapManager = _focusTrapManager;
		this._inertStrategy = _inertStrategy;
		this._focusTrapManager.register(this);
	}
	destroy() {
		this._focusTrapManager.deregister(this);
		super.destroy();
	}
	_enable() {
		this._inertStrategy.preventFocus(this);
		this.toggleAnchors(true);
	}
	_disable() {
		this._inertStrategy.allowFocus(this);
		this.toggleAnchors(false);
	}
};
var EventListenerFocusTrapInertStrategy = class {
	_listener = null;
	preventFocus(focusTrap) {
		if (this._listener) focusTrap._document.removeEventListener("focus", this._listener, true);
		this._listener = (e) => this._trapFocus(focusTrap, e);
		focusTrap._ngZone.runOutsideAngular(() => {
			focusTrap._document.addEventListener("focus", this._listener, true);
		});
	}
	allowFocus(focusTrap) {
		if (!this._listener) return;
		focusTrap._document.removeEventListener("focus", this._listener, true);
		this._listener = null;
	}
	_trapFocus(focusTrap, event) {
		const target = event.target;
		const focusTrapRoot = focusTrap._element;
		if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) setTimeout(() => {
			if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) focusTrap.focusFirstTabbableElement();
		});
	}
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var FocusTrapManager = class FocusTrapManager {
	_focusTrapStack = [];
	register(focusTrap) {
		this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
		let stack = this._focusTrapStack;
		if (stack.length) stack[stack.length - 1]._disable();
		stack.push(focusTrap);
		focusTrap._enable();
	}
	deregister(focusTrap) {
		focusTrap._disable();
		const stack = this._focusTrapStack;
		const i = stack.indexOf(focusTrap);
		if (i !== -1) {
			stack.splice(i, 1);
			if (stack.length) stack[stack.length - 1]._enable();
		}
	}
	static ɵfac = function FocusTrapManager_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FocusTrapManager)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: FocusTrapManager,
		factory: FocusTrapManager.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{ type: Service }], null, null);
})();
var ConfigurableFocusTrapFactory = class ConfigurableFocusTrapFactory {
	_checker = inject(InteractivityChecker);
	_ngZone = inject(NgZone);
	_focusTrapManager = inject(FocusTrapManager);
	_document = inject(DOCUMENT);
	_inertStrategy;
	_injector = inject(Injector);
	constructor() {
		const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, { optional: true });
		this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
	}
	create(element, config = { defer: false }) {
		return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, config, this._injector);
	}
	static ɵfac = function ConfigurableFocusTrapFactory_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ConfigurableFocusTrapFactory)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineService({
		token: ConfigurableFocusTrapFactory,
		factory: ConfigurableFocusTrapFactory.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{ type: Service }], () => [], null);
})();
//#endregion
//#region node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule = class PlatformModule {
	static ɵfac = function PlatformModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || PlatformModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({ type: PlatformModule });
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
		type: NgModule,
		args: [{}]
	}], null, null);
})();
var supportedInputTypes;
var candidateInputTypes = [
	"color",
	"button",
	"checkbox",
	"date",
	"datetime-local",
	"email",
	"file",
	"hidden",
	"image",
	"month",
	"number",
	"password",
	"radio",
	"range",
	"reset",
	"search",
	"submit",
	"tel",
	"text",
	"time",
	"url",
	"week"
];
function getSupportedInputTypes() {
	if (supportedInputTypes) return supportedInputTypes;
	if (typeof document !== "object" || !document) {
		supportedInputTypes = new Set(candidateInputTypes);
		return supportedInputTypes;
	}
	let featureTestInput = document.createElement("input");
	supportedInputTypes = new Set(candidateInputTypes.filter((value) => {
		featureTestInput.setAttribute("type", value);
		return featureTestInput.type === value;
	}));
	return supportedInputTypes;
}
//#endregion
export { getSupportedInputTypes as t };
