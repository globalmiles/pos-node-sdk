/**
 * globalmilespos
 *
 * This file was automatically generated for Global Miles by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of TransactionResultRequest
 */
class TransactionResultRequest extends BaseModel {
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
        this.totalVatAmount = this.constructor.getValue(obj.totalVatAmount || obj.total_vat_amount);
        this.currency = this.constructor.getValue(obj.currency);
        this.partnerId = this.constructor.getValue(obj.partnerId || obj.partner_id);
        this.branchId = this.constructor.getValue(obj.branchId || obj.branch_id);
        this.terminalId = this.constructor.getValue(obj.terminalId || obj.terminal_id);
        this.receiptNumber = this.constructor.getValue(obj.receiptNumber || obj.receipt_number);
        this.extraNumber1 = this.constructor.getValue(obj.extraNumber1 || obj.extra_number_1);
        this.extraNumber2 = this.constructor.getValue(obj.extraNumber2 || obj.extra_number_2);
        this.recognitionId = this.constructor.getValue(obj.recognitionId || obj.recognition_id);
        this.receiptType = this.constructor.getValue(obj.receiptType || obj.receipt_type);
        this.receiptDateTime =
          this.constructor.getValue(obj.receiptDateTime
     || obj.receipt_date_time);
        this.invoiceInfo = this.constructor.getValue(obj.invoiceInfo || obj.invoice_info);
        this.payments = this.constructor.getValue(obj.payments);
        this.discounts = this.constructor.getValue(obj.discounts);
        this.extraData = this.constructor.getValue(obj.extraData || obj.extra_data);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'totalReceiptAmount', realName: 'total_receipt_amount' },
            { name: 'totalVatAmount', realName: 'total_vat_amount' },
            { name: 'currency', realName: 'currency' },
            { name: 'partnerId', realName: 'partner_id' },
            { name: 'branchId', realName: 'branch_id' },
            { name: 'terminalId', realName: 'terminal_id' },
            { name: 'receiptNumber', realName: 'receipt_number' },
            { name: 'extraNumber1', realName: 'extra_number_1' },
            { name: 'extraNumber2', realName: 'extra_number_2' },
            { name: 'recognitionId', realName: 'recognition_id' },
            { name: 'receiptType', realName: 'receipt_type' },
            { name: 'receiptDateTime', realName: 'receipt_date_time' },
            { name: 'invoiceInfo', realName: 'invoice_info', type: 'Invoice' },
            { name: 'payments', realName: 'payments', array: true, type: 'Payment' },
            { name: 'discounts', realName: 'discounts', array: true, type: 'Discount' },
            { name: 'extraData', realName: 'extra_data' },
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

module.exports = TransactionResultRequest;
