import Button from "../../components/Button/Button2";
import Logo from "../../components/Logo/Logo";
import style from "./Forgetpwd.module.scss";

export default function Forgetpwd() {

     return <div className="container">

          <div className="" >
          

          </div>
          <div className="" style={{ padding: '10px 10px' }}>

          
          <div className="">
          <Logo width={20} height={20} />
          <a className={style.link} href="#">Password Reset</a>
          </div>
               

               <h1>Find your Twitter account</h1>


               <label htmlFor="username">Enter your email, phone number, or username</label><br></br>
               <input type="text" name="username" id="username" datatype="username" className={style.line}  />


               <Button text="Search" />


          </div>
          <div className="">

          </div>
     </div>
}
