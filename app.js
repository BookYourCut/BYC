const express=require("express");
const bodyParser=require("body-parser");
var _=require("lodash"); 

const getDate=require("./date");
const date=require(__dirname+"/date.js");
console.log(date);


const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));


app.get("/",function(req,res)
{
    const day=date.getDate();
    res.render("lists")
})

app.get("/about",function(req,res)
{
    res.render("about")
});

app.get("/contact",function(req,res)
{
    res.render("contact");
})








app.listen(3000,function(req,res)
{
    console.log("Server is Started at localHost 3000");
})