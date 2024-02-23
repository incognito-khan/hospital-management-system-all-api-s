const mongoose = require('mongoose');
const { localDB } = require('./config');

class DBConnector {
  constructor(dbURI) {
    this.dbURI = dbURI;
  }

  async connect() {
    await mongoose.connect(this.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB!');
  }

//   async saveData(modelName, document) {
//     const Model = mongoose.model(modelName);
//     const modelInstance = new Model(document);

//     await modelInstance.save();
//     console.log("Document inserted");
//   }
}

const dbConnector = new DBConnector(localDB);
module.exports = { DBConnector, dbConnector };