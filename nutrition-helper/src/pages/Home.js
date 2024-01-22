import BasicNavBar from "../components/NavBar";
import "./Home.css";
import banner from '../images/banner.png';
import Footer from '../components/Footer';

function Home() {
    return (
        <div className="all">
            <BasicNavBar />
            <div class="center-container">
            <img src={banner} alt="Description" />
            </div>
            <div className="container">
                <h1 className="big-question">Our Solutions </h1>
                <h4 className="bq1">Nutritional<br></br>Information Tracking</h4>
                <p className="big-question-response">
                Through the process of using OCR we can utilize the information of a nutrition label to fit the user's needs.
                Currently, this web app is capable of tracking allergens and macros, but we are planning to add additional features
                such as budgeting/prices, diets, and more!
                </p>
                <h4 className="bq1">Allergen<br></br>Tracking</h4>
                <p className="big-question-response">
                Enable users to identify and track allergens present in food products, helping those with food allergies make 
                informed choices.
                </p>
                <h4 className="bq1">Meal<br></br>Planning</h4>
                <p className="big-question-response">
                Support users in planning balanced meals by suggesting complementary food items that meet their nutritional
                requirements.
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        <Footer />
      </div>
    )
}

export default Home;