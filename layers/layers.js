var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
}),
new ol.layer.Tile({
    'title': 'Stamen Watercolor',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
})
]
});
var lyr_OSFourthEdition1938_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "OS Fourth Edition (1938)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OSFourthEdition1938_0.png",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-698350.614411, 7046329.867261, -694362.908169, 7048452.104442]
                            })
                        });var format_TheatreLocations_1 = new ol.format.GeoJSON();
var features_TheatreLocations_1 = format_TheatreLocations_1.readFeatures(json_TheatreLocations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TheatreLocations_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TheatreLocations_1.addFeatures(features_TheatreLocations_1);cluster_TheatreLocations_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TheatreLocations_1
});var lyr_TheatreLocations_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_TheatreLocations_1, 
                style: style_TheatreLocations_1,
                title: '<img src="styles/legend/TheatreLocations_1.png" /> Theatre Locations'
            });
var group_HistoricalMaps = new ol.layer.Group({
                                layers: [lyr_OSFourthEdition1938_0,],
                                title: "Historical Maps"});

lyr_OSFourthEdition1938_0.setVisible(false);lyr_TheatreLocations_1.setVisible(true);
var layersList = [baseLayer,group_HistoricalMaps,lyr_TheatreLocations_1];
lyr_TheatreLocations_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'visibility': 'visibility', 'image': 'image', 'Search-1': 'Search-1', });
lyr_TheatreLocations_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'visibility': 'TextEdit', 'image': 'Photo', 'Search-1': 'Hidden', });
lyr_TheatreLocations_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'visibility': 'no label', 'image': 'no label', });
lyr_TheatreLocations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});