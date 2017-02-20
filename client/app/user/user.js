 angular.module('myapp.User',[])

.controller('UserController',function ($scope,$http,$location,User){
	$scope.user = {};
	$scope.signupuser={};
	$scope.ifuser=true;

	$scope.signin = function () {
		console.log("data");
		User.signin($scope.user)
		.then(function (data) {
			console.log(data);
			$scope.ifuser=false;
			$location.path('/welcome');
			//$window.location.reload();
		})
		.catch(function (error) {
			console.log(error);
			$scope.ifuser=false;
			$scope.username="";
			$scope.password="";
		})
	}

 	$scope.signup = function (newUser) {
        User.signup(newUser)
        .then(function (user) {
            $scope.signin({
                username:newUser.username,
                password:newUser.password
            });
        })
        .catch(function (error) {
        	console.log(error);
            console.log("user already exist");
        })
    }
})


   



	    