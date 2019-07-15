/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetCustomerInfoResponse
 */
class GetCustomerInfoResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.returnCode = this.constructor.getValue(obj.returnCode || obj.return_code);
        this.returnDesc = this.constructor.getValue(obj.returnDesc || obj.return_desc);
        this.recognitionId = this.constructor.getValue(obj.recognitionId || obj.recognition_id);
        this.availableMilesAsAmount =
          this.constructor.getValue(obj.availableMilesAsAmount
     || obj.available_miles_as_amount);
        this.loyaltyDiscountedTotalAmount =
          this.constructor.getValue(obj.loyaltyDiscountedTotalAmount
     || obj.loyalty_discounted_total_amount);
        this.currency = this.constructor.getValue(obj.currency);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'returnCode', realName: 'return_code' },
            { name: 'returnDesc', realName: 'return_desc' },
            { name: 'recognitionId', realName: 'recognition_id' },
            { name: 'availableMilesAsAmount', realName: 'available_miles_as_amount' },
            { name: 'loyaltyDiscountedTotalAmount', realName: 'loyalty_discounted_total_amount' },
            { name: 'currency', realName: 'currency' },
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

module.exports = GetCustomerInfoResponse;
