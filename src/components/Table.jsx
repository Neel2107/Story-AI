import axios from 'axios';
import  {  useState } from 'react'

const Table = () => {

    // const [users, setUsers] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);


    // useEffect(() => {
    //   axios
    //     .get('http://localhost:3001/getUsers')
    //     .then(users => setUsers(users.data))
    //     .catch(err => console.log(err));
    // }, []);


    const submit= (e) =>{
      e.preventDefault();


      axios
      .post("http://localhost:3001/createUser",{name, email} )
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }

  return (
    <div className='flex ml-10 mt-10'>
<div className='w-60 '>
  
<form onSubmit={submit}>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required  onChange={(e) => setName(e.target.value) }/>
  </div>
  <div className="mb-6">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setEmail(e.target.value)} required/>
  </div> 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

</div>
























        {/* <div className="w-100 mt-5 vh-100 flex justify-center align-items-center">
          <div className="w-50">
        <table className="  ">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Email:</th>
              <th>Age:</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
               return <tr key={"id"} >
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
           } )}
          </tbody>
        </table>
        </div> */}
        {/* </div> */}
    </div>
  )
}

export default Table