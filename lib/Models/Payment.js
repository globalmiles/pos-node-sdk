/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Payment
 */
class Payment extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.payAmount = this.constructor.getValue(obj.payAmount || obj.pay_amount);
        this.paymentType = this.constructor.getValue(obj.paymentType || obj.payment_type);
        this.milesPaymentProvisionId =
          this.constructor.getValue(obj.milesPaymentProvisionId
     || obj.miles_payment_provision_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'payAmount', realName: 'pay_amount' },
            { name: 'paymentType', realName: 'payment_type' },
            { name: 'milesPaymentProvisionId', realName: 'miles_payment_provision_id' },
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

module.exports = Payment;
