	var ar =new Array();
		ar[100]=7;
		ar[101]=10
		ar[102]=12;
		ar[103]=10;
		ar[104]=8;
		ar[105]=12;
		ar[106]=9;
		ar[107]=12;
		ar[108]=25;
		ar[109]=30;
		ar[110]=32;
		ar[111]=28;
		ar[112]=25;
		ar[113]=38;
		ar[114]=18;
		ar[115]=28;
		ar[116]=13;
		ar[117]=10;
		ar[118]=11;
		ar[119]=25;
		ar[120]=95;
		ar[121]=18;
		ar[122]=28;
		ar[123]=25;
		
		function updateOrder()
		{
		var total=0;
		var total1="";
		var a=0;
		 var orderDetails = "";
		 var formElement;
		 var text="";
		 
		 formElement = document.getElementsByClassName("checkBox");
		 var table = document.getElementById("tableFinal");
		 while(table.rows.length>0){
		 table.deleteRow(0);
		 }
		 
		 var i;
		 for (i = 0; i < formElement.length; i++)
         {
		 if (formElement[i].checked == true)
		 {
		    var row = table.insertRow(a);	 
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			a++;
			text = formElement[i].name;		   
		    orderDetails = orderDetails + text ;
		    cell1.innerHTML=text;
			total1 = ar[formElement[i].value];
		    cell2.innerHTML="$"+total1;
		    total = total + parseFloat(ar[formElement[i].value]);		 
		 }
		 }
		var row1=table.insertRow(a);
		var cell1 = row1.insertCell(0);
		var cell2 = row1.insertCell(1);
		cell1.innerHTML="Total Order Cost";
		cell2.innerHTML="$"+total;
			alert("Your cart has been updated!!");
		}
		
	

function ajaxFunction(cityName)   //functionName could be anything
{
	//1. Create XmlHttpRequest Object
	//This could be written into an external .js file that could be used within other pages as well.
	var xmlHttp;
   
	try     // Firefox, Opera 8.0+, Safari
	{
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		try  // Internet Explorer
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e)
			{
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	
	//2. Call the server-side script
	//cityName is the function parameter passed when the JS function is called
	xmlHttp.open("GET", "proj.jsp?q=" + cityName, true);   //q is the name of the parameter to be used in JSP
	xmlHttp.send();   //leave blank, or pass null. Not used with GET requests

	
	//3. Check the server-data is ready
	xmlHttp.onreadystatechange=function()
	{
		if(xmlHttp.readyState==4)
		{
			//4. Manipulate the DOM
			var cityDiv = document.getElementById("cityDiv");
			var serverData = xmlHttp.responseText;
			cityDiv.innerHTML = serverData;
		}
	}

}
function replaceVal(a){
var value1 = a.innerHTML;
var value2 = document.getElementById("input1");
value2.value=value1;
}

function shop(){

var xmlHttp;
var value2 = "param";
var value3 = document.getElementById("input1").value;
var value4= value2+value3;
   
	try     // Firefox, Opera 8.0+, Safari
	{
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		try  // Internet Explorer
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			try
			{
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e)
			{
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	
	//2. Call the server-side script
	//value3 is the function parameter passed when the JS function is called
	xmlHttp.open("GET", "proj.jsp?q=" + value4, true);   //q is the name of the parameter to be used in JSP
	xmlHttp.send();   //leave blank, or pass null. Not used with GET requests

	
	//3. Check the server-data is ready
	xmlHttp.onreadystatechange=function()
	{
		if(xmlHttp.readyState==4)
		{
			//4. Manipulate the DOM
			var cityDiv = document.getElementById("cityDiv");
			var serverData = xmlHttp.responseText;
			cityDiv.innerHTML="";
			
	
			var name=document.getElementById("col1");
			name.innerHTML=value3;
            var price=document.getElementById("col2");
			price.innerHTML=serverData;
			
			
			
		}

}
}




var countChecked = function() {
	   var n = $( "input:checked" ).length;
	   if (n>=1)
	   {
			   
          $(".buy1").removeAttr("disabled")		  
	   }
	   else
	   {
		 $("button").removeAttr("disabled");
		 $(".buy1").prop('disabled',true);
	   }  
	   };
	   var background1=function() {
	   if("input:checked")
	   {
		$(this).parent().parent().toggleClass("selected");
	   }
	   else
	   {
		$(this).parent().parent().removeClass("selected");
	   }
	   };
	   
	   var value1=function()
	   {
	   var indi= $(this).siblings(".a1").html();
	   var indi1= $(this).siblings(".a2").html();
	   $( "#col1" ).html(indi);
	   $( "#col2" ).html(indi1);  
	   };
	   
	   var clear=function(){ 
       var n = $( "input:checked" ).length;
       if (n>=1)
       {
		  $("input[type=checkbox]").prop('checked',false);
		  $("input[type=checkbox]").parent().parent().removeClass("selected");
       }
      else
	  {
      alert("There are no checkboxes to clear");
      } 
 }
 
	   
		$( "input[type=checkbox]" ).on( "click", countChecked ); 
		$("input[type=checkbox]").on("click",background1);
		$( ".buybtn" ).on("click",value1);	
	    $(".clear").on("click",clear);
		


function submit()
{
alert("Your Order has been placed. Please wait till it reaches your doorstep.");
}

