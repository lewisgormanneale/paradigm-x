AFRAME.registerComponent("navigate-on-click", {
  schema: {
    url: { default: "" },
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    el.addEventListener("click", function () {
      window.open(data.url, "_blank");
    });
  },
});

AFRAME.registerComponent("player-collision", {
  init: function () {
    this.el.addEventListener("collide", function (e) {
      console.log("Player has collided with ", e.detail.body.el);
    });
  },
});
