---
published: true
title: Web development
tags: web
---
> Html + CSS + [Javascript]({% post_url 2020-08-14-javascript-lang %}) => Browser - [Complete web Developer (ZTM Udemy)](https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/)

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

- `<head>` - is required to be **loaded before** displaying page
- `<body>` - can trigger javascript load while rendering (non blocking display)


tag and element are the same

- `<h1>` .. `<h6>` header
- `<p>` paragraph
- `<b>` (bold) and `<i>` (italic) - outdated and remplaced by `<strong>` and `<em>` (emphasize)
- `<ul>` start a list, can be nested
	- `<li>` list element
    
- `<a href="url>text</a>"` - anchor tag = link

- `<div>` divide content allowing to add style with CSS
- `<span>` span, same as div, but to inline style inside a div element
    
- `<script type="text/javascript">` inline scripting
- `<script type="text/javascript" src="url">` external script, to put at the end of the body to avoid delaying display

Self closing tags
- `<br>` breakdown ("\n")
- `<img src="url" alt="text for reader" width="11" height="12">`
- `<!-- comment -->`

Head tags
- `<link>`
- `<meta>`
	

### Form
- `<form>` start a form with default method="GET" , data are passed on url send to server (query string), **password are in clear text** => `?firname=joe&lastname=biz&password=123`
	- `<input type="text" name="tag1" placeholder="enter input">` self closing input text + tag to identify input
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

CSS 3 - introduced transition / animation

{% highlight css %}
/* comment 
Selector {
	Property: value;
}

ex: 
body

*/
html {
	background: url(header.jpg) no-repeat center center fixed;
    background-size: cover;
}

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
  
### [FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
Mainly one dimenssional Grid

- [flexbox froggy](https://flexboxfroggy.com/) - a game to learn flexbox
  
{% highlight css %}
.container { 
  display: flex;
  flex-wrap: wrap;
}
{% endhighlight %}
  
### CSS Grid
  
complement Flexbox
2 Dimensional Grid

Both should be able to replace Bootstrap container.
  
## [Bootstrap](https://getbootstrap.com/)
  
Reuse somebody else's CSS + **Javascript** for component

## see also:
- [CSS specificity calculator](https://specificity.keegan.st)
- [Can I use \<feature\> ?](https://caniuse.com/#) - provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.
- [paletton.com](https://paletton.com) - pick colors & complement - hex `#AA1334` / `rgb(1,2,3)` / `rgba(1,2,3,0)`
- [creative-tim.com]() - template style (some free)
- [unsplash.com](https://unsplash.com/) - freely usable images
- [mailchimp.com](https://mailchimp.com) - subscribe service with contact mail address / mailing service (\< 2000 concact is free) 