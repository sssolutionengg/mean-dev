db = db.getSiblingDB('admin');
db.auth(
  mongo,
  mongo,
);
db = db.getSiblingDB("bezkoder_db");
db.createUser({
  user: 'mongo',
  pwd: 'mongo',
  roles: [{
    role: 'readWrite',
    db: 'bezkoder_db',
  }]
});
db.createCollection('tutorials');
db.tutorials.insertOne({
  title: "Js Tut#",
  description: "Description for Tut#",
  published: true,
  createdAt: Date(),
  updatedAt: Date()
})
db.myCollectionName.createIndex({ "address.zip": 1 }, { unique: false });
db.myCollectionName.insert({ "address": { "city": "Paris", "zip": "123" }, "name": "Mike", "phone": "1234" });
db.myCollectionName.insert({ "address": { "city": "Marsel", "zip": "321" }, "name": "Helga", "phone": "4321" });
