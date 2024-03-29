const express = require('express');
const {dbConnector} = require('./db');
const patientRouter = require('./routes/patientRoutes');


const app = express();

// Middleware
// app.use(cors(corsOptions));
app.use(express.json());
// app.use(bodyParser.json());

// API Routes
app.get('/', (req, res) => {
  res.json('API is running!');
});
app.use("/api/patient/", patientRouter);

// Connect to MongoDB
dbConnector.connect();

// PORT
const PORT = 6000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
