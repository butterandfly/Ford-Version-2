(function () {
  "use strict";

  // 一定要在一开始就找到modal，不然会没有modal方法。。。
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

// 表单模块
(function () {
  "use strict";

  var bookForm = $('#book-form');
  //var cancelBookBtn = $('#book-form .cancel-book-btn');
  var closeBookBtn = $('#book-form button.close');
  var submitBtn = $('#book-form .submit-btn');

  // 取消按钮
  //cancelBookBtn.on('click', function () {
  //  ___log('取消预约表单');
  //});
  // 关闭
  closeBookBtn.on('click', function () {
    ___log('关闭预约表单');
  });

  // 提交按钮事件
  // 发送数据
  submitBtn.on('click', function (ev) {
    var uname = $('input[name=uname]').val();
    var mobile = $('input[name=mobile]').val();

    if (!uname) {
      ___log("名称缺失");
      return alert("请填写名称");
    }

    if (!mobile) {
      ___log("电话缺失");
      return alert("请填写电话");
    }

    bookForm.modal('hide');

    _CWiQ.push(['_trackReg', 1]);
    ___log('submit');
    window._CiQ10412 = window._CiQ10412 || [];
    window._CiQ10412.push(['_trackEvent', {
      type: 1,
      labels: [
        {'1': uname}
        , {'2': mobile}
        , {'3': window.sf_UserIp}
        , {'4': ''}
        , {'5': ''}
        , {'6': ''}
        , {'7': ''}
      ],
      values: [
        {'数量': 1}
      ]
    }]);
    window.CClickiV3 && window.CClickiV3[10412] && window.CClickiV3[10412]._flushObserver(function () {
      alert("恭喜你预约成功！");
    });
  });
})();
