use("e-commerce");

//adding validation level and action on a collection
//or updating the schema to integrate validation level and action
db.users.runCommand({collMod: 'users', 
  validationLevel: 'strict', //or moderate depends on use case
  validationAction: 'error'  //or warn //depends on use case
});
