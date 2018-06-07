var user = {
    name:"jorge",
    age:22,
    location:'San D',
    options: ['one','two','tres']
}

var getLocation = location => {
    return location ? location : 'Nop'
}

var template = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)} </p>
        
    </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot);