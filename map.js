map={
view: function(arr){
out='<div id = "map" style = "width:100%; height:580px"></div>';
document.getElementById('content').innerHTML=out;
// gps0='-6.41944,106.86358';
gps=arr.split(',');
var mapOptions = {
center:[gps[0],gps[1]],
zoom: 15
}
var map = new L.map('map', mapOptions);
var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
// var marker = L.marker([-6.41944,106.86358]);
var marker = L.marker([gps[0],gps[1]]);
marker.addTo(map);
},

};
