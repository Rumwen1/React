
import "./Button2.scss";


export default function Button(props) {

     return <>
          <div style={{ textAlign: 'left' }}>
               <button className="btn-max" type="button" >{props?.text || "No Text Set"}</button>
          </div>
     </>
}