/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of StartMilePaymentRequest
 */
class StartMilePaymentRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.totalReceiptAmount =
          this.constructor.getValue(obj.totalReceiptAmount
     || obj.total_receipt_amount);
        this.usedMilesAsAmount =
          this.constructor.getValue(obj.usedMilesAsAmount
     || obj.used_miles_as_amount);
        this.currency = this.constructor.getValue(obj.currency);
        this.recognitionId = this.constructor.getValue(obj.recognitionId || obj.recognition_id);
        this.terminalId = this.constructor.getValue(obj.terminalId || obj.terminal_id);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'totalReceiptAmount', realName: 'total_receipt_amount' },
            { name: 'usedMilesAsAmount', realName: 'used_miles_as_amount' },
            { name: 'currency', realName: 'currency' },
            { name: 'recognitionId', realName: 'recognition_id' },
            { name: 'terminalId', realName: 'terminal_id' },
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

module.exports = StartMilePaymentRequest;
