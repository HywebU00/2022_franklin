var popover = new bootstrap.Popover(
  document.querySelector(".popover-dismiss"),
  {
    trigger: "focus",
    template:
      '<div class="tooltip" role="tooltip"><ul><li><img src="image/icon-username.png" alt=""><span>客戶姓名 :</span>王大明</li><li><img src="image/icon-account.png" alt=""><span>指定扣款帳號 :</span>臺灣銀行00000000****</li><li><img src="image/icon-pay.png" alt=""><span>投信戶號 :</span>45251</li></ul></div>',
    placement: "bottom",
  }
);
