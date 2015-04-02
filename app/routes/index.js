var ProductsModel = require('../data/products');

exports.index = function(req, res){
  // render a view: /views/index.html
  // res.render('index'); 

  // render a text
  // res.send("index route")

  // sends a 200 (OK)
  //res.render('index');
  //res.send(200);
  res.send('her kommer index.html');
};

exports.productGetAll = function(req, res, next){
  ProductsModel.find(function(err, data){
    if(err){
      console.error;
    }
    res.json(data);
  });
}

exports.productCreate = function(req, res, next){
  res.send("PUT " + req.body + " - " + req.params.id);
}

exports.productRead = function(req, res, next){
  //res.send('productRead');
  res.json({type: "Read", id: req.params.id});
}

exports.productUpdate = function(req, res, next){
  res.send("UPDATE " + req.body + " - " + req.params.id);
  //res.json({type: "Update", id: req.params.id, body: req.body });
}

exports.productDelete = function(req, res, next){
  res.send("DELETE " + req.body + " - " + req.params.id);
  //res.json({type: "Delete", id: req.params.id});
}


