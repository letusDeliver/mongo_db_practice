use("admin");

//reading commands

//find(): Will list out all the documents inside the collection
db.users.find();
db.users.find().pretty();

//findOne(): will give the very first document inside the 
            // collection and first document matching the filter
            //if provided
  
db.users.findOne();
