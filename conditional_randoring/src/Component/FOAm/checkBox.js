import { useState } from "react";
function Checkbox () {
const [lang,setLang]=useState([])
const checkBOXHandler = (e)=> {
// const {value}=e.target
lang.push(e.target.value)
setLang(lang)
}
const submitHandler = (e)=> {
    e.preventDefault()
    console.log(lang);
}
    return (<div>
        <form onSubmit={submitHandler}>
            <label>Select Langause</label>
            <input type="checkbox" name="Lang" value="Java" onChange={checkBOXHandler}></input><label>Java</label>
            <input type="checkbox" name="Lang" value="ReactJs" onChange={checkBOXHandler}></input><label>ReactJs</label>
            <input type="checkbox" name="lang" value="NativeJs" onChange={checkBOXHandler}></input><label>NativeJS</label>
            <input type="checkbox" name="Lang" value="JavaScript" onChange={checkBOXHandler}></input><label>JavaScript</label>
            <button>Submit</button>
            </form>        
    </div>  );
}
export default Checkbox ;








// import { useState } from "react";
// function CheckBox() {
//     const [isJava, setJava] = useState(false)
//     const [isNative, setNativeJs] = useState(false)
//     const [isReactJs, setReactJs] = useState(false)
//     const [isPython, setPhython] = useState(false)

//     const toggeleJava = (e) => {
//         setJava(!isJava)
//         let java = e.target.name;
//     }

//     const toggelNativejs = (e) => {
//         setNativeJs(!isNative)
//         let nativeJs = e.target.name;
//     }

//     const toggelReactjs = (e) => {
//         setReactJs(!isReactJs)
//         let reactt = e.target.name;
//     }
//     const toggelePython = (e) => {
//         let phython = e.target.name;
//         setPhython(!isPython)
//     }
//     const submitHandler = (e) => {
//         e.preventDefault()
//         // {isReactJs===true?console.log(reactt):console.log("")}
//         setPhython(false);
//         setNativeJs(false);
//         setReactJs(false);
//         setJava(false)
//         let arr=[isJava,isNative,isPython,isReactJs]
//         let store=arr.map((value,i,arr)=>{
//             if (value===true) {
//                return arr
//             }
//         })
//         console.log(store);
//     }
   

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <h4> Select computer Langause</h4>
//                 <div>
//                 <input type="checkbox" name="java"  checked={isJava} onChange={toggeleJava}></input>
//                 <label>JAVA</label>
//                 </div>
               
//                 <div>
//                 <input type="checkbox" name="nativejs" checked={isNative} onChange={toggelNativejs}></input>
//                 <label>Native js</label>
//                 </div>
              
//                 <div>
//                     <input type="checkbox" name="python" checked={isPython} onChange={toggelePython}></input>
//                     <label>Python</label>
//                 </div>

//                 <div>
//                     <input type="checkbox" name="Reactjs" checked={isReactJs} onChange={toggelReactjs}></input>
//                     <label>React js</label>
//                 </div>

//                 <div>
//                     <button> Submit</button>
//                 </div>

//             </form>
//             <h4>{isJava === true ? "JAVA" : ""}</h4>
//             <h4>{isNative === true ? "NativeJS" : ""}</h4>
//             <h4>{isReactJs === true ? "ReactJS" : ""}</h4>
//             <h4>{isPython === true ? "Python" : ""}</h4>
//         </div>
//     )
// }

// export default CheckBox;