# leaflet-tilelayer-pouchdb
Cache raster map tiles to PouchDB. Forked from https://github.com/MazeMap/Leaflet.TileLayer.PouchDBCached.

## Usage
In order to use `leaflet-tilelayer-pouchdb`, you must load PouchDB first. Initialize a normal tile layer, but
add an additional `useCache` property to the layer's options.

##### Example
````
var tiles = L.tileLayer('http://sometiles.com/layer/{z}/{x}/{y}/tile.png', {
  useCache: true
}).addTo(map);

// Seed the cache when a button is clicked
document.querySelector("#some-button").addEventListener('click', function() {
  tiles.seed(map.getBounds(), map.getZoom(), map.getZoom() + 2);
});

````

## API
#### .seed(latlngBounds, minZoom, maxZoom)
Seed the PouchDB cache with all tiles that fill the provided bounding box between (inclusive) the provided zoom levels.
Uses a database called `offline-tiles`

#### .clearCache()
Empty the tile cache


## Developing
````gulp````
