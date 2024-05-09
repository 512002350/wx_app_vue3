"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "details",
  setup(__props) {
    const back = () => {
      console.log(1);
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(back)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Web代码/微信小程序/练习1/pages/exercise/details.vue"]]);
wx.createPage(MiniProgramPage);
