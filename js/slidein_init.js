$(window).load(function slider() {
  if (_5grid.isMobile) {
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