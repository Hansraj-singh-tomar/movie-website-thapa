import React from 'react'
// import { AppContext } from './context'
// import { useGlobalContext } from './context'
import Movies from './Movies'
import Search from './Search'

const Home = () => {
    // const  name = useContext(AppContext);
    // const name = useGlobalContext();
  return (
    <>
      {/* <p>{name}</p> */}
      <Search/>
      <Movies/>
    </>
  )
}

export default Home

// api key - 926cc41a
// http://www.omdbapi.com/?apikey=[yourkey]&
// http://www.omdbapi.com/?apikey=926cc41a&s
// http://www.omdbapi.com/?apikey=926cc41a&s=titanic

// 1.  The variable should be prefixed with REACT_APP_
// eg: REACT_APP_WEBSITE_NAME = hello
// 2. you need to restart the sever to reflect the changes.
// 3. Make sure ypu have the .env file in your root folder (same plce where you have package.json) and NOT in your src folder.
// After that you can access the variable like this process.env.REACT_APP_SOME_VARIABLE
// REACT_APP_API_KEY=926cc41a