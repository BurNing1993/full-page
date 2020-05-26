// polyfill Object.assign
export function polyfill() {
  if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, 'assign', {
      value: function assign(target: any) {
        if (target == null) {
          throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];
          if (nextSource != null) {
            for (var nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
        return to;
      },
      writable: true,
      configurable: true
    });
  }
}

export function deleteClassName(el:HTMLElement,className:string){
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  }
}


export function getWindowHeight(){
  return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
}
