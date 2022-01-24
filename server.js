const express = require("express");
const app = express();

app.use(express.static("public"));                    //this middle-ware is for rendering static html/css
app.use(express.urlencoded( {extended: true} ));      //this middle-ware is for accessing the body of html
app.use(express.json());                              //allows to parse json info from the body

app.set('view engine', 'ejs');
app.use(logger);

app.get("/", logger, (req, res) => {     //can use middle-ware func in here too
    // res.send("hello");
    // res.sendStatus(500);
    // res.status(500).send("hello");
    // res.status(500).json({ message: "Error" });
    // res.json({ message: "Error" });
    // res.download("server.js");

    res.render("index", { text: "World" });   //this is for rendering dynamic html/css
})

const userRouter = require('./routes/users');
// const postRouter = require('./routes/posts');

app.use("/users", userRouter);
// app.use("/posts", postRouter);


function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}


app.listen(3000);