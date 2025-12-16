use("admin");

//this is a command to insert a document inside a collection in mongodb

db.users.insertOne({
  name: "First",
  role: "Admin"
});

