
import './App.css';
import Message from './component/Message';
// const data = require('./data.js')
function App() {
  const person_detail=[{
    id: 1,
    first_name: "Jeanette",
    url:"https://picsum.photos/200/300",
    last_name: "Penddreth",
    email: "jpenddth0@census.gov",
  gender: "Female",
    ip_address: "26.58.193.2"
  }, {
    id: 2,
    first_name: "Giavani",
    last_name: "Frediani",
    url:"https://picsum.photos/seed/picsum/200/300",
    email: "gfrediani1@senate.gov",
    gender: "Male",
    ip_address: "229.179.4.212"
  }, {
    id: 3,
    first_name: "Noell",
    last_name: "Bea",
    url:"https://picsum.photos/seed/picsum/200/300",
    email: "nbea2@imageshack.us",
    gender: "Female",
    ip_address: "180.66.162.255"
  }, {
    id: 4,
    first_name: "Willard",
    last_name: "Valek",
    url:"https://picsum.photos/seed/picsum/200/300",
    email: "wvalek3@vk.com",
    gender: "Male",
    ip_address: "67.76.188.26"
  }]
  return (

    <>
      <Message person={person_detail}></Message>
    </>
  );
}

export default App;
