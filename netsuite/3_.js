function searchCustomerRecord() {
    var filters = new Array();
    filters[0] = new nlobjSearchFilter("companyname", null, "is", "Test_dg");

    var columns = new Array();
    columns[0] = new nlobjSearchColumn("companyname");
    columns[1] = new nlobjSearchColumn("internalid");

    var record = nlapiSearchRecord("customer", null, filters, columns);
    return record[0].getValue("internalid");
}
