function updateSalesOrder() {
    var order = nlapiLoadRecord("salesorder", 123968);

    order.setLineItemValue("item", "quantity", 2, 5);
    order.setLineItemValue("item", "quantity", 2, 50);

    nlapiSubmitRecord(order);
}
