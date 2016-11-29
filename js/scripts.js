//plik js
/*
var width=1;

	for (i=0; i<=4; i++)
	{
		for (j=1; j<=width; j++)
			{
				document.write(" X");
			}
	document.write("<BR>");
	width=width+1;
	}
	
var width=1;

	for (i=0; i<=4; i++)
	{
		for (j=1; j<=width; j++)
			{
				document.write(" X");
			}
	document.write("<BR>");
	width=width+1;
	}

*/
		
function rysujChoinke(n) {
var star=''
	
	for (i=1 ; i <=n  ; i++)
	{	
		star='';
		for (j=1 ; j<=i*2-1  ; j++)
		{
			star +='*';
		}
		console.log(star);
		
	}
		
}


rysujChoinke(5);



