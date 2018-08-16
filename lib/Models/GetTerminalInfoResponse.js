/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of GetTerminalInfoResponse
 */
class GetTerminalInfoResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.returnCode = this.constructor.getValue(obj.returnCode || obj.return_code);
        this.returnDesc = this.constructor.getValue(obj.returnDesc || obj.return_desc);
        this.terminalId = this.constructor.getValue(obj.terminalId || obj.terminal_id);
        this.receiptHeader = this.constructor.getValue(obj.receiptHeader || obj.receipt_header);
        this.receiptFooter = this.constructor.getValue(obj.receiptFooter || obj.receipt_footer);
        this.partnerId = this.constructor.getValue(obj.partnerId || obj.partner_id);
        this.branchId = this.constructor.getValue(obj.branchId || obj.branch_id);
        this.merchantIdMandatory =
          this.constructor.getValue(obj.merchantIdMandatory
     || obj.merchant_id_mandatory);
        this.defaultCurrency =
          this.constructor.getValue(obj.defaultCurrency
     || obj.default_currency);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'returnCode', realName: 'return_code' },
            { name: 'returnDesc', realName: 'return_desc' },
            { name: 'terminalId', realName: 'terminal_id' },
            { name: 'receiptHeader', realName: 'receipt_header' },
            { name: 'receiptFooter', realName: 'receipt_footer' },
            { name: 'partnerId', realName: 'partner_id' },
            { name: 'branchId', realName: 'branch_id' },
            { name: 'merchantIdMandatory', realName: 'merchant_id_mandatory' },
            { name: 'defaultCurrency', realName: 'default_currency' },
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

module.exports = GetTerminalInfoResponse;
