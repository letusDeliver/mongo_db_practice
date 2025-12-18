use("admin");

// db.orders.findOne()

db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "products",
      foreignField: "_id",
      as: "purchased_products",
    },
  },
]);

// db.orders.aggregate({
//   $lookup: {
//     from: "users",
//     localField: "customer_id",
//     foreignField: "_id",
//     as: "customer_info",
//   },
// })

// db.orders.insertMany([
//   {
//     order_date: "2023-11-15",
//     customer_id: ObjectId("69435ba740b4d447808dc8f2"), // Kunal
//     products: [
//       ObjectId("69436719428e56a568ca013f"), // Playstation 5
//       ObjectId("69436719428e56a568ca0145")  // Steam Deck
//     ]
//   },
//   {
//     order_date: "2023-11-18",
//     customer_id: ObjectId("69435ba740b4d447808dc8f3"), // Amit
//     products: [
//       ObjectId("69436719428e56a568ca0140"), // Xbox Series X
//       ObjectId("69436719428e56a568ca0147")  // Xbox One X
//     ]
//   },
//   {
//     order_date: "2023-11-20",
//     customer_id: ObjectId("69435ba740b4d447808dc8f5"), // Sneha
//     products: [
//       ObjectId("69436719428e56a568ca0141"), // Nintendo Switch
//       ObjectId("69436719428e56a568ca0148")  // Playstation Portal
//     ]
//   },
//   {
//     order_date: "2023-11-22",
//     customer_id: ObjectId("69435ba740b4d447808dc8f6"), // Priya
//     products: [
//       ObjectId("69436719428e56a568ca0144") // Playstation VR2
//     ]
//   },
//   {
//     order_date: "2023-11-25",
//     customer_id: ObjectId("69435ba740b4d447808dc8f7"), // Rahul
//     products: [
//       ObjectId("69436719428e56a568ca0143"), // Xbox Series S
//       ObjectId("69436719428e56a568ca0146")  // Oculus Quest 2
//     ]
//   },
//   {
//     order_date: "2023-11-28",
//     customer_id: ObjectId("69435ba740b4d447808dc8f9"), // Arjun
//     products: [
//       ObjectId("69436719428e56a568ca0142"), // Playstation 4 Pro
//       ObjectId("69436719428e56a568ca0149")  // Asus ROG Ally
//     ]
//   }
// ]);

// db.users.find()

// db.products.find()

// db.products.insertMany([
//   {
//     name: "Playstation 5",
//     brand: "Sony",
//     price: 499,
//     details: { model: "CFI-12168", color: "Black", release_year: 2020 },
//   },
//   {
//     name: "Xbox Series X",
//     brand: "Microsoft",
//     price: 499,
//     details: { model: "RRT-00010", color: "Black", release_year: 2020 },
//   },
//   {
//     name: "Nintendo Switch",
//     brand: "Nintendo",
//     price: 299,
//     details: { model: "HAC-001", color: "Red/Blue", release_year: 2017 },
//   },
//   {
//     name: "Playstation 4 Pro",
//     brand: "Sony",
//     price: 399,
//     details: { model: "CUH-7215B", color: "Black", release_year: 2016 },
//   },
//   {
//     name: "Xbox Series S",
//     brand: "Microsoft",
//     price: 299,
//     details: { model: "RRS-00001", color: "White", release_year: 2020 },
//   },
//   {
//     name: "Playstation VR2",
//     brand: "Sony",
//     price: 549,
//     details: { model: "CFI-ZVR1", color: "White", release_year: 2023 },
//   },
//   {
//     name: "Steam Deck",
//     brand: "Valve",
//     price: 399,
//     details: { model: "256GB", color: "Black", release_year: 2022 },
//   },
//   {
//     name: "Oculus Quest 2",
//     brand: "Meta",
//     price: 299,
//     details: { model: "KW49CM", color: "White", release_year: 2020 },
//   },
//   {
//     name: "Xbox One X",
//     brand: "Microsoft",
//     price: 349,
//     details: { model: "1787", color: "Black", release_year: 2017 },
//   },
//   {
//     name: "Playstation Portal",
//     brand: "Sony",
//     price: 199,
//     details: { model: "CFI-Y1001", color: "White", release_year: 2023 },
//   },
//   {
//     name: "Asus ROG Ally",
//     brand: "Asus",
//     price: 699,
//     details: { model: "RC71L", color: "White", release_year: 2023 },
//   },
// ]);
