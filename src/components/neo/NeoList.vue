<template>
    <div style="display: flex; flex-wrap: wrap;">
      <nasa-neo v-for="(neo) in neoList.data.near_earth_objects" :key="neo[0].id">
          <p>Name: <a target="_blank" :href="neo[0].nasa_jpl_url"><strong>{{ neo[0].name }}</strong></a></p>
          <p>ID: <strong>{{ neo[0].id}}</strong> </p>
          <p>Next close approach date: <strong>{{ neo[0].close_approach_data[0].close_approach_date }}</strong></p>
          <p v-if="neo[0].is_potentially_hazardous_asteroid"> <span class="danger">Potentially Hazardous</span> </p>
          <p>Absolute magnitude (H): <strong>{{neo[0].absolute_magnitude_h}}</strong></p>
          <!-- TODO: make diameter units selectable in dropdown -->
          <p>Estimated diameter (meters): <strong>
              {{ neo[0].estimated_diameter.meters.estimated_diameter_min }} - {{ neo[0].estimated_diameter.meters.estimated_diameter_max }} m
          </strong></p>
          <!-- TODO: make velocity units selectable in dropdown -->
          <p>Relative velocity (km/h): <strong>
              {{ neo[0].close_approach_data[0].relative_velocity.kilometers_per_hour }} km/h
          </strong></p>
          <!-- TODO: make distance units selectable in dropdown -->
          <p>Miss distance (km): <strong>
              {{ neo[0].close_approach_data[0].miss_distance.kilometers }} km
          </strong></p>
          <p><strong><a :href="neo[0].links.self">History / Projections</a></strong></p>
      </nasa-neo>
    </div>
</template>
<script>
import Neo from './Neo.vue';
export default {
    props: ['neoList'],
    components: {
        'nasa-neo': Neo
    }
}
</script>