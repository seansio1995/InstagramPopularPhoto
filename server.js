var express=require("express");
var app=express();
var instagram=require("instagram-node").instagram();


app.use(express.static(__dirname+'/public'));


app.set("view engine",'ejs');


instagram.use({
  client_id:'',
  client_secret:''
});


app.get('/',function(req,res){
  instagram.media_popular(function(err,medias,remaining,limit){
    res.render('pages/index',{medias:medias});
  });
});

app.listen(8080,function(err){
  if(err){
    console.log("Error");

  }
  else{
    console.log("Listening on port 8080");
  }
})
