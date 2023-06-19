let funcionPredeterminada = () =>{

    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit',(evento)=>{

        evento.preventDefault();

        let valorPorHora = document.getElementById('valorPorHora').value

        let interfazHoras= document.getElementById('interfazHoras').value

        let estilizacionHoras= document.getElementById('estilizacionHoras').value

        let desarrolloHoras= document.getElementById('desarrolloHoras').value


        let resultado = (valorPorHora * interfazHoras) + (valorPorHora * testingHoras) + (valorPorHora * estilizacionHoras) + (valorPorHora * desarrolloHoras)
    })
}

funcionPredeterminada();
