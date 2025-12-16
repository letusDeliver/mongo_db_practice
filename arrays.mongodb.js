use("admin");

db.users.find(
  {address: {
    $in: ["USA", "UK"]
  }}
);





// db.users.find(
//   {"purchases.brand": "Apple"}
// ).count();


// db.users.updateOne(
//   {name: 'Alice Smith'},
//   {$set: {
//     address: ['New Jersey', 'USA']
//   }}
// )




// db.users.find(
//   {
//     address: 'USA'
//   }
// );



// db.users.insertMany([
//   {
//     name: "John Doe",
//     age: 32,
//     is_active: true,
//     subscription_type: {
//       type: "monthly",
//       renewal_date: { day: 15, month: 11, year: 2024 },
//     },
//     address: ["New York", "USA"],
//     purchases: [
//       { product_name: "iPhone 15", brand: "Apple", price: 799 },
//       { product_name: "MacBook Air", brand: "Apple", price: 399 },
//     ],
//   },
//   {
//     name: "Alice Smith",
//     age: 28,
//     is_active: true,
//     subscription_type: {
//       type: "yearly",
//       renewal_date: { day: 5, month: 1, year: 2025 },
//     },
//     address: ["London", "UK"],
//     purchases: [
//       { product_name: "Galaxy S23", brand: "Samsung", price: 749 },
//       { product_name: "Galaxy Watch", brand: "Samsung", price: 249 },
//     ],
//   },
//   {
//     name: "Rahul Verma",
//     age: 35,
//     is_active: false,
//     subscription_type: {
//       type: "monthly",
//       renewal_date: { day: 20, month: 6, year: 2024 },
//     },
//     address: ["Delhi", "India"],
//     purchases: [
//       { product_name: "OnePlus 11", brand: "OnePlus", price: 699 },
//       { product_name: "Buds Pro", brand: "OnePlus", price: 149 },
//     ],
//   },
//   {
//     name: "Maria Garcia",
//     age: 41,
//     is_active: true,
//     subscription_type: {
//       type: "yearly",
//       renewal_date: { day: 12, month: 9, year: 2025 },
//     },
//     address: ["Madrid", "Spain"],
//     purchases: [
//       { product_name: "iPad Pro", brand: "Apple", price: 999 },
//       { product_name: "Apple Pencil", brand: "Apple", price: 129 },
//     ],
//   },
//   {
//     name: "David Brown",
//     age: 29,
//     is_active: true,
//     subscription_type: {
//       type: "monthly",
//       renewal_date: { day: 3, month: 3, year: 2024 },
//     },
//     address: ["Toronto", "Canada"],
//     purchases: [
//       { product_name: "Surface Laptop", brand: "Microsoft", price: 899 },
//       { product_name: "Surface Mouse", brand: "Microsoft", price: 59 },
//     ],
//   },
//   {
//     name: "Sophia Lee",
//     age: 26,
//     is_active: false,
//     subscription_type: {
//       type: "monthly",
//       renewal_date: { day: 18, month: 8, year: 2024 },
//     },
//     address: ["Seoul", "South Korea"],
//     purchases: [
//       { product_name: "LG Velvet", brand: "LG", price: 599 },
//       { product_name: "LG Tone Earbuds", brand: "LG", price: 179 },
//     ],
//   },
//   {
//     name: "Michael Johnson",
//     age: 38,
//     is_active: true,
//     subscription_type: {
//       type: "yearly",
//       renewal_date: { day: 25, month: 12, year: 2025 },
//     },
//     address: ["California", "USA"],
//     purchases: [
//       { product_name: "PlayStation 5", brand: "Sony", price: 499 },
//       { product_name: "DualSense Controller", brand: "Sony", price: 69 },
//     ],
//   },
//   {
//     name: "Ananya Gupta",
//     age: 31,
//     is_active: true,
//     subscription_type: {
//       type: "monthly",
//       renewal_date: { day: 10, month: 4, year: 2024 },
//     },
//     address: ["Mumbai", "India"],
//     purchases: [
//       { product_name: "Nothing Phone 2", brand: "Nothing", price: 599 },
//       { product_name: "CMF Earbuds", brand: "Nothing", price: 99 },
//     ],
//   },
//   {
//     name: "Lucas Martin",
//     age: 45,
//     is_active: false,
//     subscription_type: {
//       type: "yearly",
//       renewal_date: { day: 7, month: 7, year: 2025 },
//     },
//     address: ["Paris", "France"],
//     purchases: [
//       { product_name: "Canon EOS R", brand: "Canon", price: 1799 },
//       { product_name: "RF Lens", brand: "Canon", price: 899 },
//     ],
//   },
//   {
//     name: "Emily Wilson",
//     age: 27,
//     is_active: true,
//     subscription_type: {
//       type: "monthly",
//       renewal_date: { day: 22, month: 10, year: 2024 },
//     },
//     address: ["Sydney", "Australia"],
//     purchases: [
//       { product_name: "GoPro Hero 12", brand: "GoPro", price: 399 },
//       { product_name: "GoPro Mount Kit", brand: "GoPro", price: 49 },
//     ],
//   },
// ]);

// db.users.deleteMany({});
