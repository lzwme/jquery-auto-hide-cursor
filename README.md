[![Code Climate](https://lzw.me/images/logo.png)](http://lzw.me)

jQuery Auto Hide Mouse Cursor Plugin [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
========

[Demo|示例](https://lzw.me/pages/demo/autohidecursor)

这是一个用于自动隐藏鼠标指针的 jQuery 插件。在设定的时间内鼠标一直保持不动，则会在应用的 DOM 对象上隐藏鼠标指针。

**用处：**

在用于全屏展示的大屏幕页面中，如果鼠标不自动隐藏，那么就会有一个鼠标箭头一直停留在页面上。

解决办法一种是设置系统鼠标的自动隐藏，另外一种方法就是在页面中控制自动隐藏了。本插件即为了简单满足该功能诉求而实现。

## 快速上手

1. 引入 `jquery.min.js`
2. 引入插件js: `jquery-auto-hide-cursor.min.js`
3. 初始化插件

```js
    $('#test').autoHideMouseCursor(2000);
```

具体使用请参考参数配置说明及 demo 示例页面源码([Demo](https://lzw.me/pages/demo/autohidecursor))

####方法调用
启用

```javscript
$('#test').autoHideMouseCursor(2000); // 应用于某个元素上
$('html').autoHideMouseCursor(2000);  // 应用于整个页面
```

销毁

```javscript
$('#test').data('autoHideMouseCursor').destory();
$('html').data('autoHideMouseCursor').destory();
```

## 配置参数

- `timeout: 2000` //鼠标静止多久后消失，单位为毫秒。最小值不能低于 100，最大值不能超过  setTimeout 定时的最大延时上限。

## 使用示例

请参考 [index.html](https://github.com/lzwme/jquery-auto-hide-cursor/blob/master/index.html) 文件源码示例。

## 二次开发

1. `npm install grunt-cli -g`
2. `npm install`
3. `grunt watch`

## Note on Patches / Pull Requests

* Fork the project.
* Make your feature addition or bug fix.
* Send me a pull request. Bonus points for topic branches.

## 设计制作

该插件由[志文工作室](https://lzw.me)开发和维护.