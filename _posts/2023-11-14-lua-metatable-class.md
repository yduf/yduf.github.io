---
published: true
title: Meta-table (Lua class)
tags: lua
---
> Lua Object-Oriented Tutorial – [Complete Guide](https://gamedevacademy.org/lua-object-oriented-tutorial-complete-guide/)

Creating Classes using Metatables in Lua

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
{% endhighlight %}

Methods in Lua OOP

{% highlight lua %}
function Vector2:magnitude()
  return math.sqrt(self.x * self.x + self.y * self.y)
end
{% endhighlight %}

Instantiation and Method Calling in Lua OOP

{% highlight lua %}
-- Create an instance
local vec = Vector2.new(3, 4)
-- Call a method
print(vec:magnitude())  --prints 5
{% endhighlight %}

Inheritance in Lua

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

