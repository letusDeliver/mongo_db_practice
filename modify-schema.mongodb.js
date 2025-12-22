use("e-commerce");

//updating and modifying a schema

db.runCommand({
  collMod: "users",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "address"],
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        email: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        address: {
          bsonType: "object",
          required: ["street", "city", "country"],
          description:
            "address is required and must contain street, city and country",
          properties: {
            street: {
              bsonType: "string",
              description: "street must be provided and must be a string",
            },
            city: {
              bsonType: "string",
              description: "city must be provided and must be a string",
            },
            country: {
              bsonType: "string",
              description: "country must be provided and must be a string",
            },
          },
        },
        age: {
          bsonType: "number",
        },
        gender: {
          bsonType: "string",
        },
      },
      additionalProperties: false,
    },
  },
});


db.users.find()

// db.users.insertOne({
//   name: "Dipika",
//   email: "dipika@kunal.com",
//   address: {
//     street: "ABC2",
//     city: "Noida",
//     country: "India",
//   },
//   gender: "female",
//   age: 23,
// });

