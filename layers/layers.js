var wms_layers = [];

var format_WSDP_0 = new ol.format.GeoJSON();
var features_WSDP_0 = format_WSDP_0.readFeatures(json_WSDP_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSDP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSDP_0.addFeatures(features_WSDP_0);
var lyr_WSDP_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSDP_0, 
                style: style_WSDP_0,
                popuplayertitle: "WSDP",
                interactive: true,
                title: '<img src="styles/legend/WSDP_0.png" /> WSDP'
            });
var format_Clipped_1 = new ol.format.GeoJSON();
var features_Clipped_1 = format_Clipped_1.readFeatures(json_Clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_1.addFeatures(features_Clipped_1);
var lyr_Clipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_1, 
                style: style_Clipped_1,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_1_0.png" /> 1<br />\
    <img src="styles/legend/Clipped_1_1.png" /> 2<br />\
    <img src="styles/legend/Clipped_1_2.png" /> 3<br />\
    <img src="styles/legend/Clipped_1_3.png" /> 4<br />\
    <img src="styles/legend/Clipped_1_4.png" /> 5<br />\
    <img src="styles/legend/Clipped_1_5.png" /> 6<br />\
    <img src="styles/legend/Clipped_1_6.png" /> 0<br />'
        });
var format_dam_2 = new ol.format.GeoJSON();
var features_dam_2 = format_dam_2.readFeatures(json_dam_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dam_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dam_2.addFeatures(features_dam_2);
var lyr_dam_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dam_2, 
                style: style_dam_2,
                popuplayertitle: "dam",
                interactive: true,
                title: '<img src="styles/legend/dam_2.png" /> dam'
            });

lyr_WSDP_0.setVisible(true);lyr_Clipped_1.setVisible(true);lyr_dam_2.setVisible(true);
var layersList = [lyr_WSDP_0,lyr_Clipped_1,lyr_dam_2];
lyr_WSDP_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Clipped_1.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_dam_2.set('fieldAliases', {'dam': 'dam', 'latti': 'latti', 'longi': 'longi', 'image': 'image', });
lyr_WSDP_0.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'Range', 'KERWSDRP_I': 'Range', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Clipped_1.set('fieldImages', {'ORDER1': 'Range', });
lyr_dam_2.set('fieldImages', {'dam': 'TextEdit', 'latti': 'TextEdit', 'longi': 'TextEdit', 'image': 'ExternalResource', });
lyr_WSDP_0.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Clipped_1.set('fieldLabels', {'ORDER1': 'inline label - always visible', });
lyr_dam_2.set('fieldLabels', {'dam': 'inline label - always visible', 'latti': 'inline label - always visible', 'longi': 'inline label - always visible', 'image': 'inline label - always visible', });
lyr_dam_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});