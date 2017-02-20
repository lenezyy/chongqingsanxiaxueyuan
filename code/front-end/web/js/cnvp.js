// JavaScript Document
function showLocale()
{
	var objD = new Date();
	var str,colorhead,colorfoot;
	var yy = objD.getYear();
	if(yy<1900) yy = yy+1900;
	var MM = objD.getMonth()+1;
	if(MM<10) MM = '0' + MM;
	var dd = objD.getDate();
	if(dd<10) dd = '0' + dd;
	var hh = objD.getHours();
	if(hh<10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if(mm<10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if(ss<10) ss = '0' + ss;
	var ww = objD.getDay();
	if  ( ww==0 )  colorhead="<font color=\"#FF0000\">";
	if  ( ww > 0 && ww < 6 )  colorhead="<font color=\"#373737\">";
	if  ( ww==6 )  colorhead="<font color=\"#008000\">";
	if  (ww==0)  ww="星期日";
	if  (ww==1)  ww="星期一";
	if  (ww==2)  ww="星期二";
	if  (ww==3)  ww="星期三";
	if  (ww==4)  ww="星期四";
	if  (ww==5)  ww="星期五";
	if  (ww==6)  ww="星期六";
	colorfoot="</font>"
	str =  yy + "年" + MM + "月" + dd + "日  " + ww ;
	document.write(str);
}
function tick(Obj)
{
	var today;
	today = new Date();
	document.getElementById(Obj).innerHTML = showLocale();
	window.setTimeout("tick()", 1000);
}
function Flash(url,w,h,s){
	if (s==1){
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'"> ');
	document.write('<param name="movie" value="' + url + '">');
	document.write('<param name="quality" value="high"> ');
	document.write('<param name="wmode" value="transparent"> ');
	document.write('<param name="menu" value="false"> ');
	document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'" wmode="transparent"></embed> ');
	document.write('</object> ');
	}
	else{
	document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'"> ');
	document.write('<param name="movie" value="' + url + '">');
	document.write('<param name="quality" value="high"> ');
	document.write('<param name="menu" value="false"> ');
	document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed> ');
	document.write('</object> ');
	}
}
//加入收藏与设为首页
var hostName = "http://" + window.location.hostname;
var hostHref = window.location.href;
var tt;
var siteName;
$.get(hostHref,
	 {},
	 function(data){
	  tt = data.match(/<title>(.+)<\/title>/);
	  siteName=tt[1];
	 }
	);
function AddFavorite() 
{ 
	try
	{
		window.external.addFavorite(hostName,siteName); 
	}
	catch(e)
	{
		try
		{
			window.sidebar.addPanel(siteName, hostName, ""); 
		}
		catch(e)
		{
			alert("添加收藏夹失败，请手动添加");
		}
	}
}
function SetHomePage()
{
  if(window.netscape)
  {
        try
		{  
          	netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        }  
        catch (e)  
        {  
			alert("浏览器拒绝了设为首页的操作！");  //地址栏-->about:config,signed.applets.codebase_principal_support=true  
        }
	var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
  	prefs.setCharPref('browser.startup.homepage',hostName);
  }
  else
  {
     document.getElementById("homepage").style.behavior='url(#default#homepage)';
   	 document.getElementById("homepage").sethomepage(hostName);
  }
}
//顶部搜索脚本
$(function(){	
	$("input[name='Keyword']").bind("focus", function () {
		var v = $(this).val();
		var d = $(this).attr("data")
		if(d)
		if(v==d)
			$(this).val('');
	})
	$("input[name='Keyword']").bind("blur", function () {
		var v = $(this).val();
		var d = $(this).attr("data")
		if(d)
		if(v=="")
			$(this).val(d);
	})
	
})
function TopCheckForm(){	
	if ($('#Keyword').val()=='' || $('#Keyword').val()=='请输入搜索关键字')	
	{		
		alert('请输入搜索关键字！');	
		$('#Keyword').focus();	
		return false;	
	};	
	return true;
};
function RemLastChar(Str,char)
{
	var lastindex = Str.lastIndexOf(char)
    if(lastindex>-1)
	{
	  Str = Str.substring(0,lastindex)
	}
	return Str
}
function TeacherTab(id){
	$("#Teacher dl dd").each(function(i){
		if(i==id){
			$(this).addClass('s');
		}else{
			$(this).removeClass('s');
		}
	});
	$("#Teacher ul li").each(function(i){
		if(Math.floor(i/2)==id){
			$(this).fadeIn(600);	
		}else{
			$(this).fadeOut(300);
		}
	});
}
function StudentTab(id){
	$("#Student dl dd").each(function(i){
		if(i==id){
			$(this).addClass('s');
		}else{
			$(this).removeClass('s');
		}
	});
	$("#Student ul li").each(function(i){
		if(Math.floor(i/5)==id){
			$(this).fadeIn(600);	
		}else{
			$(this).fadeOut(300);
		}
	});
}