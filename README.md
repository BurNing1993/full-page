# full-page

## [Demo](https://full-page-pkg.now.sh/)

## Install

```sh
yarn add @joey2018/full-page
# or
npm install -S @joey2018/full-page
```

## Html

```html
<div id="full-page">
  <div class="section">
    1
  </div>
  <div class="section">
    2
  </div>
  <div class="section">
    3
  </div>
</div>
```

## Usage

```js
import '@joey2018/full-page/dist/full-page.css'
import Fullpage from '@joey2018/full-page'

...
new Fullpage(options?);
```

## CDN

```html
<!-- css -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@joey2018/full-page@1.0.0/dist/full-page.css"
/>
<!-- js -->
<script src="https://cdn.jsdelivr.net/npm/@joey2018/full-page@1.0.0/dist/full-page.umd.js"></script>
...
<div id="full-page">
  <div class="section">
    1
  </div>
  <div class="section">
    2
  </div>
  <div class="section">
    3
  </div>
</div>
...
<script>
  new Fullpage();
</script>
```

## Options

```ts
const defaultOptions = {
  navigation: true,
  containerSelector: "#full-page",
  sectionSelector: ".section",
};
```
