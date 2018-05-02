var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/shopping")
var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      // we're connected!
    });

var products = [
    new Product({
    imagePath: 'https://www.packtpub.com/sites/default/files/B05717.png',
    title: 'Buku teknologi Java',
    description: 'Belajar java 9!!!',
    price: '10'
}),
    new Product({
    imagePath: 'https://i.pinimg.com/originals/dd/5f/30/dd5f30234165167fd48467005237c4d3.jpg',
    title: 'Python Jaringan',
    description: 'Belajar bahasa python untuk jaringan!!!',
    price: '12'
}),
    new Product({
    imagePath: 'https://www.packtpub.com/sites/default/files/B04715_MockupCover.png',
    title: 'Buku Python dasar',
    description: 'Fundamental Python!!!',
    price: '14'
}),
    new Product({
    imagePath: 'https://www.packtpub.com/sites/default/files/bookretailers/V08044_MockupCover.png',
    title: 'intermediate C++',
    description: 'Belajar unreal engine 4 c++',
    price: '10'
}),
    new Product({
    imagePath: 'https://i.pinimg.com/originals/1e/cd/af/1ecdaf8c8410866e4990801f02c8c7e5.jpg',
    title: 'Intel Edison Project',
    description: 'Belajar IOT sederhana',
    price: '20'
}),
    new Product({
    imagePath: 'https://i.pinimg.com/originals/77/63/44/776344514dc636853e7142596cd0fa20.png',
    title: 'Learning Spark SQL',
    description: 'Arsitektur analutic dan machine learning solusi',
    price: '15'
}),
]

var done = 0
for(var i = 0; i<products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit()
        }
    });
}

function exit(){
    mongoose.disconnect()
}