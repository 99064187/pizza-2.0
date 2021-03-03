//de prijzen van de pizza 
const kleinepizza= 6;
const mediumpizza= 8;
const grootpizza= 10; 
var aantalLarge;
var aantalMedium;
var aantalSmall;
var totaalprijs;

bestel.onclick=bestelen

function bestelen(){
	aantalSmall = document.getElementById("small").value;
	aantalMedium = document.getElementById("midium").value;
	aantalLarge = document.getElementById("large").value;

	totaalprijs = aantalSmall*kleinepizza + aantalMedium*mediumpizza + aantalLarge*grootpizza;

	if (aantalSmall >= 1){
		document.getElementById("aantalS").innerHTML = "aantal "+aantalSmall;
	}
	if (aantalMedium >= 1){
		document.getElementById("aantalM").innerHTML = "aantal "+aantalMedium;
	}
	if (aantalLarge >= 1){
		document.getElementById("aantalL").innerHTML = "aantal "+aantalLarge;
	}

	document.getElementById("totaal").innerHTML = "totaal prijs &#8364; "+totaalprijs;
	console.log(aantalSmall);
	console.log(aantalLarge);
	console.log(aantalMedium);
	console.log(totaalprijs);
}
