<template>
    <div style="margin: 0 auto; padding: 50px;">
        <h2 style="padding: 0 15px;">Near Earth Objects</h2>
        <p style="padding: 0 15px;">This list shows Near Earth objects projected to come in a close approach in the next week.</p>
        <hr>
        <div class="date-wrap">
            <input id="month" type="text" v-model="month"><span>/</span>
            <input id="day" type="text" v-model="day"><span>/</span>
            <input id="year" type="text" v-model="year">
            <button @click="getNEOData(year+'-'+month+'-'+day)">Refresh</button>
        </div>
        <br>
        <nasa-neo-list :neoList="info"></nasa-neo-list>
    </div>
</template>
<script>
    import axios from 'axios';
    import config from '../../app.config.js';
    import NeoList from '../components/neo/NeoList.vue';

    export default {
        data () {
            return {
                info: null,
                day: 0,
                month: 0,
                year: 0,
                apiUrl: 'https://api.nasa.gov/neo/rest/v1/feed',
                apiKey: config.nasaApiKey
            }
        },
        components: {
            'nasa-neo-list': NeoList
        },
        methods: {
          getDate() {
            var date = new Date();
            this.day = date.getDate();
            this.month = date.getMonth() + 1;
            this.year = date.getFullYear();
            var dateStr = this.year+'-'+this.month+'-'+this.day;
            return dateStr;
          },
          getNEOData(date) {
              axios
            .get(this.apiUrl+'?start_date='+date+'&'
                +'api_key='+this.apiKey
                +'')
            .then(response => {
              this.info = response;
            });
          }
        },
        mounted () {
            this.getNEOData(this.getDate());
        },
        created() {
            this.getDate();
        }
    }
</script>

<style>
body {
  font-family: "Open Sans";
}
#month, #day { width: 40px; }
#year {width: 50px;}
.date-wrap {
    padding: 0 15px;
}
.danger {
  background: coral;
}
</style>
