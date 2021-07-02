// document.getElementsByTagName('button'); === $('button');

// button.addEventListener('click', () => {}); === .click(()=> {});

$('button').click(() => {
  // Obtengo valores desde los input (type: text y type password)
  const usuario = $(':text')[0].value;
  const contraseña = $(':password')[0].value;
  
  console.log('usuario: ', usuario);
  console.log('contraseña: ', contraseña);

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      usuario: usuario,
      contraseña: contraseña
    })
  })
    .then((respuesta) => respuesta.json())
    .then((datosDeLaRespuesta) => {

      if (datosDeLaRespuesta.error) {
        alert(datosDeLaRespuesta.mensaje);
        console.error(datosDeLaRespuesta.mensaje);

      } else {
        alert('Seccion iniciada');
        console.log('Esto me devolvio el endpoint /login', datosDeLaRespuesta);
        
      }
    });
});