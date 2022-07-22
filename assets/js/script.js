// Acción con Formulario contacto (Javascript)

document.getElementById('enviarNewsletter').addEventListener ('click', function() {
        alert("¡Correo enviado!");
});

// Toggle en cards (jquery)

$('.tituloCard1').on('click', function() {
$('.textoCard1').toggle('fast',function() {
    });        
});

$('.tituloCard2').on('click', function() {
    $('.textoCard2').toggle('fast',function() {
        });        
    });

$('.tituloCard3').on('click', function() {
    $('.textoCard3').toggle('fast',function() {
        });        
    });

$('.tituloCard4').on('click', function() {
    $('.textoCard4').toggle('fast',function() {
         });        
    });

    // Popover (jquery)

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl)
    
    { return new bootstrap.Popover(popoverTriggerEl)

    })