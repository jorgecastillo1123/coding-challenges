'use strict';

var user = {
    name: "jorge",
    age: 22,
    location: 'San D',
    options: ['one', 'two', 'tres']
};

var getLocation = function getLocation(location) {
    return location ? location : 'Nop';
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location),
        ' '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
