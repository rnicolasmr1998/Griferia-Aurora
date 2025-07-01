document
  .getElementById("mayoristaForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Validación básica
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre && email) {
      // Aquí iría la lógica para enviar el formulario
      alert(
        "Gracias por su solicitud. Nuestro equipo comercial se pondrá en contacto con usted pronto."
      );
      this.reset();
    } else {
      alert("Por favor complete todos los campos requeridos.");
    }
  });
