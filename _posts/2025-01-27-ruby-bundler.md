---
title: Bundler (Ruby)
published: true
tags: ruby package build-system
---
>  consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed. - [Home](https://bundler.io/)

see also
- [	Can Bundler be as fast as uv?](https://news.ycombinator.com/item?id=46458302)

### [Setup](https://bundler.io/#getting-started)

Start by writing a Gemfile at the root of your ruby project
you can use `bundle init` to do so.

{% highlight ruby %}
# my gemfile
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

### [.gemspec and Gemfile](https://yehudakatz.com/2010/12/16/clarifying-the-roles-of-the-gemspec-and-gemfile/)
