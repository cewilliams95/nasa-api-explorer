<template>
    <div class="home-wrap">
        <img :src="bgUrl" class="home-bg"/>
        <div class="content-wrap">
            <h1 class="intro-title">Nasa API Explorer</h1>
            <p style="text-align: center;">This is a web app built with Vue.js to explore some of NASA's public APIs.</p>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import config from '../../app.config.js';

    export default {
        data() {
            return {
                bgUrl: "",
                apiUrl: "https://api.nasa.gov/planetary/apod",
                apiKey: config.nasaApiKey
            }
        },
        created() {
            axios.get(this.apiUrl+'?api_key='+this.apiKey).then(response => {
                this.bgUrl = response.data.url;
            });
        }
    }
</script>
<style scoped>
    h1.intro-title {
        text-align: center;
        color: white;
        font-weight: 600;
    }
    p {
        color: white;
    }
    .content-wrap {
        padding: 40px 0;
        width: 100vw;
        background: rgba(33,33,33,0.8);
    }
    .home-bg {
        position: absolute;
        width: 100%; height: 100%;
        top: 0; left: 0;
        object-fit: cover;
        z-index: -1;
    }
    .home-wrap {
        overflow: hidden; 
        position: absolute; 
        width: 100vw; 
        height: calc(100vh - 58px); 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-direction: column;
    }
</style>