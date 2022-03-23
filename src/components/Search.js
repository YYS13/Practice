import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Search = ({search,setInput}) => {
    const change = (e)=>{
        setInput(e.target.value)
    }
    return (
        <div className='search'>
            <input onChange={change} type="text" />
            <button onClick={search}>搜尋</button>
        </div>
    )
}

export default Search
