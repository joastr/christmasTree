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
	
	for (i=0 ; i <=n  ; i++)
	{	
		
		for (j=1 ; j<=i  ; j+=2)
		{
			star +='*';
		}
		console.log(star);
		
	}
		
}


rysujChoinke(5);


