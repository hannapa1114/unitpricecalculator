<template>
  <wrapper id="wrapper">

    <section id="intro" class="main">
        <!-- <div id="addIdt">
            <input type="text" id="idtName">
        </div> -->
        <h2>{{subTitle}}</h2>

        <div id="oneOutput">
            <div class="firstdiv">
                <label for="produce"></label>
                <p id="produce-hint">입력하지 않으면 기본값은 1입니다</p>
                <input type="number" id="produce" placeholder="생산수량" aria-describedby="produce-hint">
            </div>
        </div>

        <div id="list-header" class="grid-display">
            <span>재료이름</span>
            <span>총량(g)</span>
            <span>매입가(원)</span>
            <span>1회 사용량(g)</span>
            <span></span>
        </div>

        <div id="inputValue" class="grid-display">
            <input type="text" id="idt-name">
            <input type="number" id="idt-amount">
            <input type="number" id="idt-price">
            <input type="number" id="idt-useamount">
            <button id="addBtn">추가</button>
        </div>

        <h2>List</h2>

        <div id="list-header" class="grid-display">
            <span>재료이름</span>
            <span>총량(g)</span>
            <span>매입가(원)</span>
            <span>1회 사용량(g)</span>
            <span>단가</span>
        </div>

        <ul id="list"></ul><!--itemList-->

        <div id="total">
            <span>Total:&nbsp;&nbsp;</span>
            <span id="totalPrice"></span>
        </div>
    </section>
<!-- CTA -->
    <section id="cta" class="main special">
        <h2>대박을 기원합니다</h2>
        <p>시작은 미약하였으나, 끝은 창대하리라</p>
        <ul class="actions">
            <li><a href="#" class="button big">Get Started</a></li>
        </ul>
    </section>

  </wrapper>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    subTitle: String
  }
})
export default class HelloWorld extends Vue {
  subTitle!: string
}
</script>

<style scoped lang="scss">

</style>
