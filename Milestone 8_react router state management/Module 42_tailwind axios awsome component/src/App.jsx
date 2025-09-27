// import { X } from "lucide";
// import { use } from "react"6
import GoogleMap from "./components/googleMap/GoogleMap";
import Menu from "./components/Menu/Menu";


function App() {
  // const [open, setOpen] = use(false);

  return (
    
    <>
    <h2 className="text-white">This is h2 hallow</h2>
      {/* <nav className="flex justify-baseline mx-10">
          <span className="flex" onClick={()=> setOpen(!open)}>
            {open?
              <X className='md:hidden'></X>:
              <Menu></Menu>
            }
          </span>
      </nav> */}
      <GoogleMap></GoogleMap>
    </>
  )
}

export default App
