import Country from "./country";
let countryName=prompt("enter country code to find name:")

function CountryCode() {
    let name1;
    let i;

    // find country code by for of loop

    // for (const value of Country) {
    //     if(value.code==countryName.toUpperCase())
    //     {
    //       name1=value.name;
    //     }
    // }

    // find country code by map function

    //  Country.map((value)=>{
    //    if(value.code=="IN")
    //    {
    //        name1=value.name
    // }
    // })

    // find country code by filter function

    Country.filter((value,index)=>{
        if(value.code==countryName.toUpperCase())
            {
              name1= value.name;
            }
        
    })

    return (<div>

        <h1>COUNTRY NAME : {name1}</h1>

        </div>)
    
}
export default CountryCode;