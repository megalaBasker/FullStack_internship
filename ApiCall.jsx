// import React from'react'
// import { useEffect } from 'react'
// function ApiCall(){
// useEffect(()=>{
//     // console.log("useEffect");
// const getData=async()=>{
// //  let res= await fetch("https://jsonplaceholder.typicode.com/todos/1")
// let resParse= await res.json()
// console.log(resParse);
// }
// getData()
// },[])
//     return(
//         <div>ApiCall</div>
//     )
// }
// export default ApiCall
import React, { useState } from 'react'
import { useEffect } from 'react'

function ApiCall() {
    const [data,setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let resParse = await res.json()
            setData(resParse)
        }
        getData()
    })
    return (
        <div>
            {data.map((i)=><li>{i.body}</li>)}
            </div>
    )
}
export default ApiCall