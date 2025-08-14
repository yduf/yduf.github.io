---
title: OpenFreeMap
published: true
tags: map earth cartography
---
> lets you display custom maps on your website and apps for free. - [Home](https://openfreemap.org/)

- [	OpenFreeMap survived 100k requests per second](https://news.ycombinator.com/item?id=44846318)

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
