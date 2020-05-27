import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { polyfill, deleteClassName, getWindowHeight } from './utils'

export interface Options {
  // 导航
  navigation?: boolean;
  // 容器选择器
  containerSelector?: string,
  // 页面选择器
  sectionSelector?: string,
}

const defaultOptions: Options = {
  navigation: true,
  containerSelector: '#full-page',
  sectionSelector: '.section',
}

const ACTIVE_CLASS_NAME = 'active';
const NAV_DOT_CLASS_NAME = 'nav-dot';
const NAV_CLASS_NAME = 'nav';
const DELAY = 200;

export default class Fullpage {

  // 页面容器
  container: HTMLElement;
  // 配置
  options: Options;
  // 容器高度
  viewHeight: number = getWindowHeight();
  // 页数
  pageNum: number = 0;
  // 右侧导航
  navList: NodeListOf<HTMLElement>;
  // 检测滑动方向，只需要检测纵坐标
  startY: number = 0;
  // 当前页
  activeIndex: number = 0;

  constructor(options?: Options) {
    polyfill();
    this.options = Object.assign(defaultOptions, options);
    this.container = document.querySelector(this.options.containerSelector);
    this.pageNum = document.querySelectorAll(this.options.sectionSelector).length;
    // init
    this.init();
  }

  createNav() {
    const nav = document.createElement('div');
    nav.className = NAV_CLASS_NAME;
    this.container.appendChild(nav);
    for (let index = 0; index < this.pageNum; index++) {
      nav.innerHTML += `<p class="${NAV_DOT_CLASS_NAME}"><span></span></p>`;
    }

    this.navList = document.querySelectorAll(`.${NAV_DOT_CLASS_NAME}`);

    this.navList[0].classList.add(ACTIVE_CLASS_NAME);

    this.navList.forEach((el, key) => {
      el.onclick = () => {
        this.activeIndex = key;
        this.gotoPage();
        // TODO 自定义方法
        this.navList.forEach(element => {
          deleteClassName(element, ACTIVE_CLASS_NAME)
        })
        el.classList.add(ACTIVE_CLASS_NAME)
      }
    })
  }

  changeActiveNav() {
    if (this.options.navigation) {
      this.navList.forEach((el) => {
        deleteClassName(el, ACTIVE_CLASS_NAME);
      })
      this.navList[this.activeIndex].classList.add(ACTIVE_CLASS_NAME);
    }
  }

  gotoPage() {
    if (this.activeIndex < 0) {
      this.activeIndex = 0;
    }
    if (this.activeIndex > this.pageNum - 1) {
      this.activeIndex = this.pageNum - 1;
    }
    const height = this.activeIndex * this.viewHeight;
    this.container.style.top = `-${height}px`;
  }

  goDown() {
    // 只有页面底部还有页面时页面向下滚动
    if (this.activeIndex < this.pageNum - 1) {
      this.activeIndex++;
      this.gotoPage();
      this.changeActiveNav();

      // TODO
      // this.options.definePages();
    }
  }
  goUp() {
    // 只有页面顶部还有页面时页面向上滚动
    if (this.activeIndex > 0) {
      this.activeIndex--;
      this.gotoPage();
      this.changeActiveNav();
      // TODO
      // this.options.definePages();
    }
  }

  handleWheelEvent(ev: WheelEvent) {
    const { deltaY } = ev;
    if (deltaY > 0) {
      this.goDown();
    } else {
      this.goUp();
    }
  }

  handleResize() {
    this.viewHeight = getWindowHeight();
    this.container.style.height = `${this.viewHeight}px`;
    this.navList.forEach((e, i) => {
      if (e.classList.contains('active')) {
        this.activeIndex = i;
      }
    });
    this.gotoPage();
  }

  // 触屏事件
  handleTouchEnd(event: TouchEvent) {
    const endY = event.changedTouches[0].pageY;
    if (endY - this.startY < 0) {
      // 手指向上滑动，对应页面向下滚动
      this.goDown();
    } else if (endY - this.startY > 0) {
      this.goUp();
      // 手指向下滑动，对应页面向上滚动
    }
    // else {
    //   if (endY < this.viewHeight * 0.5) {
    //     this.goUp();
    //   } else {
    //     this.goDown();
    //   }
    // }
  }

  // 初始化函数
  init() {
    this.container.style.height = `${this.viewHeight}px`;
    if (this.options.navigation) {
      this.createNav();
    }
    // 鼠标滚轮监听
    document.onwheel = throttle((ev: WheelEvent) => this.handleWheelEvent(ev), DELAY);

    // // 页面滚动监听
    // document.onscroll = throttle(() => {
    //   console.log('onscroll');
    // }, 150);

    //  窗口尺寸变化时重置位置
    window.onresize = debounce(() => this.handleResize(), DELAY)

    // 手机触屏屏幕
    document.addEventListener('touchstart', event => {
      this.startY = event.touches[0].pageY;
    });
    document.addEventListener('touchend', throttle((ev: TouchEvent) => this.handleTouchEnd(ev), DELAY));
    document.addEventListener('touchmove', event => {
      event.preventDefault();
    });
  }
}