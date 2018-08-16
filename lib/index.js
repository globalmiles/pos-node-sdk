/**
  * @module globalmilespos
  *
  * By integrating Global Miles POS APIs, Merchants can offer to the Global Miles users  earn mile
  * and shop with their miles in their in-stores.  Work Flow: Common to dos both for Earn/Pay with
  * miles.   We will provide Client ID/ Secret Key. Before using any endpoints of us, you need to
  * authorize by using your Client ID / Client Secret to get access_token.  During shopping cashier
  * ask GlobalMiles user for GSM / FFP ID / Code or EMail and enter into POS.  POS software Post
  * this info to Global Miles Server by using the endpoint GetCustomerInfo and get unique
  * identifier in order to use at TransactionResult endpoint if you follow EarnMiles work Flow or
  * use at  StartMilePayment endpoint if you follow use your Miles work flow.   Earn Mile:  After
  * Getting Customer Info, Cashier will finalize the payment, as the payment done at POS post
  * TransactionResult.  Pay with Miles: After Getting Customer Info, as all the items added to
  * basket, Cashier ask for the payment method as the Global Miles selected as payment method, Pos
  * software Post this info Global Miles Server by using the endpoint StartMilePayment.  An OTP
  * code is send to the Customer mobile phone. The Customer/cashier enter this OTP into POS and
  * this info Post to Global Miles server by the CompleteMilePayment endpoint.  Cancel Payment with
  * Miles: By using Get Mile Provision & CancelMilePayment endpoints  it allows to  list related
  * sale on the POS and Cancel it .
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const PayWithMilesController = require('./Controllers/PayWithMilesController');
const AuthenticationController = require('./Controllers/AuthenticationController');
const EarnMilesController = require('./Controllers/EarnMilesController');
const CommonController = require('./Controllers/CommonController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const CompleteMilePaymentRequest = require('./Models/CompleteMilePaymentRequest');
const StartMilePaymentResponse = require('./Models/StartMilePaymentResponse');
const Invoice = require('./Models/Invoice');
const Payment = require('./Models/Payment');
const GetCustomerInfoResponse = require('./Models/GetCustomerInfoResponse');
const Discount = require('./Models/Discount');
const CancelMilePaymentRequest = require('./Models/CancelMilePaymentRequest');
const OAuthResponse = require('./Models/OAuthResponse');
const OAuthRequest = require('./Models/OAuthRequest');
const MileProvision = require('./Models/MileProvision');
const TransactionResultRequest = require('./Models/TransactionResultRequest');
const CancelMilePaymentResponse = require('./Models/CancelMilePaymentResponse');
const CompleteMilePaymentResponse = require('./Models/CompleteMilePaymentResponse');
const StartMilePaymentRequest = require('./Models/StartMilePaymentRequest');
const GetMileProvisionsResponse = require('./Models/GetMileProvisionsResponse');
const GetTerminalInfoResponse = require('./Models/GetTerminalInfoResponse');
const TransactionResultResponse = require('./Models/TransactionResultResponse');
const ReceiptPictureRequest = require('./Models/ReceiptPictureRequest');
const ReceiptPictureResponse = require('./Models/ReceiptPictureResponse');
const OAuthToken = require('./Models/OAuthToken');
const OAuthProviderErrorEnum = require('./Models/OAuthProviderErrorEnum');
const OAuthProviderException = require('./Exceptions/OAuthProviderException');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of globalmilespos
    Configuration,
    Environments,
    OAuthManager,
    // controllers of globalmilespos
    PayWithMilesController,
    AuthenticationController,
    EarnMilesController,
    CommonController,
    OAuthAuthorizationController,
    // models of globalmilespos
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
    OAuthProviderErrorEnum,
    // exceptions of globalmilespos
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
