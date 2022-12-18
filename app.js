const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.resolve(__dirname, './public')));



app.set('views', path.resolve(__dirname, './views'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/home.html'));
})

app.get('/cuenta', (req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/register.html'));
})

app.get('/ingresa', (req,res) => {
    res.sendFile(path.resolve(__dirname, './src/views/login.html'));
})


app.listen(3000, () => {
    console.log('Server UP puerto 3000');
});