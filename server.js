const express = require('express')
const app = express()
const port = 4000;
// Body parsing middleware to handle JSON and URL-encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handling POST request to '/name'
app.post('/name', (req, res) =>{
    res.send("Hello "+req.body.fname+" "+req.body.lname);
})

// Handling GET request to '/name'
app.get('/name', (req, res)=>{
    res.send('Hello '+req.query.fname + " " + req.query.lname);
})

// Serving an HTML file on a GET request to '/test'
app.get('/test', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

// Handling GET request to '/api/books'
app.get('/api/books', (req, res) => {

    // Mock data for books
    const data = [
            // Book 1
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
            // Book 2
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
            // Book 3
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
        ]
    // Respond with JSON data
    res.json({
        ivona_books:data,
        "Message":"Hello from server.js!"
    })
}
)
// Handling a GET request to the root path '/'
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Handling a GET request to '/whatever'
app.get('/whatever', (req, res) => {
    res.send('Good Bye!')
})
// Handling a GET request to '/datareo'
app.get('/datareo', (req, res) => {
    res.send("Welcome to Data Representation & Querying")
})
// Handling a GET request with dynamic parameters '/hello/:name/:abc'
app.get('/hello/:name/:abc', (req, res) => {
    res.send('Hello ' + req.params.name + " " + req.params.abc)
})
// Start the Express app and listen on the specified port
app.listen(port, () => {
    console.log('Example app listening on port '+port)
})
