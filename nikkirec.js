function init() {
  if (window.location.hostname.indexOf("us-west") > 0) {
    $("#rec1").html("<span style='color:red'>增设亚洲服务器，请访问<a href='http://ivangift.github.io/nikkirec'>这个地址</a>以提高速度。</span>");
  }
}

$(document).ready(function() {
  init();
});