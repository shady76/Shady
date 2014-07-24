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
     * @use： checkAll($('#checkAll'), $('.checkbox'));
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
     * 格式化输出时间
     * @param time
     * @returns {String}
     * @use timeFormat('2014/7/23 20:23:15');
     *
     * 1、< 60s, 显示为“刚刚”
     * 2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
     * 3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
     * 4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
     * 5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
     */

    var timeFormat = function (time) {
        var date = new Date(time),  //  传入时间
               curDate = new Date(),    //  当前时间
               year = date.getFullYear(),
               month = date.getMonth() + 1,
               day = date.getDate(),
               hour = date.getHours(),
               minute = date.getMinutes(),
               curYear = curDate.getFullYear(),
               curHour = curDate.getHours(),
               timeStr = '';

        if (year < curYear) {
            timeStr = year + '年' + month + '月' + day + '日 ' + hour + '：' + minute;
        } else {
            var pastTime = curDate - date,
                   pastHour = pastTime / 360000;
            if (pastHour > curHour) {
                timeStr = month + '月' + day + '日 ' + hour + '：' + minute;
            } else if (pastHour >= 1) {
                timeStr = '今天 ' + hour + '：' + minute;
            } else {
                var pastMinu = curDate.getMinutes() - minute;
                if (pastMinu > 1) {
                    timeStr = pastMinu + '分钟前';
                } else {
                    timeStr = '刚刚';
                }
            }
        }
        return timeStr;
    };


    /**
     *  tab选项卡
     *  jQuery对象： .tab
     *
     *  HTML 结构：
     *  <div class='tab'>
     *      <ul class='tabHd'>
     *          <li>1</li>
     *          <li>2</li>
     *          <li>3</li>
     *       </ul>
     *        <div class='tabBd'>
     *            <div class='tabItem'>111</div>
     *             <div class='tabItem'>222</div>
     *             <div class='tabItem'>333</div>
     *        </div>
     *  </div>
     *
     *  CSS 样式：
     *  .tabItem{display:none;}
     *  .tabItem:first-child {display: block;}
     */
    var tab = function () {
        var obj = $('.tab'),
              hd = obj.find('.tabHd li'),
              bd = hd.parent().siblings('.tabBd').find('.tabItem');
        hd.mouseover(function() {
            var index = $(this).index();
            $(this).addClass('act').siblings().removeClass('act');
            bd.hide().eq(index).show();
        });
    };

    /**
     * 设置cookie
     *
     * @param cookieName
     * @param cookieValue
     * @param seconds
     * @param path
     * @param domain
     * @param secure
     */
    var setCookie = function (cookieName, cookieValue, seconds, path, domain, secure) {
        var expires = null; //过期时间
        if (seconds != -1) {
            expires = new Date();
            expires.setTime(expires.getTime() + seconds);
        }
        document.cookie = [
            encodeURI(cookieName),
            '=',
            encodeURI(cookieValue),
            (expires ? '; expires=' + expires.toGMTString() : ''),
            (path ? '; path=' + path : '/'),
            (domain ? '; domain=' + domain : ''),
            (secure ? '; secure' : '')
        ].join('');
    };

    /**
     * 获取cookie
     * @param name
     * @returns {string}
     */
    var  getCookie = function(name) {
        var cookieStart = document.cookie.indexOf(name);
        var cookieEnd = document.cookie.indexOf(";", cookieStart);
        return cookieStart == -1 ? '' : decodeURI(document.cookie.substring(cookieStart + name.length + 1, (cookieEnd > cookieStart ? cookieEnd : document.cookie.length)));
    }



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
            timeFormat('2014/7/23 20:23:15');
          //  tab();
        },

        tab : function () {
            tab();
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
Base.tab();
//Base.test();