use("admin");


//command to insert more than one documents at a time

db.users.insertMany([
  {
    name: "Dipika",
    role: "Admin",
  },
  {
    name: "Umang",
    role: "Admin",
  },
  {
    name: "Kishlay",
    role: "Admin",
  },
  {
    name: "Avnish",
    role: "Admin",
  },
  {
    name: "Surbhi",
    role: "Admin",
  },
]);
