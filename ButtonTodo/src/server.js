import express from "express";
import cors from "cors"
import { data } from "./data.js";
const app = express();
app.use(cors());


app.get("/todo", (req, res)=>{
const id = parseInt(req.query.id);
if(id){
 const todo= data.find(item=> item.id === id)  //item or write whatever you want 
 if(todo){
    res.json(todo)
 }else{ res.status(404).json({msg: "Todo not found"})}
}
res.json(data);
});


app.listen(3000, ()=>{console.log("The server is now live")})
export default app;