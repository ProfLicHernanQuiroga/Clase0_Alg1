document.getElementById('numeroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    
    // Obtiene el número ingresado por el usuario
    var numero = parseInt(document.getElementById('numero').value);
    
    // Calcula el resto de la división por 12
    var resto = numero % 12;
    
    // Redirecciona a la imagen correspondiente según el resultado del cálculo
    var imagenContainer = document.getElementById('imagenContainer');
    switch(resto) {
        case 0:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 0</a>';
            break;
        case 1:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TG5vU3veAavz9_3z0niHH5ekTwiJ0uNG&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 2:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 3:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 4:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 5:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 6:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 7:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 8:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 9:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 10:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        case 11:
            imagenContainer.innerHTML = '<a href="https://drive.google.com/open?id=1TUWxVozYzV5G73EIj52_HAVZ2DNttNkj&usp=drive_fs" target="_blank">Ver imagen 1</a>';
            break;
        // Agrega más casos según sea necesario
        default:
            imagenContainer.innerHTML = '<p>No hay imagen disponible para este resultado.</p>';
    }
});