const mongoose =  require("mongoose");

const url = process.env.url

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
  });
  
  mongoose.connection.on('error', (error) => {
    console.error('Error connecting to database:', error);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from database');
  });


// mongoose.connect(url)

// useNewUrlParser: true: This option is used to parse the MongoDB connection string using the MongoDB Node.js
//  driver's new parser. It is required when using a connection string that contains the MongoDB URL. 
// This option ensures that the connection string is parsed properly.

// useUnifiedTopology: true: This option enables the new unified topology engine of the MongoDB Node.js driver.
//  The unified topology engine provides a more modern and efficient way of handling connections to the MongoDB server.
//  It replaces the previous connection management engine, the legacy topology engine.
//  Setting this option to true ensures that the unified topology engine is used.

// Both options (useNewUrlParser and useUnifiedTopology) are commonly used together when connecting to a MongoDB database with Mongoose.
//  They help ensure that the connection is established correctly and efficiently.






