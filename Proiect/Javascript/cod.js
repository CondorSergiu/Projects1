var imaginea = document.getElementsByTagName('img');
var pozPoza = 0;
    function arata(index){
    	pozPoza =index;
    	for(i=0; i<3;i++){
		imaginea[i].style.display = "none";
				}
		imaginea[pozPoza].style.display="block";
		cerculet(pozPoza);

    }

	function schimbaPoza(directia) {
			if (directia == 'right'){
				pozPoza = pozPoza +1;
				if (pozPoza > 2){
					pozPoza=0;
				}
				for(i=0; i<3;i++){
						imaginea[i].style.display = "none";
				}
					imaginea[pozPoza].style.display="block";
					cerculet(pozPoza);
			}
			else{
				pozPoza= pozPoza -1;
				if (pozPoza < 0){
					pozPoza=2;
				}
				for(i=0; i<3;i++){
						imaginea[i].style.display = "none";
				}
					imaginea[pozPoza].style.display="block";
					cerculet(pozPoza);
	
			}
	
	}

function cerculet(pozitie){
	var continut = document.getElementById('mid');
	var cercPlin = "<i class='fa fa-circle' aria-hidden='true' ";		
	var cercGol = "<i class='fa fa-circle-o' aria-hidden='true'";
	var finalSintaxa= "></i>&nbsp" ;
	var apelareInceput= "onclick='arata(";  // onclick="arata(1);"
	var apelareFinal=");'";
	continut.innerHTML='';

	for(i=0;i<3;i++)
	{
		console.log(i);
		if (i== pozitie)
			{continut.innerHTML = continut.innerHTML+cercPlin+apelareInceput+i+apelareFinal+finalSintaxa;
		}
		else
			{continut.innerHTML = continut.innerHTML+cercGol+apelareInceput+i+apelareFinal+finalSintaxa;

	}
}

}

var poza = 1;
function slideIt(){

	document.images.slide.src = eval("imagine"+ poza +".src");
	cerculet(poza-1);
	if (poza<3) {
		poza= poza +1;
	}else {
		poza = 1;
	}
	setTimeout("slideIt()",1000);
}
    slideIt();