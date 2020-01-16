<template>
    <div class="col-sm-12 col-md-12 col-lg-6">
        <div class="shadow-sm panel panel-default">
            <div class="panel-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .panel-body {
        width: 100%;
        background: #e3e3e3;
        padding: 20px;
        margin-bottom: 10px;

    }
    .danger {
        background: coral;
        padding: 3px;
        color: white;
    }
</style>