(async () => {
    const {value: pais} = await Swal.fire({
    title: 'Bienvenido',
    text: 'selecciona tu pais',
    icon: 'succes',
    confirmbuttontext: 'Seleccionar',
    footer: '<span class="informacion">Esta infomacion es importante',
    backdrop: true,
    //toast: true,
    position: 'center',
    allowOutsideClick: false,
	allowEscapeKey: false,
    allowEnterKey: false,
	stopKeydownPropagation: true,

	input: 'select',
	inputPlaceholder: 'Pais',
	inputValue: '',
	inputOptions: {
        Argentina: 'Argentina',
        Mexico: 'Mexico',
        Colombia: 'Colombia',
        Brasil: 'Brasil',
        Uruguay: 'Uruguay',
        Chile: 'Chile',
        Bolivia: 'Bolivia',
        Ecuador: 'Ecuador',
        Paraguay: 'Paraguay',
        Argentina: 'Argentina',
        
    }
	
	
    });


    if (pais){
        swal.fire({
            title: `seleccionaste ${pais}`
        })
    }
    
})()
