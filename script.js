let cont = 0;
let tiempo;
let timer;
let indiceSeleccionado;
let cpps;
function verificar()
{
    document.getElementById("btn_iniciar").style.display = 'none';
    document.getElementById("btn_sumar").style.display = 'block';
    if (indiceSeleccionado === undefined || indiceSeleccionado === 0) 
    {
        alert("Elija Un tiempo");
        document.getElementById("btn_iniciar").style.display = 'block';
        document.getElementById("btn_sumar").style.display = 'none';
        return;  // Sale de la función si no se ha seleccionado nada
    }
    switch (indiceSeleccionado) {
        case 1:
            tiempo = 4;
            break;
        case 2:
            tiempo = 9;
            break;
        case 3:
            tiempo = 14;
            break;
    }
    timer = setInterval(()=>
    {
        const hours = Math.floor(tiempo / 3600);
        const minutes = Math.floor((tiempo % 3600) / 60);
        const seconds = tiempo % 60;
        const tiempo_formato = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById("h1_tiempo").innerText = "Tiempo: " + tiempo_formato;
        tiempo--;
        if(tiempo==-1)
        {
            clearInterval(timer);
            document.getElementById("btn_iniciar").style.display = 'block';
            document.getElementById("btn_sumar").style.display = 'none';
            tiempo = 10;
            cont = 0;
            abrirmodal();
        }
    }, 1000)
}
function sumar()
{
    cont++;
    switch (indiceSeleccionado) {
        case 1:
            cpps = cont / 5; 
            break;
        case 2:
            cpps = cont / 10; 
            break;
        case 3:
            cpps = cont / 15; 
            break;
    }
    if (cpps==0)
    {
        abrirmodal();
        document.getElementById("h1_animal").innerText = "XD ni siquiera lo intentaste :c";
        document.getElementById("imagen").src="perezoso.png";
    }
    if (cpps<=1)
    {
        document.getElementById("h1_animal").innerText = "Tu velocidad se compara a la del: Perezoso";
        document.getElementById("imagen").src="perezoso.png";
    }
    if (cpps>=3)
    {
        document.getElementById("h1_animal").innerText = "Tu velocidad se compara a la del: tortuga";
        document.getElementById("imagen").src="tortuga.png";
    }
    if (cpps>=4)
    {
        document.getElementById("h1_animal").innerText = "Tu velocidad se compara a la de la: ernesto";
        document.getElementById("imagen").src="abeja.jpg";
    }
    if (cpps>=6)
    {
        document.getElementById("h1_animal").innerText = "Tu velocidad se compara a la del: Chungus";
        document.getElementById("imagen").src="liebre.jpg";
    }
    if (cpps>=7)
    {
        document.getElementById("h1_animal").innerText = "Tu velocidad se compara a la del: Leopardo";
        document.getElementById("imagen").src="leopardo.png";
    }
    document.getElementById("h1_puntaje").innerText = "Puntaje : " + cont; 
}
function cambiar()
{
    let combobox = document.getElementById("cmb_opciones");
    indiceSeleccionado = combobox.selectedIndex;
}
function abrirmodal()
{
    const modal = document.getElementById("modalxd");
    document.getElementById("h1_cpps").innerText = "Tus clicks por segundos son: " + cpps.toFixed(1);
    modal.showModal();
}
function cerrarmodal()
{
    const modal = document.getElementById("modalxd");
    modal.close();
}

