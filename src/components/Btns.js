import './Btns.css'
import letter from '../images/iconletter.png'

function Btns() {
  return (
    <div className="btns-container">
      <button className="btn-email"><img src={letter}/>Email</button>
      <button className="btn-linked">LinkedIn</button>
    </div>
  );
}

export default Btns;
