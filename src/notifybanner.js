/*!
 * JavaScript NotifyBanner v1.0.0
 * https://github.com/ronnibaslund/notifybanner
 *
 * Copyright 2015 Ronni H. Baslund
 * Released under the MIT license
 */

(function (window) {
    'use strict';
    function notify_banner_library() {

        var NotifyBanner = {},
            domElement = 'NotifyBanner',
            cookieName = "NotifyBanner",
            domain = '.kids-world.dk',
            path = '',
            expires = 7,
            value = '';

        NotifyBanner.getCookie = function () {
            return Cookies.get(cookieName);
        };

        NotifyBanner.setCookie = function (_value) {
            if (_value) {
                Cookies.set(cookieName, _value, {expires: expires, path: path, domain: domain});
            } else {
                // Make sure that the cookie isent set before setting it to empty
                // If the cookie is set then do nothing
                if (this.getCookie() === 'undefined') {
                    Cookies.set(cookieName, value, {expires: expires, path: path, domain: domain});
                }
            }
        };

        NotifyBanner.hideElement = function () {
            var _value = this.getCookie();

            if(_value != 'undefined') {
                // Get data attr from the NotifyBanner element
                var _element = document.getElementsByClassName(domElement);
                var _id = _element[0].getAttribute('data-id');

                if(_value === _id) {
                    //Hide dom element
                    _element[0].style.display = 'none';
                } else {
                    //show element
                    _element[0].style.display = '';
                }
            }
        };
        NotifyBanner.hideElement();

        NotifyBanner.close = function () {
            var _element = document.getElementsByClassName(domElement);
            var _id = _element[0].getAttribute('data-id');
            this.setCookie(_id);
            this.hideElement();
        };

        return NotifyBanner;
    }

    //define globally if it doesn't already exist
    if (typeof(NotifyBanner) === 'undefined') {
        window.NotifyBanner = notify_banner_library();
    } else {
        console.log("NotifyBanner is already defined.");
    }

    //Check for dependencies
    if (typeof(Cookies) === 'undefined') {
        console.log('Missing cookies library - get it here: https://github.com/js-cookie/js-cookie')
    }
})(window);
