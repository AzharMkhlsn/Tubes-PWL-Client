import "./topbarchef.scss"
import {Notifications} from "@material-ui/icons"

export default function TopbarChef({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          
         
          
        </div>
        
        <div className="right">
        <div className="itemContainer">

            <Notifications className="icon"/>
            <div>
            <hr
            style={{
            borderColor:"#F178B6",
             width: 1,
            height:30,
            backgroundColor: "#F178B6",
        }}/>
            </div>
            <div>
            <span>Chef</span>
            </div>
            <div className="logo">
          <img src="assets/user.png" alt="" />
          
          
        </div>
           
          </div>
          
          </div>

      </div>

    </div>
  )
}
