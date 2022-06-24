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
          document.addEventListener("contextmenu", removeContextMenu);

          const URL = e.path.find(el =>
            el.classList.contains("yt-simple-endpoint")
          );
          navigator.clipboard.writeText(URL);
          if (URL) {
            Toastify({
              text: "URL Copied To The Clipboard",
              duration: 3000,
            }).showToast();
          }
          clearInterval(timer);
          count = 0;
        }
      } else if (!mouseDown) {
        clearInterval(timer);
        count = 0;
      }
    }
  }, 100);
});
document.addEventListener("mouseup", () => {
  mouseDown = false;
  setTimeout(() => {
    document.removeEventListener("contextmenu", removeContextMenu);
  }, 100);
});

const removeContextMenu = e => {
  e.preventDefault();
  return false;
};
