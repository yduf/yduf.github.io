---
published: true
title: ruby strings litteral
tags: ruby string
---
## [String literal without need to escape backslash](https://stackoverflow.com/questions/29124058/string-literal-without-need-to-escape-backslash/29124475#29124475)

{% highlight ruby %}
config=<<'_'
{
    "key1": "{ \"key2\": \"123\"}"
}
_

{% endhighlight %}

## [squiggly heredoc (ruby 2.3)](https://infinum.co/the-capsized-eight/multiline-strings-ruby-2-3-0-the-squiggly-heredoc)

{% highlight ruby %}
class Subscription
  def warning_message
    <<~HEREDOC
      Subscription expiring soon!
      Your free trial will expire in #{days_until_expiration} days.
      Please update your billing information.
    HEREDOC
  end
end
{% endhighlight %}

## [heredoc on next line](https://github.com/yuki24/object_mapper)
{% highlight ruby %}
data = JSON.parse(<<-DATA, symbolize_names: true)
[
  {
    "id": "12345",
    "type": "New repository created",
    "repo": {
      "id": 3,
      "name": "yuki24/object_mapper"
    }
]
DATA
{% endhighlight %}

