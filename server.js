if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}
const express = require("express")
const bodyParser = require("body-parser")
const indexRouter = require("./router/index.js")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const fs = require('fs');
const port = process.env.PORT;

app.set("view engine", "ejs")
app.set("views", __dirname+"/views")
app.set("layout", "layouts/layout")
app.set("router")


app.use(expressLayouts)
app.use(express.static("public"))
app.use("/", indexRouter)


app.use(bodyParser.urlencoded({extended:true}))

var data = fs.readFileSync('data.json');
var userData = JSON.parse(data);

app.post("/addItems", (req,res)=>{
    var name = req.body.name
    var file = "/img/Gaming/" + req.body.file
    var rating = req.body.rating
    var description = req.body.description
    var newObject = {"name":name,"image":file,"rating":rating,"description":description}
    userData.gaming.push(newObject)
    userData = JSON.stringify(userData)
    fs.writeFile('data.json', userData, err => {
        console.log("New data added");});   
    res.render("./submission",{title:"Subbmited"})})


app.post("/addBooks", (req,res)=>{
    var name = req.body.Bname
    var file = "/img/BooksCovers/" + req.body.Bfile
    var rating = req.body.Brating
    var description = req.body.Bdescription
    var newObject = {"name":name,"image":file,"rating":rating,"description":description}
    userData.books.push(newObject)
    userData = JSON.stringify(userData)
    fs.writeFile('data.json', userData, err => {
        console.log("New data added");});   
    res.render("./submission",{title:"Subbmited"})})


app.post("/addPics", (req,res)=>{
    var name = req.body.Pname
    var file = "/img/photography/" + req.body.Pfile
    var rating = req.body.Prating
    var description = req.body.Pdescription
    var newObject = {"name":name,"image":file,"rating":rating,"description":description}
    userData.photography.push(newObject)
    userData = JSON.stringify(userData)
    fs.writeFile('data.json', userData, err => {
        console.log("New data added");});   
    res.render("./submission",{title:"Subbmited"})})


app.post("/toremove", (req,res)=>{
    var toRemove = req.body.toRemove
    for (let index = 0; index < toRemove.length; index++) { 
        delete userData.gaming[toRemove[index]];}
    userData = JSON.stringify(userData)
    userData = userData.split(",null").join("")
    userData = userData.split("null,").join("")
    userData = userData.split("null").join("")   
    fs.writeFile('data.json', userData, err => {
        console.log("Data removed");});
    res.render("./submission",{title:"removed"})
})


app.post("/toremoveB", (req,res)=>{
    var toRemove = req.body.toRemoveB
    for (let index = 0; index < toRemove.length; index++) {
        delete userData.books[toRemove[index]];}
    userData = JSON.stringify(userData)
    userData = userData.split(",null").join("")
    userData = userData.split("null,").join("")
    userData = userData.split("null").join("")
    fs.writeFile('data.json', userData, err => {
        console.log("Data removed");});
    res.render("./submission",{title:"removed"})
})


app.post("/toremoveP", (req,res)=>{
    var toRemove = req.body.toRemoveP
    for (let index = 0; index < toRemove.length; index++) { 
        delete userData.photography[toRemove[index]];}
    userData = JSON.stringify(userData)
    userData = userData.split(",null").join("")
    userData = userData.split("null,").join("")
    userData = userData.split("null").join("")
    fs.writeFile('data.json', userData, err => {
        console.log("Data removed");});
    res.render("./submission",{title:"removed"})
})


app.listen(port, ()=>{
    console.log("Server started at port " + port)
})