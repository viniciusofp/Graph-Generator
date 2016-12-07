


var app = angular.module('myBlog', []);






app.controller('graphContrl', ['$scope', function($scope){



	var colors = function() {
		$( window ).ready(function() {
			for (i in $scope.funcs) {
				var colorVal = $('.line-' + i.toString()).attr('stroke');
				$('.funColor').eq(i).attr('style', 'color:' + colorVal + '; border-color:' + colorVal);
				console.log('Loop number ' + i.toString() + ' | ' + colorVal)
			};
		});
		

	};

	var w = $("#graph").width() - 20;
	var h = $("#graph").height() - 20;

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
  	  height: h,
	  target: '#graph',
	  data: functions
	};

	functionPlot(arr);

	$scope.funcs = ['x^2', 'cos(x)', '2x+1'];
	$scope.funcTitle = 'Funções';
	colors();
	

	
	$scope.newGraph = function() {
		$scope.funcs = [$scope.fun];
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
		  width: w,
	  	  height: h,
		  target: '#graph',
		  data: window.functions
		};
		$( "#graph" ).empty();
		try {
			functionPlot(arr);
	    } catch ( e ) {
	        alert("Você tem certeza que  digitou uma expressão válida? Cheque o box no rodapé da página para saber sintaxe correta." );

	        $scope.funcs = ['x'];
	        window.arr = {
			  tip: {
			    xLine: true,    // dashed line parallel to y = 0
			    yLine: true,    // dashed line parallel to x = 0
			    renderer: function (x, y, index) {
			      // the returning value will be shown in the tip
			    }
			  },
			  width: w,
		  	  height: h,
			  target: '#graph',
			  data: [{ fn: 'x' }]
			};
	        functionPlot(arr);
	        return
	    }
		colors();
	}
	$scope.addGraph = function() {
		if ($scope.funcs.length > 8) {
			alert('Você pode traçar no máximo nove curvas ao mesmo tempo');
			return
		};

		try {
			functions.push({ fn: $scope.fun });
			functionPlot(arr);
	    } catch ( e ) {
	        alert("Você tem certeza que  digitou uma expressão válida? Cheque o box no rodapé da página para saber sintaxe correta." );
	        functions.pop();
	        functionPlot(arr);
	        return
	    }

			$scope.funcTitle = 'Funções';
			$scope.funcs.push($scope.fun);

		
		colors();

	}

	$scope.removeFun = function (i) {
		$scope.funcs.splice(i,1);
		if ($scope.funcs.length == 1) {
			$scope.funcTitle = 'Função';
		};
		window.functions.splice(i, 1);
		if ($scope.funcs.length == 0) {
			$scope.funcTitle = 'Adicione uma função de variável "x"!';
		};
		$( "#graph" ).empty();
		functionPlot(arr);
		colors();

	}

		


}]);