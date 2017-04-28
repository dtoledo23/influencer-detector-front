<template>
	<div>
		<highmaps :options="options"></highmaps>
	</div>


</template>
<script src="https://code.highcharts.com/mapdata/custom/world.js"></script>
<script>
// Use Highstock and Highmaps
import Vue from 'vue';
import VueHighcharts from 'vue-highcharts';
import Highcharts from 'highcharts/highstock';
import loadMap from 'highcharts/modules/map';

loadMap(Highcharts);
Vue.use(VueHighcharts, { Highcharts });
Vue.use(VueHighcharts, { Highcharts: Highcharts });

var options = {
  chart: {
    borderWidth: 1
  },
  title: {
    text: 'Nordic countries'
  },
  subtitle: {
    text: 'Demo of drawing all areas in the map, only highlighting partial data'
  },
  legend: {
    enabled: false
  },
  series: [{
    name: 'Country',
    mapData: Highcharts.maps['custom/world'],
    data: [
      ['is', 1],
      ['no', 1],
      ['se', 1],
      ['dk', 1],
      ['fi', 1]
    ],
    dataLabels: {
      enabled: true,
      color: '#FFFFFF',
      formatter: function () {
        if (this.point.value) {
          return this.point.name;
        }
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '{point.name}'
    }
  }]
};
export default {

	name: 'GeoStats',

	data () {
		return {
			options:options
		};
	}
};
</script>

<style lang="css" scoped>
</style>