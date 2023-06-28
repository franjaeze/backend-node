import express from "express"   
import 'dotenv/config'
import mongoose from "mongoose"
import bodyParser from "body-parser";
import cors from "cors"
import notesRute from "./rotues/notesRute.js"

const app = express(); 
app.use(cors())
app.use(express.json()) 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

 app.use("/notes", notesRute);

app.get("/", (req,res) => { 
console.log("respusta del get")     
res.json ({ ok:true}); 
});

try {  
    await mongoose.connect(process.env.MONGO_URI) 
  console.log ("Connect to DB") 
  } catch  (error) { 
  console.log ("Conection error " + error) 
 } 

 
 
const PORT = process.env.PORT || 6000;
app.listen(PORT,() => {
  console.log (" Server is running on PORT", PORT)
}); 