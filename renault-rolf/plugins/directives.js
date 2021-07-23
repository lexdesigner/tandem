import Vue from "vue";

Vue.directive("phone", {
  bind(el) {
    el.oninput = function(e) {
      if (!e.isTrusted) {
        return;
      }

      const x = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
      el.dispatchEvent(new Event("input"));
    };
  }
});
