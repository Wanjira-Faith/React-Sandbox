// import UseFetch from './Hooks/UseFetch'
import React from 'react'
import UseFetch from '../Hooks/UseFetch'

function CustomHook1() {
    const {data, loading, error} = UseFetch('https://jsonplaceholder.typicode.com/posts', {})
     
    if(loading) {
        return <h3>Loading...</h3>
    }
  return (
    <div>
        {data.map(post => (
            <h3 key={post.id}>{post.title}</h3>
        ))}
    </div>
  )
}

export default CustomHook1