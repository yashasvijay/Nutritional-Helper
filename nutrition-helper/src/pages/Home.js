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
            <h4 className="bq1">Clinical<br></br>Development</h4>
            <article className="big-question-response">
            Through the process of using OCR we can utilize the information of a nutrition label...
            </article>
            <h4 className="bq2">Clinical<br></br>Development</h4>
            <article className="big-question-response">
            Through the process of using OCR we can utilize the information of a nutrition label...
            </article>
            <h4 className="bq3">Clinical<br></br>Development</h4>
            <article className="big-question-response">
            Through the process of using OCR we can utilize the information of a nutrition label...
            </article>
            <h4 className="bq4">Clinical<br></br>Development</h4>
            <article className="big-question-response">
            Through the process of using OCR we can utilize the information of a nutrition label...
            </article>
            <h4 className="bq5">Clinical<br></br>Development</h4>
            <article className="big-question-response">
            Through the process of using OCR we can utilize the information of a nutrition label...
            </article>
            <h4 className="bq6">Clinical<br></br>Development</h4>
            <article className="big-question-response">
            Through the process of using OCR we can utilize the information of a nutrition label...
            </article>
            <h4 className="bq7">Clinical<br></br>Development</h4>
            <article className="big-question-response">
            Through the process of using OCR we can utilize the information of a nutrition label...
            </article>
        </div>
        <Footer />
      </div>
    )
}

export default Home;