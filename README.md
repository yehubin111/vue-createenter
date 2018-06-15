# vue-cli配置多页面入口

> 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 页面访问
localhost:8080 + 项目名称 
例：localhost:8080/createEnter.html

## 开发目录
src下按照项目名称分

html和js入口文件的名称需要和项目名称保持一致，不然无法编译访问

store目录存放vuex相关文件，入口index.js

router目录存放路由相关文件,入口index.js

components目录存放页面相关vue组件,文件名大写，文件后缀.vue

assets存放静态资源，包含less，js，images
