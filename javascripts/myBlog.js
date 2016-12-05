var app = angular.module('myBlog', []);



app.controller('graphContrl', ['$scope', function($scope){


	var w = document.getElementById("graph").offsetWidth - 20;

	window.novafuncao = [
	    { fn: 'x^2' }
	  ];

	window.novoArr = {
	  tip: {
		    xLine: true,    // dashed line parallel to y = 0
		    yLine: true,    // dashed line parallel to x = 0
		    renderer: function (x, y, index) {
		      // the returning value will be shown in the tip
		    }
		  },
	  width: w,
  	  height: 600,
	  target: '#graph',
	  data: novafuncao
	};

	functionPlot(novoArr);

	$scope.funcs = ['x^2'];
	$scope.funcTitle = 'Função';

	

	$scope.newGraph = function() {

		$scope.funcTitle = 'Função';
		window.novafuncao = [];

		window.novafuncao.push({ fn: $scope.fun });
		window.novoArr = {
		  tip: {
		    xLine: true,    // dashed line parallel to y = 0
		    yLine: true,    // dashed line parallel to x = 0
		    renderer: function (x, y, index) {
		      // the returning value will be shown in the tip
		    }
		  },
		  width: 750,
	  	  height: 600,
		  target: '#graph',
		  data: window.novafuncao
		};
		$( "#graph" ).empty();
		functionPlot(novoArr);
		$scope.funcs = [$scope.fun];
		console.log(novoArr);
	}
	$scope.addGraph = function() {
		if ($scope.funcs.length > 8) {
			alert('Você pode traçar até 9 curvas ao mesmo tempo');
			return
		};
		$scope.funcTitle = 'Funções';
		$scope.funcs.push($scope.fun);
		novafuncao.push({ fn: $scope.fun });
		functionPlot(novoArr);

	}

	$scope.removeFun = function (i) {

		$scope.funcs.splice(i,1);
		window.novafuncao.splice(i, 1);
		$( "#graph" ).empty();
		functionPlot(novoArr);

	}


}]);



var archive = [{
	createdAt: 1480937608894,
	title: 'My first even Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 1,
	imageUrl: 'http://bs.simplusmedia.com/i/730/838/banana-beneficios.jpg'
},
{
	createdAt: 1480937608894,
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 2,
	imageUrl: 'http://www.saudedica.com.br/wp-content/uploads/2014/05/Benef%C3%ADcios-da-Ma%C3%A7%C3%A3.jpg'
},
{
	createdAt: 1480937608894,
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 3,
	imageUrl: 'http://viniciusofp.com.br/wp-content/uploads/2016/03/olmoemcartazcapa-700x259.jpg'
},
{
	createdAt: 1480937608894,
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 4
},
{
	createdAt: 1480937608894,
	title: 'My first odd Post',
	text: 'Hendrik\'s answer in the comments above will work but probably isn',
	cor: 5
}];