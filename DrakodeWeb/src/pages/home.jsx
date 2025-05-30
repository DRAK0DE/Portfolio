import '../styles/Home/home.css'


export default function Home() {
    return (
        <div id="home">

            <section class="section-1">
                <div class="section-1__title title">
                    <h1 class="title__detail">Desarrollador Web</h1>
                    <h1 class="title__title">Daniel Pedroza</h1>
                </div>

                <div class="section-1__text text">
                    <p class="text__text">
                        Soy un entusiasta que transforma ideas en experiencias digitales vibrantes. Me apasiona crear sitios que no solo se ven increíbles, sino que también ofrecen una interacción fluida y atractiva. Con un dominio de HTML, CSS, JavaScript y los frameworks más modernos, cada proyecto que toco cobra vida de forma dinámica y única.
                    </p>
                </div>

            </section>

            <section class="section-2">
                <img src="../../public/icons/Logo_v2.svg" alt="Daniel'sPhoto" class="section-2__photo" />
            </section>
        </div>
    )
}