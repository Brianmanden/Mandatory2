(function(){
	'use strict';

	angular
		.module(
			"main",
			["ngRoute", "main.Cart", "main.Products", "main.Product"]
		)
		.controller("MainController", MainController)
		.config(
			function($routeProvider) {
				$routeProvider
					.when("/products", {
						templateUrl: "./products/products.html",
						controller: "ProductsController"
					})
					.when("/product/:id", {
						templateUrl: "./products/product.html",
						controller: "productController"
					})
					.when("/test", {
						templateUrl: "./products/test.html"
					})
					.when("/", {
						templateUrl: "./products/products.html",
						controller: "productsController"
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

		function MainController($rootScope, $http){
		};

})();