(function(){
	var app = angular.module('store', []);
	
	app.directive('convertToNumber', function() {
	  return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
		  ngModel.$parsers.push(function(val) {
			return val != null ? parseInt(val, 10) : null;
		  });
		  ngModel.$formatters.push(function(val) {
			return val != null ? '' + val : null;
		  });
		}
	  };
	});
	
	app.controller('StoreController', function(){
		this.product = gem;
	});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		
		this.selectTab = function (setTab) {
			this.tab = setTab;
		}
		
		this.isSelected = function (checkTab){
			return this.tab === checkTab;
		}
	});
	
	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		}
	});
	
	var gem = [{
		name: 'BigMusuleGem',
		price: 50,
		description:'Greatest Gem You Ever Met',
		canPurchase: false,
		onSale: true,
		imgs: [
			".../asset/img/mario_run.jpg",
			".../asset/img/mario_stand.jpg"
		],
		reviews: [
			{
				stars: 5,
				body: "Great stuff!",
				author:"yzhou@163.com"
			},
			{
				stars: 3,
				body: "Good one!",
				author:"qz@163.com"
			}
		]
	},
	{
		name: 'TinyGem',
		price: 5,
		description:'Take a look at me',
		canPurchase: true,
		onSale: true,
		imgs: [
			".../asset/img/mario_run.jpg",
			".../asset/img/mario_stand.jpg"
		],
		reviews: [
			{
				stars: 5,
				body: "Awesome!",
				author:"yzhou@qq.com"
			},
			{
				stars: 3,
				body: "Not bad!",
				author:"qz@qq.com"
			}
		]
	}]
})();

