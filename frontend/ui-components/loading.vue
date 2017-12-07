<template>
    <div>
        <div id="nprogress-container1"></div>
        <div class="alert alert-info">ЗАГРУЗКА !!!</div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import nprogress from 'nprogress';

    export default Vue.extend({
      beforeCreate: ()=>{
        debugger
        nprogress.start();
      },
      mounted: function () {
        nprogress.done();
      }
    });
</script>