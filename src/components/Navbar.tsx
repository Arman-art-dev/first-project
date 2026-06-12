import { Routes, Link, Route } from "react-router"
import Home from "./Home"
import About from "./About"
import Features from "./Features"
import Services from "./Services"
import { useState } from "react"

const Navbar = () => {
    const [selectedcolor, setSelectedcolor] = useState("bg-amber-600")
    const btw = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedcolor(event?.target.value)
    }
    return (
        <>
            <div className={`${selectedcolor} flex justify-between w-full h-18`}>

                <p className=" font-bold  flex items-center ml-3 text-[35px]  underline">Biso</p>

                <nav className=" text-[16px]   flex gap-15  items-center mr-10 ">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Features">Features</Link>
                    <Link to="/Services">Services</Link>
                    <div className="">
                        <label htmlFor="Select"></label>
                        <select id="Select" value={selectedcolor} onChange={btw}>
                            <option value="bg-red-200">red</option>
                            <option value="bg-yellow-200">yellow</option>
                            <option value="bg-green-200">Green</option>
                        </select>
                    </div>
                </nav>



            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/Services" element={<Services />} />
            </Routes>
        </>
    )
}
export default Navbar