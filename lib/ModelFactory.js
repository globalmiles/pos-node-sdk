/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const CompleteBonusPaymentResponse = require('../lib/Models/CompleteBonusPaymentResponse');
const CancelBonusPaymentResponse = require('../lib/Models/CancelBonusPaymentResponse');
const GetBonusProvisionsRequest = require('../lib/Models/GetBonusProvisionsRequest');
const GetBonusProvisionsResponse = require('../lib/Models/GetBonusProvisionsResponse');
const BonusProvision = require('../lib/Models/BonusProvision');
const OAuthRequest = require('../lib/Models/OAuthRequest');
const OAuthResponse = require('../lib/Models/OAuthResponse');
const TransactionResultRequest = require('../lib/Models/TransactionResultRequest');
const StartBonusPaymentRequest = require('../lib/Models/StartBonusPaymentRequest');
const CancelBonusPaymentRequest = require('../lib/Models/CancelBonusPaymentRequest');
const GetCustomerInfoResponse = require('../lib/Models/GetCustomerInfoResponse');
const GetCustomerInfoRequest = require('../lib/Models/GetCustomerInfoRequest');
const Discount = require('../lib/Models/Discount');
const Payment = require('../lib/Models/Payment');
const Invoice = require('../lib/Models/Invoice');
const TransactionResultResponse = require('../lib/Models/TransactionResultResponse');
const StartBonusPaymentResponse = require('../lib/Models/StartBonusPaymentResponse');
const CompleteBonusPaymentRequest = require('../lib/Models/CompleteBonusPaymentRequest');
const OAuthToken = require('../lib/Models/OAuthToken');
const OAuthProviderException = require('../lib/Exceptions/OAuthProviderException');

const classMap = {
    CompleteBonusPaymentResponse,
    CancelBonusPaymentResponse,
    GetBonusProvisionsRequest,
    GetBonusProvisionsResponse,
    BonusProvision,
    OAuthRequest,
    OAuthResponse,
    TransactionResultRequest,
    StartBonusPaymentRequest,
    CancelBonusPaymentRequest,
    GetCustomerInfoResponse,
    GetCustomerInfoRequest,
    Discount,
    Payment,
    Invoice,
    TransactionResultResponse,
    StartBonusPaymentResponse,
    CompleteBonusPaymentRequest,
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
