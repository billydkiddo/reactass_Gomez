import image1 from '../assets/bp1.png';
import image2 from '../assets/bp2.png';
import image3 from '../assets/bp3.png';
import image4 from '../assets/bp4.png';

function Carousel() {
    return (
        <div>
            <div id="demo" className="carousel slide container-fluid" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image1} alt="Los Angeles" className="d-block" style={{ width: "100%", justifyContent: "center" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={image2} alt="Chicago" className="d-block" style={{ width: "100%", justifyContent: "center" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={image3} alt="New York" className="d-block" style={{ width: "100%", justifyContent: "center" }} />
                    </div>
                    <div className="carousel-item">
                        <img src={image4} alt="New York" className="d-block" style={{ width: "100%", justifyContent: "center" }} />
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>

    )
}

export default Carousel;