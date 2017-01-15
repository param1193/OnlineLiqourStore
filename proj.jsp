<%@page import="java.util.ArrayList" %>
<%



class  liquor{String name,price;}
ArrayList<liquor> a = new ArrayList<liquor>();

liquor l1 =new liquor();
l1.name = "Budlight Beer";
l1.price = "$7";
a.add(l1);

liquor l2 =new liquor();
l2.name = "Brooklyn Lager";
l2.price = "$10";
a.add(l2);

liquor l3 =new liquor();
l3.name = "Corona Extra";
l3.price = "$12";
a.add(l3);

liquor l4 =new liquor();
l4.name = "Miller ";
l4.price = "$10";
a.add(l4);

liquor l5 =new liquor();
l5.name = "Samuel Adams";
l5.price = "$18";
a.add(l5);

liquor l6 =new liquor();
l6.name = "Stella ";
l6.price = "$12";
a.add(l6);


liquor l7 =new liquor();

l7.name = "Coors Light";
l7.price = "$9";
a.add(l7);


liquor l8 =new liquor();
l8.name = "Heinekein";
l8.price = "$12";
a.add(l8);

liquor l9 =new liquor();

l9.name = "Bacardi";
l9.price = "$25";
a.add(l9);



liquor l10 =new liquor();

l10.name = "Black Label";
l10.price = "$30";
a.add(l10);


liquor l11 =new liquor();

l11.name = "Captain Morgan";
l11.price = "$32";
a.add(l11);


liquor l12 =new liquor();

l12.name = "JAck Daniels";
l12.price = "$28";
a.add(l12);

liquor l13 =new liquor();

l13.name = "Grey Goose";
l13.price = "$25";

a.add(l13);


liquor l14 =new liquor();

l14.name = "Red Label";
l14.price = "$38";

a.add(l14);



liquor l15 =new liquor();

l15.name = "Smirnoff";
l15.price = "$18";
a.add(l15);


liquor l16 =new liquor();

l16.name = "Leblon Cachaca";
l16.price = "$28";
a.add(l16);

liquor l17 =new liquor();

l17.name = "Yellow Tail Sauvignon";
l17.price = "$13";
a.add(l17);

liquor l18 =new liquor();
l18.name = "Casillero Cabernet Sauvignon";
l18.price = "$10";
a.add(l18);

liquor l19 =new liquor();
l19.name = "Carnivor Sauvignon";
l19.price = "$12";
a.add(l19);

liquor l20 =new liquor();
l20.name = "Apothic Blend";
l20.price = "$11";
a.add(l20);

liquor l21 =new liquor();
l21.name = "Jaggermeister";
l21.price = "$25";
a.add(l21);

liquor l22 =new liquor();
l22.name = "The Prisoner Red";
l22.price = "$95";
a.add(l22);

liquor l23 =new liquor();
l23.name = "Trapiche Malbec";
l23.price = "$18";
a.add(l23);

liquor l24 =new liquor();
l24.name = "Miraval Rose";
l24.price = "$28";
a.add(l24);

String city = request.getParameter("q");
String result= " " ;
String city1;

if (!(city.contains("param")))
{
	result = "<table class='table table-striped' id='tab1'><tr><th>Name</th><th>Price</th></tr>";
for(liquor book : a)
			    {
				String l = (book.name).toLowerCase();
				String b=city.toLowerCase();
			     if (l.contains(b))
				 {
			      result += "<tr><td class='hover1' onclick='replaceVal(this)'>"+book.name+"</td>"+ "<td>"+book.price+"</td>"+"</tr>";
				 }
				 if (b=="")
				 {
					 result="";
					 
				 }
			    }
				 result += "</table>";
}

if(city.contains("param"))
{
for(liquor book : a)
			    {
				city1 = city.substring(5, (city.length()));
				String g21 = (book.name).toLowerCase();
				String b1=city1.toLowerCase();
			     if (g21.contains(b1))
				 {
					result +=  book.price ;
				 }	
                }		
}				

	             out.println(result);   //send this to xmlHttp object
				

%>