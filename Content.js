"use strict";

let count = 0;

let mouseDown = false;
document.addEventListener("mousedown", e => {
  mouseDown = true;

  const timer = setInterval(() => {
    if (e.button === 2) {
      if (mouseDown) {
        count++;
        if (count === 2) {
          const URL = e.path.find(el =>
            el.classList.contains("yt-simple-endpoint")
          );
          console.log(URL);
          navigator.clipboard.writeText(URL);
          if (URL) {
            alert("URL Copied To The Clipboard");
          }
          clearInterval(timer);
          count = 0;
        }
      } else if (!mouseDown) {
        clearInterval(timer);
        count = 0;
      }
    }
  }, 200);
});
document.addEventListener("mouseup", () => {
  mouseDown = false;
});
