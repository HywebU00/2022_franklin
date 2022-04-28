// var popover = new bootstrap.Popover(
//   document.querySelector(".popover-dismiss"),
//   {
//     trigger: "focus",
//     template:
//       '<div class="tooltip" role="tooltip"><ul><li><img src="image/icon-username.png" alt=""><span>客戶姓名 :</span>王大明</li><li><img src="image/icon-account.png" alt=""><span>指定扣款帳號 :</span>臺灣銀行00000000****</li><li><img src="image/icon-pay.png" alt=""><span>投信戶號 :</span>45251</li></ul></div>',
//     placement: "bottom",
//   }
// );
//======================
// bs 表單驗證
//======================
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
//======================
// 點擊 menu表單 更改樣式
//======================
const navItem = document.querySelectorAll(".nav-toggle");
function removeItemClass() {
  navItem.forEach((item) => {
    item.classList.remove("show");
  });
}
if (navItem != null) {
  navItem.forEach((item) => {
    item.addEventListener("click", function () {
      removeItemClass();
      this.classList.add("show");
    });
  });
}

//======================
// 點擊 searchMobile 展開
//======================
const searchMobile = document.querySelector(".search-mobile");
const userMobilePopover = document.querySelector(".user-mobile-popover");
if (searchMobile != null) {
  searchMobile.addEventListener("click", function () {
    userMobilePopover.classList.toggle("show");
  });
}

//========================
// 點擊 密碼icon 改變密碼狀態
//========================
const EyeBtn = document.querySelectorAll(".btn-eye");
if (EyeBtn != null) {
  EyeBtn.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.previousElementSibling.type === "text") {
        item.previousElementSibling.type = "password";
      } else {
        item.previousElementSibling.type = "text";
      }
      item.classList.toggle("bi-eye");
    });
  });
}
