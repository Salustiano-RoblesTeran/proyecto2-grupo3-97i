function Footer() {
    const footer = document.getElementsByTagName("footer");
    const section = document.createElement("section");
    section.classList.add("container-fluid");
    section.innerHTML = `
        <article class="row" id="cuerpoFooter">
            <aside class="col-xl-3 col-sm-3 col-md-3">
              <p class="h5 text-light m-2">Nuestra Parte</p>
              <ul class="text-light m-2">
                <li>Direccion: Av. General Paz 576,
                Piso 9, oficina 2
                San Miguel de Tucumán, Argentina</li>
                <li>telefono: +54 381 578-3030</li>
                <li>Email: contacto@saludturnos.com</li>
              </ul>
            </aside>
            <aside class="col-xl-3 col-sm-3 col-md-3">
              <p class="h5 text-light m-2">Navegacion</p>
              <ul>
                <li><a class=" text-light m-2" href="../pages/quienesSomos.html">Quienes Somos</a></li>
                <li><a class=" text-light m-2" href="">Inicio</a></li>
                <li><a class=" text-light m-2" href="">Contactanos</a></li>
              </ul>
            </aside>
            <aside class="col-xl-3 col-sm-3 col-md-3">
              <p class="h5 text-light m-2">Legal</p>
              <ul>
                <li><a class="text-light m-2" href="../pages/error404.html">Terminos y condiciones</a></li>
                <li><a class="text-light m-2" href="../pages/error404.html">Politica de privacidad</a></li>
                <li>
                  <a class="text-light m-2" href="../pages/error404.html">Politica de derecho de autor</a>
                </li>
                <li><a class="text-light m-2" href="../pages/error404.html">Descargar App Movil</a></li>
              </ul>
            </aside>
            <aside class="col-xl-3 col-sm-3 col-md-3">
              <p class="h5 text-light m-2">Redes Sociales</p>
              <ul>
                <li>
                  <a  class="text-light m-2"href="../pages/error404.html"><i class="bi bi-facebook"></i> Facebook</a>
                </li>
                <li>
                  <a class="text-light m-2" href="../pages/error404.html"><i class="bi bi-twitter"></i> Twitter</a>
                </li>
                <li>
                  <a class="text-light m-2" href="../pages/error404.html"><i class="bi bi-instagram"></i> Instagram</a>
                </li>
                <li>
                  <a class="text-light m-2" href="../pages/error404.html"><i class="bi bi-linkedin"></i> LinkedIn</a>
                </li>
              </ul>
            </aside>
          </article>
          <article class="row" id="copyrightFooter">
            <p class="h6 text-center text-light m-2">&copy; 2023. Todos los derechos reservados.</p>
          </article>
        `;
    footer[0].appendChild(section);
  }
  export { Footer };