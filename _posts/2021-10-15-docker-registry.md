---
published: true
title: Docker registry
tags: docker registry
---
> Running our Docker registry on-prem with Harbor - [HN](https://news.ycombinator.com/item?id=45038567)

## Harbor

## [Registrish](https://github.com/jpetazzo/registrish?tab=readme-ov-file#registrish)

kind of a Docker registry, but with many restrictions.

On the bright side, registrish can be deployed without running the registry code, using almost any static file hosting service. For instance:
- a plain NGINX server (without LUA, JSX, or whatever custom module)
- a plain Apache2 server (using .htaccess overrides)
- the Netlify CDN
- an object store like S3, or a compatible one like R2 or Scaleway

## Nexus

> This post will show how to configure Nexus OSS to act as a pull-through cache for either the Docker Hub or a private repository, or a combination of them. It will also show how to configure the Docker clients to use your own cache when retrieving images. - [Using Nexus OSS as a proxy/cache for Docker images](https://mtijhof.wordpress.com/2018/07/23/using-nexus-oss-as-a-proxy-cache-for-docker-images/)

- [Running nexus3 on docker](https://voltwu.github.io/blog/docker/2021/01/21/using-nexus3-as-your-repository-a-simple-guide/)
- [Create Private Docker Registry (base on Nexus3)](https://qiita.com/leechungkyu/items/86cad0396cf95b3b6973)
