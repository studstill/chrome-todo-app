var app = angular.module('todoApp', []);

app.controller('todoCtrl', ['$scope', function($scope) {
  if (localStorage.todos !== null) {
    var todoArray = [];
    storedList = JSON.parse(localStorage.todos);
    for (item in storedList) {
      todoArray.push({text: storedList[item].text});
    }
    $scope.todos = todoArray;
  } else {
    $scope.todos = [];
  }

  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };

  $scope.addTodo = function() {
    if ($scope.formTodoText) {
      $scope.todos.push({text: $scope.formTodoText, done: false});
    }
    $scope.formTodoText = null;
    localStorage.todos = JSON.stringify($scope.todos);
  };

  $scope.clearCompleted = function() {
    $scope.todos = _.filter($scope.todos, function(todo) {
      return !todo.done;
    });
    localStorage.todos = JSON.stringify($scope.todos);
  };
}]);

