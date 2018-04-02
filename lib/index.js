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
const PaymentSystemsController = require('./Controllers/PaymentSystemsController');
const AuthenticationController = require('./Controllers/AuthenticationController');
const CommonController = require('./Controllers/CommonController');
const BonusPaymentsController = require('./Controllers/BonusPaymentsController');
const OAuthAuthorizationController = require('./Controllers/OAuthAuthorizationController');
const CompleteBonusPaymentResponse = require('./Models/CompleteBonusPaymentResponse');
const CancelBonusPaymentResponse = require('./Models/CancelBonusPaymentResponse');
const GetBonusProvisionsRequest = require('./Models/GetBonusProvisionsRequest');
const GetBonusProvisionsResponse = require('./Models/GetBonusProvisionsResponse');
const BonusProvision = require('./Models/BonusProvision');
const OAuthRequest = require('./Models/OAuthRequest');
const OAuthResponse = require('./Models/OAuthResponse');
const TransactionResultRequest = require('./Models/TransactionResultRequest');
const StartBonusPaymentRequest = require('./Models/StartBonusPaymentRequest');
const CancelBonusPaymentRequest = require('./Models/CancelBonusPaymentRequest');
const GetCustomerInfoResponse = require('./Models/GetCustomerInfoResponse');
const GetCustomerInfoRequest = require('./Models/GetCustomerInfoRequest');
const Discount = require('./Models/Discount');
const Payment = require('./Models/Payment');
const Invoice = require('./Models/Invoice');
const TransactionResultResponse = require('./Models/TransactionResultResponse');
const StartBonusPaymentResponse = require('./Models/StartBonusPaymentResponse');
const CompleteBonusPaymentRequest = require('./Models/CompleteBonusPaymentRequest');
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
    PaymentSystemsController,
    AuthenticationController,
    CommonController,
    BonusPaymentsController,
    OAuthAuthorizationController,
    // models of globalmilespos
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
    OAuthProviderErrorEnum,
    // exceptions of globalmilespos
    OAuthProviderException,
    APIException,
};

module.exports = initializer;
