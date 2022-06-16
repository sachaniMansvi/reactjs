import React,{useState} from "react";
const ClientChoice = (props) => {
    const [selectedClient,setSelectedClient] = useState([]);

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }

    return (
        <select value={selectedClient} onChange={handleSelectChange}> //set value here
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
        </select>
    )
}
export default ClientChoice;