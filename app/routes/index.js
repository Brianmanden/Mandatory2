var ProductsModel = require('../data/products');

exports.index = function(req, res){
  // render a view: /views/index.html
  // res.render('index'); 
  res.render('./index.ejs', { title: '123' });
};

exports.productGetAll = function(req, res, next){
  console.log('productGetAll');
  ProductsModel.find(function(err, data){
    if(err){
      console.error;
    }
    //res.render('./showProds.ejs', { title: 'Show products',  products: data });
    //res.render('../public/products/products.html', { title: 'Show products',  products: data });
    //res.render('../public/index.html', { title: 'Show products',  products: data });
    //res.json(data);
    //res.render('index', { products: data });
    res.render("showProducts");
  });
}

exports.productCreate = function(req, res, next){
  //res.render('./CRUDProd.ejs', { httpVerb: 'POST',  title: 'Create a new product', submitTxt: 'Create' });
  res.send("productCreate ");
}

exports.productRead = function(req, res, next){
  console.log('productRead');
  //res.render('./CRUDProd.ejs', { httpVerb: 'GET',  title: 'Create a new product', submitTxt: 'Create' });
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