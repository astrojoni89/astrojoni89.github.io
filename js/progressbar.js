// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/ window.onload =
function progress_bar(x,id) {
  var progressCircle = new ProgressBar.Circle(id, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 2 },
    to: { color: '#4967ad', width: 5 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);

      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + '%');
      }

    }
  });
  progressCircle.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  progressCircle.text.style.fontSize = '1.0em';

  progressCircle.animate(x);  // Number from 0.0 to 1.0
  return progressCircle;
};


function destroyBar(bar) {
    bar.destroy();
}
