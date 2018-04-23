/**
  * @module globalmilespos
  *
  * By integrating GlobalMiles POS APIs, Merchants can offer to the GlobalMiles users  earn mile
  * and shop with their miles in their in-stores.  Work Flow: Common to dos both for Earn/Pay with
  * miles.   We will provide Client ID/ Secret Key. Ask us Please. Before using any APIS of us, you
  * need to authorise by using your Client ID / Secret Key  to get access_token.   During shopping
  * cashier ask GlobalMiles user  for  GSM No or QR code and enter into POS.  POS software Post
  * this info to GlobalMiles Server by using the API  GetCustomerInfo and get uniq identifier in
  * order to  use at TransactionResult API  if you follow EarnMiles work Flow or  use at
  * StartBonusPayment API if you follow Use your Miles work flow.   Earn Mile:  After Getting
  * Customer Info, Cashier will finalise the payment, as the payment done at POS post
  * TransactionResult .  Use Your Mile(Bonus):  After Getting Customer Info, As all the items added
  * to basket, Cashier ask for the payment method as the Globalmiles selected as payment method,
  * Pos software Post this info GlobalMiles Server by using the API  StartBonusPayment .  An OTP
  * code is send to the Customer mobile phone. The Customer/cashier enter this OTP into POS and
  * this info Post to Globalmiles server by the BonusComplete API.  Cancel Payment with Miles: By
  * using Get Bonus Provision & CancelBonusPayment APIs  it allows to  list related sale on the POS
  * and Cancel it .
  */

'use strict';

const Configuration = require('./configuration');
const OAuthManager = require('./OAuthManager');
const Environments = require('./Environments');
const EarnMilesController = require('./Controllers/EarnMilesController');
const AuthenticationController = require('./Controllers/AuthenticationController');
const CommonController = require('./Controllers/CommonController');
const PayWithMilesController = require('./Controllers/PayWithMilesController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const CompleteMilePaymentResponse = require('./Models/CompleteMilePaymentResponse');
const CancelMilePaymentResponse = require('./Models/CancelMilePaymentResponse');
const GetMileProvisionsRequest = require('./Models/GetMileProvisionsRequest');
const GetBonusProvisionsResponse = require('./Models/GetBonusProvisionsResponse');
const MileProvision = require('./Models/MileProvision');
const OAuthRequest = require('./Models/OAuthRequest');
const OAuthResponse = require('./Models/OAuthResponse');
const TransactionResultRequest = require('./Models/TransactionResultRequest');
const StartMilePaymentRequest = require('./Models/StartMilePaymentRequest');
const CancelMilePaymentRequest = require('./Models/CancelMilePaymentRequest');
const GetCustomerInfoResponse = require('./Models/GetCustomerInfoResponse');
const GetCustomerInfoRequest = require('./Models/GetCustomerInfoRequest');
const Discount = require('./Models/Discount');
const Payment = require('./Models/Payment');
const Invoice = require('./Models/Invoice');
const TransactionResultResponse = require('./Models/TransactionResultResponse');
const StartMilePaymentResponse = require('./Models/StartMilePaymentResponse');
const CompleteMilePaymentRequest = require('./Models/CompleteMilePaymentRequest');
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
    EarnMilesController,
    AuthenticationController,
    CommonController,
    PayWithMilesController,
    OAuthAuthorizationController,
    // models of globalmilespos
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
    OAuthProviderErrorEnum,
    // exceptions of globalmilespos
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
