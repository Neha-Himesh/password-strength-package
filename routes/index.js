const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const app = express();

// Set up handlebars as the templating engine
app.engine('hbs', expressHbs.engine({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '../views/layouts'), // Path to layouts directory
    defaultLayout: 'main', // Specifies 'main.hbs' as the default layout
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views')); // Ensure your index.hbs is inside a 'views' directory

// Middleware to serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, '../public')));

// Route to render index.hbs
app.get('/', (req, res) => {
    res.render('main_page'); // Automatically looks for main_page.hbs in the views folder
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

console.log('Views directory:', app.get('views'));