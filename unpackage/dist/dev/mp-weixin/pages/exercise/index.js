"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const btn = () => {
      console.log(1);
      common_vendor.index.switchTab({
        url: "/pages/exercise/details"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o((...args) => _ctx.error && _ctx.error(...args)),
        b: common_vendor.o(btn)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/Web代码/微信小程序/练习1/pages/exercise/index.vue"]]);
wx.createPage(MiniProgramPage);
