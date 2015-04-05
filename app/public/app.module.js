(function(){
	'use strict';

	angular
		.module(
			"Main",
			["ngRoute", "Main.cart", "Main.products", "Main.product"]
		)
		.controller("MainController", MainController)
		.config(
			function($routeProvider) {
				$routeProvider
					.when("/products", {
						templateUrl: "./views/showProducts.html",
						controller: "tester"
					})
					.when("/product/:id", {
						templateUrl: "./products/product.html",
						controller: "productController"
					})
					.when("/", {
						templateUrl: "./products.html",
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