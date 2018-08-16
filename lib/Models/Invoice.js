/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Invoice
 */
class Invoice extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.invoiceType = this.constructor.getValue(obj.invoiceType || obj.invoice_type);
        this.invoiceNumber = this.constructor.getValue(obj.invoiceNumber || obj.invoice_number);
        this.invoiceDate = this.constructor.getValue(obj.invoiceDate || obj.invoice_date);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'invoiceType', realName: 'invoice_type' },
            { name: 'invoiceNumber', realName: 'invoice_number' },
            { name: 'invoiceDate', realName: 'invoice_date' },
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

module.exports = Invoice;
