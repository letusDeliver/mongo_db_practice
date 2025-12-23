// Journaling is a crash-recovery mechanism.

//MongoDB writes changes to a journal file on disk before applying them to the database files.

// Enabled by default in MongoDB
// You can check: db.serverStatus().dur

//Best Practice Combo (Production)
// { w: "majority", j: true }

