/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const CompleteMilePaymentResponse = require('../lib/Models/CompleteMilePaymentResponse');
const CancelMilePaymentResponse = require('../lib/Models/CancelMilePaymentResponse');
const GetMileProvisionsRequest = require('../lib/Models/GetMileProvisionsRequest');
const GetBonusProvisionsResponse = require('../lib/Models/GetBonusProvisionsResponse');
const MileProvision = require('../lib/Models/MileProvision');
const OAuthRequest = require('../lib/Models/OAuthRequest');
const OAuthResponse = require('../lib/Models/OAuthResponse');
const TransactionResultRequest = require('../lib/Models/TransactionResultRequest');
const StartMilePaymentRequest = require('../lib/Models/StartMilePaymentRequest');
const CancelMilePaymentRequest = require('../lib/Models/CancelMilePaymentRequest');
const GetCustomerInfoResponse = require('../lib/Models/GetCustomerInfoResponse');
const GetCustomerInfoRequest = require('../lib/Models/GetCustomerInfoRequest');
const Discount = require('../lib/Models/Discount');
const Payment = require('../lib/Models/Payment');
const Invoice = require('../lib/Models/Invoice');
const TransactionResultResponse = require('../lib/Models/TransactionResultResponse');
const StartMilePaymentResponse = require('../lib/Models/StartMilePaymentResponse');
const CompleteMilePaymentRequest = require('../lib/Models/CompleteMilePaymentRequest');
const OAuthToken = require('../lib/Models/OAuthToken');
const OAuthProviderException = require('../lib/Exceptions/OAuthProviderException');

const classMap = {
    CompleteMilePaymentResponse,
    CancelMilePaymentResponse,
    GetMileProvisionsRequest,
    GetBonusProvisionsResponse,
    MileProvision,
    OAuthRequest,
    OAuthResponse,
    TransactionResultRequest,
    StartMilePaymentRequest,
    CancelMilePaymentRequest,
    GetCustomerInfoResponse,
    GetCustomerInfoRequest,
    Discount,
    Payment,
    Invoice,
    TransactionResultResponse,
    StartMilePaymentResponse,
    CompleteMilePaymentRequest,
    OAuthToken,
    OAuthProviderException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
