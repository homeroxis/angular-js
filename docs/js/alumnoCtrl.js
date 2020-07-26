app.controller('alumnoCtrl', [
    '$scope',
    '$routeParams',
    '$http',
    function ($scope, $routeParams, $http) {
        $scope.setActive('mAlumnos');

        var id = $routeParams.id;

        $http
            .get('https://jsonplaceholder.typicode.com/posts/' + id)
            .success(function (data) {
                $scope.alumno = data;
            })
            .error(function (data, status) {
                $scope.data = data || 'Request failed';
                $scope.status = status;
                window.location = '#/alumnos';
            });
    },
]);
