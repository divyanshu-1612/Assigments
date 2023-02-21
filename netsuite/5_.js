function createSalesOrder() {
    var order = nlapiCreateRecord("salesorder");

    // set customer
    order.setFieldValue("entity", 31271);

    order.setLineItemValue("item", "item", 1, 9473);
    order.setLineItemValue("item", "quantity", 1, 1);
    order.setLineItemValue("item", "amount", 1, 10);

    order.setLineItemValue("item", "item", 2, 9474);
    order.setLineItemValue("item", "quantity", 2, 1);
    order.setLineItemValue("item", "amount", 2, 10);

    nlapiSubmitRecord(order);
}
