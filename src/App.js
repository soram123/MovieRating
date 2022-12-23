import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddMovie from "./components/AddMovie";
import './css/myCss.css'

function App() {
  const [search, setSearch ] = useState('')
  const [result, setResult ] = useState('')
  const [show , setShow] = useState(false)

  const movies = useSelector((state)=>{
    return state.movies
  })

  const handleSearch = (e)=>{
     const res = movies.find((ele)=>{
      return ele.moviename.toLowerCase() === search.toLowerCase()
    })
    setResult('')
    setShow(true)
    setResult(res.moviename)
  }
  const handleSearchInput = (e)=>{
    setSearch(e.target.value)
  }
  return (
    <div >
          <h1>My Big Movie List </h1>
          <input type="text" value={search} onChange={handleSearchInput} placheholder="search by name" />
          <input type="button" className = "search-button" value="search" onClick ={handleSearch} />
          {(result.length > 0 && show) ? <h3 style={{color:"green"}}>Result : {result} found !</h3> 
          :
         (result.length <= 0 && show) && <h3 style={{color:"red"}}> Result : not found !</h3>   }
       
        <AddMovie />
        <hr />
     </div>
  );
}

export default App;
