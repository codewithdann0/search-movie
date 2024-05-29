import { useEffect,useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setsearchTerm]=useState("")
  const myapi ='http://www.omdbapi.com/?i=tt3896198&apikey=1820c7d9';
  const searchMovie =async(title)=>{
  const response = await fetch(`${myapi}&s=${title}`)
  const data = await response.json();
  setMovies(data.Search);
  }
 
useEffect(()=>{
  searchMovie("after we ");
})
  return (
    <div id="root">
          <h1>CinemaNavigator</h1>
        <div className='search'>
          <input 
          placeholder='Search for Movie'
          id="input"
          value={searchTerm}
          onChange={(e)=>{setsearchTerm(e.target.value)}}/>
          <button id="btn" onClick={()=>{searchMovie(searchTerm)}}><i class="fa-solid fa-magnifying-glass"></i></button>
          
        </div>
        {movies?.length > 0 ? (<div className='container'>
           { movies.map((movie)=>(
            <MovieCard movie={movie}/>
           ))}

               
        </div>):
       ( <div>
          <h1>No Movies Found</h1>
        </div>
        )}
        
    </div >
    
  );
}

export default App;
