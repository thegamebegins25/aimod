const video = document.getElementById("video");
const code = document.getElementById("code");
const button = document.getElementById("button");

function rick() {
    console.log("click");
    video.style = "display: inline-block";
    code.style = "display: none";
    button.style = "display: none";
    video.play();
    if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
}

function unpause() {
    video.play();
}