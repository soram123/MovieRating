import { useSelector } from "react-redux"
import _ from "lodash"

const MovieStats = ()=>{
    const movies = useSelector((state)=>{
        return state.movies
    })
    const rating = movies.map((ele)=>{
        return ele.rank
    })
    const max = _.max(rating)

    const movname = movies.find((ele)=>{
        return ele.rank==max
    })
    return (<div>
                 <h2>Movie stats</h2> 
                <h3>Total movies - {movies.length}</h3>
                <h3 style={{color: "green"}}>#Top ranked movie : {movname.moviename}- #{max}</h3>

         </div>
       
    )
}
export default MovieStats