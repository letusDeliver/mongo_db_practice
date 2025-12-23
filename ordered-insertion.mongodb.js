use("e-commerce");

db.countries.find();

//adding some elements in a collection

db.countries.insertMany([
  {
    _id: "USA",
    country_name: "America",
    country_code: "+1",
  },
  {
    _id: "IND",
    country_name: "India",
    country_code: "+91",
  },
]);

//in an ordered insertion if any element has a problem
//the task is terminated from that point, no further insertion happens

db.countries.insertMany([
  {
    _id: "RUS",
    country_name: "Russia",
    code: "+80",
  },
  {
    _id: "USA",
    country_name: "hdgvcd",
    code: "+80",
  },
]);

//in an unordered insertion only the errored element
//is not inserted other than that all the elements are
//inserted

db.countries.insertMany(
  [
    {
      _id: "EUR",
      country_name: "Europe",
      code: "+82",
    },
    {
      _id: "USA",
      country_name: "hdgvcd",
      code: "+80",
    },
    {
      _id: "SL",
      country_name: "Srilanka",
      code: "_11",
    },
  ],
  { ordered: false }
);
