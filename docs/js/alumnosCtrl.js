app.controller('alumnosCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
        $scope.setActive('mAlumnos');

        $scope.alumnos = {};
        $scope.position = 7;

        $http.get('https://jsonplaceholder.typicode.com/posts').success(function (data) {
            $scope.alumnos = data;

            console.log($scope.alumnos.length);
        });

        $scope.siguientes = function () {
            if ($scope.alumnos.length > $scope.position) {
                $scope.position += 7;
            }
        };
        $scope.anteriores = function () {
            if ($scope.position > 7) {
                $scope.position -= 7;
            }
        };
    },
]);
