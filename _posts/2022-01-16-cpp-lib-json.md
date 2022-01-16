---
published: true
title: JSON (C++)
tags: json c++ lib
---
> [JSON for Modern C++](https://nlohmann.github.io/json/features/arbitrary_types/)  - [nlohmann/json ](https://github.com/nlohmann/json) / [SO](https://stackoverflow.com/a/64792566/51386)

In languages such as Python, JSON feels like a first class data type. We used all the operator magic of modern C++ to achieve the same feeling in your code.

{% highlight cpp %}
// create an empty structure (null)
json j;

// add a number that is stored as double (note the implicit conversion of j to an object)
j["pi"] = 3.141;

// instead, you could also write (which looks very similar to the JSON above)
json j2 = {
  {"pi", 3.141},
  {"happy", true},
  {"name", "Niels"},
  {"nothing", nullptr},
  {"answer", {
    {"everything", 42}
  }},
  {"list", {1, 0, 2}},
  {"object", {
    {"currency", "USD"},
    {"value", 42.99}
  }}
  
// You can create a JSON value (deserialization) by appending _json to a string literal:
// create object from string literal
json j = "{ \"happy\": true, \"pi\": 3.141 }"_json;

// or even nicer with a raw string literal
auto j2 = R"(
  {
    "happy": true,
    "pi": 3.141
  }
)"_json;

// parse explicitly
auto j3 = json::parse(R"({"happy": true, "pi": 3.141})");

// explicit conversion to string
std::string s = j.dump();    // {"happy":true,"pi":3.141}

// serialization with pretty printing
// pass in the amount of spaces to indent
std::cout << j.dump(4) << std::endl;
// {
//     "happy": true,
//     "pi": 3.141
// }
{% endhighlight %}