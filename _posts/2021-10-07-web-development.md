---
published: true
title: Web development
tags: web
---
> Html + CSS + Javascript => Browser - [Complete web Developer (Udemy)]()

- JQuery - outdated - library used as compatibility layer between browser
- LAMP stack - somewhat outdated as well - **L**inux **A**pache **M**ySQL **P**HP

## [HTML](https://www.w3schools.com/tags/default.asp)

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
    
    
Self closing tags
- `<br>` breakdown ("\n")
- `<img src="url" alt="text for reader" width="11" height="12">`

Form
- `<form>` start a form
	- `<input type="text">` self closing input text
	- `<input type="email" required> required input + email validation
	- `<input type="password" min="5> password field, with minimum size
	- `<input type="date">` date input (calendar ui)
	- `<input type="radio" name="group1">`	- 2 radio button grouped together with group1
	- `<input type="radio" name="group1">
    - `<input type="checkbox">` mutliple checkbox
	- `<select>` dropdown options
  		- `<option value="A">`
  		- `<option value="B">`
	- `<select multiple>` dropdown options with multi selection
    
    - `<input type="submit" value="ok">` submit button
    - `<input type="reset">` reset form