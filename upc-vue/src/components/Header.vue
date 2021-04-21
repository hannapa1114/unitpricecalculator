<template>
    <header id="header" class="alt">
            <div class="inner">
                <h1>{{title}}</h1>
                <p>사장님들의 걱정을 덜어드립니다</p>
            </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    title: String
  }
})
export default class Header extends Vue {
  title!: string
}
</script>

<style scoped lang="scss">

</style>
