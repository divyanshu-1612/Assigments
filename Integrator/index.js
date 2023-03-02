const request = require("request");
var _ = require("lodash");
const getIntegration = async (token, id) => {
    console.log(token);
    let options = {
        method: "GET",
        url: `https://api.integrator.io/v1/integrations/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function getIntegration",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};

const updateIntegration = (token, id, json) => {
    let options = {
        method: "PUT",
        url: `https://api.integrator.io/v1/integrations/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: json
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function updateIntegration",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const getAllConnections = token => {
    console.log(token);
    let options = {
        method: "GET",
        url: `https://api.integrator.io/v1/connections`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function getAllConnectionserror",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const createConnection = (token, json) => {
    let options = {
        method: "POST",
        url: "https://api.integrator.io/v1/connections",
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: json
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                console.log("Connections Created");
                resolve(body);
            } else {
                console.log(
                    "function createConnection",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const createExport = (token, json) => {
    let options = {
        method: "POST",
        url: "https://api.integrator.io/v1/exports",
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: json
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                console.log("Created Exports");
                resolve(body);
            } else {
                console.log(
                    "function createExports",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const createImport = (token, json) => {
    let options = {
        method: "POST",
        url: "https://api.integrator.io/v1/imports",
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: json
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function createdImport",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const createFlow = (token, json) => {
    let options = {
        method: "POST",
        url: "https://api.integrator.io/v1/flows",
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: json
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                console.log("Created Flow");
                resolve(body);
            } else {
                console.log(
                    "function createFlow",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const getFlow = (token, id) => {
    let options = {
        method: "GET",
        url: `https://api.integrator.io/v1/flows/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function getFlow",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const getExport = (token, id) => {
    let options = {
        method: "GET",
        url: `https://api.integrator.io/v1/exports/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function getExport",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const getAllExports = (token, id) => {
    let options = {
        method: "GET",
        url: `https://api.integrator.io/v1/integrations/${id}/exports`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function getAllExports",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const getImport = (token, id) => {
    let options = {
        method: "GET",
        url: `https://api.integrator.io/v1/imports/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function getImport",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const getAllImports = (token, id) => {
    let options = {
        method: "GET",
        url: `https://api.integrator.io/v1/imports`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function getAllImports",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const updateFlow = (token, id, json) => {
    let options = {
        method: "PUT",
        url: `https://api.integrator.io/v1/flows/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        json: json
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                resolve(body);
            } else {
                console.log(
                    "function updateFlow",
                    "error",
                    error,
                    "body",
                    response.body
                );
                reject(error);
            }
        });
    });
};
const assignFunction = options => {
    console.log("options = ", options);
    var operations = options.settings.integration.listOperations;
    _.sortBy(operations, "operationNumber");
    _.each(operations, eachOperation => {
        var elements = eachOperation.function.split(": ");
        switch (elements[0]) {
            case "LAUNCH BROWSER":
                return 1;
            case "INPUT":
                return 2;
            case "WAIT":
                return 3;
        }
    });
    return new Promise((resolve, reject) => {
        resolve({
            data: options.data,
            errors: options.errors,
            abort: false,
            newErrorsAndRetryData: []
        });
    });
};
module.exports = {
    getIntegration,
    updateIntegration,
    getAllConnections,
    createConnection,
    createExport,
    createImport,
    createFlow,
    getFlow,
    updateFlow,
    getExport,
    getAllExports,
    getImport,
    getAllImports,
    assignFunction
};
