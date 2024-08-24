/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4ik7uhgnhx5ofrc",
    "created": "2024-08-24 05:21:50.776Z",
    "updated": "2024-08-24 05:21:50.776Z",
    "name": "db",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "itilluee",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "u2ffjbbz",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4ik7uhgnhx5ofrc");

  return dao.deleteCollection(collection);
})
