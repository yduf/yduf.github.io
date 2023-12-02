---
published: true
title: Javascript
tags: web js lang online playground
---
> JavaScript is a scripting language that allows to dynamically change the DOM and style of a page, either by querying more information from the backend as needed or by performing computations and changes based on user input directly in the web browser. - [A Complete Overview of Front-End Development in 2021](https://codecapsule.com/2021/01/26/complete-overview-frontend-development-2021/)

[online](https://repl.it/)

### see also
- [You don't need JavaScript for that](https://www.htmhell.dev/adventcalendar/2023/2/)
	- Custom Switches
    - Datalist, a native autosuggest
    - A color picker that does more
    - Accordions
    - Dialog modals
    

[ ![caption](https://i0.wp.com/codecapsule.com/wp-content/uploads/2021/01/techupskill_frontend-SPA.png?resize=1536%2C864&ssl=1) ](https://codecapsule.com/2021/01/26/complete-overview-frontend-development-2021/)

## Modifying The DOM
- change all the HTML elements in the page
- change all the HTML attributes in the page
- change all the CSS styles in the page
- remove existing HTML elements and attributes
- add new HTML elements and attributes
- react to all existing HTML events in the page
- create new HTML events in the page

`window` - main object
- `document` - object accessible in javascript console (displayed as html content by the browser)
	- `html` 
    	- `head`
        - `body`
        
It is important to CACHE selectors in variables
{% highlight javascript %}
var h1 = document.querySelector("h1")
{% endhighlight %}

Minimize repainting the DOM - can be seen by paint-flashing (chrome)
see React

### [Events](https://developer.mozilla.org/en-US/docs/Web/Events)

{% highlight javascript %}
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function() { 
	console.log("CLICK"); }
})
{% endhighlight %}


## Javascript (ECMAScript)

Browser Javascript console can be used as interactive environment, with history (up arrow).

- String can use double quote ("") or single quote ('') and nest them with the other. 
- 10 + "34" => "1034"
- 10 - "3"  => 7
- "hello" - "bie" => NaN
- Undefined - variable not assigned
- null

### [=== / !== comparison](https://dorey.github.io/JavaScript-Equality-Table/)

`==`  does type coercion when comparing - avoid
`===` does not do type coercion 

### Variables

can start with \_ or \$

{% highlight javascript %}
// ES6
const player = "bobby'			// forbid reassignment
let experience = 100;			// scope inside any {}

// Destructuring
const { player, experience } = obj;
let  { player} = obj;

const name = "john";
const obj { name
};

// legacy code
var hello="world";				// does not scope inside if, only inside function
var age=Number( prompt("enter your age"));
{% endhighlight %}

### Template string / Template litterals
{% highlight javascript %}
const greegingBest = `Hello ${name}`;
{% endhighlight %}


### [Array](https://www.w3schools.com/js/js_arrays.asp)

support map, filter, reduce,

// ES10
.flat 

{% highlight javascript %}
var list = ["tiger","cat"];		// array indexed from 0

list.forEach( function(i) { console.log(i); } );
list.forEach( function(elm, i) { console.log(elm, i); } );

function logTodos( elm, i) {
  console.log(elm, i);
}

list.forEach( logTodos );
{% endhighlight %}

### Class (ES6)
{% highlight javascript %}
class User = {
	constructor( name, type) {
    	this.name = name;
       	this.type = type;
    }
    
    hello_method() {
    	console.log("hello");
    }
}

class Wizard extends Player {
	constructor( name, type) {
    	super( name, type);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
{% endhighlight %}


### Object (Legacy)

Object are reference types (non primitive type) meaning they are passed by reference (and are refeference themselves).

Primitive types are passed by value.

{% highlight javascript %}
var user = {
	name: "john",
    age: 34,
    shout: function() {
    	console.log("Ah!");
    }
}

let clone = Object.assign({}, user);		// shallow clone
let clone2 = {...user}

let deepClone = JSON.parse(JSON.stringify(user); // deep copy through serialisation

Object.keys(user).forEach(...

// ES8
Object.values
Object.entries

// ES10
Object.fromEntries( Object.entries(user))
{% endhighlight %}

### Functions
Helpers
- `value = prompt("input")`
- `alert(value)`
- `console.log("info")`

Functions definition support closures.
So it can be used to implement:
- currying: `const curriedMultiply = (a) => (b) =>  a + b;`
- compose:  `const compose = (f, g) => (a) => f(g(a));`

{% highlight javascript %}
// ES6
const add = (a,b) => a + b;
const add = (a,b) => {
 return a + b;
}

function greet( name='', age=30, pet='cat') {
	return `Hello ${age}`
}

// legacy
function sayHello() {
 console.log("Hello");
}

var sayBye = function() {
 console.log("Bye");
}

sayBye();

var mul = function multiply(a,b) {
	return a*b;
}

mul( 5,10);

{% endhighlight %}

### Context vs Scope

Scope = visibility of variables.
Context = depth of object tree we are in.

{% highlight javascript %}
console.log(this);
{% endhighlight %}

### Symbol
{% highlight javascript %}
let sym1 = Symbol();
let sym2 = Symbol();

sym1 === sym2 // => false
{% endhighlight %}

### try/catch

appears with ES10

## Note
Parameters(a,b) vs Arguments(4,5)

## Java script Environment
- Web API
	- DOM
    - AJAX
    - Timeout
- Event Loop
- Callback Queue
	- onClick, onLoad, onDone
- JS Engine
	- Callstack
    - Memory Heap

## see also
- [babeljs](https://babeljs.io) - translate new version of javascript syntax to legacy version
- [codepen.io](https://codepen.io)
- [JS Fiddler]({% post_url 2019-01-02-js-fiddler %})
