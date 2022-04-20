var popover = new bootstrap.Popover(
  document.querySelector(".popover-dismiss"),
  {
    trigger: "focus",
    template:
      '<div class="tooltip" role="tooltip"><ul><li><i class="bi bi-person"></i> <span>客戶姓名 </span>王大明</li><li><i class="bi bi-credit-card-2-back"></i> <span>指定扣款帳號</span>臺灣銀行00000000****</li><li><i class="bi bi-wallet"></i><span>投信戶號</span>45251</li></ul></div>',
    placement: "bottom",
  }
);
