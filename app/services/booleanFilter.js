angular.module('StudentApp').filter('yesNo', function() {
    return function(input) {
        return input ? 'Yes' : 'No';
    }
});