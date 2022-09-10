const express = require('express');

const mongoose = require('mongoose');

const { urlencoded } = require('express');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// mongoose db url

const dbURL = 'mongodb+srv://akashkumbhakar:H7nvuxExQpYWTkJd@cluster0.z13zven.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then((res) => app.listen(3000))
   .catch((err) => console.log(err))

// register vview engine
app.set('view engine', 'ejs');


// listen on port 3000
// by default its localhost

// Middleware & static files
app.use(express.static('public'));
app.use(urlencoded({ extended: true }));   // used for accepting form data in obj form


// mongoose &  mongo sandbox routes
// app.get('/add-blog',(req,res) =>{
//    const blog = new Blog({
//       title: 'new blog',
//       snippet: 'about my new blog',
//       body: 'more about new blog'
//    });

//    blog.save()
//       .then((result)=>{
//          res.send(result);
//       })
//       .catch((err)=>{
//          console.log(err);
//       });
// })

// listining to requests
app.get('/', (req, res) => {
   res.redirect('/blogs');
});

app.get('/about', (req, res) => {
   // res.sendFile('./views/about.html',{root: __dirname});
   res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
   // res.sendFile('./views/404.html',{root: __dirname});
   res.status(404).render('404');
})