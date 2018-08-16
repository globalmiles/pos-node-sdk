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

class EarnMilesController {
    /**
     * After getting customer info by Get Customer Info endpoint and finished the shopping
     * procedure in POS terminal, use this endpoint to complete transaction.
     * You can try this endpoint with configuring client parameters in Console Tab below. Test
     * OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
     * and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
     *
     * @param {TransactionResultRequest} body The body of the request.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createTransactionResult(body, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri();

        const _queryBuilder = `${_baseUri}${'/v2/pos/transaction_result'}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        const tokenSet = _oAuthManager.isTokenSet();
        if (!tokenSet) {
            const oAuthPromise = _oAuthManager.authorize();
            // eslint-disable-next-line arrow-body-style
            oAuthPromise.then(() => {
                return EarnMilesController.createTransactionResultAction(_queryUrl, _callback, body);
            }, (err) => {
                _callback(err, null, null);
                return Promise.reject(err);
            });
        } else {
            return EarnMilesController.createTransactionResultAction(_queryUrl, _callback, body);
        }
        // eslint-disable-next-line consistent-return
        return; // eslint-disable-line no-useless-return
    }
    static createTransactionResultAction(_queryUrl, _callback, body) {
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
                        parsed = _baseController.getObjectMapper().mapObject(parsed, 'TransactionResultResponse');
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
module.exports = EarnMilesController;
