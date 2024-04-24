<script>
import global_methods from "./js/global_methods.js";
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
  methods: global_methods
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
      <div class="outer-container" id="horizontal-container">

        <!--============================= Page one =============================-->
        <div class="page" style="background-color: #323e74">
          <p class="Page1-mainTitle animated fadeInDown">AESTHETICISM</p>
          <p class="Page1-secondaryTitle animated fadeInLeft">also known as<br/>the aesthetic movement</p>
          <p class="Page1-content animated fadeInUp">
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
          <div class="image-of-kaleidoscope">
            <img src="./assets/images/kaleidoscope.png" style="height: 100vh; width: 100vh;" alt=" Image not loaded!">
          </div>
          <div class="quickSearchButton1">
            <a style="font-size: 3vh;" href="https://en.wikipedia.org/wiki/Aestheticism">Quick Search</a>
          </div>
        </div>
        <!--======================================================================-->

        <!--============================== Page two ==============================-->
        <div class="page" style="background-color: #7f6b8d">
          <div id="page2-mainTitle">
            <p>Minimalism</p>
          </div>
          <div>
            <div id="page2-secondaryTitle">
              <p>
                The term minimalist often colloquially refers to<br/>
                anything or anyone that is spare or stripped to its essentials.
              </p>
            </div>
            <div id="page2-content">
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
        <!--======================================================================-->

        <!--============================= Page three =============================-->
        <div class="page" style="background-color: #6b8996">
          <div id="about-tag">
            <p>About</p>
          </div>
          <div id="page3-jumpBox">

          </div>
        </div>
        <!--======================================================================-->

        <!--============================= Page four ==============================-->
        <div class="page" style="background-color: dimgrey">
          <vue-particles
              class="particles-background"
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
          <div id="page4-menubar">
            <div id="menu-tag">
              <p>MENU</p>
            </div>
            <div class="sub-bar" id="b1"></div>
            <div class="sub-bar" id="b2"></div>
            <div class="sub-bar" id="b3"></div>
            <div class="sub-bar" id="b4"></div>
            <div class="sub-bar" id="b5"></div>
            <div class="sub-bar" id="b6"></div>
          </div>
        </div>
        <!--======================================================================-->

      </div>

      <button class="leftArrow" @click="TurnLeft" id="left-button"></button>
      <button class="rightArrow" @click="TurnRight" id="right-button"></button>

    </main>
  </el-container>
</template>

<style>
@import 'assets/styles/global.css';
@import 'assets/styles/navibar.css';
@import 'assets/styles/buttons.css';
@import 'assets/styles/backgrounds.css';
@import 'assets/styles/page1.css';
@import 'assets/styles/page2.css';
@import 'assets/styles/page3.css';
@import 'assets/styles/page4.css';
</style>
