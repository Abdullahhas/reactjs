import React , {useState} from 'react'

const Counter = ()=>{
    const [count , setCount] = useState(0)

    const incrementCount = ()=>{
        setCount(count+1)
    }

    return(
        <div>
            <button type='button' onClick={incrementCount}>
            you have clicked {count} times
            </button>
        </div>
    )
}

export default Counter
