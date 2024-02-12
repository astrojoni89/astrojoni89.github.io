// get the button and animate its position based on the mouse position
$(window).load(function () {
  if (_5grid.isDesktop) {
    const button = document.querySelector(".buttonADS2");
    let boundingRect = button.getBoundingClientRect();

    window.addEventListener("resize", () => {
      boundingRect = button.getBoundingClientRect();
    });

    button.addEventListener("mousemove", (e) => {
      const mousePosX = e.pageX - boundingRect.left;
      const mousePosY = e.pageY - boundingRect.top;

      // define destination values of button
      gsap.to(button, {
        x: (mousePosX - boundingRect.width / 2) * 0.1,
        y: (mousePosY - boundingRect.height / 2) * 0.05,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    button.addEventListener("mouseleave", () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1,0.3)",
      });
    });
  }
});

