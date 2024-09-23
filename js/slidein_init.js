$(window).load(function slider() {
  if (_5grid.isMobile) {
    $(".slideIn").css({"margin" : "auto", "text-align": "center"});
    $(".slideIn").show();
  } else {
    var elems = $(".slideIn");
    var h = 0;
    $(elems).each(function () {
      h += $(this).height();
    });
    //console.log(h);
    $("#itemSlider").height(h);
  }
});

function slider() {
  var elems = $(".slideIn")
  var elems_dom = $(elems).get();

  try {
    setTimeout(animate, 2000);
  }
  catch(err) {
    $(elems).show();
  }

  function animate() {
    var elem = elems_dom.shift();
    $(elem).show(
      "drop",
      {
        direction: "right",
        complete: function () {
          if (elems_dom.length > 0) window.setTimeout(animate);
        },
      },
      750
    );
  };
};