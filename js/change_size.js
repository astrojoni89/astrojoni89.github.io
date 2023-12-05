function changeSize() {
    var myPanel = document.getElementById("main");
    var currentHeight = myPanel.offsetHeight;
    var hiddenContent = document.getElementById("hiddenContent");

// Toggle the visibility of the hidden content
    if (hiddenContent.style.display !== "block") {
        hiddenContent.style.display = "block";
        var hiddencontentHeight = hiddenContent.offsetHeight;
        myPanel.style.height = (currentHeight + hiddencontentHeight) + "px";
        bar1 = progress_bar(0.85, '#progresscircle1'); /* python */
        bar2 = progress_bar(0.65, '#progresscircle2'); /* HTML/CSS/JS */
        bar3 = progress_bar(0.70, '#progresscircle3'); /* blender */
        bar4 = progress_bar(0.75, '#progresscircle4'); /* LaTex */
        bar5 = progress_bar(0.30, '#progresscircle5'); /* SQL */
    } else {
        var hiddencontentHeight = hiddenContent.offsetHeight;
        hiddenContent.style.display = "none";
        myPanel.style.height = (currentHeight - hiddencontentHeight) + "px";
        destroyBar(bar1);
        destroyBar(bar2);
        destroyBar(bar3);
        destroyBar(bar4);
        destroyBar(bar5);
    };

}

