---
published: true
title: Javascript
tags: js lang online
---
> JavaScript is a scripting language that allows to dynamically change the DOM and style of a page, either by querying more information from the backend as needed or by performing computations and changes based on user input directly in the web browser. - [A Complete Overview of Front-End Development in 2021](https://codecapsule.com/2021/01/26/complete-overview-frontend-development-2021/)

[online](https://repl.it/)

[ ![caption](https://i0.wp.com/codecapsule.com/wp-content/uploads/2021/01/techupskill_frontend-SPA.png?resize=1536%2C864&ssl=1) ](https://codecapsule.com/2021/01/26/complete-overview-frontend-development-2021/)

## Javascript (ECMAScript)

Browser Javascript console can be used as interactive environment, with history (up arrow).

- String can use double quote ("") or single quote ('') and nest them with the other. 
- 10 + "34" => "1034"
- 10 - "3"  => 7
- "hello" - "bie" => NaN
- Undefined - variable not assigned

### === / !== comparison

### Variables

can start with \_ or \$

{% highlight javascript %}
var hello="world";
var age=Number( prompt("enter your age"));
{% endhighlight %}

### Functions
Helpers
- `value = prompt("input")`
- `alert(value)`
- `console.log("info")`

{% highlight javascript %}
function sayHello() {
 console.log("Hello");
}

var sayBye = function() {
 console.log("Bye");
}

sayBye();
{% endhighlight %}
