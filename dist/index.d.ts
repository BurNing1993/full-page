export as namespace Fullpage;

export = Fullpage;

declare class Fullpage {
   // 页面容器
   container: HTMLElement;
   // 配置
   options: Fullpage.Options;
   // 容器高度
   viewHeight: number;
   // 页数
   pageNum: number;
   // 右侧导航
   navList: NodeListOf<HTMLElement>;
   // 检测滑动方向，只需要检测纵坐标
   startY: number;
   // 当前页
   activeIndex: number;

  constructor(options?: Fullpage.Options);

  goDown():void;

  goUp():void;
}
 
declare namespace Fullpage {
  export interface Options {
    // 导航
    navigation?: boolean;
    // 容器选择器
    containerSelector?: string,
    // 页面选择器
    sectionSelector?: string,
  }
}