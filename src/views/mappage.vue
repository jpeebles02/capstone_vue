<template>
  <div class="mappage" style="min-height: 180vh;">
    <h2>Local Gyms</h2>
    <div id="map"></div>
  </div>
</template>

<style>


#map {
  position: absolute;
/*left: 300px;
right: 200px;*/
width: 90%;
height: 30%;
}
/*body {
margin: 0;
padding: 0;
}*/
</style>

<script>
  import Vue from "vue";
  import HighchartsVue from 'highcharts-vue';
  import {Chart} from 'highcharts-vue'
  import moment from "moment";

  var axios = require("axios");
  /* global mapboxgl */
  /* global mapboxSdk */
  export default {
    data: function() {
      return {
        places: [
        {
          lat: 41.8937,
          long: -87.6374,
          description: "UFC Gym in River North"
        },
        {
          lat: 41.8713,
          long: -87.6272,
          description: "Xsport Fitness on south State street"
        },
        {
          lat: 41.8884,
          long: -87.6354,
          description:
          "Members-only gym in the Merchandise Mart offering exercise equipment, classes & personal training"
        }
        ],
      };
    },

  mounted: function() {
    this.setupMap();
  },
  methods: {
    setupMap: function() {
      mapboxgl.accessToken =
        "pk.eyJ1IjoianBlZWJsZXMyIiwiYSI6ImNqdWRhc2h5cTB0NzI0M25xZWZ6cThtcTYifQ.rFfoxhSgmZHr66vMqgnxfQ";

      var map = new mapboxgl.Map({
        container: "map", // container id
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-87.6348, 41.8921], // starting position [lng, lat]
        zoom: 12,
        pitch: 45,
        bearing: -17.6
      });
      map.addControl(
        new MapboxDirections({
          accessToken: mapboxgl.accessToken
        }),
        "top-left"
      );
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        })
      );

      this.places.forEach(function(place) {
        var popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
        var marker = new mapboxgl.Marker()
          .setLngLat([place.long, place.lat])
          .setPopup(popup) // sets a popup on this marker
          .addTo(map);
      });

      map.on("load", function() {
        // Insert the layer beneath any symbol layer.
        var layers = map.getStyle().layers;

        var labelLayerId;
        for (var i = 0; i < layers.length; i++) {
          if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
            labelLayerId = layers[i].id;
            break;
          }
        }
        map.addLayer(
          {
            id: "3d-buildings",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 15,
            paint: {
              "fill-extrusion-color": "#aaa",

              // use an 'interpolate' expression to add a smooth transition effect to the
              // buildings as the user zooms in
              "fill-extrusion-height": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "height"]],
              "fill-extrusion-base": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "min_height"]],
              "fill-extrusion-opacity": 0.6
            }
          },
          labelLayerId
        );
      });
    }
  }
  };
</script>