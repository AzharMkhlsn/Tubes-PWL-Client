import Button from '@material-ui/core/Button'
import {AddShoppingCartOutlined,ShoppingCartOutlined,PeopleOutlined,HomeOutlined,AssignmentOutlined} from "@material-ui/icons"
import {useState} from "react";

import "./menu.scss"

export default function MenuAdmin() {
   
  return (

    <div className='contact' id='contact'>
     

   <div className="form">
       <div className="logo">
          <img src="assets/logo.png" alt="" />
          
          
        </div>
        <div className="nama">
        WAROENG MAKAN
        
        </div>
        <hr width="200px" />
     <form>
       <div>
       
        <Button  variant="contained" color="primary" >
        <HomeOutlined className="icon1"/>
          <a  href="/home">Branda</a>
        </Button>
       </div>
       <div>
        <Button  variant="contained" color="primary">
        <ShoppingCartOutlined className="icon2"/>
          <a  href="/transaksi">Transaksi</a>
        </Button>
       </div>
       <div>
        <Button variant="contained" color="primary">
          <AddShoppingCartOutlined className="icon3"/>
          <a  href="/produk">Produk</a>
        </Button>
       </div>
       <div>
       <Button variant="contained" color="primary">
       <AssignmentOutlined className="icon4"/>
          <a  href="/data">Data Role</a>
        </Button>
       </div>
       <div>
        <Button variant="contained" color="primary">
        <PeopleOutlined className="icon5"/>
         <a  href="/datapegawai">Data Pegawai   </a>
        </Button>
       </div>
       
      
     </form>
   </div>

    </div>
  )
}
