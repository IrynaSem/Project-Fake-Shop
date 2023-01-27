import React from 'react'
import ReactDOM from 'react-dom/client'

//стандартний варіант
// const h1 = React.createElement('h1', { id: 'title' }, 'Hello React')

// const list = React.createElement(
//     'ul',
//     null,
//     React.createElement('li', null, 'list Item 1'),
//     React.createElement('li', null, 'list Item 2'),
//     React.createElement('li', null, 'list Item 3')
// )

//jsx
const h1 = (
    <h1 id="title" className="hghgh">
        Hello React js
    </h1>
)

let a = 10
let b = 'hello test'
const list = (
    <ul>
        <li>list Item {a + 10 + 10}</li>
        <li>list Item {b}</li>
        <li>list Item 3</li>
    </ul>
)

const content = (
    <div>
        {h1}
        {list}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
