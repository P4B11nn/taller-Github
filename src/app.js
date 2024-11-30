const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pagina.htm'));
});

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
    res.send('Formulario recibido');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});