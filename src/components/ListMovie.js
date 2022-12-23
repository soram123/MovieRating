import { useSelector,useDispatch } from "react-redux"
import { removeMovie } from "../actions/addMovie"
import '../css/myCss.css'

const ListMovie = ()=>{
    const dispatch = useDispatch()

    const movies = useSelector((state)=>{
        return state.movies
    })

    const handleRemove = (id)=>{
        dispatch(removeMovie(id))
    }
    
    return (<div>
        <h2>Listing the movies</h2>
      {  
       movies.map((ele)=>{
             return  (<div key={ele.id} className="list-movie">
                         <h2> {ele.moviename}</h2> 
                        <h4>IMDB ranking - {ele.rank}</h4>
                        <button  className="delete-button" onClick={()=>{ 
                            handleRemove(ele.id)}}>delete</button>
                    </div>
               
             ) 
       })
    }
    </div>)
}
export default ListMovie