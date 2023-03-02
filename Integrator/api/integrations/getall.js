const resources = require("../../index.js");

const token = "9f6be17854a8408d8292c97253ae2e71";
const id = "63fdd323d53b947803d18f0b";

(async () => {
    let res = await resources.getIntegration(token, id);
    console.log(JßSON.parse(res));
})();
