/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MileProvision
 */
class MileProvision extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.milesPaymentProvisionId =
          this.constructor.getValue(obj.milesPaymentProvisionId
     || obj.miles_payment_provision_id);
        this.usedMilesAsAmount =
          this.constructor.getValue(obj.usedMilesAsAmount
     || obj.used_miles_as_amount);
        this.currency = this.constructor.getValue(obj.currency);
        this.dateTime = this.constructor.getValue(obj.dateTime || obj.date_time);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'milesPaymentProvisionId', realName: 'miles_payment_provision_id' },
            { name: 'usedMilesAsAmount', realName: 'used_miles_as_amount' },
            { name: 'currency', realName: 'currency' },
            { name: 'dateTime', realName: 'date_time' },
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

module.exports = MileProvision;
