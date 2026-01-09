---
title: OpenFreeMap
published: true
tags: map earth cartography
---
> lets you display custom maps on your website and apps for free. - [Home](https://openfreemap.org/)

- [	OpenFreeMap survived 100k requests per second](https://news.ycombinator.com/item?id=44846318)

see also
- [	Shipmap.org](https://www.shipmap.org/) / [HN](https://news.ycombinator.com/item?id=46527161) - map of ship travelling ocean
- [submarine cable map](https://news.ycombinator.com/item?id=28641463) - on a glob
- [The_Victorian_Internet (subsea telegraph network)](https://news.ycombinator.com/item?id=46432999) / [HN](https://en.wikipedia.org/wiki/The_Victorian_Internet) - Alice Springs exists because it was a repeater station for a telegraph line that stretched from Southern Australia all the way to London. 

### [Quick Start Guide](https://openfreemap.org/quick_start/)

<script src="https://unpkg.com/maplibre-gl/dist/maplibre-gl.js"></script>
<link href="https://unpkg.com/maplibre-gl/dist/maplibre-gl.css" rel="stylesheet" />

<div id="map" style="width: 100%; height: 500px"></div>
<script>
  const map = new maplibregl.Map({
    style: 'https://tiles.openfreemap.org/styles/liberty',
    center: [5.71667, 45.16667],
    zoom: 9.5,
    container: 'map',
  })
</script>
