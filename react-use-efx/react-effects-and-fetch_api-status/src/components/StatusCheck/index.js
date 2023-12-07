import "./StatusCheck.css";
import { useState} from 'react';


//const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {

  const statusIcon = "⁉️";
  const statusOk = "✅";
  const statusBad = "❌"; 
  const statusWait = "⏳"; 
  const statusAlert = "🚨";

  const[apiState, setApiState]= useState(statusIcon);

  const[apiInfo, setApiInfo]= useState('');

/*   useEffect(() => {
      handleCheckApiStatus()
  }); */
  
  async function handleCheckApiStatus() {

    try{
      const response = await fetch(`https://example-apis.vercel.app/api/status`);
      const data = await response.json();

      console.log("data ", data)
      console.log("ok: ",data.status)

      setApiInfo(`${data.status}`)

      if(!data){
        setApiState(statusWait)
      }
      else {data.status === 'Ok' ? setApiState(statusOk) : setApiState(statusBad);}

      }
      catch (error){
        console.log(error);
        return setApiState(statusAlert)
      }
      
    }      
  

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{apiState}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
      <br></br>
      <h2 style={{textAlign:'center'}}>{apiInfo}</h2>
    </article>
  );
}
