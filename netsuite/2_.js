function loadCustomer() {
    var record = nlapiLoadRecord("customer", 31275);
    record.setFieldValue("customer", "Test_dg");
    nlapiLoadSearch(record, true);
}
