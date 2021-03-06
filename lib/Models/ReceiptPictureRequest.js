/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ReceiptPictureRequest
 */
class ReceiptPictureRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.terminalId = this.constructor.getValue(obj.terminalId || obj.terminal_id);
        this.recognitionId = this.constructor.getValue(obj.recognitionId || obj.recognition_id);
        this.fileName = this.constructor.getValue(obj.fileName || obj.file_name);
        this.picture = this.constructor.getValue(obj.picture);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'terminalId', realName: 'terminal_id' },
            { name: 'recognitionId', realName: 'recognition_id' },
            { name: 'fileName', realName: 'file_name' },
            { name: 'picture', realName: 'picture' },
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

module.exports = ReceiptPictureRequest;
