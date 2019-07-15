/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of TransactionResultResponse
 */
class TransactionResultResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.returnCode = this.constructor.getValue(obj.returnCode || obj.return_code);
        this.returnDesc = this.constructor.getValue(obj.returnDesc || obj.return_desc);
        this.qrData = this.constructor.getValue(obj.qrData || obj.qr_data);
        this.extraInfo = this.constructor.getValue(obj.extraInfo || obj.extra_info);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'returnCode', realName: 'return_code' },
            { name: 'returnDesc', realName: 'return_desc' },
            { name: 'qrData', realName: 'qr_data' },
            { name: 'extraInfo', realName: 'extra_info' },
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

module.exports = TransactionResultResponse;
