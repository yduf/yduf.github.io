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
	- `<input type="email" required>` required input + email validation
	- `<input type="password" min="5>` password field, with minimum size
	- `<input type="date">` date input (calendar ui)
	- `<input type="radio" name="group1" value="bt1">`	- 2 radio button grouped together with group1
	- `<input type="radio" name="group1" value="bt2">`
    - `<input type="checkbox">` mutliple checkbox
	- `<select>` dropdown options
  		- `<option value="A">`
  		- `<option value="B">`
	- `<select multiple>` dropdown options with multi selection
    
    - `<input type="submit" value="ok">` submit button
    - `<input type="reset">` reset form
    
## CSS - **C**ascading **S**tyle **S**heet

{% highlight css %}
/* comment 
Selector {
	Property: value;
}

ex: */
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
  <link rel="stylesheet" type="text/css" href="url://style.css">
  <link rel="stylesheet" type="text/css" href="style2.css"> <!-- css style be combined-->
</head>
...
{% endhighlight %}

Can also be specified inline
{% highlight html %}
...
<header style="color: red">
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

### Properties - [CSS Tricks](https://css-tricks.com/almanac)
- `color: red;`
- `border : 5px solid purple;`
- `background-image: url(backgroundimage.jpg)`;
	- `background-size: cover;`
- `cursor: pointer;`
- `display: inline-block;`

Text
- `text-align: center;`
- `text-decoration:`
- `text-transform:`
- `line-height: 20px;`
- `font-style: italic;`
- `font-weight: bold;`
- `font-size: 80%;`
- `font-family: "Times new Roman", Georgia;`
	- custom font can be specifieds, see also google.font - **make websiste slower**

Image
- `float: left;` - force image on left and allow text to fill on the right.
- `clear: both`  - remove float propertie for selected selector

### Selectors

Multiple `class` attribute can be added to html tags. They are referenced by `.class` in CCS file.
Element can also uniquely identified by `id` (`#id` in css)

{% highlight html %}
<p class="webtext active">
<p id="p1">
{% endhighlight %}

{% highlight css %}
* { /* apply to all elements */
}

h2, p { /* combined style for h2 and p*/
	Property: value;
}
  
h2 p { /* only p inside h2 */
	Property: value;
}
  
h2 > p { /* all p that are parents of h2 */
	Property: value;
}
  
h2 + p { /* all p elements exactly after h2 */
	Property: value;
}
  
.webtext {
  border: ...
}
  
.active {
  color: ...
}

#p1 { /* using id */
  color: ... !important; /* !important overide cascading and force value*/
}
{% endhighlight %}

- `Selector :hover` - changed style on over
- `Selector :firstchild` 
- `Selector :lastchild`

### Box Model
- border
- display
- padding
- margin
- width / height
  
Dimension
- px - size in pixel
- 80%
- 3em - 3x the current element size
- 3rem - 3x the root element size
  
### FlexBox


## see also:
- [CSS specificity calculator](https://specificity.keegan.st)
- [paletton.com](https://paletton.com) - pick colors & complement - hex `#AA1334` / `rgb(1,2,3)` / `rgba(1,2,3,0)`
- [unsplash.com](https://unsplash.com/) - freely usable images