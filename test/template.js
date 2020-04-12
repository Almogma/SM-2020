/*global Template, completedTodos*/
Template.prototype.clearCompletedButton = function (completedTodos) {
    if (completedTodos > 0) {
		completedTodos=completedTodos+1;
        return 'Clear completed';
    } else {
        return '';
    }
};