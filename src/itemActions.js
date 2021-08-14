const fs = require('fs');
const validator = require('jsonschema').Validator;
var itemFilePath = '../items.json';

class Items {

    itemsInitiate = async () => {
        var items = {};
        try {
            if (fs.existsSync()) {
                var rawItemsData = await fs.readFile(itemFilePath);
                items = JSON.parse(rawItemsData);
                return (items);
            }
            else {
                return (0)
            }
        }
        catch (e) {
            console.log(e);
        }

    }

    itemUpdate = async (item) => {
        try {
            let v = new validator();
            let itemSchema = {
                "itemName": { "type": "string" },
                "type": "object",
                "itemPrice": "number",
                "itemCount": "integer", "minimum": 1
            }
            let validatedStatus = v.validate(item, itemSchema);
            if (validatedStatus.valid) {
                await this.updateJSON(item);
            }
            else {
                return (validatedStatus);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateJSON = async(item) => {

    }
}

