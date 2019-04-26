/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When function contains global scope, .this is in the function will be in the window object
* 2. When function is called by a preceding dot, the object before is .this.
* 3. When  a constructor function is used, .this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. When a JS’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function greeting(name) {
    console.log('Hello ' + name);
    console.log(this);
}

greeting('Zac');

// Principle 2
// code example for Implicit Binding

var greeting1 = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(this.greeting + name);
        console.log(this);
    }
}

greeting1.speak('Zac');

// Principle 3
// code example for New Binding

function greeting2(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
};

var greetZac = new greeting2('Zac');
var greetBrittany = new greeting2('Brittany');

greetZac.speak();
greetBrittany.speak();

// Principle 4
// code example for Explicit Binding

greetZac.sayGoodbye.call(greetBrittany);
greetBrittany.sayGoodbye.apply(greetZac);