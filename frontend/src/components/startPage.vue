<template>

    <div id="app" class = "frame">


        <p> info how to play </p>
        <ul>
            <li>        <button class="startButton"> Single play   </button>   </li>
            <li>        <button class="startButton">  Enter room code</button>
                        <input id="rumskod" type="text" value="Enter room code"/>
                        <input id="nickName" type="text" value="Your name here"/>
                        <input  id="skickaRumsKod" type="submit" value="Starta" />

            </li>
            <li>        <button class="startButton">   Login  </button>   </li>
        </ul>
        <router-link to="/game"></router-link>

        <router-view></router-view>


        <script src="https://unpkg.com/vue/dist/vue.js"></script>
        <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

    </div>


</template>

<script>
    import VueRouter from "vue-router";

    export default {
        name: "startPage"
    }

    const Game = { template: '<div>foo</div>' }


    const routes = { path: '/foo', component: Foo }

    const router = new VueRouter({
        routes // short for `routes: routes`
    })

    const app = new Vue({
        router
    }).$mount('#app')
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');
        p{
           padding-top: 20px;
            width: 1400px;
            text-align: -moz-center;
            margin-bottom: -20px;
            font-family: 'Luckiest Guy', Tahoma;
            font-size:4em;
            color: #f53b3b;
        }
         ul{
             display: inline-flex;
             list-style-type: none;
         }
         li{
            margin: 100px 150px 150px 150px;
         }
            .startButton{
                border-radius: 50px ;
                height: 100px ;
                width: 100px ;
                background-color: #93D2FA;
                border-bottom-color: #1C75AD ;
                border-bottom-width:5px ;
                border-right-width: 5px;
                border-right-color: #1C75AD ;
                font-family: 'Luckiest Guy', Tahoma;
                color: darkblue;
                font-size: 3em ;
            }
</style>