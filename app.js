var express1=require("express");
var  app =express1();
var path = require('path');
app.set('views', path.join(__dirname, 'views'));


app.use(express1.static(__dirname+"/public"));

app.set('view engine','ejs');
app.get("/",function(req,res){
  res.render("pages/page1.ejs");
});
app.get("/index",function(req,res){
  res.render("pages/index.ejs");
})

app.get("/addform",function(req,res){
    res.send("you have reached the post route");
});



app.get("/form",function(req,res){
  res.render("pages/contact.ejs");
});

app.post("/form",function(req,res){
  res.send("submitted");
});
// document.innerhtml bhi likh lio



app.get("/friends",function(req,res){
    var friends =["tony", "tanishq","vishal"];
    res.render("pages/friends.ejs", {friends : friends});
  });



  
app.listen(3000,function(){
    console.log("server is started");
});