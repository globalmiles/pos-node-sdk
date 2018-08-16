/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _oAuthManager = require('../OAuthManager');

class PayWithMilesController {
    /**
     * In order to cancel payment with miles you can use this endpoint. It allows to cancel
     * payment only related GSM and terminal ID numbers.
     * You can try this endpoint with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     *
     * @param {int} milesPaymentProvisionId Provision ID.
     * @param {CancelMilePaymentRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteCancelMilePayment(milesPaymentProvisionId, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/v2/pos/payments/{miles_payment_provision_id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            miles_payment_provision_id: milesPaymentProvisionId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const oAuthPromise = _oAuthManager.authorize();
            // eslint-disable-next-line arrow-body-style
            oAuthPromise.then(() => {
                return PayWithMilesController.deleteCancelMilePaymentAction(_queryUrl, _callback, body);
            }, (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
        } else {
            return PayWithMilesController.deleteCancelMilePaymentAction(_queryUrl, _callback, body);
        }
        // eslint-disable-next-line consistent-return
        return; // eslint-disable-line no-useless-return
    }
    static deleteCancelMilePaymentAction(_queryUrl, _callback, body) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'CancelMilePaymentResponse');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
            return Promise.reject(err);
        });
    }
    /**
     * In order to finalize payment with miles use this endpoint. Use the OTP number which is
     * send to user GSM on the Request body.
     * You can try this endpoint with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     *
     * @param {int} milesPaymentProvisionId Provision ID.
     * @param {CompleteMilePaymentRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateCompleteMilePayment(milesPaymentProvisionId, body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/v2/pos/payments/{miles_payment_provision_id}'}`;

        // process template parameters
        _queryBuilder = _apiHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            miles_payment_provision_id: milesPaymentProvisionId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const oAuthPromise = _oAuthManager.authorize();
            // eslint-disable-next-line arrow-body-style
            oAuthPromise.then(() => {
                return PayWithMilesController.updateCompleteMilePaymentAction(_queryUrl, _callback, body);
            }, (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
        } else {
            return PayWithMilesController.updateCompleteMilePaymentAction(_queryUrl, _callback, body);
        }
        // eslint-disable-next-line consistent-return
        return; // eslint-disable-line no-useless-return
    }
    static updateCompleteMilePaymentAction(_queryUrl, _callback, body) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'CompleteMilePaymentResponse');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
            return Promise.reject(err);
        });
    }
    /**
     * After getting customer info's and RecognitionID to start Payment with Miles Use this
     * endpoint.
     * After calling this endpoint successfully OTP code send to customer GSM number. This OTP
     * must be used with Complete endpoint in order to complete payment.
     * You can try this endpoint with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     *
     * @param {StartMilePaymentRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createStartMilePayment(body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/v2/pos/payments'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const oAuthPromise = _oAuthManager.authorize();
            // eslint-disable-next-line arrow-body-style
            oAuthPromise.then(() => {
                return PayWithMilesController.createStartMilePaymentAction(_queryUrl, _callback, body);
            }, (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
        } else {
            return PayWithMilesController.createStartMilePaymentAction(_queryUrl, _callback, body);
        }
        // eslint-disable-next-line consistent-return
        return; // eslint-disable-line no-useless-return
    }
    static createStartMilePaymentAction(_queryUrl, _callback, body) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // remove null values
        _apiHelper.cleanObject(body);

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(body),
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'StartMilePaymentResponse');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
            return Promise.reject(err);
        });
    }
    /**
     * Before cancelling the payment with miles this endpoint is used to list the related sale.
     * You can try this endpoint with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     *
     * @param {string} readCode Customer Identification Method; GSM, FFP ID, CODE or EMAIL.
     * @param {string} readCodeType 1: GSM, 2: FFP ID, 3: CODE, 4: EMAIL
     * @param {string} terminalId Terminal ID.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getMileProvisions(readCode, readCodeType, terminalId, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/v2/pos/payments'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            read_code: readCode,
            read_code_type: readCodeType,
            terminal_id: terminalId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const oAuthPromise = _oAuthManager.authorize();
            // eslint-disable-next-line arrow-body-style
            oAuthPromise.then(() => {
                return PayWithMilesController.getMileProvisionsAction(_queryUrl, _callback, readCode, readCodeType, terminalId);
            }, (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
        } else {
            return PayWithMilesController.getMileProvisionsAction(_queryUrl, _callback, readCode, readCodeType, terminalId);
        }
        // eslint-disable-next-line consistent-return
        return; // eslint-disable-line no-useless-return
    }
    static getMileProvisionsAction(_queryUrl, _callback, readCode, readCodeType, terminalId) {
        const oauthTokenPromise = _oAuthManager.checkTokenExpiry();
        // prepare headers
        const _headers = {
            accept: 'application/json',
        };

        oauthTokenPromise.then(() => {
            _headers.Authorization = `Bearer ${_configuration.oAuthToken.accessToken}`;
        });
        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return oauthTokenPromise
        .then(() =>
            new Promise((_fulfill, _reject) => {
                _request(_options, (_error, _response, _context) => {
                    let errorResponse;
                    if (_error) {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                            errorResponse.response,
                            errorResponse.context);
                        _reject(errorResponse.error);
                    } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                        let parsed = JSON.parse(_response.body);
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetMileProvisionsResponse');
                        _callback(null, parsed, _context);
                        _fulfill(parsed);
                    } else {
                        errorResponse = _baseController.validateResponse(_context);
                        _callback(errorResponse.error,
                        errorResponse.response,
                        errorResponse.context);
                        _reject(errorResponse.error);
                    }
                });
            }))
        .catch((err) => {
            _callback(err, null, null);
            return Promise.reject(err);
        });
    }
}
module.exports = PayWithMilesController;
