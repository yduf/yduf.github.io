---
title: Bundler (Ruby)
published: true
tags: ruby package build-system
---
>  consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed. - [Home](https://bundler.io/)

**see also**
- [	Can Bundler be as fast as uv?](https://news.ycombinator.com/item?id=46458302)

# [Setup](https://bundler.io/#getting-started)

Start by writing a _Gemfile_ at the root of your ruby project
you can use `bundle init` to do so.

{% highlight ruby %}
# Gemfile
source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack', '~> 2.2.4'
gem 'rspec'
{% endhighlight %}

Then use Bundler to setup your dev environment
{% highlight bash %}
$ bundle install
$ git add Gemfile Gemfile.lock
{% endhighlight %}

## [.gemspec and Gemfile](https://yehudakatz.com/2010/12/16/clarifying-the-roles-of-the-gemspec-and-gemfile/)

## [VSCode](https://chatgpt.com/share/69a47318-5d90-800d-984d-3b2c31251df9)

Override Vscode project so that it run `bundle exec ruby` when triggering Code Runner extension

{% highlight bash %}
# .vscode/settings.json
{
  "runner.commands": {
    "ruby": "bundle exec ruby"
  }
}
{% endhighlight %}

