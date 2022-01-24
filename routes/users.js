const express = require('express')
const router = express.Router()


router.get("/", (req, res) =>{
    console.log(req.query.name);      //it will print the name from "localhost:3000/users?name=Kyle"
    res.send("User List");
})

router.get("/new", (req, res) =>{
    // res.send("User New Form");
    res.render("users/new");          //rendering the new.ejs file
})

router.post("/", (req, res) =>{
    // res.send("Create User");
    console.log(req.body.firstName);   //"req.body.firstName" matches with this <input name="firstName">

    const isValid = true
    if(isValid){
        users.push({firstName: req.body.firstName});
        res.redirect(`/users/${users.length - 1}`);
    }
    else{
        console.log("Error");
        res.render("users/new", {firstName: req.body.firstName});   //also giving the dynamic value of ejs
    }
})

// -----------------------------------------------------

// router.get("/:id", (req, res) =>{
//     res.send(`Get User With ID ${req.params.id}`);
// })

// router.put("/:id", (req, res) =>{
//     res.send(`Update User With ID ${req.params.id}`);
// })

// router.delete("/:id", (req, res) =>{
//     res.send(`Delete User With ID ${req.params.id}`);
// })


// doing the same thing & minimizing the code
router.route("/:id")
        .get((req, res) =>{
            console.log(req.user);
            res.send(`Get User With ID ${req.params.id}`);
        })
        .put((req, res) =>{
            res.send(`Update User With ID ${req.params.id}`);
        })
        .delete((req, res) =>{
            res.send(`Delete User With ID ${req.params.id}`);
        })


const users = [{name: 'Kyle'}, {name: 'Sally'}]

// this param runs the function whenever it gets a id in the url
router.param("id", (req, res, next, id) =>{
    req.user = users[id];
    next(); //then rest of the code starts running again
})

module.exports = router