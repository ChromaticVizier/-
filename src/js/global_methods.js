export default {
    TurnRight() {
        this.scrollPage(1)
        // console.log('right clicked')
    },

    TurnLeft() {
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
                this.scrollPageToLeft(pageWidth, currentScrollPosition) // 参数是往左移动的量
            }
            else {
                let controlLength = currentScrollPosition % pageWidth
                this.scrollPageToLeft(controlLength, currentScrollPosition)
            }
        }

        else {
            if(currentScrollPosition % pageWidth === 0 || pageWidth % currentScrollPosition === 0) {
                this.scrollPageToRight(pageWidth, currentScrollPosition) // 参数是往右移动的量
            }
            else {
                let controlLength = pageWidth - currentScrollPosition % pageWidth
                this.scrollPageToRight(controlLength, currentScrollPosition)
            }
        }
    },

    scrollPageToLeft(controlLen, curr) {
        // window.scrollTo(curr - controlLen, 0)
        window.scrollTo({
            left: curr - controlLen,
            top: 0,
            behavior: "smooth"
        })
    },
    scrollPageToRight(controlLen, curr) {
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
            let currentEle = document.getElementById('page2-mainTitle')
            currentEle.setAttribute('class', 'page2-mainTitle-to-add')

            let currentEle1 = document.getElementById('page2-secondaryTitle')
            currentEle1.setAttribute('class', 'page2-secondaryTitle-to-add')

            let currentEle2 = document.getElementById('page2-content')
            currentEle2.setAttribute('class', 'page2-content-to-add')
        }

        // 第三页
        if(window.scrollX >= 1.7 * currentWW) {
            let currentEle = this.$('#page3-jumpBox')
            currentEle.attr('style', 'opacity: 1')
            currentEle.attr('class', 'animated bounceInUp')

            let currentEle3 = this.$('#about-tag')
            currentEle3.attr('style', 'opacity: 1')
            currentEle3.attr('class', 'animated bounceInDown')
        }

        //第四页
        if(window.scrollX >= 2.7 * currentWW) {
            let currentEle = this.$('#page4-menubar')
            currentEle.attr('class', 'page4-menubar-to-add')
        }
    },
}