window.notify = function (message) {
    $(".notif_bar").removeClass("redalert");
    $(".notif_bar").html(message);
    $(".notif_bar").slideDown(400).delay(4000).slideUp(400);
  }
window.notifyRed = function(message) {
    $(".notif_bar").addClass("redalert");
    $(".notif_bar").html(message);
    $(".notif_bar").slideDown(400).delay(4000).slideUp(400);
  }