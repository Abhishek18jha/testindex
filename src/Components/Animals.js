import { useState } from "react"
const animal_arr =['dog','cat','bird'];
function Animals() {
    const [animal,setAnimal]=useState("");
  
    const listitems = animal_arr.map((a)=>    <li>{a}</li>) 
  return (
    <div>Animals
    
        <ul>{listitems}</ul>
        <br/>
        <br/>
        <form>
            <label htmlFor="animal">
                Animal
                <select 
                id="animal" 
                value={animal} 
                placeholder="Animals"
                onChange={e =>{
                    setAnimal(e.target.value)
                }}
                >
                 <option/>
                 {animal_arr.map((anim)=>(
                    <option key={anim}>{anim}</option>
                 ))}

                </select>
                <p>{animal  }</p>
            </label>
       
           
        </form>
    </div>
  )
}

export default Animals