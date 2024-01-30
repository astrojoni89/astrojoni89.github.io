function slider() {
  var elems = $(".slideIn")
  var elems_dom = $(elems).get();

  try {
    setTimeout(animate, 2500);
  }
  catch(err) {
    $(elems).show(); //show it anyway; fallback for mobile version
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
      1000
    );
  };
};