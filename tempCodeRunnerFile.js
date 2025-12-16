use("admin");

// db.users.find({name: "Dipika"})

db.users.updateOne(
  { name: "Surbhi" },
  {
    $set: {
      age: 25,
      gender: "Female"
    },
  }
);