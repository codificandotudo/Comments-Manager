/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "CommentArray": {
        "type": "array",
        "items": {
            "type": "Comment"
        }
    },
    "Boolean": {
        "type": "boolean"
    },
    "Comment": {
        "type": "object",
        "properties": {
            "Author": {
                "type": "string"
            },
            "_id": {
                "type": "string"
            },
            "Message": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "currentComment": new $a.LocalStorage("currentComment", "Comment"),

    "CommentList": new $a.LocalStorage("CommentList", "CommentArray")
};