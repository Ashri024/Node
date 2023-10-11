const express=require("express");
const path=require("path");
const app=express();
const routes=express.Router();
const blogs_data=require("../data/blogs_data");


routes.get('/', function (req, res) {
    res.render('home');
});

// routes.get("/",(req,res)=>{
//   res.sendFile(path.join(__dirname,"../templates/index.html"));
// })


routes.get("/blog",(req,res)=>{
  res.render('blog',{
    obj: blogs_data
  });
})

routes.get("/blog_data",(req,res)=>{
  // res.sendFile(path.join(__dirname,"../templates/index.html"));
  let data="";
  blogs_data.forEach(e=>{
    data+=e.title+"<br>";
  })
  res.send(data);
});



routes.get("/blog_data/:slug",(req,res)=>{
  // res.sendFile(path.join(__dirname,"../templates/blogPost.html"));
  let data= blogs_data.filter(e=>{
    return e.slug== req.params.slug;
  })
  console.log(req.params.slug);
  if(data==undefined || data.length==0){
    res.send("SOrry the link is brokedn");
    return;
  }
  res.send(data);
})


module.exports=routes;