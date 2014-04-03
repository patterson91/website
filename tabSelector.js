var prevTab = null;
var prevCon = null;
function activateItem(t, c){
	if(prevTab != null){
		prevTab.className = prevTab.className.replace(" activeTab", "");
	}
	if(prevCon != null){
		prevCon.className = prevCon.className.replace(" activeContent", "");
	}
	t.className += " activeTab";
	c.className += " activeContent";
	prevTab = t;
	prevCon = c;
}

function setHomeTab(c){
	c.className += " activeContent";
	prevCon = c;
}