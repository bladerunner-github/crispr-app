//need to create a new folder for backend so that both react-app and nodemon can run on same port simultaneously
//first run react-app then nodemon

const express = require('express');
const cors = require('cors') //react app runs at port 3000 but nodemon is running at 8080 so as the ports are different they cannot communicate that gives a cors error so to resolve it we need to use cors dependencies 

const bodyParser = require('body-parser')   //used to parse req body
const mongoose = require('mongoose')

const app = express();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo');
  console.log('db connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  location: String,
  time: String,
  date: String,
  approved: Boolean
});

const User = mongoose.model('User', userSchema);

app.use(cors()); //use is middleware between client and server
app.use(bodyParser.json())


//post to save data into database
app.post('/demo', async (req, res) => {
  let user = new User();    //User collection variable that we made above . here we are creating a new object of User
  user.name = req.body.name;            //assigning object paramerters to the parameters of the req.body
  user.title = req.body.title;
  user.description = req.body.description;
  user.location = req.body.location;
  user.time = req.body.time;
  user.date = req.body.date;
  const doc = await user.save();
  console.log(doc)
  res.json(doc)
})


//get method to recieve data from database
app.get('/demo', async (req, res) => {
  const docs = await User.find({});
  res.json(docs)
})

app.put('/demo', async (req, res) => {
  const { id, approvedStatus } = req.body;
  const filter = { _id: id }
  const update = { approved: approvedStatus }
  await User.updateOne(filter, update);  //updating a document in db with _id as parameter and
  console.log(req.body);
})

app.listen(8080, () => {
  console.log("Server is running on port 8080");
})