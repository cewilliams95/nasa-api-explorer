<template>
    <ul class="nav nav-pills">
        <li role="presentation"><router-link to="/" tag="li" active-class="active" exact><a class="btn btn-primary">Home</a></router-link></li>
        <li role="presentation"><router-link to="/neo" tag="li" active-class="active"><a class="btn btn-primary">NEO</a></router-link></li>
    </ul>
</template>
<style>
ul.nav {
    margin: 0 auto;
    width: 100%;
    justify-content: center;
}
ul.nav li {
    margin: 5px;
}
</style>