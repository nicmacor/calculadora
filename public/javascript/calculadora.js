let funcionPredeterminada = () =>{

    const formulario = document.getElementById('formulario')

    formulario.addEventListener('submit',(evento)=>{

        evento.preventDefault();

        let valorPorHora = document.getElementById('valorPorHora').value;

        let interfazHoras= document.getElementById('interfazHoras').value;

        let testingHoras= document.getElementById('testingHoras').value;

        let estilizacionHoras= document.getElementById('estilizacionHoras').value;

        let desarrolloHoras= document.getElementById('desarrolloHoras').value;


        let resultado = parseFloat(valorPorHora)* (parseFloat(interfazHoras) + parseFloat(testingHoras) + parseFloat(estilizacionHoras) + parseInt(desarrolloHoras));
        resultado = resultado +"$";
        document.getElementById("valorTotal").value = resultado;

    })
}

funcionPredeterminada();
