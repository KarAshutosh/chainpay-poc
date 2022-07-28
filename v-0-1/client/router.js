window.onload = function() {
    console.log('DOM has loaded');

    var Router = function(name, routes){
        return{
            name: name,
            routes: routes
        }
    };

    var myRouter = new Router('myRouter', [
        {
            path: '/TestingPOC/client/index.html',
            name: 'Home'
        },
        {
            path: '/TestingPOC/client/success.html',
            name: 'success'
        },
        {
            path: '/TestingPOC/client/cancel.html',
            name: 'cancel'
        }
    ]);

    console.log(myRouter);
    var currentPath = window.location.pathname;
    console.log(currentPath);

}