import Classes from './index.module.css'
import React from 'react'
import {render} from 'react-dom'

let App = () => (
    <div>React component</div>
)
render(
    <App />,
    document.getElementById('app')
)



let fn = async () => {
    return await Promise.resolve('async/await success')
}
fn().then(console.log)

