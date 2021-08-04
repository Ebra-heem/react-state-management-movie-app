import React,{createContext,useState} from 'react';

export const MovieContext=createContext();

//movie provider holds the all information and share it all the components
//to use this information import MovieContext in component and useContext from react
 export const MovieProvider=(props)=>{
    const [movies,setMovies]= useState([
        {
            name:'Game of Throne',
            price:'$10',
            id:1234
        },
        {
            name:'Maari2',
            price:'$15',
            id:12345
        },
        {
            name:'Mission Impossible',
            price:'$20',
            id:123456
        }
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}