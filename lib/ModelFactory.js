/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const CompleteMilePaymentRequest = require('../lib/Models/CompleteMilePaymentRequest');
const StartMilePaymentResponse = require('../lib/Models/StartMilePaymentResponse');
const Invoice = require('../lib/Models/Invoice');
const Payment = require('../lib/Models/Payment');
const GetCustomerInfoResponse = require('../lib/Models/GetCustomerInfoResponse');
const Discount = require('../lib/Models/Discount');
const CancelMilePaymentRequest = require('../lib/Models/CancelMilePaymentRequest');
const OAuthResponse = require('../lib/Models/OAuthResponse');
const OAuthRequest = require('../lib/Models/OAuthRequest');
const MileProvision = require('../lib/Models/MileProvision');
const TransactionResultRequest = require('../lib/Models/TransactionResultRequest');
const CancelMilePaymentResponse = require('../lib/Models/CancelMilePaymentResponse');
const CompleteMilePaymentResponse = require('../lib/Models/CompleteMilePaymentResponse');
const StartMilePaymentRequest = require('../lib/Models/StartMilePaymentRequest');
const GetMileProvisionsResponse = require('../lib/Models/GetMileProvisionsResponse');
const GetTerminalInfoResponse = require('../lib/Models/GetTerminalInfoResponse');
const TransactionResultResponse = require('../lib/Models/TransactionResultResponse');
const ReceiptPictureRequest = require('../lib/Models/ReceiptPictureRequest');
const ReceiptPictureResponse = require('../lib/Models/ReceiptPictureResponse');
const OAuthToken = require('../lib/Models/OAuthToken');
const OAuthProviderException = require('../lib/Exceptions/OAuthProviderException');

const classMap = {
    CompleteMilePaymentRequest,
    StartMilePaymentResponse,
    Invoice,
    Payment,
    GetCustomerInfoResponse,
    Discount,
    CancelMilePaymentRequest,
    OAuthResponse,
    OAuthRequest,
    MileProvision,
    TransactionResultRequest,
    CancelMilePaymentResponse,
    CompleteMilePaymentResponse,
    StartMilePaymentRequest,
    GetMileProvisionsResponse,
    GetTerminalInfoResponse,
    TransactionResultResponse,
    ReceiptPictureRequest,
    ReceiptPictureResponse,
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
