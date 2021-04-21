<template>
  <div class="home">
    <Header title="단가 계산기" />
    <Main subTitle="Ingredient" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from '../components/Header.vue' // @ is an alias to /src
import Main from '../components/Main.vue'
import Footer from '../components/Footer.vue'

@Options({
  components: {
    Header,
    Main,
    Footer
  }
})
export default class Home extends Vue {}
</script>
