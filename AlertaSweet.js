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
        argentina: 'Argentina',
        mexico: 'Mexico',
        colombia: 'Colombia',
        brasil: 'Brasil',
        uruguay: 'Uruguay',
        chile: 'Chile',
        Bolivia: 'Bolivia',
        ecuador: 'Ecuador',
        paraguay: 'Paraguay',
        argentina: 'Argentina',
        
    }
	
	
    });


    if (pais){
        swal.fire({
            title: `seleccionaste ${pais}`
        })
    }
    
})()
