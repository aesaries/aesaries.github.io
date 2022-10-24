const botonBorrar = document.getElementById('btnBorrar');
const botonCalcular = document.getElementById('btnCalcular');

botonBorrar.addEventListener("click", fborrar);
botonCalcular.addEventListener("click", fCalcular);


function fborrar() {
    document.getElementById("input-nombre").value = "";
    document.getElementById("input-apellido").value = "";
    document.getElementById("input-correo").value = "";
    document.getElementById("input-cantidad").value = 1;
    document.getElementById("input-categoria").value = "Estudiante";
    document.getElementById("total-pagar").value = "";
}

function fCalcular() {
    const categoria = document.getElementById("input-categoria").value;
    const cantidad = document.getElementById("input-cantidad").value;
    const valorTicket = 200;
    let descuento = 0.8;
    let totalParcial = 0;
    let totalPagar = 0;

    if (categoria === "Trainee") { descuento = 0.5 }
    if(categoria==="Junior"){descuento = 0.15}


    totalParcial = (valorTicket * cantidad);
    totalPagar = totalParcial - totalParcial * descuento;
    document.getElementById("total-pagar").value = "$ "+  totalPagar;
    


}
