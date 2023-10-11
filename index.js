const express= require("express");
const path= require("path");
const app=express();
const port=5000 || process.env.PORT;
var exphbs  = require("express-handlebars");
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// app.use(express.static(path.join(__dirname,"static")));
app.use("/", require(path.join(__dirname,"routes/blog")));

// app.get("/idk",(req,res)=>{
//     res.send("Hello world this is the default page");
// })
// app.get("/about", (req,res)=>{
//     res.send("<h1>Hello i am ashri</h1>");
// })
// app.get("/about/:name1", (req,res)=>{
//     res.send("Your name is: "+ req.params.name1);
// })

app.listen(port, ()=>{
    console.log(`Your server is live at: http://localhost:${port}`);
})