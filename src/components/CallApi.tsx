import { useEffect,useState } from "react";


 function CallApi(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data.users); // important
    console.log(data)
  };
    return(
        <>
        <h1>this is api</h1>
        </>
    )
}
export default CallApi

