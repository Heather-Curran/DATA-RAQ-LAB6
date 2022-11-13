//Node server.js to run
//Others npm start to run

const express = require('express') //Express is web framework
const app = express() //Running express
const port = 4000 //Define port
const bodyParser = require('body-parser'); //Allows you to search body of Http request (Need this for Post Method)

// parse application/x-www-form-urlencoded (Need this for Post Method)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json (Need this for Post Method)
app.use(bodyParser.json())


//Allows access to other server.
const cors = require('cors');
    app.use(cors());
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Listen for post request at this URL and send back this object
app.get('/api/books', (req, res) => {
    const books = [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": ["Rick Umali"],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl":
            "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
            "Kyle Banker",
            "Peter Bakkum",
            "Tim Hawkins",
            "Shaun Verch",
            "Douglas Garrett"
            ],
            "categories": []
        },
        {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl":
                "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
                "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
        }         
    ];

    res.json({
        myBooks:books,
        "message":"Hello from our API"
    })
})

//Listen for post request at this URL
app.post('/api/books', (req, res)=>{
    console.log(req.body);
    res.send('Data Recieved');
})

//Listens for request at port 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})