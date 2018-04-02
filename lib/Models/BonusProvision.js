/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BonusProvision
 */
class BonusProvision extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.bonusPaymentProvisionId = this.constructor.getValue(obj.bonusPaymentProvisionId);
        this.usedBonusAmount = this.constructor.getValue(obj.usedBonusAmount);
        this.dateTime = this.constructor.getValue(obj.dateTime);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'bonusPaymentProvisionId', realName: 'bonusPaymentProvisionId' },
            { name: 'usedBonusAmount', realName: 'usedBonusAmount' },
            { name: 'dateTime', realName: 'dateTime' },
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

module.exports = BonusProvision;
