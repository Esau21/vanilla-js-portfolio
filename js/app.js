/* Cargamos nuestro DomContentLoaded */
document.addEventListener("DOMContentLoaded", function () {
    /* inicializamos emailJs */
    emailjs.init("2qyjtTBfrVfRo8tpr");
    /* imagen del avatar */
    const avatar = multiavatar("83d642da2d88bfda60");
    /* mi nombre */
    const username = "Edgar";
    /* mi apellido */
    const lastName = "ZM.";
    /* codificamos la imagen de manera segura para pasarla en la url */
    const svg = encodeURIComponent(avatar);
    /* nos sirve para crear la url que contiene nuestra imagen en formato svg */
    const data = `data:image/svg+xml,${svg}`;

    /* nos aseguramos que nuestros elementos existan antes de modificar sus propiedades*/
    const avatarElemnt = document.getElementById("avatar-container");
    const usernameElemnet = document.getElementById("username");
    const lastnameElement = document.getElementById("lastname");

    /* media ves los elementos existan mostramos los datos de ellos en nuestro DOM */
    if (avatarElemnt) avatarElemnt.src = data;
    if (usernameElemnet) usernameElemnet.textContent = username;
    if (lastnameElement) lastnameElement.textContent = lastName;

    /* definimos las constantes para nuestro menu de la hamburguesa */
    const hamburguesa = document.getElementById("hamburguesa");
    const navbar = document.getElementById("navbarNav");

    hamburguesa.addEventListener("click", mostrarMenuHmburguesa);
    /* mostramos hacia abajo los elementos de nuestro navbar */
    function mostrarMenuHmburguesa() {
        navbar.classList.toggle("show");
        hamburguesa.classList.toggle("active");
    }

    /* definimos la constante de que muestra nuestros enlaces del navbar */
    const navbarlink = document.querySelectorAll(".nav-link");

    /* hacemos el recorrido de nuestros elementos a con su clase nav-link paera poder cerrar nuestro navbar */
    navbarlink.forEach((n) => n.addEventListener("click", cerraMenuHamburguesa));

    /* funcion para cerra el navbar al dar click */
    function cerraMenuHamburguesa() {
        hamburguesa.classList.remove("active");
        navbar.classList.remove("show");
    }

    /* efecto para las particulas en nuestro portfolio */
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#000000",
            },
            shape: {
                type: "polygon",
                polygon: {
                    nb_sides: 5,
                },
            },
            opacity: {
                value: 0.5,
            },
            size: {
                value: 5,
                random: true,
            },
            line_linked: {
                enable: true,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
            },
        },
        retina_detect: true,
    });

    /* funcion para desplegar la informacion academica */
    function mostrarInformacionAcademica() {
        const abrirInformacion = document.querySelectorAll(".info");
        const mostrarInfo = document.querySelectorAll(".mostrar");

        abrirInformacion.forEach((elemento, index) => {
            elemento.addEventListener("click", function () {
                if (mostrarInfo[index].style.display === "none") {
                    mostrarInfo[index].style.display = "block";
                } else {
                    mostrarInfo[index].style.display = "none";
                }
            });
        });

        document.querySelectorAll(".info").forEach((icono, index) => {
            document.querySelectorAll(".mostrar")[index];
            icono.addEventListener("click", function () {
                icono.classList.toggle("rotate");
                const item = icono.closest(".timeline__item");
                item.classList.toggle("active");
            });
        });
    }
    mostrarInformacionAcademica();

    /* enviar correo mediante mail js */
    function sendMail() {
        document
            .getElementById("contactForm")
            .addEventListener("submit", function (event) {
                event.preventDefault();
                emailjs
                    .send("service_p1b7t6b", "template_5hspg3f", {
                        from_name: document.getElementById("name").value,
                        from_email: document.getElementById("email").value,
                        message: document.getElementById("message").value,
                    })
                    .then(
                        function (response) {
                            Swal.fire("Correo enviado");
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        },
                        function (error) {
                            Swal.fire("Erro al enviar correo");
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        }
                    );
            });
    }
    sendMail();
});
