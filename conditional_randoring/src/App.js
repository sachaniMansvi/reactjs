// import Foam from './Component/FOAm/foam';
// import AxiosFetchAPI from "./Component/AxiosFetchAPI";
// import Checkbox from "./Component/FOAm/checkBox";
// import Foam from "./Component/FOAm/foam";
import { useEffect, useState } from "react";
import AddData from "./Component/AddData";
import GetData from "./Component/GetAPI";
import UpdateData from "./Component/UpdateData";
function App() {
  const [update,setUpdate]=useState(false)
  useEffect(()=>{
    window.location.href.includes("update")?setUpdate(true):setUpdate(false) 
  },[])
  return (
    <div className='App'>
        {update?<UpdateData/>:<AddData/>}
        <GetData/>
    </div>
  );
}
export default App;
