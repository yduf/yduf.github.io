---
title: OpenFreeMap
published: true
tags: map earth cartography
---
> lets you display custom maps on your website and apps for free. - [Home](https://openfreemap.org/)

- [	OpenFreeMap survived 100k requests per second](https://news.ycombinator.com/item?id=44846318)

**see also**
- [OpenStreetMap](https://www.openstreetmap.org/#map=6/46.45/2.21) - [data is free for everyone to use. Our tile servers are not](https://operations.osmfoundation.org/policies/tiles/)
- [Why NUKEMAP isn’t on Google Maps anymore](https://blog.nuclearsecrecy.com/2019/12/13/why-nukemap-isnt-on-google-maps-anymore/)
- [	Shipmap.org](https://www.shipmap.org/) / [HN](https://news.ycombinator.com/item?id=46527161) - map of ship travelling ocean
- [submarine cable map](https://news.ycombinator.com/item?id=28641463) - on a glob
  - [	How a subsea cable is repaired (2021)](https://news.ycombinator.com/item?id=47797457) / [Mother Earth Mother Board](https://efdn.notion.site/Mother-Earth-Mother-Board-WIRED-a8ff97e460bc4ac1b4a7b87f3503a55c)
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
