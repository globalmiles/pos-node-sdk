/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetBonusProvisionsResponse
 */
class GetBonusProvisionsResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.returnCode = this.constructor.getValue(obj.returnCode);
        this.returnDesc = this.constructor.getValue(obj.returnDesc);
        this.bonusProvisions = this.constructor.getValue(obj.bonusProvisions);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'returnCode', realName: 'returnCode' },
            { name: 'returnDesc', realName: 'returnDesc' },
            {
                name: 'bonusProvisions',
                realName: 'bonusProvisions',
                array: true,
                type: 'BonusProvision',
            },
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

module.exports = GetBonusProvisionsResponse;
