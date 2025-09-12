---
published: true
title: Meta-table (Lua class)
tags: lua OOP
toc: true
---
> Lua Object-Oriented Tutorial – [Complete Guide](https://gamedevacademy.org/lua-object-oriented-tutorial-complete-guide/)

In Lua, there’s no built-in “object” type like in Java or Python, but you can simulate objects using tables (Lua’s only data structure) plus metatables. - [ChatGPT](https://chatgpt.com/share/68ba9ed4-53ac-800d-a165-271314f04b2a)

### Basic Table as an Object

{% highlight lua %}
-- Simple object-like table
Person = {
    name = "Alice",
    age = 25
}

function Person:greet()
    print("Hi, my name is " .. self.name)
end

Person:greet()  -- Hi, my name is Alice
{% endhighlight %}

Notice the `:` operator – it’s shorthand for passing `self` as the first argument.

## Class
### Constructor Pattern

{% highlight lua %}
-- Creating a class
Vector2 = {}
Vector2.__index = Vector2
function Vector2.new(x, y)
  local self = setmetatable({}, Vector2)
  self.x = x
  self.y = y
  return self
end

-- Create an instance
local vec = Vector2.new(3, 4)
{% endhighlight %}

### Methods 
{% highlight lua %}
function Vector2:magnitude()
  return math.sqrt(self.x * self.x + self.y * self.y)
end
{% endhighlight %}

Instantiation and Method Calling in Lua OOP

{% highlight lua %}
-- Call a method
local vec = Vector2.new(3, 4)
print(vec:magnitude())  --prints 5
{% endhighlight %}

### Inheritance

{% highlight lua %}
-- Creating a new class based on 'Vector2'
Vector3 = setmetatable({}, Vector2)
Vector3.__index = Vector3
function Vector3.new(x, y, z)
 local self = setmetatable(Vector2.new(x, y), Vector3)
 self.z = z or 0
 return self
end

-- Overriding the 'magnitude' method for 'Vector3'
function Vector3:magnitude()
 return math.sqrt(self.x * self.x + self.y * self.y + self.z * self.z)
end
{% endhighlight %}

## see also
- [How can one implement OO in Lua?](https://stackoverflow.com/questions/4799078/how-can-one-implement-oo-in-lua)
