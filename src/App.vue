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
    console.log(
        " _____ ______   ________  ________  _______   ________      ___    ___ ________  ___  ___  ________  ________  _____ ______   ________  _________  ___  ________  ___      ___ ___  ________  ___  _______   ________" + '\n' +
        "|\\   _ \\  _   \\|\\   __  \\|\\   ___ \\|\\  ___ \\ |\\   __  \\    |\\  \\  /  /|\\   ____\\|\\  \\|\\  \\|\\   __  \\|\\   __  \\|\\   _ \\  _   \\|\\   __  \\|\\___   ___\\\\  \\|\\   ____\\|\\  \\    /  /|\\  \\|\\_____  \\|\\  \\|\\  ___ \\ |\\   __  \\" + '\n' +
        "\\ \\  \\\\\\__\\ \\  \\ \\  \\|\\  \\ \\  \\_|\\ \\ \\   __/|\\ \\  \\|\\ /_   \\ \\  \\/  / | \\  \\___|\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\\\\\__\\ \\  \\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\ \\  \\___|\\ \\  \\  /  / | \\  \\\\|___/  /\\ \\  \\ \\   __/|\\ \\  \\|\\  \\" + '\n' +
        " \\ \\  \\\\|__| \\  \\ \\   __  \\ \\  \\ \\\\ \\ \\  \\_|/_\\ \\   __  \\   \\ \\    / / \\ \\  \\    \\ \\   __  \\ \\   _  _\\ \\  \\\\\\  \\ \\  \\\\|__| \\  \\ \\   __  \\   \\ \\  \\ \\ \\  \\ \\  \\    \\ \\  \\/  / / \\ \\  \\   /  / /\\ \\  \\ \\  \\_|/_\\ \\   _  _\\" + '\n' +
        "  \\ \\  \\    \\ \\  \\ \\  \\ \\  \\ \\  \\_\\\\ \\ \\  \\_|\\ \\ \\  \\|\\  \\   \\/  /  /   \\ \\  \\____\\ \\  \\ \\  \\ \\  \\\\  \\\\ \\  \\\\\\  \\ \\  \\    \\ \\  \\ \\  \\ \\  \\   \\ \\  \\ \\ \\  \\ \\  \\____\\ \\    / /   \\ \\  \\ /  /_/__\\ \\  \\ \\  \\_|\\ \\ \\  \\\\  \\|" + '\n' +
        "   \\ \\__\\    \\ \\__\\ \\__\\ \\__\\ \\_______\\ \\_______\\ \\_______\\__/  / /      \\ \\_______\\ \\__\\ \\__\\ \\__\\\\ _\\\\ \\_______\\ \\__\\    \\ \\__\\ \\__\\ \\__\\   \\ \\__\\ \\ \\__\\ \\_______\\ \\__/ /     \\ \\__\\\\________\\ \\__\\ \\_______\\ \\__\\\\ _\\" + '\n' +
        "    \\|__|     \\|__|\\|__|\\|__|\\|_______|\\|_______|\\|_______|\\___/ /        \\|_______|\\|__|\\|__|\\|__|\\|__|\\|_______|\\|__|     \\|__|\\|__|\\|__|    \\|__|  \\|__|\\|_______|\\|__|/       \\|__|\\|_______|\\|__|\\|_______|\\|__|\\|__|" + '\n' +
        "                                                          \\|___|/" + '\n'
    )
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@@@@@@@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%@@%%%%%%%%@@@@@@%%##**++++===+++**##%%@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%*###%%@@@@%#*+=-::.................::-=+*#%@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%@-=@%%%@%*+-:......::::::::::::::::::::....:-+#%@@%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%@%.-#%%*=:....:::::::::::::::::::::::::::::::...-+%@%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%-..::...::::::::::::::::::::::::::::::::::::::..:+%@%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%@@#::..:::::::::::::::::::::::::::::::::::::::::::..:*@%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%@%*-::::::::::::::::::::::::::::::::::::::::::::::::::..+@%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%@#-..::::::::::::::::::::::::::::::::::::::::::::::::::::.=@%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%@%+..:::::::::::::::::::::::::::::::::::::::::::::::::::::::.+@%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%@%-.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.#@%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%@%:.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.-%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%-.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.*@%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%@=.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.-@%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%@#.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::%@%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%@-.:::::::::::::::::::::::::::::::::::::::::::::::::::::::..::::::::#@%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%@%..::::::::::::::::::::::::::::::::::::::::::::::::::::::.--.:::::::%@%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%@*.:::::::::::::::::::::::::::::::::::::::::::::::::::::::.+@:.::::.-%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%@*.::::::::::::::::::::::::::::::::::.::::::::::::::..:::.-@@#..:::.+@%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%@*..::::::::::::::::::::::::::::::::..:::::::::..::..::.:+@@@@-.::.:%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%@#..::::::::::::::::::::::::::.::::.:::::::...........:=%@@@@%:.:.:#@%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%@-.:::::::::::::::::::::::::..:....:::...:::::::::-+#%@@%%%%*...:#@%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%@*.:::::::::::::::::::........:::.....:-+*****#%%@@@@@@%####+.:+%@%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%@-.::::::::::::::::..-=+=::=*%@%#+#%#%%%%%%*%@@@@@@@@@#%%%%#=%@%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%:.::::::::::::::.-#@%%%%@@@@@@@%*%@@@@@@%#@@@@@@@@@@%*@@@@+@%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%@%:.::::::::::::.-@@@@@@@@@@@@@@@@########@@@@@@@@@@@@%*##%=#@%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%@%=..::::::::::.+@@@@@@@@@@@@@@@@@@%%%%@@@@@@@@@@@@@@@@%%%*+@%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%@@*:..::::::::.-@@@@@@@@@@@@@@@%%%%%@@@@@@@@@@@@@@@@@@@%%%=%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%@%*-:...:::::.-#@@@@%@@@@@@@@@@@@@@@@@%#@@@@@@@@%@@@@@@%=@%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%@@#+-:...:::..-+#***#%%@@@@@@@@@@@@@@*#%###%%##@@@@@%=#@%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%@@@%*::...::...*#*#+=**#%%@@@@@@@@#*@@@%%%%@@@@@%*+%@%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%@+*#-:.....+*++*####***#%@@@@@@@@@@@@@@%%#***#@@%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@#*+++*=*##%###%%%%#***########******#%%@@%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@@@@@#+%%#%%%%%%%%@%*=+####%%%%%%@@@@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@#=%%%%#%%%%%%@@%=+++++*#%@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%*+=#%%**#%%%@@@@@=****++=*%@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%++*+=+#%@@%%@@@@@@#=******+=#@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@=+****+=+*#%@@@@@@@@++*******=+%@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@+=***+****+++**#%@@@@%++*******+=#@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@*=***+=*******++++***%%#+=+***++++=+%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@+-****=+*************+=++***++*###%%#*@%%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#*++++-***************+**+++**+*###*#+*@%%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@@*%%*-*********************+=+%@@@@%#-#@%%%%%%%%%%%%%%%%%%%%%%%%%\n" +
                "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@#+@@#=*********************+=%@@@@@@@%+@%%%%%%%%%%%%%%%%%%%%%%%%%")
  },
  methods: global_methods,

  directives: {
    drag(el, bindings) {
      el.onmousedown = function(e) {
        var disx = e.pageX - el.offsetLeft
        var disy = e.pageY - el.offsetTop
        document.onmousemove = function (e) {
          el.style.left = e.pageX - disx + 'px'
          el.style.top = e.pageY - disy + 'px'
        }
        document.onmouseup = function() {
          document.onmousemove = document.onmouseup = null
        }
      }
    }
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
      <div class="global-container" id="horizontal-container">

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
          <div class="button-box-container">
            <div id="button-box1">
              <p class="six">6</p>
              <button v-drag class="six-1" @click="six1"></button>
              <button v-drag class="six-2" @click="six2"></button>
              <button v-drag class="six-3" @click="six3"></button>
              <button v-drag class="six-4" @click="six4"></button>
            </div>
            <div id="button-box2">
              <p class="seven">7</p>
            </div>
            <div id="button-box3">
              <p class="eight">8</p>
            </div>
            <div id="button-box4">
              <p class="nine">9</p>
            </div>
          </div>

        </div>
        <!--======================================================================-->

        <!--============================= Page five ==============================-->
        <div class="page" style="background-color: midnightblue">
          <vue-particles
              class="particles-background"
              id="particles-js"
              color="#ffffff"
              :particleOpacity="0.3"
              :particlesNumber="160"
              shapeType="circle"
              :particleSize="4"
              linesColor="#ffffff"
              :linesWidth="1"
              :lineLinked="true"
              :lineOpacity="0.4"
              :linesDistance="150"
              :moveSpeed="2"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="true"
              clickMode=""
              style="z-index: 0"
          ></vue-particles>
          <div class="outer-container">
            <div class="card c1" style="--i:-4;">1</div>
            <div class="card c2" style="--i:-3;">2</div>
            <div class="card c2-5" style="--i:-2;">3</div>
            <div class="card c3" style="--i:-1;">4</div>
            <div class="card c4" style="--i:0;">5</div>
            <div class="card c5" style="--i:1;">6</div>
            <div class="card c6" style="--i:2;">7</div>
            <div class="card c7" style="--i:3;">8</div>
            <div class="card c8" style="--i:4;">9</div>
          </div>
        </div>
        <!--======================================================================-->

        <!--============================== Page six ==============================-->
        <div class="page" style="background-color: darkolivegreen">
          <div class="circle-container">
            <div class="circle-tag" style="--i:0">0</div>
            <div class="circle-tag" style="--i:1">1</div>
            <div class="circle-tag" style="--i:2">2</div>
            <div class="circle-tag" style="--i:3">3</div>
            <div class="circle-tag" style="--i:4">4</div>
            <div class="circle-tag" style="--i:5">5</div>
            <div class="circle-tag" style="--i:6">6</div>
            <div class="circle-tag" style="--i:7">7</div>
          </div>
          <div class="loading-bar-container">
            <div class="loading-bar">
              <div class="loading-item" style="--j:-2">正</div>
              <div class="loading-item" style="--j:-1">在</div>
              <div class="loading-item" style="--j:0">，</div>
              <div class="loading-item" style="--j:1">加</div>
              <div class="loading-item" style="--j:2">载</div>
            </div>
          </div>
        </div>
        <!--======================================================================-->
      </div>

      <button class="leftArrow" @click="TurnLeft" id="left-button"></button>
      <button class="rightArrow" @click="TurnRight" id="right-button"></button>
      <button class="autoscroll" @click="autoScroll">Auto scroll</button>
      <p id="notification-tab" style="visibility: hidden">Press F5 to stop auto scroll.</p>
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
@import 'assets/styles/page5.css';
@import 'assets/styles/page6.css';
</style>
