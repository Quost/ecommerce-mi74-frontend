import Header from "../components/Header";
import imag from '../assets/Leonardo_Phoenix_Create_a_visually_striking_image_for_an_ecomm_2.jpg';
import CategoryButton from '../components/CategoryButton'

export default function HomePage() {
    return (
        <>
            <Header/>

            <main className="flex flex-col items-center">
                <img src={imag} alt="" className="h-[480px] w-full object-cover" />

                <section className="flex flex-row md:gap-8 gap-2 mt-8 w-3/5">
                    <CategoryButton link={"#"} text={ "Bicicletas" } />
                    <CategoryButton link={"#"} text={ "Camisetas" } />
                    <CategoryButton link={"#"} text={ "Futebol" } />
                    <CategoryButton link={"#"} text={ "Eletrônicos" } />
                    <CategoryButton link={"#"} text={ "Comida" } />
                </section>
            </main>

            <footer>

            </footer>

        </>
    );
}