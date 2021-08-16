function sendTo(url) {
  location.href = url;
}

window.onload = function() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.getElementById("css").href = "mobile.css";
  };
};
