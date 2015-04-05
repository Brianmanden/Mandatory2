(function(){
	"use strict";

	var productsService = function($http){

		var categoriesSelected 	=	[],
			products			=	[];

		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }
        }

		var findProductInArray = function(data, prodId){
			return data.filter(function(elem){
				if(elem.prodId === prodId){
					return elem;
				}
			});
		}

		var getCategories = function(response){
			// return $http.get("/categories")
			return $http.get("../data/categories.json")
					.then(function(response){
						return response.data;
					}, getError)
		};

		var getCategoriesSelected = function(){
      		return categoriesSelected;
      	}

		var getError = function(reason){
			console.log(reason);
		}

		var getProduct = function(id){
			return findProductInArray(products, id);
		}
		
		var getProducts = function(response){
			var data;
			return $http.get("/products")
						.then(function(response){
							console.log("products.service");
							setProducts(response.data);
							return response.data;
						}, getError)
		};

		var productFilter = function(product){
			if(categoriesSelected.length > 0){
				if(categoriesSelected.indexOf(product.category) < 0){
					return;
				}
			}
			return product;
		}

		var setProducts = function(data){
			products = data;
		}

		return{
			getProducts: getProducts,
			getProduct: getProduct,
			getCategories: getCategories,
			getCategoriesSelected: getCategoriesSelected,
			productFilter: productFilter,
			categoryChange: categoryChange
		}
	}

	angular
		.module("main.Products", [])
		.factory('productsService', productsService);

})();