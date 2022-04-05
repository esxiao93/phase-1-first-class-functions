function receivesAFunction (Number) {
    return Number();
}
receivesAFunction(function() {return 10 + 10; });

function returnsANamedFunction() {
    const Num1 = () => console.log(22);
    return Num1;
}

function returnsAnAnonymousFunction() {
    return () => console.log("anonymous");
}