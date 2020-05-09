AFRAME.registerComponent('click-url-delay', {
  schema: {default: ''},

  init: function () {
    var url = this.data;
    this.el.addEventListener('click', function () {
    // window.location.href = url;
    setTimeout(function() {
      window.open(url,"_self");
      }, 600 /* time to delay */ );
    });
  }
});  