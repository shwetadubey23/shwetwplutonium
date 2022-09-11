const JWT = require('jsonwebtoken')
const AuthorModel = require("../models/authorModel")



//**     /////////////////////////      CreateAuthor      //////////////////////       **//
//### Author APIs /authors
// - Create an author - atleast 5 authors
// - Create a author document from request body.
//   `Endpoint: BASE_URL/authors`

const createAuthor = async (req, res) => {
    try {
        // taking document from body
        let author = req.body;
        let{fname, lname, title, email, password, ...rest} = req.body
        // checking anything inputted or not
        // as empty object gives truthy value , so we declarin if there is no keys return nothing found
        if (Object.keys(author) == 0) return res.status(400).send({ status: false, msg: "please provide details"})
        if(Object.keys(rest) != 0) return res.status(400).send({ status: false, msg: "please provide required details only =>fname, lname, title, email and password "})

        // checking all the required fields are present or not(sending error msg according to that)
        if (!fname) return res.status(400).send({ status: false, msg: "First name is required" });
        if (!lname) return res.status(400).send({ status: false, msg: "Last name is required" });
        if (!title) return res.status(400).send({ status: false, msg: "Title is required" });
        if(title != ("Mr"|| "Mrs" || "Miss")) return res.status(400).send({ status: false, msg: "give title between ['Mr'/ 'Mrs'/'Miss']" });
        if (!email) return res.status(400).send({ status: false, msg: "Email is required" });
        if (!password) return res.status(400).send({ status: false, msg: "Password is required" });

        // validating fields with REGEX formats
        const validateFName = (/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(fname));
        const validateLName = (/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(lname));
        const validateEmail = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
        const validatePassword = (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password))


        if (!validateFName) return res.status(400).send({ status: false, msg: "First Name is invalid, Please check your First Name" });
        if (!validateLName) return res.status(400).send({ status: false, msg: "Last Name is invalid, Please check your Last Name" });
        if (!validateEmail) return res.status(400).send({ status: false, msg: "Email is invalid, Please check your Email address" });
        if (!validatePassword) return res.status(400).send({ status: false, msg: "use a strong password with at least => 1 lowercase alphabetical character => 1 uppercase alphabetical character => 1 numeric character => one special character and password must be eight characters or longer)" });

        // creating new authorgit
        let authorCreated = await AuthorModel.create(author);
        res.status(201).send({ status: true, data: authorCreated });
    } catch (err) {
        res.status(500).send({ status: "error", error: err.message });
    }
}


//**     /////////////////////////      Login author      //////////////////////       **//
// ### POST /login
// - Allow an author to login with their email and password. On a successful login attempt return a JWT token contatining the authorId in response body like [this](#Successful-login-Response-structure)
// - If the credentials are incorrect return a suitable error message with a valid HTTP status code


const login = async (req, res) => {

    try {

        // taking EmailId and Password from body and checking both are present
        let credentials = req.body
        let {email, password, ...rest} = req.body
        // let authorEmail = req.body.email
        // let authorPassword = req.body.password
        if(Object.keys(rest) != 0) return res.status(400).send({ status: false, msg: "please provide EmaliId and Password only"})


        if (!email && !password) return res.status(404).send({ status: false, msg: "please enter EmailId and Password" })
        if (!email) return res.status(404).send({ status: false, msg: "please enter EmailId" })
        if (!password) return res.status(404).send({ status: false, msg: "please enter Password" })

        // finding that particular user/author inside AuthorModel  
        let Author = await AuthorModel.findOne({ email: email, password: password })
        if (!Author) return res.status(404).send({ status: false, msg: "incorrect emailId or password" });

        // creating token
        let token = JWT.sign(
            {
                userId: Author._id.toString(),
                creationTime: Date.now(),
                type: 'blogging-site-project'
            },
            "-- plutonium-- project-blogging-site -- secret-token --"
        )
        // sending the token in response header
        res.setHeader("x-api-key", token);

        return res.status(201).send({ status: true, data: token })
    } catch (err) {
        res.status(500).send({ status: "error", error: err.message });
    }
}


module.exports = { login, createAuthor }