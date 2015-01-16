// 表单模块
(function () {
  "use strict";

  // 一定要在一开始就找到modal，不然会没有modal方法。。。
  var bookForm = $('#book-form');
  //var cancelBookBtn = $('#book-form .cancel-book-btn');
  var closeBookBtn = $('#book-form button.close');
  var submitBtn = $('#book-form .submit-btn');
  var showDetailBtn = bookForm.find('a.show-detail');

  var unameInput = bookForm.find('input[name=uname]');
  var mobileInput = bookForm.find('input[name=mobile]');
  var agreeCheckbox = bookForm.find('input[name=agree]');

  // 取消按钮
  //cancelBookBtn.on('click', function () {
  //  ___log('取消预约表单');
  //});
  // 关闭

  closeBookBtn.on('click', function () {
    ___log('关闭预约表单');
  });

  showDetailBtn.on('click', function() {
    ___log('显示活动详情');
  });

  // 提交按钮事件
  // 发送数据
  submitBtn.on('click', function (ev) {
    var uname = unameInput.val();
    var mobile = mobileInput.val();
    var agree = agreeCheckbox.prop('checked');

    //alert(uname);
    //alert(mobile);
    //alert(agree);
    //return;

    if (!uname) {
      ___log("名称缺失");
      return alert("请填写名称");
    }

    if (!mobile) {
      ___log("电话缺失");
      return alert("请填写电话");
    }

    if (!agree) {
      ___log('不同意提交');
      return alert('你需要同意提交个人信息');
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