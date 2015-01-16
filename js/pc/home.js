(function () {
  "use strict";

  var floatFooter = $('.float-footer');
  var topBookBtn = $('.top-book-btn');
  var bottomBookBtn = $('.bottom-book-btn');


  // 隐藏下方浮层
  floatFooter.hide();

  // 滚动过header的时候现实下方浮层
  $(window).scroll(function () {
    if ($(window).scrollTop() > 560) {
      floatFooter.show();
    } else {
      floatFooter.hide();
    }
  });

// 预约按钮（上）
  topBookBtn.on('click', function () {
    ___log('打开预约表单（上）');
  });
// 预约按钮（下）
  bottomBookBtn.on('click', function () {
    ___log('打开预约表单（下）');
  });

})();