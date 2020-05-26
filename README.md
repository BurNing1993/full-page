# full-page

## [Demo](https://full-page-pkg.now.sh/)

## Install

```sh
yarn add @joey2018/full-page
# or
npm install -S @joey2018/full-page
```

## Usage

```js
import '@joey2018/full-page/dist/full-page.css' 
import {FullPage} form '@joey2018/full-page'

...
new Fullpage(options?);
```

## CDN

```html
<!-- css -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@joey2018/full-page@1.0.0/dist/full-page.css">
<!-- js -->
<script src="https://cdn.jsdelivr.net/npm/@joey2018/full-page@1.0.0/dist/full-page.umd.js"></script>
...
<script>
  new Fullpage();
</script>
```

## Options 

```ts
const defaultOptions = {
  navigation: true,
  containerSelector: '#full-page',
  sectionSelector: '.section',
}
```
