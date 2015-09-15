var Main = (function() {

    var app = angular.module('Todo', []);

    app.controller('TodoCtrl', function($scope) {
        $scope.todos = [
            'Review flash cards',
            'Watch at least 1 MOOC video',
            'Push at least 1 commit to Github',
            'Write for at least 30 minutes',
            'Read at least 50 pages',
            'Exercise'
        ];

        $scope.done = function(todo) {
            var indexOf = $scope.todos.indexOf(todo);
            if (indexOf !== -1) {
                $scope.todos.splice(indexOf, 1, 'Task completed');
            }
        };

        $scope.add = function(e) {
            if (e.which && e.which === 13) {
                $scope.todos.push($scope.newTodo);
                $scope.newTodo = '';
            }
        };

    });
})();