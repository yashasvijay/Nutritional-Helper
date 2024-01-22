import BasicNavBar from "../components/NavBar";
import "./Allergens.css";
import Footer from '../components/Footer';

function Allergens() {
    return (
        <span class="allergens">
            <BasicNavBar />
            <div class="Allergens">
                <h1>Allergens</h1>
            </div>
            <Footer />
        </span>
    )
}

export default Allergens;