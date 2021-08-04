import React,{useContext} from 'react';
import style from './nav.module.css';
import { MovieContext } from './MovieContext';
const Nav=()=>{
    const [movies,setMovies]=useContext(MovieContext);
    return(
        <div className={style.nav}>
            <h3>Movie App</h3>
            <p>List of the movie:{movies.length}</p>
        </div>
    );
}

export default Nav;