import "./topbar.scss"
import {Notifications,Mail} from "@material-ui/icons"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"> </a>
         
          <div className="itemContainer">
            
           
          </div>
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
            <span>Admin</span>
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
