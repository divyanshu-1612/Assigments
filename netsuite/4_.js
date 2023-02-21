function createCustomerContact() {
    var record = nlapiCreateRecord("contact");
    record.setFieldValue("customer", 31271);
    record.setFieldValue("entityid", "dg12345678");
    record.setFieldValue("subsidiary", 8);
    nlapiSubmitRecord(record, true);
}
