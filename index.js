const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const users = require('./routes/users');
// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);
const connectDB = require('./config/db');
connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));

app.use('/api/users', users);

app.listen(PORT, ()=> {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})




