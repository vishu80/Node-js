const app = require("./index"); // first file that will render whenever constant value changes
const dotenv = require("dotenv");
dotenv.config();
// console.log(app.get("env")); //this will indicate where our app is running here app.get('env') return devlopemnet return by express
const dbconnect=require('./db/dbconnect')
dbconnect
const port = 4000;
app.listen(port, () => {
  console.log(`App is running at server ${port}`);
});
