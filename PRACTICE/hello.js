function coding(){
    console.log('hey coding in js');
}


coding();
// noraml funtion



// self invoking function

(function print(){
    console.log(' i am printing');
})();



// anonymous self invoking function
(function (x,y){
    console.log(x+y);
})(10,20)