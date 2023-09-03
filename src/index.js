
const express = require('express');
const app = express();
const path = require('path')
const connection = require('./config/database')

const router = require('./routes/web')

const configViewEngine = require('./config/viewEngine')
configViewEngine(app);

require('dotenv').config();



// declaring route
app.use('/', router);
// config static file 
app.use(express.static(path.join(__dirname, 'views')));
app.get('/home', (req, res)=>{
  res.render('home.ejs')
})


// config view engine
const port = process.env.PORT || 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
    
})

