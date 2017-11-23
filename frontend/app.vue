<template>
    <div class="container">
        <div class="row">
            <div class="col-xs">
                <h1>Jingle Bells!</h1>
                <img src="./assets/logo.png" onclick="window.location.href = '/#/';">
                <app-nav></app-nav>
                <div class="list-group">
                    <router-link to="/physician/" class="physician list-group-item list-group-item-action">physician</router-link>
                    <router-link to="/recruiter/" class="physician list-group-item list-group-item-action">recruiter</router-link>
                </div>
            </div>
            <div class="col-xl">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import router from './ui-components/router/router';
  import navigation from './ui-components/navigation/navigation.vue';

  export default Vue.extend({
    router,
    components: {
      navigation
    }
  });
</script>

<css>
    .row {
        padding-top: 8px;
    }
</css>
