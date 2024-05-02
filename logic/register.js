function registerUser() {
    // Obtener los valores de los campos de entrada
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    // Obtener los datos de usuarios del localStorage
    var storedData = localStorage.getItem('../persistence/userData.json');

    // Verificar si hay datos almacenados
    if (storedData) {
        // Convertir el JSON a un objeto JavaScript
        var users = JSON.parse(storedData);

        // Verificar si el nombre de usuario ya existe
        var existingUser = users.find(function(user) {
            return user.name === userName;
        });

        // Si el nombre de usuario ya existe, mostrar un mensaje de error y salir
        if (existingUser) {
            alert("El nombre de usuario ya existe. Por favor, elija otro.");
            return;
        }
    } else {
        // Si no hay datos almacenados, inicializar la lista de usuarios
        var users = [];
    }

    // Crear un nuevo usuario
    var newUser = {
        name: userName,
        email: userEmail,
        password: userPassword
    };

    // Agregar el nuevo usuario a la lista
    users.push(newUser);

    // Convertir la lista de usuarios a formato JSON
    var userJSON = JSON.stringify(users);

    // Guardar los datos actualizados en el localStorage
    localStorage.setItem('userData', userJSON);

    // Redirigir a una página de confirmación o a otra página según sea necesario
    alert("Usuario registrado con éxito");
}


function loginUser() {
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;


    if (userName === '' || userPassword === '') {
        alert('you must enter data in all fields')
    }
    else {
        var storedData = localStorage.getItem('userData');

        if (storedData) {
            
            var users = JSON.parse(storedData);

            var foundUser = users.find(function(user) {
                return user.name === userName && user.password === userPassword;
            });

            if (foundUser) {
                alert("Usuario autenticado, !Bienvenido, " + userName + "!");
            }
            else {
                alert("Nombre de usuario o contraseña incorrectos. Por favor, registrate o intentalo nuevamente")
            }
        }
    }
}