var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { EmptyStateConfig } from './empty-state-config';
import { cloneDeep, defaults, isEqual } from 'lodash';
/**
 * Component for rendering an empty state.
 */
var EmptyStateComponent = (function () {
    /**
     * The default constructor
     */
    function EmptyStateComponent() {
        /**
         * The event emitted when an action is selected
         */
        this.onActionSelect = new EventEmitter();
        this.defaultConfig = {
            title: 'No Items Available'
        };
    }
    // Initialization
    /**
     *  Setup component configuration upon initialization
     */
    EmptyStateComponent.prototype.ngOnInit = function () {
        this.setupConfig();
    };
    /**
     *  Check if the component config has changed
     */
    EmptyStateComponent.prototype.ngDoCheck = function () {
        // Do a deep compare on config
        if (!isEqual(this.config, this.prevConfig)) {
            this.setupConfig();
        }
    };
    /**
     * Set up default config
     */
    EmptyStateComponent.prototype.setupConfig = function () {
        if (this.config !== undefined) {
            defaults(this.config, this.defaultConfig);
        }
        else {
            this.config = cloneDeep(this.defaultConfig);
        }
        this.prevConfig = cloneDeep(this.config);
    };
    // Private
    EmptyStateComponent.prototype.handleAction = function (action) {
        if (action && action.disabled !== true) {
            this.onActionSelect.emit(action);
        }
    };
    return EmptyStateComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", EmptyStateConfig)
], EmptyStateComponent.prototype, "config", void 0);
__decorate([
    Output('onActionSelect'),
    __metadata("design:type", Object)
], EmptyStateComponent.prototype, "onActionSelect", void 0);
EmptyStateComponent = __decorate([
    Component({
        encapsulation: ViewEncapsulation.None,
        selector: 'pfng-empty-state',
        styles: [require('./empty-state.component.css').toString()],
        template: require('./empty-state.component.html')
    }),
    __metadata("design:paramtypes", [])
], EmptyStateComponent);
export { EmptyStateComponent };
//# sourceMappingURL=empty-state.component.js.map