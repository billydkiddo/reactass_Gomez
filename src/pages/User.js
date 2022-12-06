import Allcards from '../components/UserAllCards';
import Videos from '../components/Videos';

function User(){
    return(
      <div className='container'>
      <div><Videos/></div>
      <div><Allcards/></div>
      </div>
    )
  }
   export default User;