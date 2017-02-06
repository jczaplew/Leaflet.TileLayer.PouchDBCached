# leaflet-tilelayer-pouchdb
Cache raster map tiles to PouchDB. Forked from https://github.com/MazeMap/Leaflet.TileLayer.PouchDBCached.

## Usage
In order to use `leaflet-tilelayer-pouchdb`, you must load PouchDB first. Initialize a normal tile layer, but
add an additional `useCache` property to the layer's options.

##### Example
````
<script src="https://cdnjs.cloudflare.com/ajax/libs/pouchdb/6.1.1/pouchdb.min.js"></script>
<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
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

A full example can be found in the `/test` folder.


## API
#### .seed(latlngBounds, minZoom, maxZoom)
Seed the PouchDB cache with all tiles that fill the provided bounding box between (inclusive) the provided zoom levels.
Uses a database called `offline-tiles`. Fires the following events:
  + `tilecache-load-start` returns the `bbox`, `minZoom`, and `maxZoom` being used to seed the cache
  + `tilecache-load-progress` returns `done` which is the number of tiles that have been cached, and `total` which is the total number of tiles being cached
  + `tilecache-load-done` returns `true` when the given extent has been cleared


#### .clear(latlngBounds, minZoom, maxZoom)
Clear the PouchDB cache of all tiles that fill the provided bounding box between (inclusive) the provided zoom levels. Fires the following events:
  + `tilecache-clear-start` indicates the cache has begun to clear the given extent
  + `tilecache-clear-progress` returns `done` which is the number of tiles that have been cleared, and `total` which is the total number of tiles that need to be cleared
  + `tilecache-clear-done` returns `true` when the given extent is done being cleared

#### .destroy(callback?)
Remove all cached tiles.

#### Options
  + `useCache` - default is false
  + `useOnlyCache` - default is `false`. If `true`, the network will never be used for tile requests unless while tiles are caching.
  + `cacheMaxAge` - default is `24*3600*1000` (24hrs).

#### Events
  + `tilecache-hit` returns an object with a `tile` and `tileUrl`
  + `tilecache-miss` returns an object with a `tile` and `tileUrl`


## Developing
`gulp`
