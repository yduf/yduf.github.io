---
published: true
title: Web development
tags: web
---
> Html + CSS + Javascript => Browser - [Complete web Developer (Udemy)]()

- JQuery - outdated - library used as compatibility layer between browser
- LAMP stack - somewhat outdated as well - **L**inux **A**pache **M**ySQL **P**HP

## [HTML](https://www.w3schools.com/tags/default.asp)

HTML5 introduce semantic element : need ref

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
      <title>website</title>
  </head>
  <body>
    Hello World
  </body>
</html>
{% endhighlight %}

tag and element are the same

- `<h1>` .. `<h6>` header
- `<p>` paragraph
- `<b>` (bold) and `<i>` (italic) - outdated and remplaced by `<strong>` and `<em>` (emphasize)
- `<ul>` start a list, can be nested
	- `<li>` list element
    
- `<a href="url>text</a>"` - anchor tag = link

- `<div>` divide content allowing to add style with CSS
- `<span>` span, same as div, but to inline style inside a div element
    
Self closing tags
- `<br>` breakdown ("\n")
- `<img src="url" alt="text for reader" width="11" height="12">`
- `<!-- comment -->`

### Form
- `<form>` start a form with default method="GET" , data are passed on url send to server (query string), **password are in clear text** => `?firname=joe&lastname=biz&password=123`
	- `<input type="text" name="tag1">` self closing input text + tag to identify input
	- `<input type="email" required> required input + email validation
	- `<input type="password" min="5> password field, with minimum size
	- `<input type="date">` date input (calendar ui)
	- `<input type="radio" name="group1" value="bt1">`	- 2 radio button grouped together with group1
	- `<input type="radio" name="group1" value="bt2">
    - `<input type="checkbox">` mutliple checkbox
	- `<select>` dropdown options
  		- `<option value="A">`
  		- `<option value="B">`
	- `<select multiple>` dropdown options with multi selection
    
    - `<input type="submit" value="ok">` submit button
    - `<input type="reset">` reset form
    
## CSS - **C**ascading **S**tyle **S**heet

{% highlight css %}
/* comment */
Selector {
	Property: value;
}

/* ex */
h2 {
	color: red;
}

p { /* first p */
	color: pink;
}

p { /* second p */
	color: green;
}
{% endhighlight %}

As to be incorporated into html doc
{% highlight html %}
...
<head>
  <link rel="stylesheet" type="text/css" href="url to css file">
</head>
...
{% endhighlight %}

Can also be specified inline
{% highlight html %}
...
<header style>
</header>
... or
<header>
  <style>
    h2 {
		color: red;
    }
  </style>
</header>
{% endhighlight %}