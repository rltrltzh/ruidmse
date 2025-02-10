$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://vod.plaync.com/JM/preorder/240930/bg_01.mp4#t=0.1";
        document.getElementById('vd').load();
    }
	}

	 if (!window.location.href.startsWith("https://swordsv001.blogspot.com/")) {
    window.location.href = "http://warning.or.kr/";
        document.documentElement.innerHTML = "";
}
});

