function init() {
  $("#rec1").empty();
  if (window.location.hostname.indexOf("ap-southeast") < 0) {
    $("#rec1").append(
    	"<span style='color:red'>增设亚洲服务器，请访问<a href='http://ivangift.github.io/nikkirec'>这个地址</a>以提高速度。</span>");
  }
  $("#rec1").append("<div style='color:red'>觉得亚洲服务器还是慢的请去<a href='http://www.cloudping.info/'>www.cloudping.info</a>点一下'HTTP Ping'那个按钮，把结果回报到主贴</div>");
  $("#rec1").append("<div style='color:red'>实测识别结果准确率很高，如果发现你的截图在无遮挡的情况下识别率低于80%，"
  	+ "请将原图贴到<a href='http://tieba.baidu.com/p/4246163563'>主贴</a>让我检查一下。</div>");
}
// randomly change sth

$(document).ready(function() {
  init();
});
