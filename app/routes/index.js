var ProductsModel = require('../data/products');



exports.index = function(req, res){
  // render a view: /views/index.html
  // res.render('index'); 

  // render a text
  // res.send("index route")

  res.render('index.ejs', { title: 'The index page!' });
};

exports.productGetAll = function(req, res, next){
  ProductsModel.find(function(err, data){
    if(err){
      console.error;
    }
    res.render('showProducts.ejs', { title: 'show products', products: data });
  });
}

exports.productCreate = function(req, res, next){
  res.render('CRUDProd.ejs', { httpVerb: 'POST',  title: 'Create a new product', submitTxt: 'Create' });
  //res.send("POST " + req.body + " - " + req.params.id);
}

exports.productRead = function(req, res, next){
  //res.send('productRead');
  res.render('CRUDProd.ejs', { httpVerb: 'GET',  title: 'Create a new product', submitTxt: 'Create' });
  //res.json({type: "Read", id: req.params.id});
}

exports.productUpdate = function(req, res, next){
  res.send("PUT " + req.body + " - " + req.params.id);
  //res.json({type: "Update", id: req.params.id, body: req.body });
}

exports.productDelete = function(req, res, next){
  res.send("DELETE " + req.body + " - " + req.params.id);
  //res.json({type: "Delete", id: req.params.id});
}