$(window).load(function slider_mobile() {
  var elems = $(".slideIn");
  var elems_dom = $(elems).get();

  if (_5grid.isMobile) {
    try {
      setTimeout(animate_mobile, 2500);
    } catch (err) {
      $(elems).show();
    }}

  function animate_mobile() {
    var elem = elems_dom.shift();
    $(elem).show(
      "drop",
      {
        direction: "right",
        complete: function () {
          if (elems_dom.length > 0) window.setTimeout(animate_mobile);
        },
      },
      1000
    );
  }
});
