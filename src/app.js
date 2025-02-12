const express = require('express');
const app = express();

app.use(express.json()); // Habilitar JSON en solicitudes

const userRoutes = require('./routes/userRoutes'); 
app.use('/api', userRoutes); // Asegurar el prefijo "/api"

module.exports = app;
