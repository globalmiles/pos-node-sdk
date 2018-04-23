/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetMileProvisionsRequest
 */
class GetMileProvisionsRequest extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.readCode = this.constructor.getValue(obj.readCode);
        this.readCodeType = this.constructor.getValue(obj.readCodeType);
        this.oKCSicilNo = this.constructor.getValue(obj.oKCSicilNo || obj.OKCSicilNo);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'readCode', realName: 'readCode' },
            { name: 'readCodeType', realName: 'readCodeType' },
            { name: 'oKCSicilNo', realName: 'OKCSicilNo' },
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

module.exports = GetMileProvisionsRequest;
