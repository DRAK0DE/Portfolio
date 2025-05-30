import '../styles/components/navbar.css'
export default function Navbar() {
    return (
        <header id="header">

            <div class="header__element home">
                <a href="index.html" class="home__link">INICIO</a>
            </div>

            <nav class="nav">
                <a href="habilidades.html" class="nav__element" >HABILIDADES</a>
                <a href="proyectos.html" class="nav__element" >PROYECTOS</a>
                <a href="carrera.html" class="nav__element" >CARRERA</a>
                <a href="contacto.html" class="nav__element" >CONTACTO</a>
            </nav>

        </header>
    )
}

