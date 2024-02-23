const express = require('express');
const {dbConnector} = require('./db');
const patientRouter = require('./routes/patientRoutes');


const app = express();

// Middleware
// app.use(cors(corsOptions));
app.use(express.json());
// app.use(bodyParser.json());

// API Routes
app.use("/api/patient/", patientRouter);

// Connect to MongoDB
dbConnector.connect();

// PORT
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});