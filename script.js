window.onload = function()
{
	inicio();
}
function inicio()
{

	var descifra = false;
	function codifica(descifrar)
	{
		var NumeroText  = nom_div("caja_2").value;
		var clave = Number(NumeroText);
		var texto = nom_div("caja_1").value;

		if(descifrar==true)
		{
				var alfabeto=["Á","É","Í","Ó","Ú","á","é","í","ó","ú",
					  "A","B","C","D","E","F","G","H","I","J",
					  "K","L","M","N","Ñ","O","P","Q","R","S",
					  "T","U","V","W","X","Y","Z","0","1","2",
					  "3","4","5","6","7","8","9"," ",".",",",
					  ";","-","+","*","|","/","a","b","c","d",
					  "e","f","g","h","i","j","k","l","m","n",
					  "ñ","o","p","q","r","s","t","u","v","w",
					  "x","y","z","@",'"',"'"];
					  
		var c=0;
		var n=86;
		var text_cifrado="";
		var ban=0;
		for (var i = 0; i < texto.length; i++) 
		{
			for(var j = 0; j < alfabeto.length; j++){
				
			if(texto.charAt(i)==alfabeto[j]){
				c=(j-clave)%n;
				if(c<0){
					c=c*-1;
				}
				text_cifrado += alfabeto[c];
				ban=1;
				}
			}
				if(ban==0){
					text_cifrado += texto.charAt(i);
				}
				ban=0;
		}
		nom_div("tabla").innerHTML = text_cifrado;
		}
		else{
		
		nom_div("tabla").innerHTML = realizaCesar(texto, clave);
		}
	}
	
	function realizaCesar(texto, clave)
	{
		 
	var alfabeto=["Á","É","Í","Ó","Ú","á","é","í","ó","ú",
					  "A","B","C","D","E","F","G","H","I","J",
					  "K","L","M","N","Ñ","O","P","Q","R","S",
					  "T","U","V","W","X","Y","Z","0","1","2",
					  "3","4","5","6","7","8","9"," ",".",",",
					  ";","-","+","*","|","/","a","b","c","d",
					  "e","f","g","h","i","j","k","l","m","n",
					  "ñ","o","p","q","r","s","t","u","v","w",
					  "x","y","z","@",'"',"'"];
					  
		var c=0;
		var n=86;
		var text_cifrado="";
		var ban=0;
		for (var i = 0; i < texto.length; i++) 
		{
			for(var j = 0; j < alfabeto.length; j++){
				
			if(texto.charAt(i)==alfabeto[j]){
				c=(j+clave)%n;
				text_cifrado += alfabeto[c];
				ban=1;
				}
			}
				if(ban==0){
					text_cifrado += texto.charAt(i);
				}
				ban=0;
		}
		return text_cifrado;
		
	}

	nom_div("caja_1").addEventListener('keyup', function(event)
	{
		codifica(descifra);
	});

	nom_div("accion").addEventListener('change', function(event)
	{
		if(this.value == 1)
		{
			descifra = false;
		}
		else
		{
			descifra = true;
		}
		nom_div("caja_1").value = "";
		nom_div("tabla").innerHTML = "";
	});
	
	function nom_div(id)
	{
		return document.getElementById(id);
	}

}
 
