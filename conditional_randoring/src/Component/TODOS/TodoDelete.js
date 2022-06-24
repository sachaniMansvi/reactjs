import axios from 'axios';
import './Todos.css'
import { useEffect} from "react";
function TodoDelete() {
// delete one by one
  useEffect(() => {
    if (window.location.href.includes("delete")) {
      let _id = window.location.href.split("/delete")[1]
      axios.delete(`http://localhost:5000/notes${_id}`).then((response) => {
        console.log(response.getTodos);
      }).catch((e) => {
        console.log(e);
      })
    }
  })
  return (<div></div>);
}
export default TodoDelete;