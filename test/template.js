/*global Template, completedTodos*/
Template.prototype.clearCompletedButton = function (completedTodos) {
    if (completedTodos > 0) {
        return 'Clear completed';
    } else {
        return '';
    }
};