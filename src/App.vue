<script>
export default {
  data() {
    return {
      currentPageIndex: 0,
      isJumpUp: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    FlipPageRight() {
      this.scrollPage(1)
      // console.log('right clicked')
    },
    FlipPageLeft() {
      this.scrollPage(-1)
      // console.log('left clicked')
    },
    scrollPage(direction) {
      const pageWidth = window.innerWidth
      // console.log(pageWidth)
      let currentScrollPosition = window.scrollX
      // console.log(currentScrollPosition)

      if(direction === -1) {
        if(currentScrollPosition % pageWidth === 0 || pageWidth % currentScrollPosition === 0) {
          this.pageDesc(pageWidth, currentScrollPosition) // 参数是往左移动的量
        }
        else {
          let controlLength = currentScrollPosition % pageWidth
          this.pageDesc(controlLength, currentScrollPosition)
        }
      }

      else {
        if(currentScrollPosition % pageWidth === 0 || pageWidth % currentScrollPosition === 0) {
          this.pageInc(pageWidth, currentScrollPosition) // 参数是往右移动的量
        }
        else {
          let controlLength = pageWidth - currentScrollPosition % pageWidth
          this.pageInc(controlLength, currentScrollPosition)
        }
      }
    },
    pageDesc(controlLen, curr) {
      // window.scrollTo(curr - controlLen, 0)
      window.scrollTo({
        left: curr - controlLen,
        top: 0,
        behavior: "smooth"
      })
    },
    pageInc(controlLen, curr) {
      window.scrollTo({
        left: curr + controlLen,
        top: 0,
        behavior: "smooth"
      })
    },

    handleScroll() {
      // 当前窗宽
      let currentWW = window.innerWidth

      // 第二页
      if(window.scrollX >= 0.7 * currentWW) {
        let currentEle = document.getElementById('page2title')
        currentEle.removeAttribute('hidden')
        currentEle.setAttribute('class', 'page2title-to-add')
        let currentEle1 = document.getElementById('page2secondary')
        currentEle1.removeAttribute('hidden')
        currentEle1.setAttribute('class', 'page2secondary-to-add')
        let currentEle2 = document.getElementById('page2content')
        currentEle2.removeAttribute('hidden')
        currentEle2.setAttribute('class', 'page2content-to-add')
      }

      // 第三页
      if(window.scrollX >= 1.7 * currentWW) {
        let currentEle = this.$('#page5jb')
        currentEle.removeAttr('hidden')
        currentEle.attr('class', 'animated bounceInUp')
        let currentEle3 = this.$('#about-tag')
        currentEle3.removeAttr('hidden')
        currentEle3.attr('class', 'animated bounceInDown')
      }

      //第四页
      if(window.scrollX >= 2.7 * currentWW) {
        let currentEle = this.$('#page6jb')
        currentEle.attr('class', 'menu-bar-to-add')
      }
    },


  },
  watch: {

  }
}
</script>

<template>
  <el-container>
    <header>
      <nav>
        <ul>
          <li><a href="#">Home Page</a></li>
          <li><a href="#">Introductions</a></li>
          <li><a href="#">&emsp;Search&emsp;</a>
            <ul>
              <li><a href="#">Search1</a></li>
              <li><a href="#">Search2</a></li>
              <li><a href="#">Search3</a></li>
              <li><a href="#">Search4</a></li>
            </ul>
          </li>
          <li><a href="#">Settings</a>
            <ul>
              <li><a href="#">Setting1</a></li>
              <li><a href="#">Setting2</a></li>
              <li><a href="#">Setting3</a>
                <ul>
                  <li><a href="#">Setting31</a></li>
                  <li><a href="#">Setting32</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">About</a></li>
          <li><a href="#">&emsp;Others&emsp;</a>
            <ul>
              <li><a href="#">Others1</a></li>
              <li><a href="#">Others2</a></li>
              <li><a href="#">Others3</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
    <main ref="main">
      <div class="outer-container" id="mC" style="scroll-behavior: smooth">
        <div class="page" style="background-color: #323e74">
          <p class="mainTitle animated fadeInDown">AESTHETICISM</p>
          <p class="secondaryTitle animated fadeInLeft">also known as<br/>the aesthetic movement</p>
          <p class="explanation animated fadeInUp">
            According to Aestheticism, art and fonts<br/>
            should be produced to be beautiful,<br/>
            rather than to teach a lesson, create a<br/>
            parallel, or perform another didactic purpose,<br/>
            a sentiment best illustrated by the slogan<br/>
            "art for art's sake." Aestheticism flourished<br/>
            in the 1870s and 1880s, gaining prominence<br/>
            and the support of notable writers such as<br/>
            Walter Pater and Oscar Wilde.
          </p>
          <div class="ath-image">
            <img src="./assets/images/Ath.png" style="height: 100vh; width: 100vh;" alt="NL">
          </div>
          <div class="quickSearchButton">
            <a style="font-size: 3vh;" href="https://en.wikipedia.org/wiki/Aestheticism">Quick Search</a>
          </div>
        </div>
        <div class="page" style="background-color: #7f6b8d">
          <div id="page2title" hidden="hidden">
            <p class="mainTitle2">Minimalism</p>
          </div>
          <div>
            <div id="page2secondary">
              <p>
                The term minimalist often colloquially refers to<br/>
                anything or anyone that is spare or stripped to its essentials.
              </p>
            </div>
            <div id="page2content" hidden="hidden">
              <p>
                In visual arts, music and other media, minimalism is an art movement<br/>
                that began in post–World War II in Western art, most strongly with<br/>
                American visual arts in the 1960s and early 1970s. Prominent artists<br/>
                associated with minimalism include Donald Judd, Agnes Martin,<br/>
                Dan Flavin, Carl Andre, Robert Morris, Anne Truitt and Frank Stella.
              </p>
            </div>
            <div class="quickSearchButton2">
              <a style="font-size: 3vh" href="https://en.wikipedia.org/wiki/Minimalism">Quick Search</a>
            </div>
          </div>
        </div>
        <div class="page" style="background-color: #6b8996">
          <div id="about-tag" hidden="hidden">
            <p>About</p>
          </div>
          <div id="page5jb" hidden="hidden">
            <p style="font-family: Jacquard24; font-size: 10vh; text-align: center; padding-top: 10%;">
              Created by ZYP<br>
              2024-04-22
            </p>
          </div>
        </div>
        <div class="page" style="background-color: dimgrey">
          <vue-particles
              class="particles"
              id="particles-js"
              color="#333"
              :particleOpacity="0.5"
              :particlesNumber="80"
              shapeType="circle"
              :particleSize="4"
              linesColor="#333"
              :linesWidth="1"
              :lineLinked="true"
              :lineOpacity="0.4"
              :linesDistance="150"
              :moveSpeed="2"
              :hoverEffect="true"
              hoverMode="repulse"
              :clickEffect="true"
              clickMode="bubble"
          ></vue-particles>
          <div id="page6jb">
            <div id="font-bar">
              <p>MENU</p>
            </div>
            <div class="bar" id="b1"></div>
            <div class="bar" id="b2"></div>
            <div class="bar" id="b3"></div>
            <div class="bar" id="b4"></div>
            <div class="bar" id="b5"></div>
            <div class="bar" id="b6"></div>
          </div>
        </div>
      </div>
      <button class="leftArrow" @click="FlipPageLeft" id="leftbutton"></button>
      <button class="rightArrow" @click="FlipPageRight" id="rightbutton"></button>
    </main>
  </el-container>
</template>

<style>
@import './assets/styles/global.css';
@import './assets/styles/navibar.css';
@import './assets/styles/buttons.css';
@import 'assets/styles/page2.css';
@import './assets/styles/title.css';
@import './assets/styles/backgrounds.css';
@import 'assets/styles/page3.css';

</style>
