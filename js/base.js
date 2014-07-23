/**
 * @Author: Shady
 * @Date: 2014/7/23  14:56
 * @E-mail: cnshady@gmail.com
 * @Desc: 封装常用jQuery函数
 */

/**
 *  判断页面是否支持jQuery
 */
if (typeof jQuery === 'undefined') {
    throw new Error('本插件依赖于jQuery，请引入jQuery');
}

var Base = function () {

    /**
     * =============================
     *      定义私有变量和方法
     * =============================
     */

    /**
     *  获取当前jQuery版本号
     * @returns {m.jquery|*|jQuery.jquery}
     */
    var getJqueryVersion = function () {
        return $.fn.jquery;
    };

    /**
     * 获取当前浏览器URL路径,并且转化为小写
     * @returns {string}
     */
    var getUrl = function () {
        return window.location.href.toString().toLowerCase();
    };

    /**
     * 判断浏览器是否为现代浏览器（IE9以上）
     * @returns {boolean}
     */
    var getIE = function () {
        if ($.support.leadingWhitespace == false) {
            alert('你的IE浏览器版本太低了，请升级成IE9以上的现代浏览器 ^_^');
            return false;
        }
    };

    /**
     * 全选/反选
     * @param obj （事件驱动对象）
     * @param item （筛选对象）
     * 传入参数为 jQuery对象
     * 调用方式： checkAll($('#checkAll'), $('.checkbox'));
     */
    var checkAll = function (obj, item) {
        obj.click(function() {
           item.each(function() {
              /* if(this.checked == false) {
                   this.checked = true;
               } else {
                   this.checked = false;
               }*/
                this.checked == false ? this.checked = true : this.checked = false;
            });
        });
    };

    /**
     *  返回顶部
     *  @Param id : #gotop
     */
    var goTop = function () {
        /**
         *  滚动条和缩放窗口事件
         */
        $(window).bind('scroll resize',function() {
            ( $(window).scrollTop() >= $(window).height()) ? ($('#goTop').fadeIn()) : ($('#goTop').fadeOut() );
        });

        /**
         *  gotop点击事件
         */
        $('#goTop').click(function () {
            $('body, html').animate({scrollTop: 0}, 500);
            return false;
        });
    };


    /**
     * =============================
     *      返回公共接口函数，供外部调用
     * =============================
     */

    return {
        //  默认初始化调用
        init : function () {
            goTop();
            checkAll($('#checkAll'), $('.checkbox'));
        },

        test : function () {

        }
    };

}();


/**
 * =============================
 *      外部调用方式 构造对象.返回方法
 *      例如：Base.init();
 * =============================
 */

Base.init();
//Base.test();