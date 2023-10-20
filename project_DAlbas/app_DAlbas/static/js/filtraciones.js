$(document).ready(function () {

  // Función para filtrar productos
  function filtrarProductos() {
    var searchTerm = $('#searchInput').val().toLowerCase();
    var productosEncontrados = 0; // Contador de productos encontrados

    $('.box').each(function () {
      var productName = $(this).find('.card-title').text().toLowerCase();
      if (productName.includes(searchTerm)) {
        $(this).show();
        productosEncontrados++;
      } else {
        $(this).hide();
      }
    });

    // Muestra el mensaje de "Producto no encontrado" si no se encontraron productos
    if (productosEncontrados === 0) {
      $('#noResultsMessage').show();
    } else {
      $('#noResultsMessage').hide();
    }
  }

  // Maneja el evento de entrada en la barra de búsqueda
  $('#searchInput').on('input', filtrarProductos);

  // Mostrar todos los elementos con la clase "box" cuando se hace clic en "#todos"
  $("#todos").click(function () {
    $(".box").show();
  });

  // Mostrar elementos con la categoría "Tortas en crema" cuando se hace clic en "#tortasCrema"
  $("#tortasCrema").click(function () {
    $(".box").hide();
    $(".box[data-categoria='Tortas en crema']").show();
  });

  // Mostrar elementos con la categoría "Tortas en pastillaje" cuando se hace clic en "#tortasPastillaje"
  $("#tortasPastillaje").click(function () {
    $(".box").hide();
    $(".box[data-categoria='Tortas en pastillaje']").show();
  });

  // Mostrar elementos con la categoría "Cupcakes" cuando se hace clic en "#cupcakes"
  $("#cupcakes").click(function () {
    $(".box").hide();
    $(".box[data-categoria='Cupcakes']").show();
  });

  // Mostrar elementos con la categoría "Galletas" cuando se hace clic en "#galletas"
  $("#galletas").click(function () {
    $(".box").hide();
    $(".box[data-categoria='Galletas']").show();
  });

  // Mostrar todos los elementos con la clase "box" cuando se hace clic en "#todosTemas"
  $("#todosTemas").click(function () {
    $(".box").show();
  });

  // Mostrar elementos con la temática "Cumpleaños" cuando se hace clic en "#cumpleaños"
  $("#cumpleaños").click(function () {
    $(".box").hide();
    $(".box[data-tematica='Cumpleaños']").show();
  });

  // Mostrar elementos con la temática "Bautizos" cuando se hace clic en "#bautizos"
  $("#bautizos").click(function () {
    $(".box").hide();
    $(".box[data-tematica='Bautizos']").show();
  });

  // Mostrar elementos con la temática "Primera Comunión" cuando se hace clic en "#primeraComunion"
  $("#primeraComunion").click(function () {
    $(".box").hide();
    $(".box[data-tematica='Primera comunión']").show();
  });

  // Mostrar elementos con la temática "Grados" cuando se hace clic en "#grados"
  $("#grados").click(function () {
    $(".box").hide();
    $(".box[data-tematica='Grados']").show();
  });

  // Mostrar elementos con la temática "Matrimonios" cuando se hace clic en "#matrimonios"
  $("#matrimonios").click(function () {
    $(".box").hide();
    $(".box[data-tematica='Matrimonios']").show();
  });

  // Mostrar elementos con la temática "Aniversarios" cuando se hace clic en "#aniversarios"
  $("#aniversarios").click(function () {
    $(".box").hide();
    $(".box[data-tematica='Aniversarios']").show();
  });

  // Mostrar elementos con la temática "Quinces" cuando se hace clic en "#quinces"
  $("#quinces").click(function () {
    $(".box").hide();
    $(".box[data-tematica='Quinces']").show();
  });
});