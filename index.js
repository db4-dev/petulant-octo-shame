
var Validator = require("jsonschema").Validator;

var data = {
    "id": 1,
    "name": "A green door",
    "price": 12.50,
    "tags": ["home", "green"]
};

var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Product",
    "description": "A product from Acme's catalog",
    "type": "object",
    "properties": {
        "id": {
            "description": "The unique identifier for a product",
            "type": "integer"
        },
        "name": {
            "description": "Name of the product",
            "type": "string"
        },
        "price": {
            "type": "number",
            "minimum": 0,
            "exclusiveMinimum": true
        }
    },
    "required": ["id"]
};

var v = new Validator();
console.log(v.validate(data, schema));