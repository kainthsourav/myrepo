const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3000;
const User = require("./User");

var dburl = "mongodb://localhost:27017/mentorondemand";

mongoose.set("useCreateIndex", true);

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ dburl);
});

mongoose.connection.on('error', (err) => {
  console.log('Database error: '+ err);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/register", (req, res) => {
  console.log("in backend");
  const newuser = new User(req.body);
    console.log(newuser);
    newuser.save();
    res.json({ message: "registered successfully", data: newuser });  
});

app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, function(err, user) {
    if (err) {
      res.json({ message: "User Not Registered" });
    } else {
      if(!user){
        res.json({ message: "Wrong Password" });
      }
      else
      {
      console.log(user);
      res.json({ message: "registered successfully", data: user });
      }
    }
  });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
