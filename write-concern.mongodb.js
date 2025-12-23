//write concern

//a write concern defines the level of acknowledgement
//required from the database for a write operation to
//be considered successfull.


//{ w: 0 } – Fire and Forget
db.orders.insertOne({ item: "Phone" }, { writeConcern: { w: 0 } });
//{ w: 1 } – Default
// Acknowledged once written to primary

// { w: "majority" } – Safe & Recommended
// Write must reach majority of replica set members

// { w: N } – Custom Replication Count

// wtimeout – Time Limit
// { w: "majority", wtimeout: 5000 }
// Fails if not confirmed within time
// Prevents hanging requests

// | Write Concern  | Speed           | Safety    | Use Case         |
// | -------------- | --------------- | --------- | ---------------- |
// | `w:0`          | 🚀 Fastest      | ❌ None    | Logs, analytics  |
// | `w:1`          | ⚖️ Balanced     | ⚠️ Medium | Default apps     |
// | `w:"majority"` | 🐢 Slower       | ✅ High    | Payments, orders |
// | `w:N`          | ⚖️ Configurable | ✅ Custom  | Tuned systems    |
