// register.js

function registerUser() {
    // Obtener los valores de los campos de entrada
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    // Cargar el archivo JSON
    fetch('userData.json')
        .then(response => response.json())
        .then(users => {
            // Verificar si el nombre de usuario ya existe
            var existingUser = users.find(function(user) {
                return user.name === userName;
            });

            // Si el nombre de usuario ya existe, mostrar un mensaje de error y salir
            if (existingUser) {
                alert("El nombre de usuario ya existe. Por favor, elija otro.");
                return;
            }

            // Si no existe, proceder con el registro
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

            // Guardar el JSON actualizado en el archivo
            saveUserData(userJSON);

            // Redirigir a una página de confirmación o a otra página según sea necesario
            alert("Usuario registrado con exito");
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

// Función para guardar el JSON actualizado en el archivo
function saveUserData(data) {
    // Aquí puedes escribir la lógica para guardar el JSON actualizado en el archivo
}
