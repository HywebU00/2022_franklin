const popOver = document.querySelector('.popover-dismiss');
if (popOver !== null) {
  var popover = new bootstrap.Popover(popOver, {
    trigger: 'focus',
    template:
      '<div class="tooltip" role="tooltip"><ul><li><img src="image/icon-username.png" alt=""><span>客戶姓名 :</span>王大明</li><li><img src="image/icon-account.png" alt=""><span>指定扣款帳號 :</span>臺灣銀行00000000****</li><li><img src="image/icon-pay.png" alt=""><span>投信戶號 :</span>45251</li></ul></div>',
    placement: 'bottom',
  });
}
//======================
// bs 表單驗證
//======================
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
//======================
// 點擊 menu表單 更改樣式
//======================
const navItem = document.querySelectorAll('.nav-toggle');
function removeItemClass() {
  navItem.forEach((item) => {
    item.classList.remove('show');
  });
}
if (navItem != null) {
  navItem.forEach((item) => {
    item.addEventListener('click', function () {
      removeItemClass();
      this.classList.add('show');
    });
  });
}

//======================
// 點擊 searchMobile 展開
//======================
const searchMobile = document.querySelector('.search-mobile');
const userMobilePopover = document.querySelector('.user-mobile-popover');
if (searchMobile != null) {
  searchMobile.addEventListener('click', function () {
    userMobilePopover.classList.toggle('show');
  });
}

//========================
// 點擊 密碼icon 改變密碼狀態
//========================
const eyeBtn = document.querySelectorAll('.btn-eye');
if (eyeBtn != null) {
  eyeBtn.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.previousElementSibling.type === 'password') {
        item.previousElementSibling.type = 'text';
      } else {
        item.previousElementSibling.type = 'password';
      }
      item.classList.toggle('bi-eye');
    });
  });
}

//==========================
// 停利報酬 modal的input 判斷
//==========================
const payInput = document.querySelectorAll('.form-control-pay');
payInput.forEach(function (item) {
  item.addEventListener('change', function (e) {
    let value = e.target.value;
    addDisabled();
    if (value.length > 0) {
      item.removeAttribute('disabled');
    } else {
      removeDisabled();
    }
  });
  //新增所有 disabled 標籤
  function addDisabled() {
    PayInput.forEach(function (item) {
      item.setAttribute('disabled', '');
    });
  }
  //移除所有 disabled 標籤
  function removeDisabled() {
    PayInput.forEach(function (item) {
      item.removeAttribute('disabled');
    });
  }
});
//==========================
// loading 效果
//==========================
const loading = document.querySelector('.loading');
function addRemoveClass() {
  loading.classList.add('remove');
}

// lottie.loadAnimation({
//   container: document.querySelector('.loading-img'),
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'image/loading-img.json',
// });

//模擬 loading 出現的效果
if (loading !== null) {
  setTimeout(() => {
    addRemoveClass();
  }, '5000');
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('.btn-bell'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    trigger: 'hover',
    template:
      '<div class="tooltip bell-tooltip" role="tooltip"><ul><li>到價高於</li><li>到價低於</li><li> -- </li><li> 28 </li></ul></div>',
    placement: 'bottom',
  });
});
