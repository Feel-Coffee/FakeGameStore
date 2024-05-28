//Esta funcion lo que hace es chequear que el formulario este completo y sumar un adicional de 2000 pesos en caso de que el pais no sea argentina. Y tambien
//redirecciona de vuelta a la web principal
function confirmPurchase() {
    var form = document.querySelector('form');
    var country = document.querySelector('#country').value;

    if (!form.checkValidity()) {
        alert('Por favor, completa todos los espacios requeridos!');
    } else {
        if (country !== 'Argentina') {
            alert('Se le cobrara un adicional de $2000 al ser de pais extranjero!.');
        }
        alert('Gracias por comprar con nosotros!');
        document.getElementById('printPdf').style.display = 'block';
        document.getElementById('backHome').style.display = 'block';
        document.querySelector('button[onclick="confirmPurchase()"]').style.display = 'none';
        document.querySelector('button[onclick="window.location.href=\'/index.html\'"]').style.display = 'none';
    }
}

function printPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const direction = document.getElementById('direction').value;
    const zip = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;
    const ccNumber = document.getElementById('cc-number').value;
    const ccName = document.getElementById('cc-name').value;

    const content = `
        Nombre: ${name}
        Apellido: ${surname}
        Pais: ${country}
        Ciudad: ${city}
        Direccion: ${direction}
        Codigo Postal: ${zip}
        Numero de telefono: ${phone}
        Numero de tarjeta de credito: ${ccNumber}
        Nombre de responsable de la tarjeta: ${ccName}
    `;

    doc.text(content, 10, 10);
    doc.save('purchase-details.pdf');
}
