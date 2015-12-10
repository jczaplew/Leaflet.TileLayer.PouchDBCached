# leaflet-tilelayer-pouchdb
Cache raster map tiles to PouchDB. Forked from https://github.com/MazeMap/Leaflet.TileLayer.PouchDBCached.

## Usage
In order to use `leaflet-tilelayer-pouchdb`, you must load PouchDB first. Initialize a normal tile layer, but
add an additional `useCache` property to the layer's options.

##### Example
````
<script src="https://cdnjs.cloudflare.com/ajax/libs/pouchdb/5.1.0/pouchdb.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0-beta.2.rc.2/leaflet.js"></script>
<script src="js/leaflet-tilelayer-pouchdb/dist/leaflet-tilelayer-pouchdb.min.js"></script>
<script>

var map = L.map('map').setView([19, 72.8], 11);

var tiles = L.tileLayer('http://sometiles.com/layer/{z}/{x}/{y}/tile.png', {
  useCache: true
}).addTo(map);

tiles.on('load', function() {
  tiles.seed(map.getBounds(), map.getZoom(), map.getZoom() + 2);
});

</script>
````

## API
#### .seed(latlngBounds, minZoom, maxZoom)
Seed the PouchDB cache with all tiles that fill the provided bounding box between (inclusive) the provided zoom levels.
Uses a database called `offline-tiles`

#### .clearCache()
Empty the tile cache

#### Events

  + `tilecache-hit` returns an object with a `tile` and `tileUrl`
  + `tilecache-miss` returns an object with a `tile` and `tileUrl`
  + `tilecache-load-start` returns the `bbox`, `minZoom`, and `maxZoom` being used to seed the cache
  + `tilecache-load-progress` returns `done` which is the number of tiles that have been cached, and `total` which is the total number of tiles being cached
  + `tilecache-load-done` return `true`


## Developing

`gulp`
