/**
 * @Author: Shady
 * @Date: 2014/7/23  9:17
 * @E-mail: cnshady@gmail.com
 */

/**
 *  jQuery插件开发基本框架
 */
if (typeof jQuery === 'undefined') {
    throw new Error('本插件依赖于jQuery，请引入jQuery');
}
    /*
    ;(function($) {
        //实现方法一
        $.fn.test = function (options) {
            var defaults = {
              //这里设置插件默认参数
            };
            var options = $.extend(defaults, options);
            //调用参数: options.默认参数
            //功能函数
            //$.each(function () {
            //    ....
           // })

        }
    }) (jQuery);


    ;(function($) {
        //实现方法二
        $.fn.extend({
                test : function (options) {
                    var defaults = {
                        //这里设置插件默认参数
                    };
                    var options = $.extend(defaults, options);
                    //调用参数: options.默认参数
                    //功能函数
                }
        });
    }) (jQuery);

     /**
     *  测试插件
     */
/*
;(function($) {
    $.fn.extend({
        test : function (options) {
            var defaults = {
                color : '#333',
                fontSize : '20px',
                backgroundColor : '#69c',
                event : 'click'
            };
            var options = $.extend(defaults, options);
            $(this).on(options.event,function() {
                $(this).css({
                    color : options.color,
                    fontSize : options.fontSize,
                    backgroundColor : options.backgroundColor
                });
            });
        }
    });
}) (jQuery);
*/

;(function($) {
    /**
     * 获取当前URL路径
     * @returns {string}
     */
    $.fn.getUrl = function () {
            var url = '';
            if (typeof this.href === 'undefined') {
                url = document.location.toString().toLowerCase();
            } else {
                url = this.href.toString().toLowerCase();
            }
            console.log(url);
            return url;
    };

    /**
     *  初始化调用
     */
    $(function () {
        $(window).getUrl();
    });
}) (jQuery);



