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

class CommonController {
    /**
     * This endpoint will help you to get terminal settings in order to use internal operations.
     * You can try this endpoint with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     *
     * @param {string} terminalId Terminal ID.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getTerminalInfo(terminalId, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/v2/pos/terminal_info'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            terminal_id: terminalId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const oAuthPromise = _oAuthManager.authorize();
            // eslint-disable-next-line arrow-body-style
            oAuthPromise.then(() => {
                return CommonController.getTerminalInfoAction(_queryUrl, _callback, terminalId);
            }, (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
        } else {
            return CommonController.getTerminalInfoAction(_queryUrl, _callback, terminalId);
        }
        // eslint-disable-next-line consistent-return
        return; // eslint-disable-line no-useless-return
    }
    static getTerminalInfoAction(_queryUrl, _callback, terminalId) {
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
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetTerminalInfoResponse');
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
     * This endpoint will help you to get customer's miles amount as a currency and unique
     * identifier value. Unique identifier value must be used by Transaction Result endpint in
     * order to complete shopping.
     * You can try this API with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     * You can try this API with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     *
     * @param {string} readCode Customer Identification Method; GSM, FFP ID, CODE or EMAIL
     * @param {string} readCodeType 1: GSM, 2: FFP ID, 3: CODE, 4: EMAIL
     * @param {double} totalAmount Total receipt amount.
     * @param {double} totalVatAmount Total tax value.
     * @param {string} currency ISO-4217 3-letter currency code.
     * @param {int} partnerId Partner ID.
     * @param {int} branchId Branch ID.
     * @param {string} terminalId Terminal ID.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getCustomerInfo(readCode,
        readCodeType,
        totalAmount,
        totalVatAmount,
        currency,
        partnerId,
        branchId,
        terminalId,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        let _queryBuilder = `${_baseUri}${'/v2/pos/customer_info'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            read_code: readCode,
            read_code_type: readCodeType,
            total_amount: totalAmount,
            total_vat_amount: totalVatAmount,
            currency,
            partner_id: partnerId,
            branch_id: branchId,
            terminal_id: terminalId,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const oAuthPromise = _oAuthManager.authorize();
            // eslint-disable-next-line arrow-body-style
            oAuthPromise.then(() => {
                return CommonController.getCustomerInfoAction(_queryUrl, _callback, readCode, readCodeType, totalAmount, totalVatAmount, currency, partnerId, branchId, terminalId);
            }, (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
        } else {
            return CommonController.getCustomerInfoAction(_queryUrl, _callback, readCode, readCodeType, totalAmount, totalVatAmount, currency, partnerId, branchId, terminalId);
        }
        // eslint-disable-next-line consistent-return
        return; // eslint-disable-line no-useless-return
    }
    static getCustomerInfoAction(_queryUrl, _callback, readCode, readCodeType, totalAmount, totalVatAmount, currency, partnerId, branchId, terminalId) {
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
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetCustomerInfoResponse');
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
     * This endpoint will help you to upload receipt pictures which is related with a recognition
     * ID and a transaction result.
     * You can try this endoint with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     * You can try this API with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     *
     * @param {ReceiptPictureRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static uploadReceiptPictures(body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/v2/pos/receipt_pictures'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const oAuthPromise = _oAuthManager.authorize();
            // eslint-disable-next-line arrow-body-style
            oAuthPromise.then(() => {
                return CommonController.uploadReceiptPicturesAction(_queryUrl, _callback, body);
            }, (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
        } else {
            return CommonController.uploadReceiptPicturesAction(_queryUrl, _callback, body);
        }
        // eslint-disable-next-line consistent-return
        return; // eslint-disable-line no-useless-return
    }
    static uploadReceiptPicturesAction(_queryUrl, _callback, body) {
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
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'ReceiptPictureResponse');
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
module.exports = CommonController;
