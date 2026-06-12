
import { useEffect, useState } from "react"
import Input from "./input"

type User = {
   id: number;
   fullname: string;
   username: string
   email: string;
   contact: string;
   password: string;
   Gender:string;
   
}

const url = "http://localhost:3000/posts"

function Features() {

   const [fullname, setfullname] = useState("")
   const [username, setuserame] = useState("")
   const [email, setemail] = useState("")
   const [contact, setcontact] = useState("")
   const [password, setpassword] = useState("")
   const [seletedoption,setselectedoption]=useState("")

   const[UserId,setUserId]=useState<number |null>(null)

   const [Userdata, setUserdata] = useState<User[]>([])

   useEffect(() => {
      callwork();
   }, [])

   async function callwork() {
      const response = await fetch(url)
      const result = await response.json()

      setUserdata(result)
   }

   const datadisplay = async () => {
      const response1 = await fetch( url, { method: "Post", body: JSON.stringify({ fullname, username, email, contact, password,Gender:seletedoption }) })
      await response1.json()

      setfullname("")
      setuserame("")
      setemail("")
      setcontact("")
      setpassword("")
      setselectedoption("")

      callwork()

   }

   const ondelete=async(id:number)=>{
      await fetch (`${url}/${id}`,{method:"Delete"})
      alert("Deleted")

      callwork()
   }

   const onedit = async (aa: User)=>{
  
   setUserId(aa.id)
   setfullname(aa.fullname|| "")
   setuserame(aa.username||"")
   setemail(aa.email|| "")
   setcontact( aa.contact||"")
   setpassword( aa.password||"")
    setselectedoption(aa.Gender||"")


   callwork()
}

const onupdate=async()=>{
   const response=await fetch(`${url}/${UserId}`,{method:"PUT",body:JSON.stringify({ fullname, username, email, contact, password,Gender:seletedoption })})
    await response.json()
   alert("updated")

      setfullname("")
      setuserame("")
      setemail("")
      setcontact("")
      setpassword("")
      setselectedoption("")


      callwork()
   

}









return (
   <>
      <div className="bg-linear-to-r from-blue-400 to-purple-400 w-full h-130 flex justify-center">
         <div className="w-110 h-100 bg-white mt-15 rounded-sm">
            <h1 className=" text-[20px] text-center underline mt-3">Registration</h1>

            <form action="" className="m-4 flex flex-wrap gap-3 ">

               <Input
                  onchange={(event) => setfullname(event.target.value)}
                  type="text"
                  value="name"
                  placeholder="   Enter your name.."
                  value1={fullname}
               />

               <Input
                  onchange={(event) => setuserame(event.target.value)}
                  type="text"
                  value="Username"
                  placeholder="   Enter your username.."
                  value1={username}
               />

               <Input
                  onchange={(event) => setemail(event.target.value)}
                  type="Email"
                  value="Email"
                  placeholder="   Enter your Email.."
                  value1={email}
               />

               <Input
                  onchange={(event) => setcontact(event.target.value)}
                  type="number"
                  value="Phone Number"
                  placeholder="   Enter your number.."
                  value1={contact}
               />

               <Input
                  onchange={(event) => setpassword(event.target.value)}
                  type="password"
                  value="Password"
                  placeholder="   Enter your Password.."
                  value1={password}
               />


               <Input
                  type="Password"
                  value="Confirm Password"
                  placeholder="  Confirm your Password.."
               />




               <div className="mt-3">
                  <p className="font-light mb-2">Gender</p>

                  <div className="flex gap-15">
                     <label  className=" text-sm  " htmlFor="Male"><input onChange={(event)=>setselectedoption(event.target.value)} checked={seletedoption=="Male"} className="mr-2" type="radio" id="Male" name="Gender" value="Male" />Male</label>
                     <label className=" text-sm " htmlFor="Female"><input onChange={(event)=>setselectedoption(event.target.value)} checked={seletedoption=="Female"} className="mr-2" type="radio" id="Female" name="Gender" value="Female" />Female</label>
                     <label className=" text-sm " htmlFor="other"><input onChange={(event)=>setselectedoption(event.target.value)} checked={seletedoption=="other"} className="mr-2" type="radio" id="other" name="Gender" value="other" />Prefer not to say</label>
                  </div>

               </div>

               <div className="w-100 flex mt-3 justify-center">
                  <button onClick={datadisplay} className=" w-100 h-7  mt-3 text-white font-semibold bg-linear-to-r from-blue-400 to-purple-400 rounded-[3px] text-sm flex items-center justify-center">Register</button>
               </div>

            </form>

         </div>

         <div>
            <table className="text-xs">
               <tr className="border">
                  <th className="border p-2">id</th>
                  <th className="border p-2">fullname</th>
                  <th className="border p-2">Username</th>
                  <th className="border p-2">Email</th>
                  <th className="border p-2">contact</th>
                  <th className="border p-2">password</th>
                  <th className="border p-2">Gender</th>
               </tr>

               {Userdata.map((aa) => (
                  <tr className="border" key={aa.id}>
                     <td className="border p-1">{aa.id}</td>
                     <td className="border p-1">{aa.fullname}</td>
                     <td className="border p-1">{aa.username}</td>
                     <td className="border p-1">{aa.email}</td>
                     <td className="border p-1">{aa.contact}</td>
                     <td className="border p-1">{aa.password}</td>
                     <td className="border p-1">{aa.Gender}</td>
                     <td className="border p-1"><button onClick={() => { ondelete(aa.id) }} className="bg-red-600  text-white text-[10px] rounded-sm px-3 py-1">Delete</button></td>
                     <td className="border p-1"><button onClick={() => { onedit(aa)}} className="bg-yellow-800  text-[10px] rounded-sm px-3 py-1">edit</button> </td>
                     
                   
                  </tr>
               ))}

            </table>
         </div>

      </div>
   </>
)
}
export default Features