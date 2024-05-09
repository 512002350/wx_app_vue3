"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const isVideoVisible = common_vendor.ref(false);
    const toggleVideoVisibility = () => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      setTimeout(() => {
        common_vendor.index.hideLoading();
        isVideoVisible.value = !isVideoVisible.value;
      }, 1500);
      console.log(10);
    };
    const start_exercise = () => {
      common_vendor.index.navigateTo({
        url: "/pages/exercise/index"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(toggleVideoVisibility),
        b: isVideoVisible.value
      }, isVideoVisible.value ? {} : {}, {
        c: common_vendor.o(start_exercise)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Web代码/微信小程序/练习1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
