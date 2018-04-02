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
        this.totalReceiptAmount = this.constructor.getValue(obj.totalReceiptAmount);
        this.totalVATAmount = this.constructor.getValue(obj.totalVATAmount);
        this.oKCSicilNo = this.constructor.getValue(obj.oKCSicilNo || obj.OKCSicilNo);
        this.receiptNo = this.constructor.getValue(obj.receiptNo || obj.ReceiptNo);
        this.zno = this.constructor.getValue(obj.zno || obj.Zno);
        this.recognitionId = this.constructor.getValue(obj.recognitionId);
        this.ekuNo = this.constructor.getValue(obj.ekuNo || obj.EkuNo);
        this.receiptType = this.constructor.getValue(obj.receiptType || obj.ReceiptType);
        this.receiptDateTime =
          this.constructor.getValue(obj.receiptDateTime
     || obj.ReceiptDateTime);
        this.invoiceInfo = this.constructor.getValue(obj.invoiceInfo || obj.InvoiceInfo);
        this.payments = this.constructor.getValue(obj.payments || obj.Payments);
        this.discounts = this.constructor.getValue(obj.discounts || obj.Discounts);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'totalReceiptAmount', realName: 'totalReceiptAmount' },
            { name: 'totalVATAmount', realName: 'totalVATAmount' },
            { name: 'oKCSicilNo', realName: 'OKCSicilNo' },
            { name: 'receiptNo', realName: 'ReceiptNo' },
            { name: 'zno', realName: 'Zno' },
            { name: 'recognitionId', realName: 'recognitionId' },
            { name: 'ekuNo', realName: 'EkuNo' },
            { name: 'receiptType', realName: 'ReceiptType' },
            { name: 'receiptDateTime', realName: 'ReceiptDateTime' },
            { name: 'invoiceInfo', realName: 'InvoiceInfo', type: 'Invoice' },
            { name: 'payments', realName: 'Payments', array: true, type: 'Payment' },
            { name: 'discounts', realName: 'Discounts', array: true, type: 'Discount' },
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
