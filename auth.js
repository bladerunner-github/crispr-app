const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
  cover: Buffer,
  blog: Buffer,
  title: String,
  fName: String,
  lName: String,
  description: String,
  location: String,
  date: String,
  time: String,
  email: String,
  phone: String,
  approved: Boolean,
});

const username = encodeURIComponent("avm121104");
const password = encodeURIComponent("crispr");

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.wxhnstv.mongodb.net/?retryWrites=true&w=majority`
);

const Users = mongoose.model("Users", userSchema);

app.listen("8080", (req, res) => {
  console.log("listening on 8080");
});

async function insert() {
  await Users.create({
    title: "ujbeewrw er g e ertherg errg jnwdfwef",
    fName: "ewgfer e  eg  re  dfgdfwegwwqereg",
    lName: "ewfwdffgreegergerg  errger  dfgdfgewwwerert",
    description:
      "The sun hung low in the sky, casting long shadows across the tranquil meadow. Birds chirped merrily, and a gentle breeze rustled the leaves in the nearby trees. As I walked along the winding path, I couldn't help but feel a sense of peace and serenityIn the distance, I saw a small cottage with a thatched roof, smoke curling from its chimney. It looked like something out of a storybook, a place where time stood still. I decided to explore further and discovered a garden bursting with colorful flowers and a bubbling brook that danced over smooth stones. The world seemed to slow down, and for a moment, I was lost in a dream.",
    location: "azxcvbn",
    date: "asdfghnj t st  rthrthrthg",
    time: "dffg g eg  reg erer gergdfgaze er rgtest",
    email: "tytergr errtrtyse ergg retgwer",
    phone: "wqasdgh  df er ger gfgd fyiiup",
    approved: true,
  });
}

// insert()

//saving the data from form to the database
app.post("/demo", async (req, res) => {
  let user = new Users();
  user.title = req.body.title;
  user.fName = req.body.fname;
  user.lName = req.body.lname;
  user.description = req.body.description;
  user.location = req.body.location;
  user.date = req.body.date;
  user.time = req.body.time;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.approved = false;
  await user.save();
});

//getting data for event display page
app.get("/demo", async (req, res) => {
  const data = await Users.find({});
  res.json(data);
});

app.put("/demo", async (req, res) => {
  const { id, approvedStatus } = req.body;
  const filter = { _id: id };
  const update = { approved: approvedStatus };
  await Users.updateOne(filter, update);
});
