import React, {useState, useEffect} from 'react'
import {imageUrl} from '../../Constants/Constants'
import './RowPost.css'
import axios from '../../axios'

const RowPost = (props) => {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
  }, []);
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
      {movies.map(obj=>(
        <img className={props.isSmall ? 'smallposters' : 'poster'} src={`${imageUrl}${obj.backdrop_path}`} alt="posters" />
      ))}
      </div>
      
    </div>
  )
}

export default RowPost

