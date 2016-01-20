/**
 * jQuery-auto-hide-cursor-plugin
 * This plugin is used to automatically hide the mouse pointer when the mouse remains stationary for a period of time.
 * Author: renxia <lzwy0820#qq.com>
 * Github: https://github.com/lzwme/jquery-auto-hide-cursor.git
 * Date  : 2016-01-18
 * Update: 2016-01-19
 */
(function($) {
    //插入 head 中的样式
    var style = '<style id="jqAutohideCursor">.jq_autohide_cursor,.jq_autohide_cursor *{cursor: none !important}</style>';

    /**
     * 当鼠标移动时监听触发
     * @param {Object} e
     */
    function mouseMove(scope) {
        clearTimeout(scope.delayId);
        clearTimeout(scope.timeoutId);
        scope.delayId = setTimeout(function() {
            if (scope.$el.hasClass('jq_autohide_cursor')) {
                scope.$el.removeClass('jq_autohide_cursor');
            }

            clearTimeout(scope.timeoutId);
            scope.timeoutId = setTimeout(function(){
                if (! scope.$el.hasClass('jq_autohide_cursor')) {
                    scope.$el.addClass('jq_autohide_cursor');
                }
            }, scope.options.timeout);
        }, 100);
    }

    /**
     * 构造函数
     * @param {Object} $el
     * @param {Object} options
     */
    function JAHC($el, options) {
        this.$el = $el;
        if (! $el.length) {
            return $el;
        }

        this.init(options);
    }

    JAHC.prototype = {
        /**
         * 初始化
         * @param {Object} options
         */
        init: function(options) {
            var scope = this;

            //样式 style 加入 head
            if (! $('style#jqAutohideCursor').length) {
                $('head:eq(0)').append(style);
            }

            //初始化实例属性
            this.options = options;
            this.delayId = null;                //mousemove 执行最短间隔定时ID
            this.timeoutId = null;              //mousemove 定时ID
            this.onMouseMove = function (e) {   //mousemove 监听事件，每个实例独立
                //var scope = e.data.scope;
                mouseMove(scope);
            };

            $(window).on('mousemove', {scope: this}, this.onMouseMove);

            return this;
        },
        /**
         * 销毁
         */
        destory: function () {
            clearTimeout(this.timeoutId);
            clearTimeout(this.delayId);
            $(window).off('mousemove', this.onMouseMove);

            return this.$el.removeClass('jq_autohide_cursor')
              .removeData('autoHideMouseCursor');
        }

    };

    $.fn.autoHideMouseCursor = function(options) {
        var $el = $(this);

        if ($el.data('autoHideMouseCursor')) {
            return $el;
        }

        if (typeof options === 'number') {
            options = {
                timeout: options
            };
        }

        options = $.extend({
            timeout: 3000, //鼠标停留多少 ms 不动后自动消失
            isForce: true  //是否强制隐藏。为 true 则当子元素设置了 cursor 也会被覆盖. todo
        }, options);
        options.timeout = options.timeout < 1000 ? 1000 : options.timeout;

        var jahc = new JAHC($el, options);

        //存储 destory 方法
        return $el.data('autoHideMouseCursor', {
            destory: $.proxy(jahc.destory, jahc),
            options: options
        });
    };
})(window.jQuery);
