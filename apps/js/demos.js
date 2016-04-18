$(function () {
  'use strict';
  //fiex 标签
    $('.spinner').spinner();
    $(document).on(".product-conment", function() {
        $('.buttons-tab').fixedTab({offset:44});
     });
  //选择规格
  $(document).on('click','.open-about', function () {
    $.popup('.popup-about');
  });
   
  //首页加载图示
  $(document).on('click','.b-index', function () {
        $.showIndicator();
        setTimeout(function () {
            $.hideIndicator();
        }, 2000);
    });
  //下拉刷新页面
  $(document).on("pageInit", "#page-ptr", function(e, id, page) {
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 模拟2s的加载过程
      setTimeout(function() {
        var cardHTML = '<div class="card">' +
          '<div class="card-header">标题</div>' +
          '<div class="card-content">' +
          '<div class="card-content-inner">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' +
          '</div>' +
          '</div>' +
          '</div>';

        $content.find('.card-container').prepend(cardHTML);
        // $(window).scrollTop(0);
        // 加载完毕需要重置
        $.pullToRefreshDone($content);
      }, 2000);
    });
  });
   
   //产品评价
   $(document).on("pageInit", "#pro-content", function(e, id, page) {
     //产品分类
     var loading = false;
     // 每次加载添加多少条目
     var itemsPerLoad = 8;
     // 最多可加载的条目
     var maxItems = 100;
     var lastIndex = $('.list-product li').length;
     function addItems(number, lastIndex) {
       // 生成新条目的HTML
       var html = '';
       for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
         html += '<li class="item-link item-content"><div class="item-media" style="-webkit-box-align:top;align-items: top;"><img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="30"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">jdv**CD</div><div class="item-after">2016/04/01</div></div><div class="item-text">此处是文本内容..此处是文本内容此处是文本内容此处是文本内容.</div></div></li>';
       }
       // 添加新条目
       $('.infinite-scroll .list-product').append(html);
     }
     $(page).on('infinite', function() {
       // 如果正在加载，则退出
       if (loading) return;
       // 设置flag
       loading = true;
       // 模拟1s的加载过程
       setTimeout(function() {
         // 重置加载flag
         loading = false;
         if (lastIndex >= maxItems) {
           // 加载完毕，则注销无限加载事件，以防不必要的加载
           $.detachInfiniteScroll($('.infinite-scroll'));
           // 删除加载提示符
           $('.infinite-scroll-preloader').remove();
           return;
         }
         addItems(itemsPerLoad,lastIndex);
         // 更新最后加载的序号
         lastIndex = $('.list-product li').length;
         $.refreshScroller();
       }, 1000);
     });
   });
   //无限滚动
   $(document).on("pageInit", "#product-grid", function(e, id, page) {
     //产品分类
     var loading = false;
     // 每次加载添加多少条目
     var itemsPerLoad = 8;
     // 最多可加载的条目
     var maxItems = 100;
     var lastIndex = $('.media-list li').length;
     function addItems(number, lastIndex) {
       // 生成新条目的HTML
       var html = '';
       for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
         html += '<li><a href="product.html" class="item-link item-content"><div class="item-media"><img src="images/product.jpg" width="80"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">新疆特产阿克苏特产苹果20斤精品礼盒装</div></div><div class="item-text">￥98<i>已售<span>20</span></i></div></div></a></li>';
       }
       // 添加新条目
       $('.infinite-scroll .media-list').append(html);
     }
     $(page).on('infinite', function() {
       // 如果正在加载，则退出
       if (loading) return;
       // 设置flag
       loading = true;
       // 模拟1s的加载过程
       setTimeout(function() {
         // 重置加载flag
         loading = false;
         if (lastIndex >= maxItems) {
           // 加载完毕，则注销无限加载事件，以防不必要的加载
           $.detachInfiniteScroll($('.infinite-scroll'));
           // 删除加载提示符
           $('.infinite-scroll-preloader').remove();
           return;
         }
         addItems(itemsPerLoad,lastIndex);
         // 更新最后加载的序号
         lastIndex = $('.media-list li').length;
         $.refreshScroller();
       }, 1000);
     });
   });

  //无限滚动
  $(document).on("pageInit", "#page-infinite-scroll-bottom", function(e, id, page) {
    //产品分类
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 8;
    // 最多可加载的条目
    var maxItems = 100;
    var lastIndex = $('.list-product li').length;
    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<li class="col-50"><a href="product.html"><div class="product"><div class="pro-img"><img src="images/product.jpg" alt="" class="img-responsive"></div><div class="pro-info"><p class="pro-name" style="margin:0.24rem 0">美国碧根果五香味1千克装</p><p class="pro-price harf-border-top clearfix"><span class="price-number">￥70.00</span><span class="product-sell">已售<span>60</span>袋</span></p></div></div></a></li>';
      }
      // 添加新条目
      $('.infinite-scroll .list-product').append(html);
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      // 模拟1s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          $.detachInfiniteScroll($('.infinite-scroll'));
          // 删除加载提示符
          $('.infinite-scroll-preloader').remove();
          return;
        }
        addItems(itemsPerLoad,lastIndex);
        // 更新最后加载的序号
        lastIndex = $('.list-product li').length;
        $.refreshScroller();
      }, 1000);
    });
  });

  //顶部无限滚动
  $(document).on("pageInit", "#page-infinite-scroll-top", function(e, id, page) {
    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = lastIndex+ number; i > lastIndex ; i--) {
        html += '<li class="item-content"><div class="item-inner"><div class="item-title">条目'+i+'</div></div></li>';
      }
      // 添加新条目
      $('.infinite-scroll .list-container').prepend(html);

    }
    var timer = false;
    $(page).on('infinite', function() {
       var lastIndex = $('.list-block li').length;
       var lastLi = $(".list-container li")[0];
       var scroller = $('.infinite-scroll-top');
       var scrollHeight = scroller[0].scrollHeight; // 获取当前滚动元素的高度
      // 如果正在加载，则退出
      if (timer) {
        clearTimeout(timer);
      }

      // 模拟1s的加载过程
      timer = setTimeout(function() {

        addItems(20,lastIndex);

        $.refreshScroller();
        //  lastLi.scrollIntoView({
        //     behavior: "smooth",
        //     block:    "start"
        // });
        // 将滚动条的位置设置为最新滚动元素高度和之前的高度差
        scroller.scrollTop(scroller[0].scrollHeight - scrollHeight);
      }, 1000);
    });

  });
  //test demo js

  //多个标签页下的无限滚动
  $(document).on("pageInit", "#page-fixed-tab-infinite-scroll", function(e, id, page) {
    var loading = false;
    // 每次加载添加多少条目
    var itemsPerLoad = 20;
    // 最多可加载的条目
    var maxItems = 100;
    var lastIndex = $('.list-container li')[0].length;
    function addItems(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
        html += '<li class="item-content""><div class="item-inner"><div class="item-title">新条目</div></div></li>';
      }
      // 添加新条目
      $('.infinite-scroll.active .list-container').append(html);
    }
    $(page).on('infinite', function() {
      // 如果正在加载，则退出
      if (loading) return;
      // 设置flag
      loading = true;
      var tabIndex = 0;
      if($(this).find('.infinite-scroll.active').attr('id') == "tab2"){
        tabIndex = 0;
      }
      if($(this).find('.infinite-scroll.active').attr('id') == "tab3"){
        tabIndex = 1;
      }
      lastIndex = $('.list-container').eq(tabIndex).find('li').length;
      // 模拟1s的加载过程
      setTimeout(function() {
        // 重置加载flag
        loading = false;
        if (lastIndex >= maxItems) {
          // 加载完毕，则注销无限加载事件，以防不必要的加载
          //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
          // 删除加载提示符
          $('.infinite-scroll-preloader').eq(tabIndex).hide();
          return;
        }
        addItems(itemsPerLoad,lastIndex);
        // 更新最后加载的序号
        lastIndex =  $('.list-container').eq(tabIndex).find('li').length;
        $.refreshScroller();
      }, 1000);
    });
  });

  //图片浏览器
  $(document).on("pageInit", "#page-photo-browser", function(e, id, page) {
    var myPhotoBrowserStandalone = $.photoBrowser({
      photos : [
        '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
      ]
    });
    //点击时打开图片浏览器
    $(page).on('click','.pb-standalone',function () {
      myPhotoBrowserStandalone.open();
    });
    /*=== Popup ===*/
    var myPhotoBrowserPopup = $.photoBrowser({
      photos : [
        '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
        '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
      ],
      type: 'popup'
    });
    $(page).on('click','.pb-popup',function () {
      myPhotoBrowserPopup.open();
    });
    /*=== 有标题 ===*/
    var myPhotoBrowserCaptions = $.photoBrowser({
      photos : [
        {
          url: '//img.alicdn.com/tps/i3/TB1kt4wHVXXXXb_XVXX0HY8HXXX-1024-1024.jpeg',
          caption: 'Caption 1 Text'
        },
        {
          url: '//img.alicdn.com/tps/i1/TB1SKhUHVXXXXb7XXXX0HY8HXXX-1024-1024.jpeg',
          caption: 'Second Caption Text'
        },
        // 这个没有标题
        {
          url: '//img.alicdn.com/tps/i4/TB1AdxNHVXXXXasXpXX0HY8HXXX-1024-1024.jpeg',
        },
      ],
      theme: 'dark',
      type: 'standalone'
    });
    $(page).on('click','.pb-standalone-captions',function () {
      myPhotoBrowserCaptions.open();
    });
  });


  //对话框
  $(document).on("pageInit", "#page-modal", function(e, id, page) {
    var $content = $(page).find('.content');
    $content.on('click','.alert-text',function () {
      $.alert('这是一段提示消息');
    });

    $content.on('click','.alert-text-title', function () {
      $.alert('这是一段提示消息', '这是自定义的标题!');
    });

    $content.on('click', '.alert-text-title-callback',function () {
      $.alert('这是自定义的文案', '这是自定义的标题!', function () {
        $.alert('你点击了确定按钮!')
      });
    });
    $content.on('click','.confirm-ok', function () {
      $.confirm('你确定吗?', function () {
        $.alert('你点击了确定按钮!');
      });
    });
    $content.on('click','.prompt-ok', function () {
      $.prompt('你叫什么问题?', function (value) {
        $.alert('你输入的名字是"' + value + '"');
      });
    });
  });

  //操作表
  $(document).on("pageInit", "#page-action", function(e, id, page) {
    $(page).on('click','.create-actions', function () {
      var buttons1 = [
        {
          text: '请选择',
          label: true
        },
        {
          text: '卖出',
          bold: true,
          color: 'danger',
          onClick: function() {
            $.alert("你选择了“卖出“");
          }
        },
        {
          text: '买入',
          onClick: function() {
            $.alert("你选择了“买入“");
          }
        }
      ];
      var buttons2 = [
        {
          text: '取消',
          bg: 'danger'
        }
      ];
      var groups = [buttons1, buttons2];
      $.actions(groups);
    });
  });

  //加载提示符
  $(document).on("pageInit", "#page-preloader", function(e, id, page) {
    $(page).on('click','.open-preloader-title', function () {
      $.showPreloader('加载中...')
      setTimeout(function () {
        $.hidePreloader();
      }, 2000);
    });
    $(page).on('click','.open-indicator', function () {
      $.showIndicator();
      setTimeout(function () {
        $.hideIndicator();
      }, 2000);
    });
  });


  //选择颜色主题
  $(document).on("click", ".select-color", function(e) {
    var b = $(e.target);
    document.body.className = "theme-" + (b.data("color") || "");
    b.parent().find(".active").removeClass("active");
    b.addClass("active");
  });

  //picker
  $(document).on("pageInit", "#page-picker", function(e, id, page) {
    $("#picker").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
        <button class="button button-link pull-left">\
      按钮\
      </button>\
      <button class="button button-link pull-right close-picker">\
      确定\
      </button>\
      <h1 class="title">标题</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3'],
          cssClass: 'picker-items-col-normal'
        }
      ]
    });
    $("#picker-name").picker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">请选择称呼</h1>\
      </header>',
      cols: [
        {
          textAlign: 'center',
          values: ['赵', '钱', '孙', '李', '周', '吴', '郑', '王']
        },
        {
          textAlign: 'center',
          values: ['杰伦', '磊', '明', '小鹏', '燕姿', '菲菲', 'Baby']
        },
        {
          textAlign: 'center',
          values: ['先生', '小姐']
        }
      ]
    });
  });
  $(document).on("pageInit", "#page-datetime-picker", function(e) {
    $("#datetime-picker").datetimePicker({
      toolbarTemplate: '<header class="bar bar-nav">\
      <button class="button button-link pull-right close-picker">确定</button>\
      <h1 class="title">选择日期和时间</h1>\
      </header>'
    });
  });

  $(document).on("pageInit", "#user-address", function(e) {
    $("#city-picker").cityPicker({
        value: ['河南', '郑州']
        //value: ['四川', '内江', '东兴区']
    });
  });

  $.init();
});
