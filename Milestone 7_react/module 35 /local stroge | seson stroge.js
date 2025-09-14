//  local storage value always have 
//  and session storage value always gone 

const handleAddToStroge= ()=>{
    const name = document.getElementById("name").ariaValueMax;
    console.log(name);
    localStorage.setItem("name", name)
    
}