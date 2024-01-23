import BasicNavBar from "../components/NavBar";
import "./Home.css";
import banner2 from '../images/banner2.png';
import Footer from '../components/Footer';
import nutritionicon from '../images/nutritionicon2.png';
import allergenicon from '../images/allergen-free (1).png';
import planningicon from '../images/planning.png';

function Home() {
    return (
        <div className="all">
            <BasicNavBar />
            <div class="center-container">
            <img src={banner2} alt="Description" />
            </div>
            <div className="container">
                <h1 className="big-question">Our Solutions </h1>
                <div className="nutritionicon2">
                <h4 className="bq1">Nutritional<br></br>Information Tracking</h4>
                <img className="nutritionicon" src={nutritionicon} alt="Description" />
                </div>
                <p className="big-question-response">
                Through the process of using OCR we can utilize the information of a nutrition label to fit the user's needs.
                Currently, this web app is capable of tracking allergens and macros, but we are planning to add additional features
                such as budgeting/prices, diets, and more!
                </p>
                <div className="allergenicon">
                <h4 className="bq1">Allergen<br></br>Tracking</h4>
                <img className="allergenicon" src={allergenicon} alt="Description" />
                </div>
                <p className="big-question-response">
                Enable users to identify and track allergens present in food products, helping those with food allergies make 
                informed choices.
                </p>
                <div className="planningicon">
                <h4 className="bq1">Meal<br></br>Planning</h4>
                <img className="planningicon" src={planningicon} alt="Description" />
                </div>
                <p className="big-question-response">
                Support users in planning balanced meals by suggesting complementary food items that meet their nutritional
                requirements.
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
        <Footer />
      </div>
    )
}

export default Home;