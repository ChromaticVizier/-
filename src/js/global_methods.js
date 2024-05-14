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
        // current window width
        let currentWW = window.innerWidth

        // page two
        if(window.scrollX >= 0.7 * currentWW) {
            let page2_mainTitle = document.getElementById('page2-mainTitle')
            page2_mainTitle.setAttribute('class', 'page2-mainTitle-to-add')

            let page2_secondaryTitle = document.getElementById('page2-secondaryTitle')
            page2_secondaryTitle.setAttribute('class', 'page2-secondaryTitle-to-add')

            let page2_content = document.getElementById('page2-content')
            page2_content.setAttribute('class', 'page2-content-to-add')
        }

        // page three
        if(window.scrollX >= 1.7 * currentWW) {
            let page3_jumpbox = this.$('#page3-jumpBox')
            page3_jumpbox.attr('style', 'opacity: 1')
            page3_jumpbox.attr('class', 'animated bounceInUp')

            let about_tag = this.$('#about-tag')
            about_tag.attr('style', 'opacity: 1')
            about_tag.attr('class', 'animated bounceInDown')
        }

        // page four
        if(window.scrollX >= 2.7 * currentWW) {
            let page4_menubar = this.$('#page4-menubar')
            page4_menubar.attr('class', 'page4-menubar-to-add')

            let button_box_1 = this.$('#button-box1')
            button_box_1.attr('class', 'button-box1-to-add')

            let button_box_2 = this.$('#button-box2')
            button_box_2.attr('class', 'button-box2-to-add')

            let button_box_3 = this.$('#button-box3')
            button_box_3.attr('class', 'button-box3-to-add')

            let button_box_4 = this.$('#button-box4')
            button_box_4.attr('class', 'button-box4-to-add')
        }
    },

    six1() {
        alert("six-1 clicked.")
    },

    six2() {
        alert("six-2 clicked.")
    },

    six3() {
        alert("six-3 clicked.")
    },

    six4() {
        alert("six-4 clicked.")
    },

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    async autoScroll() {
        let notification = this.$('#notification-tab')
        notification.removeAttr('style')
        let currentX = window.scrollX
        let currentWW = window.innerWidth
        let pageToGo = currentWW * 5 - currentX
        console.log(pageToGo)
        for(let i = currentX + 1; i <= currentX + pageToGo; i+=2) {
            scrollTo(i, 0)
            await this.sleep(0.2)
        }
        notification.attr('style', 'visibility: hidden')
    }
}