# Getting started

By integrating Global Miles POS APIs, Merchants can offer to the Global Miles users  earn mile and shop with their miles in their in-stores.

Work Flow:
Common to dos both for Earn/Pay with miles. 

We will provide Client ID/ Secret Key.
Before using any endpoints of us, you need to authorize by using your Client ID / Client Secret to get access_token. 
During shopping cashier ask GlobalMiles user for GSM / FFP ID / Code or EMail and enter into POS. 
POS software Post this info to Global Miles Server by using the endpoint GetCustomerInfo and get unique identifier in order to use at TransactionResult endpoint if you follow EarnMiles work Flow or use at  StartMilePayment endpoint if you follow use your Miles work flow. 

Earn Mile: 
After Getting Customer Info, Cashier will finalize the payment, as the payment done at POS post TransactionResult.

Pay with Miles:
After Getting Customer Info, as all the items added to basket, Cashier ask for the payment method as the Global Miles selected as payment method, Pos software Post this info Global Miles Server by using the endpoint StartMilePayment.

An OTP code is send to the Customer mobile phone. The Customer/cashier enter this OTP into POS and this info Post to Global Miles server by the CompleteMilePayment endpoint.

Cancel Payment with Miles:
By using Get Mile Provision & CancelMilePayment endpoints  it allows to  list related sale on the POS and Cancel it .

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=GlobalMilesPos-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=GlobalMilesPos-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `GlobalMilesPos ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=GlobalMilesPos-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=GlobalMilesPos-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=GlobalMilesPos-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=GlobalMilesPos-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Global Miles POS APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Global%20Miles%20POS%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| oAuthClientId | OAuth 2 Client ID |
| oAuthClientSecret | OAuth 2 Client Secret |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.oAuthClientId = "oAuthClientId"; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = "oAuthClientSecret"; // OAuth 2 Client Secret

```

You must now authorize the client.

### Authorizing your client


This SDK uses *OAuth 2.0 authorization* to authorize the client.

The `authorize()` method will exchange the OAuth client credentials for an *access token*.
The access token is an object containing information for authorizing client requests.


```JavaScript
const tokenPromise = oAuthManager.authorize();
```
The Node.js SDK supports both callbacks and promises. So, the authorize call returns a promise and also returns response back in the callback (if one is provided)

The client can now make authorized endpoint calls.




### Storing an access token for reuse

It is recommended that you store the access token for reuse.

This code snippet stores the access token in a data store. For this example, [node-localstorage](https://www.npmjs.com/package/node-localstorage) is being used as the data store.
```JavaScript
const lib = require('lib');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

localStorage.setItem('token', lib.Configuration.oAuthToken);
```

### Creating a client from a stored token

To authorize a client from a stored access token, just set the access token in `Configuration` along with the other configuration parameters before making endpoint calls:

```JavaScript
// load token later...
const lib = require('lib');
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

lib.Configuration.oAuthToken = localStorage.getItem('token');
```

### Complete example
In this example, `app.js` will check if the access token has been set in the SDK. If it has been, API calls can be made. Otherwise, client has to be authorized first before making API calls.  
This example makes use of [node-localstorage](https://www.npmjs.com/package/node-localstorage) for handling data persistence.

#### `app.js`

```js
const lib = require('lib');
const oAuthManager = lib.OAuthManager;

lib.Configuration.oAuthClientId = 'oAuthClientId'; // OAuth 2 Client ID
lib.Configuration.oAuthClientSecret = 'oAuthClientSecret'; // OAuth 2 Client Secret

// this method will be called whenever the token updates
// you can update the storage you're using with the updated token
lib.Configuration.oAuthTokenUpdateCallback = (token) => {
    // token is the updated access_token
};

if (oAuthManager.isTokenSet()) {
    // token is already stored in the client
    // make API calls as required
} else {
    const scopes = [];
    const promise = oAuthManager.authorize(scopes);
    promise.then((success) => {
        // client authorized. API calls can be made
    }, (exception) => {
        // error occurred, `exception` will be of type lib/Exceptions/OAuthProviderException
    });
}
```




# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [PayWithMilesController](#pay_with_miles_controller)
* [AuthenticationController](#authentication_controller)
* [EarnMilesController](#earn_miles_controller)
* [CommonController](#common_controller)

## <a name="pay_with_miles_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PayWithMilesController") PayWithMilesController

### Get singleton instance

The singleton instance of the ``` PayWithMilesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PayWithMilesController;
```

### <a name="delete_cancel_mile_payment"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.deleteCancelMilePayment") deleteCancelMilePayment

> In order to cancel payment with miles you can use this endpoint. It allows to cancel payment only related GSM and terminal ID numbers.
> 
> You can try this endpoint with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function deleteCancelMilePayment(milesPaymentProvisionId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| milesPaymentProvisionId |  ``` Required ```  | Provision ID. |
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var milesPaymentProvisionId = 236;
    var body = new CancelMilePaymentRequest({"key":"value"});

    controller.deleteCancelMilePayment(milesPaymentProvisionId, body, function(error, response, context) {

    
    });
```



### <a name="update_complete_mile_payment"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.updateCompleteMilePayment") updateCompleteMilePayment

> In order to finalize payment with miles use this endpoint. Use the OTP number which is send to user GSM on the Request body.
> 
> You can try this endpoint with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function updateCompleteMilePayment(milesPaymentProvisionId, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| milesPaymentProvisionId |  ``` Required ```  | Provision ID. |
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var milesPaymentProvisionId = 236;
    var body = new CompleteMilePaymentRequest({"key":"value"});

    controller.updateCompleteMilePayment(milesPaymentProvisionId, body, function(error, response, context) {

    
    });
```



### <a name="create_start_mile_payment"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.createStartMilePayment") createStartMilePayment

> After getting customer info's and RecognitionID to start Payment with Miles Use this endpoint.
> After calling this endpoint successfully OTP code send to customer GSM number. This OTP must be used with Complete endpoint in order to complete payment.
> 
> You can try this endpoint with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function createStartMilePayment(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new StartMilePaymentRequest({"key":"value"});

    controller.createStartMilePayment(body, function(error, response, context) {

    
    });
```



### <a name="get_mile_provisions"></a>![Method: ](https://apidocs.io/img/method.png ".PayWithMilesController.getMileProvisions") getMileProvisions

> Before cancelling the payment with miles this endpoint is used to list the related sale.
> 
> You can try this endpoint with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function getMileProvisions(readCode, readCodeType, terminalId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| readCode |  ``` Required ```  | Customer Identification Method; GSM, FFP ID, CODE or EMAIL. |
| readCodeType |  ``` Required ```  | 1: GSM, 2: FFP ID, 3: CODE, 4: EMAIL |
| terminalId |  ``` Required ```  | Terminal ID. |



#### Example Usage

```javascript

    var readCode = read_code;
    var readCodeType = read_code_type;
    var terminalId = terminal_id;

    controller.getMileProvisions(readCode, readCodeType, terminalId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="authentication_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AuthenticationController") AuthenticationController

### Get singleton instance

The singleton instance of the ``` AuthenticationController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AuthenticationController;
```

### <a name="create_authentication"></a>![Method: ](https://apidocs.io/img/method.png ".AuthenticationController.createAuthentication") createAuthentication

> *Tags:*  ``` Skips Authentication ``` 

> An access token will allow you to make requests for the system. We support only one type of token: client_credentials


```javascript
function createAuthentication(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new OAuthRequest({"key":"value"});

    controller.createAuthentication(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="earn_miles_controller"></a>![Class: ](https://apidocs.io/img/class.png ".EarnMilesController") EarnMilesController

### Get singleton instance

The singleton instance of the ``` EarnMilesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.EarnMilesController;
```

### <a name="create_transaction_result"></a>![Method: ](https://apidocs.io/img/method.png ".EarnMilesController.createTransactionResult") createTransactionResult

> After getting customer info by Get Customer Info endpoint and finished the shopping procedure in POS terminal, use this endpoint to complete transaction.
> 
> You can try this endpoint with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function createTransactionResult(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new TransactionResultRequest({"key":"value"});

    controller.createTransactionResult(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="common_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CommonController") CommonController

### Get singleton instance

The singleton instance of the ``` CommonController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CommonController;
```

### <a name="get_terminal_info"></a>![Method: ](https://apidocs.io/img/method.png ".CommonController.getTerminalInfo") getTerminalInfo

> This endpoint will help you to get terminal settings in order to use internal operations.
> 
> You can try this endpoint with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function getTerminalInfo(terminalId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| terminalId |  ``` Required ```  | Terminal ID. |



#### Example Usage

```javascript

    var terminalId = terminal_id;

    controller.getTerminalInfo(terminalId, function(error, response, context) {

    
    });
```



### <a name="get_customer_info"></a>![Method: ](https://apidocs.io/img/method.png ".CommonController.getCustomerInfo") getCustomerInfo

> This endpoint will help you to get customer's miles amount as a currency and unique identifier value. Unique identifier value must be used by Transaction Result endpint in order to complete shopping.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function getCustomerInfo(readCode, readCodeType, totalAmount, totalVatAmount, currency, partnerId, branchId, terminalId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| readCode |  ``` Required ```  | Customer Identification Method; GSM, FFP ID, CODE or EMAIL |
| readCodeType |  ``` Required ```  | 1: GSM, 2: FFP ID, 3: CODE, 4: EMAIL |
| totalAmount |  ``` Required ```  | Total receipt amount. |
| totalVatAmount |  ``` Required ```  | Total tax value. |
| currency |  ``` Required ```  | ISO-4217 3-letter currency code. |
| partnerId |  ``` Required ```  | Partner ID. |
| branchId |  ``` Required ```  | Branch ID. |
| terminalId |  ``` Required ```  | Terminal ID. |



#### Example Usage

```javascript

    var readCode = read_code;
    var readCodeType = read_code_type;
    var totalAmount = 236.314829905198;
    var totalVatAmount = 236.314829905198;
    var currency = 'currency';
    var partnerId = 236;
    var branchId = 236;
    var terminalId = terminal_id;

    controller.getCustomerInfo(readCode, readCodeType, totalAmount, totalVatAmount, currency, partnerId, branchId, terminalId, function(error, response, context) {

    
    });
```



### <a name="upload_receipt_pictures"></a>![Method: ](https://apidocs.io/img/method.png ".CommonController.uploadReceiptPictures") uploadReceiptPictures

> This endpoint will help you to upload receipt pictures which is related with a recognition ID and a transaction result.
> 
> You can try this endoint with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is b30359c21700fd6f2b91154adcb7b37bab3e7e0a33e22682e5dd149d7a6ac4df
> and OAuthClientSecret is 4bc4335faad41d6a23cd059e495005f00496a64e34e6187b1d72695a8debd28c


```javascript
function uploadReceiptPictures(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new ReceiptPictureRequest({"key":"value"});

    controller.uploadReceiptPictures(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



