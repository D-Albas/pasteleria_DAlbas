$(function () {
    // se utiliza para las peticiones ajax con jquery
    $.ajaxSetup({
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
        }
    });

    $("#btnRegistrarCategoria").click(function () {
        registrarCategoria();
    });
    
    $("#btnRegistrarTematica").click(function () {
        registrarTematica();
    });
});

/**
 * Obtiene el valor de una cookie específica en el navegador web.
 * Las cookies son fragmentos de información almacenados en el navegador del usuario.
 * @param {string} name - El nombre de la cookie que se desea obtener.
 * @returns {string|null} - El valor de la cookie si se encuentra, o null si la cookie no existe.
 */
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function registrarCategoria() {
    var nueva_categoria = $("#txtCategoria").val();

    if(!nueva_categoria){
        Swal.fire("Registro de categoría", "Por favor, complete todos los campos obligatorios.", "info");
        return;
    }

    if (nueva_categoria.length < 3 || nueva_categoria.length > 50) {
        Swal.fire("Registro de categoría", "La categoría debe tener entre 3 y 50 caracteres.", "info");
        return;
    }

    var datos = {
        "nueva_categoria": nueva_categoria,
    };

    $.ajax({
        url: "/registrar_categoria/",
        data: datos,
        type: 'post',
        dataType: 'json',
        cache: false,
        success: function (response) {
            if (response.success) {
                Swal.fire("Registro de categoría", response.message, "success");
                // Recargar la página
                location.reload();
            } else {
                Swal.fire("Registro de categoría", "Error: " + response.error, "error");
            }
        },
        error: function (xhr, errmsg, err) {
            Swal.fire("Registro de categoría", "Error: " + xhr.status + " - " + errmsg, "error");
        }
    });
}

function registrarTematica() {
    var nueva_tematica = $("#txtTematica").val();

    if (!nueva_tematica) {
        Swal.fire("Registro de temática", "Por favor, complete todos los campos obligatorios.", "info");
        return;
    }

    if (nueva_tematica.length < 3 || nueva_tematica.length > 50) {
        Swal.fire("Registro de temática", "La categoría debe tener entre 3 y 50 caracteres.", "info");
        return;
    }

    var datos = {
        "nueva_tematica": nueva_tematica,
    };

    $.ajax({
        url: "/registrar_tematica/",
        data: datos,
        type: 'post',
        dataType: 'json',
        cache: false,
        success: function (response) {
            if (response.success) {
                Swal.fire("Registro de temática", response.message, "success");
                // Recargar la página
                location.reload();
            } else {
                Swal.fire("Registro de temática", "Error: " + response.error, "error");
            }
        },
        error: function (xhr, errmsg, err) {
            Swal.fire("Registro de temática", "Error: " + xhr.status + " - " + errmsg, "error");
        }
    });
}