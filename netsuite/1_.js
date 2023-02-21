function createCustomerRecord() {
    var record = nlapiCreateRecord("customer");
    record.setFieldValue("companyname", "dg_1");
    record.setFieldValue("subsidiary", 8);
    id = nlapiSubmitRecord(record, true);
}
