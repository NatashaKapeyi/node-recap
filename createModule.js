//when creating a module we make use of the keyword exports to enable it to be accessed outside the module file
//for example: if we create a function that returns the current year
exports.Date = function () {
    return new Date().getFullYear() ;
};

 