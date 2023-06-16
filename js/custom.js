$(document).on('click', enviaDatosimg);
function enviaDatosimg()
{
    var extraer, capturar, capturar_src, cambio_de_src_modal;
    extraer = $("#img_modal");
    capturar = $(this);
    capturar_src = capturar.attr('src');
    cambio_de_src_modal = extraer.attr('src', capturar_src);//cambiar valor de atributo
    if (capturar_src == "../imagenes/img1.jpg"){
        $(".title_modal").text('Cyber Security');
        $("#body_text").text('Cyber Security');
    }
    if (capturar_src == "../imagenes/img2.jpg"){
        $(".title_modal").text('Comunicaciones');
        $("#body_text").text('Comunicaciones');
    }
    if (capturar_src == "../imagenes/img3.jpg"){
        $(".title_modal").text('Inteligencia Artificial');
        $("#body_text").text('Inteligencia Artificial');
    }
    if (capturar_src == "../imagenes/img4.jpg"){
        $(".title_modal").text('Electrónica');
        $("#body_text").text('Electrónica');    
    }
    if (capturar_src == "../imagenes/img5.jpg"){
        $(".title_modal").text('Mecatrónica');
        $("#body_text").text('Mecatrónica');  
    }
    if (capturar_src == "../imagenes/img6.jpg"){
        $(".title_modal").text('Capacítate');
        $("#body_text").text('Capacítate');  
    }
}

//comienzo de mi js salinas
$(document).ready(function() {
    // Capturar el evento de envío del formulario
    $("#contactForm").submit(function(e) {
      e.preventDefault(); // Evitar el envío del formulario por defecto
  
      // Obtener los valores del formulario
      var fullName = $("#fullName").val();
      var email = $("#email").val();
      var phone = $("#phone").val();
      var message = $("#message").val();
  
      // Realizar alguna acción con los datos (por ejemplo, enviarlos a un servidor mediante AJAX)
  
      // Mostrar la ventana emergente de agradecimiento
      $("#thankYouModal").modal("show");
  
      // Reiniciar el formulario
      $(this)[0].reset();
    });
  });
  //fin de mi java salinas