require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('./Auth/GithubAuthStrategy');
require('./Auth/GoogleAuthStrategy');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);
app.use(
  session({
    secret: `${process.env.JWT_SECRET}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, mongoOptions)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
app.use('/auth', authRoute);
app.get('/', (req, res) => {
  res.json('Home page');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
