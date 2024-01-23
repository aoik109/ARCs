// 1 set up
import express from "express"; //import express

const app = express(); // executes the express functions and assigns the return value to app ()
// it basically provides us methods to specify what function is called for certain requests
const port = 3000; // specifying the port

app.use(express.static("public"));

//2 open the port and listen to the port for inbound requests
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

//3 GET request to the root (home page) "/"
app.get("/", (req, res) => {
    // test res.send("<h1>Hello World</h1>");

    // 4) render the ejs file for this route
    res.render("index.ejs");
});