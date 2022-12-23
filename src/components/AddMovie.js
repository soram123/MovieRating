import React , {useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addMovie } from '../actions/addMovie'
import ListMovie from './ListMovie'
import MovieStats from './MovieStats'
import '../css/myCss.css'

const AddMovie = ()=>{
    const dispatch = useDispatch()
    const [moviename, setMovieName] = useState('')
   const [rank, setRank] = useState('')

   const movies = useSelector((state)=>{
        return state.movies
    })

    const handleChange = (e)=>{
        if(e.target.name=="movie"){
            setMovieName(e.target.value)
        }
        else if(e.target.name=="rank"){
            setRank(e.target.value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const movieData = {
            id:Number(new Date()),
            moviename: moviename,
            rank: Number(rank)
        }
        setMovieName('')
        setRank('')
        console.log(movieData)
        dispatch(addMovie(movieData))
    }

    return (<div>
        <h2>Add Movies</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="movie" value={moviename} onChange={handleChange} placeholder="enter movie name" /><br/><br/>
            <input type="text" name="rank" value={rank} onChange={handleChange}placeholder="IMDB ranking" /> <br/><br/>
            <input type="submit" className='add-button' value="Add" />
        </form>
        <hr />
        <div className='fly-horizontal' >
        {movies.length>0 && <ListMovie />}
        {movies.length>0 && <MovieStats />}
        </div>
    </div>)
}
export default AddMovie