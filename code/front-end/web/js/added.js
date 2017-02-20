var tabNav = document.getElementsByClassName("tabNav")[0];
var tabLi = tabNav.getElementsByTagName("li");

var tabDiv = document.getElementsByClassName("tabDiv");

for(var i = 0; i < tabLi.length; i++){
	tabLi[i].index = i;
	tabLi[i].onmouseover = function(){
		for(var j = 0; j < tabLi.length; j++){
			tabLi[j].className='';
			tabDiv[j].className='hide tabDiv';	
		}
		this.className='border-bottom';
		tabDiv[this.index].className = 'tabDiv';
		
	}
}
