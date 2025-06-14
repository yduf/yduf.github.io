---
title: Bundler (Ruby)
published: true
tags: ruby build-system
---
>  consistent environment for Ruby projects by tracking and installing the exact gems and versions that are needed. - [Home](https://bundler.io/)

### [Setup]()

Start by writing a Gemfile at the root of your ruby project
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