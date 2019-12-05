<template>
  <div class="location-map-page-wrap">
    <map
      id="map"
      scale="12"
      :longitude="longitude"
      :latitude="latitude"
      :markers="markers"
      :include-points='markers'
      show-location
      :style="{height: mapHeight+'px' ,width:mapWidth+'px'}"
      @markertap='markerChange'
    ></map>
  </div>
</template>

<script src='./index.page.js'></script>

<style scoped src='./index.page.css'></style>
