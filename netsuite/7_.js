function transformSalesOrder() {
    var invoice = nlapiTransformRecord("salesorder", 123968, "invoice");
    invoice.removeLineItem("item", 2);
    nlapiSubmitRecord(invoice);
}
