var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * @name FCM
 * @description
 * Provides basic functionality for Firebase Cloud Messaging
 *
 * @usage
 * ```typescript
 * import { FCM } from '@ionic-native/fcm';
 *
 * constructor(private fcm: FCM) {}
 *
 * ...
 *
 * this.fcm.subscribeToTopic('marketing');
 *
 * this.fcm.getToken().then(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcm.onNotification().subscribe(data => {
 *   if(data.wasTapped){
 *     console.log("Received in background");
 *   } else {
 *     console.log("Received in foreground");
 *   };
 * });
 *
 * this.fcm.onTokenRefresh().subscribe(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcm.unsubscribeFromTopic('marketing');
 * 
 * this.fcm.setSession('token', 'deviceId', 'baseURL');
 *
 * ```
 * @interfaces
 * NotificationData
 */
var FCM = (function (_super) {
    __extends(FCM, _super);
    function FCM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets device's current registration id
     *
     * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
     */
    /**
       * Gets device's current registration id
       *
       * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
       */
    FCM.prototype.getToken = /**
       * Gets device's current registration id
       *
       * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
       */
    function () {
        return;
    };
    /**
     * Event firing on the token refresh
     *
     * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
     */
    /**
       * Event firing on the token refresh
       *
       * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
       */
    FCM.prototype.onTokenRefresh = /**
       * Event firing on the token refresh
       *
       * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
       */
    function () {
        return;
    };
    /**
     * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be subscribed to
     *
     * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
     */
    /**
       * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
       *
       * @param {string} topic Topic to be subscribed to
       *
       * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
       */
    FCM.prototype.subscribeToTopic = /**
       * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
       *
       * @param {string} topic Topic to be subscribed to
       *
       * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
       */
    function (topic) {
        return;
    };
    /**
     * Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
     *
     * @param {string} topic Topic to be unsubscribed from
     *
     * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
     */
    /**
       * Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
       *
       * @param {string} topic Topic to be unsubscribed from
       *
       * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
       */
    FCM.prototype.unsubscribeFromTopic = /**
       * Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
       *
       * @param {string} topic Topic to be unsubscribed from
       *
       * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
       */
    function (topic) {
        return;
    };
    FCM.prototype.setSession = /**
       * Unsubscribes you from a [token](https://firebase.google.com/docs/notifications/android/console-topics)
       *
       * @param {string} token Topic to be unsubscribed from
       * 
       * @param {string} deviceId Topic to be unsubscribed from
       * 
       * @param {string} baseURL Topic to be unsubscribed from
       *
       * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
       */
    function (token) {
        return;
    };
    /**
     * Watch for incoming notifications
     *
     * @returns {Observable<any>} returns an object with data from the notification
     */
    /**
       * Watch for incoming notifications
       *
       * @returns {Observable<any>} returns an object with data from the notification
       */
    FCM.prototype.onNotification = /**
       * Watch for incoming notifications
       *
       * @returns {Observable<any>} returns an object with data from the notification
       */
    function () {
        return;
    };
    FCM.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], FCM.prototype, "getToken", null);
    __decorate([
        Cordova({
            observable: true
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], FCM.prototype, "onTokenRefresh", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FCM.prototype, "subscribeToTopic", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FCM.prototype, "unsubscribeFromTopic", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FCM.prototype, "setSession", null);
    __decorate([
        Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 2
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], FCM.prototype, "onNotification", null);
    /**
     * @name FCM
     * @description
     * Provides basic functionality for Firebase Cloud Messaging
     *
     * @usage
     * ```typescript
     * import { FCM } from '@ionic-native/fcm';
     *
     * constructor(private fcm: FCM) {}
     *
     * ...
     *
     * this.fcm.subscribeToTopic('marketing');
     *
     * this.fcm.getToken().then(token => {
     *   backend.registerToken(token);
     * });
     *
     * this.fcm.onNotification().subscribe(data => {
     *   if(data.wasTapped){
     *     console.log("Received in background");
     *   } else {
     *     console.log("Received in foreground");
     *   };
     * });
     *
     * this.fcm.onTokenRefresh().subscribe(token => {
     *   backend.registerToken(token);
     * });
     *
     * this.fcm.unsubscribeFromTopic('marketing');
     * 
     * this.fcm.setSession('token', 'deviceId', 'baseURL');
     *
     * ```
     * @interfaces
     * NotificationData
     */
    FCM = __decorate([
        Plugin({
            pluginName: 'FCM',
            plugin: 'cordova-plugin-fcm-with-dependecy-updated',
            pluginRef: 'FCMPlugin',
            repo: 'https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated',
            platforms: ['Android', 'iOS']
        })
    ], FCM);
    return FCM;
}(IonicNativePlugin));
export { FCM };
//# sourceMappingURL=index.js.map