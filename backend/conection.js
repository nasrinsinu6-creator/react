const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://SinuNasrin:sinunasrinp@cluster0.9hgzfug.mongodb.net/kmctb2?appName=Cluster0')
.then(() => {
    console.log('Connected!')})
.catch((err) => {
    console.log( err);
});