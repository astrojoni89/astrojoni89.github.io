$(window).load(function slider() {
  var elems = $(".slideIn");
  var h = 0;
  $(elems).each(function () {
    h += $(this).height();
  });
  console.log(h);
  $("#itemSlider").height(h);
});