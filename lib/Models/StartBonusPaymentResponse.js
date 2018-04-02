/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of StartBonusPaymentResponse
 */
class StartBonusPaymentResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.returnCode = this.constructor.getValue(obj.returnCode);
        this.returnDesc = this.constructor.getValue(obj.returnDesc);
        this.bonusPaymentProvisionId = this.constructor.getValue(obj.bonusPaymentProvisionId);
        this.oTPNeeded = this.constructor.getValue(obj.oTPNeeded || obj.OTPNeeded);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'returnCode', realName: 'returnCode' },
            { name: 'returnDesc', realName: 'returnDesc' },
            { name: 'bonusPaymentProvisionId', realName: 'bonusPaymentProvisionId' },
            { name: 'oTPNeeded', realName: 'OTPNeeded' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = StartBonusPaymentResponse;
