import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {query, setQuery, isError} = useGlobalContext();
  return (
    <>
      <section className='search-section'>
        <h2>Search Your Favourite Movies.</h2>
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <input type="text" placeholder='search here' onChange={(e)=> {setQuery(e.target.value)}} value={query}/>
          </div>
        </form>
        <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search