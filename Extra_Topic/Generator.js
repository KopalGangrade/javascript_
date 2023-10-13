
// Generator

function* numberGen(){
    let i=0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while (true){
        yield (i++).toString();
    }
}

const gen=numberGen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next()); 
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


var hello=()=>{}
// arrow funtion
// amo
// var 
// let
// const

// array
map()
filter()
Reduce()

