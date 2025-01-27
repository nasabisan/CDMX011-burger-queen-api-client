import { Product } from "../product/product";
import { authUser } from "../User";
import BttnLogout from "../nav.js/BttnLogOut";
import "../../Menu.scss"
import Logo from "../../img/bq_logo.png";


export default function Menu() {
  const currentUser = authUser();

  return (
    <div className="cont-1">
      <div className="cont-2" >
        <img className="child-1" src={Logo} alt="Logo"></img>
        <div className="center-self">
          <button className="bttn-order">PEDIDOS</button>
        </div>
        <div className="center-self">
          <p id="child-3"> {currentUser?.email} </p>
        </div>
        <div className="center-self">
        <BttnLogout />
        </div>
          
      </div>
    <div><button className="bttn-breakfast">DESAYUNOS</button> 
    <button className="bttn-lunch">ALMUERZOS</button>
    </div>
      <div >

        <Product />

      </div>

    </div>

  )
}