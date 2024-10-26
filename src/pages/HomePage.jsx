import Header from "../components/Header";
import imag from '../assets/Leonardo_Phoenix_Create_a_visually_striking_image_for_an_ecomm_2.jpg';

export default function HomePage() {
    return (
        <>
            <Header/>

            <main>
                <img src={imag} alt="" className="h-56 " />
            </main>

            <footer>

            </footer>

        </>
    );
}