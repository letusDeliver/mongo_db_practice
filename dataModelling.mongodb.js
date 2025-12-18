use("admin");

db.users.find();



//many to many relation
//refrence approach



//one to many relationship
//customer to saved cards can have one to 
//few relationship
//embebded approach

//customer to shipping address: one to many
//can be embeded depending if all the addresses are unique


//customer to product: one to too many
//ned referencing approach


//one to one relationship
// db.users.insertMany([
//   {
//     name: "Kunal",
//     age: 25,
//     gender: "Male",
//     dob: "26-08-2000",
//     primary_contact: {
//       email: "abc@abc.com",
//       phone: 1234567890,
//     },
//     address: ["Madrid", "India"],
//   },
//   {
//     name: "Amit",
//     age: 28,
//     gender: "Male",
//     dob: "14-03-1997",
//     primary_contact: {
//       email: "amit@gmail.com",
//       phone: 1234567891,
//     },
//     address: ["Delhi", "India"],
//   },
//   {
//     name: "Rohit",
//     age: 30,
//     gender: "Male",
//     dob: "02-11-1994",
//     primary_contact: {
//       email: "rohit@gmail.com",
//       phone: 1234567892,
//     },
//     address: ["Mumbai", "India"],
//   },
//   {
//     name: "Sneha",
//     age: 24,
//     gender: "Female",
//     dob: "19-06-2001",
//     primary_contact: {
//       email: "sneha@gmail.com",
//       phone: 1234567893,
//     },
//     address: ["Pune", "India"],
//   },
//   {
//     name: "Priya",
//     age: 27,
//     gender: "Female",
//     dob: "08-09-1998",
//     primary_contact: {
//       email: "priya@gmail.com",
//       phone: 1234567894,
//     },
//     address: ["Bangalore", "India"],
//   },
//   {
//     name: "Rahul",
//     age: 29,
//     gender: "Male",
//     dob: "21-01-1996",
//     primary_contact: {
//       email: "rahul@gmail.com",
//       phone: 1234567895,
//     },
//     address: ["Chennai", "India"],
//   },
//   {
//     name: "Neha",
//     age: 26,
//     gender: "Female",
//     dob: "05-12-1999",
//     primary_contact: {
//       email: "neha@gmail.com",
//       phone: 1234567896,
//     },
//     address: ["Jaipur", "India"],
//   },
//   {
//     name: "Arjun",
//     age: 31,
//     gender: "Male",
//     dob: "17-04-1993",
//     primary_contact: {
//       email: "arjun@gmail.com",
//       phone: 1234567897,
//     },
//     address: ["Hyderabad", "India"],
//   },
//   {
//     name: "Pooja",
//     age: 23,
//     gender: "Female",
//     dob: "30-10-2001",
//     primary_contact: {
//       email: "pooja@gmail.com",
//       phone: 1234567898,
//     },
//     address: ["Indore", "India"],
//   },
//   {
//     name: "Vikram",
//     age: 32,
//     gender: "Male",
//     dob: "11-07-1992",
//     primary_contact: {
//       email: "vikram@gmail.com",
//       phone: 1234567899,
//     },
//     address: ["Ahmedabad", "India"],
//   },
// ]);
