(function(){
	'use strict';

	angular
		.module(
			"Main",
			["ngRoute", "Main.Products", "Main.Product" , "Main.Cart"]
		)
		.config(
			function($routeProvider) {
				$routeProvider
					.when("/products", {
						templateUrl: "./products/products.html",
						controller: "ProductsController"
					})
					.when("/product/:id", {
						templateUrl: "./products/product.html",
						controller: "ProductController"
					})
					.when("/checkout", {
						templateUrl: "./checkout/checkout.html",
						controller: "CartController"
					})
					.when("/", {
						templateUrl: "./products/products.html",
						controller: "ProductsController"
					})
					.otherwise({ redirectTo: "/	"});
			}
		)
		.run(function($rootScope){
			$rootScope.cart = {};
			$rootScope.amount = 1;
			$rootScope.cartStatus = "... er tom";
			$rootScope.total = 0;
		});

})();