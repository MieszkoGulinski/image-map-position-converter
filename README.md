# Image Map Position Converter
A simple tool for extracting geographical position of places marked on a map given as an image file, and plotting them on a zoomable/draggable map.

## How to use
1. Upload a map image. The image will be called *source map*.
2. Mark *orientation points* both on the source map and the *destination map* - a regular zoomable/draggable map based on OpenStreetMap. Orientation points are locations visible on the source map, which
3. Mark *measured points* on the image map. Measured points have known position marked on the source map, and their position is calculated and drawn on the destination map.
4. See the destination map with measured points and/or download the destination point locations as CSV.

## Example 1.
We have a [map of caves in Poland](https://upload.wikimedia.org/wikipedia/commons/6/60/Polska_jaskinie.png), available as a PNG file, and we want to extract geographical locations of some caves.

In this case, only the biggest cities have their outlines marked, so the orientation points could be e.g. river junctions, river crossing a country border, or just turns of a river or a border.

## Example 2
We have a [map of Old Prussian settlements](http://prusowie.pl/mapy/3_foto/big/0013-mapa.jpg), based on archaeological research, available as a JPG file, and we want to extract geographical locations of some historical villages. As the orientation points, we can mark e.g. river junctions and estuaries or lakes. The borders shown of the source map won't help us, as they are historical borders from hundreds of years ago.

## Libraries, tools etc:
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Leaflet](https://leafletjs.com/)
- [React](https://reactjs.org/)
