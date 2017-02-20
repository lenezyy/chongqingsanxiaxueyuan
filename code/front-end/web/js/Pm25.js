$(function(){
	Pm25();
})
function Pm25(){
  var AqiArr=new Array();
  var Pm25Num;
  $.ajax({
	url: 'http://pm25.in/api/querys/pm2_5.json?city=beijing&token=5j1znBVAsnSf5xQyNQyq',
	dataType: "jsonp",
	jsonp: "callback",
	success: function (data) {			
	  $.each(data,function(i,o){				
		  AqiArr.push(o.aqi);
	  }) 
	  Pm25Show(AqiArr[AqiArr.length-1]);	 
	}
  }) 
  function Pm25Show(Pm25Num){
	var Pm25Str;
	var Pm25Css;
	if(Pm25Num<=50){
	    Pm25Str="��";
	}else if(Pm25Num>50&&Pm25Num<=100){
	    Pm25Str="��";	
	}else if(Pm25Num>100&&Pm25Num<=150){
		Pm25Str="�����Ⱦ";
		Pm25Css="two";
	}else if(Pm25Num>150&&Pm25Num<=200){
		Pm25Str="�ж���Ⱦ";	
		Pm25Css="two";
	}else if(Pm25Num>200&&Pm25Num<=300){
		Pm25Str="�ض���Ⱦ";	
		Pm25Css="two";
	}else{
		Pm25Str="������Ⱦ";	
		Pm25Css="two";
	}
	$("#Pm25").append(Pm25Str);
	$("#Pm25").addClass(Pm25Css)
  };
}