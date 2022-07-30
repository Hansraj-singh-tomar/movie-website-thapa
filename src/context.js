// context(warehouse)
// Provider(delivery boy)
// consumer / (useContext(you))
import React, { useContext, useEffect, useState } from "react";


// const API_URL = `http://www.omdbapi.com/?apikey=926cc41a&s=titanic`;
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();


// we need to create a provider function 
const AppProvider = ({children}) => { // jo app hamne wrap kiya hai un sab ko ham get kar sake uske liye we need to write children
    
    const [isLoading, setIsLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const [query,setQuery] = useState('titanic');
    
    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === 'True'){
                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: data.Error,
                })
                setMovie(data.Search);
            }else{
                setIsError({
                    show: true,
                    msg: data.Error,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    // useEffect(() => {
    //     getMovies(`${API_URL}&s=${query}`);
    // }, [query]);

    // Debouncing code 
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        },500);
        return () => {
            clearTimeout(timeoutId);  // isse aage ka sara delete ho jayega sirf at the end vala rhega uske base par hame result show hoga
        }
    }, [query]);

    // return <AppContext.Provider value="hansraj singh tomar">{children}</AppContext.Provider>
    return <AppContext.Provider value={{isLoading: isLoading, isError: isError, setIsError: setIsError, movie: movie, query: query, setQuery: setQuery}}>{children}</AppContext.Provider>
}

// now we will create our global custom hooks

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};