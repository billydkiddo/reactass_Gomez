import Card from './UserCards';
import one from '../assets/bp1.png';
import two from '../assets/bp2.png';
import three from '../assets/bp3.png';
import four from '../assets/bp4.png';

function Allcards(){
    return (
     <div className="text-align-center" style={{display: "inline-flex"}}>
       <div className='row'>
         <div className='col-lg-3 col-sm-12 mt-3 d-block'>
           <Card img={one}/>
        </div>
        <div className='col-lg-3 col-sm-12 mt-3 d-block'>  
           <Card img={two}/>
        </div>
        <div className='col-lg-3 col-sm-12 mt-3 d-block'>
           <Card img={three}/>
        </div>
        <div className='col-lg-3 col-sm-12 mt-3 d-block'>
           <Card img={four}/>
        </div>
        </div>
    </div>
    )
}

export default Allcards;
