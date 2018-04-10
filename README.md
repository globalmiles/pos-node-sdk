# Getting started

By integrating GlobalMiles POS APIs, Merchants can offer to the GlobalMiles users  earn mile and shop with their miles in their in-stores.

Work Flow:
Common to dos both for Earn/Pay with miles. 

We will provide Client ID/ Secret Key. Ask us Please.
Before using any APIS of us, you need to authorise by using your Client ID / Secret Key  to get access_token.  
During shopping cashier ask GlobalMiles user  for  GSM No or QR code and enter into POS. 
POS software Post this info to GlobalMiles Server by using the API  GetCustomerInfo and get uniq identifier in order to  use at TransactionResult API  if you follow EarnMiles work Flow or  use at  StartBonusPayment API if you follow Use your Miles work flow. 

Earn Mile: 
After Getting Customer Info, Cashier will finalise the payment, as the payment done at POS post TransactionResult .

Use Your Mile(Bonus):

After Getting Customer Info, As all the items added to basket, Cashier ask for the payment method as the Globalmiles selected as payment method, Pos software Post this info GlobalMiles Server by using the API  StartBonusPayment .

An OTP code is send to the Customer mobile phone. The Customer/cashier enter this OTP into POS and this info Post to Globalmiles server by the BonusComplete API.

Cancel Payment with Miles:
By using Get Bonus Provision & CancelBonusPayment APIs  it allows to  list related sale on the POS and Cancel it .

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

* [PaymentSystemsController](#payment_systems_controller)
* [AuthenticationController](#authentication_controller)
* [CommonController](#common_controller)
* [BonusPaymentsController](#bonus_payments_controller)

## <a name="payment_systems_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PaymentSystemsController") PaymentSystemsController

### Get singleton instance

The singleton instance of the ``` PaymentSystemsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PaymentSystemsController;
```

### <a name="create_transaction_result"></a>![Method: ](https://apidocs.io/img/method.png ".PaymentSystemsController.createTransactionResult") createTransactionResult

> After getting customer info by Get customer Info API and finished the shopping procedure in POS terminal, use this API to complete transaction.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is 552698b91cae424b9b3ddee14eea6faf564f1b5fb7764854b73b2763e0e68c66
> and OAuthClientSecret is d0a8b00a3d754ea5a013465bcc23f6efa89e9dfb080a4f4eb460e3306653d92b


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

## <a name="common_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CommonController") CommonController

### Get singleton instance

The singleton instance of the ``` CommonController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CommonController;
```

### <a name="create_get_customer_info"></a>![Method: ](https://apidocs.io/img/method.png ".CommonController.createGetCustomerInfo") createGetCustomerInfo

> This API will help you to retrieve customer's mil quantity and unique identifier value.Unique identifier value must be used by Transaction Result API in order to complete shopping.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is 552698b91cae424b9b3ddee14eea6faf564f1b5fb7764854b73b2763e0e68c66
> and OAuthClientSecret is d0a8b00a3d754ea5a013465bcc23f6efa89e9dfb080a4f4eb460e3306653d92b


```javascript
function createGetCustomerInfo(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new GetCustomerInfoRequest({"key":"value"});

    controller.createGetCustomerInfo(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="bonus_payments_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BonusPaymentsController") BonusPaymentsController

### Get singleton instance

The singleton instance of the ``` BonusPaymentsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.BonusPaymentsController;
```

### <a name="create_start_bonus_payment"></a>![Method: ](https://apidocs.io/img/method.png ".BonusPaymentsController.createStartBonusPayment") createStartBonusPayment

> After getting customer info's and RecognitionID to start Payment with Miles Use this API.
> After calling this API successfully OTP code send to customer GSM number. This OTP must be used with Complete API in order to complete sale.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is 552698b91cae424b9b3ddee14eea6faf564f1b5fb7764854b73b2763e0e68c66
> and OAuthClientSecret is d0a8b00a3d754ea5a013465bcc23f6efa89e9dfb080a4f4eb460e3306653d92b


```javascript
function createStartBonusPayment(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new StartBonusPaymentRequest({"key":"value"});

    controller.createStartBonusPayment(body, function(error, response, context) {

    
    });
```



### <a name="create_complete_bonus_payment"></a>![Method: ](https://apidocs.io/img/method.png ".BonusPaymentsController.createCompleteBonusPayment") createCompleteBonusPayment

> In order to finalize payment with Miles use this API. Use the OTP number  which is send to user GSM on the Request body.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is 552698b91cae424b9b3ddee14eea6faf564f1b5fb7764854b73b2763e0e68c66
> and OAuthClientSecret is d0a8b00a3d754ea5a013465bcc23f6efa89e9dfb080a4f4eb460e3306653d92b


```javascript
function createCompleteBonusPayment(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new CompleteBonusPaymentRequest({"key":"value"});

    controller.createCompleteBonusPayment(body, function(error, response, context) {

    
    });
```



### <a name="create_cancel_bonus_payment"></a>![Method: ](https://apidocs.io/img/method.png ".BonusPaymentsController.createCancelBonusPayment") createCancelBonusPayment

> In order to cancel payment with miles you can use this API. It allows to cancel payment only related GSM and terminal ID numbers.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is 552698b91cae424b9b3ddee14eea6faf564f1b5fb7764854b73b2763e0e68c66
> and OAuthClientSecret is d0a8b00a3d754ea5a013465bcc23f6efa89e9dfb080a4f4eb460e3306653d92b


```javascript
function createCancelBonusPayment(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new CancelBonusPaymentRequest({"key":"value"});

    controller.createCancelBonusPayment(body, function(error, response, context) {

    
    });
```



### <a name="create_get_bonus_provisions"></a>![Method: ](https://apidocs.io/img/method.png ".BonusPaymentsController.createGetBonusProvisions") createGetBonusProvisions

> Before cancelling the payment with Miles this API is used to list the related sale.
> 
> You can try this API with configuring client parameters in Console Tab below. Test OAuthClientId is 552698b91cae424b9b3ddee14eea6faf564f1b5fb7764854b73b2763e0e68c66
> and OAuthClientSecret is d0a8b00a3d754ea5a013465bcc23f6efa89e9dfb080a4f4eb460e3306653d92b


```javascript
function createGetBonusProvisions(body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| body |  ``` Required ```  | The body of the request. |



#### Example Usage

```javascript

    var body = new GetBonusProvisionsRequest({"key":"value"});

    controller.createGetBonusProvisions(body, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



