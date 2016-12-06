var app = angular.module('myBlog', []);



app.controller('graphContrl', ['$scope', function($scope){

	var colors = function() {
		$( window ).ready(function() {
			for (i in $scope.funcs) {
				var colorVal = $('.line-' + i.toString()).attr('stroke');
				$('.funColor').eq(i).attr('style', 'color:' + colorVal);
				console.log('Loop number ' + i.toString() + ' | ' + colorVal)
			};
		});
		

	};

	var w = document.getElementById("graph").offsetWidth - 20;

	window.functions = [
	    { fn: 'x^2' },
	    { fn: 'cos(x)' },
	    { fn: '2x+1' },
	  ];

	window.arr = {
	  tip: {
		    xLine: true,    // dashed line parallel to y = 0
		    yLine: true,    // dashed line parallel to x = 0
		    renderer: function (x, y, index) {
		      // the returning value will be shown in the tip
		    }
		  },
	  grid: true,
	  width: w,
  	  height: 600,
	  target: '#graph',
	  data: functions
	};

	functionPlot(arr);

	$scope.funcs = ['x^2', 'cos(x)', '2x+1'];
	$scope.funcTitle = 'Funções';
	colors();
	

	$scope.newGraph = function() {

		$scope.funcTitle = 'Função';
		window.functions = [{ fn: $scope.fun }];
		window.arr = {
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
		  data: window.functions
		};
		$( "#graph" ).empty();
		functionPlot(arr);
		$scope.funcs = [$scope.fun];
		colors();
	}
	$scope.addGraph = function() {
		if ($scope.funcs.length > 8) {
			alert('Você pode traçar até 9 curvas ao mesmo tempo');
			return
		};
		$scope.funcTitle = 'Funções';
		$scope.funcs.push($scope.fun);
		functions.push({ fn: $scope.fun });
		functionPlot(arr);
		
		colors();

	}

	$scope.removeFun = function (i) {
		$scope.funcs.splice(i,1);
		if ($scope.funcs.length == 1) {
			$scope.funcTitle = 'Função';
		};
		window.functions.splice(i, 1);
		$( "#graph" ).empty();
		functionPlot(arr);
		colors();

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