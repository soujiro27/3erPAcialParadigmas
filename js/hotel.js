var cuarto= new Array();
var contador=0;
/*------------variables globales---------*/

function habitacion(numero,entrada,salida,status)
{
	this.numero=numero;
	this.entrada=entrada;
	this.salida=salida;
	this.status=status;
}

/*----------creacion de objeto--------*/

$(document).on('ready',inicia);
function inicia()
{
	$("select.status").on('change',status);
	$("div.mostrar p").on('click',oculta);

}


function status()
{
	var entrada=$(this).parent().parent().children('div.fechas').children('input#entrada').val();
	var salida=$(this).parent().parent().children('div.fechas').children('input#salida').val();
	var numeroCuarto=$(this).parent().parent().children('div.fechas').children('p.numero').text();
	var estado=$(this).val();
	cuarto[contador]= new habitacion(numeroCuarto,entrada,salida,estado);
	contador++;
}



function oculta()
{
	var opcion=$(this).data('opcion');
	
	for(x in cuarto)
	{
		//console.log(cuarto[x]);
		if(cuarto[x].status==opcion)
		{
			
			var y=(cuarto[x].numero)-1;
			console.log($('section.habitaciones article')[y].style.display="none");
			//var room=$('section.habitaciones article')[y];
			//console.log(room);
		}
		//console.log($('section.habitaciones article'));
	}
}