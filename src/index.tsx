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

// //jsx
// const h1 = (
//     <h1 id="title" className="hghgh">
//         Hello React js
//     </h1>
// )

// let a = 10
// let b = 'hello test'
// const list = (
//     <ul>
//         <li>list Item {a + 10 + 10}</li>
//         <li>list Item {b}</li>
//         <li>list Item 3</li>
//     </ul>
// )

// const content = (
//     <div>
//         {h1}
//         {list}
//     </div>
// )
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(<React.StrictMode>{content}</React.StrictMode>)

// Компоненти в реакт
// function App() {
//     return <h1>Hello App.js</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(
//     <React.StrictMode>
//         {' '}
//         <App />
//     </React.StrictMode>
// )

// Приклад самостійна
// function Title() {
//     return <h1>Hello App.js</h1>
// }

// function Content() {
//     return (
//         <div>
//             <p>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                 Nesciunt corporis aliquam id mollitia incidunt officia dolore.
//                 Vel quos nisi, numquam in aliquam atque itaque ex eligendi
//                 dolores provident, alias eum?
//             </p>
//             <p>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                 Placeat nobis quae fugit natus incidunt accusamus facere ab eos,
//                 necessitatibus et officiis dolorem, veniam quisquam ratione,
//                 vitae blanditiis neque accusantium mollitia!
//             </p>
//         </div>
//     )
// }
// function App() {
//     return (
//         <div>
//             <Title />
//             <Content />
//         </div>
//     )
// }
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(
//     <React.StrictMode>
//         {' '}
//         <App />
//     </React.StrictMode>
// )
// Та ж самостіна через стрілкову функцію
const Title = () => {
    return <h1>Hello App.js</h1>
}
const Content = () => {
    return (
        <div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt corporis aliquam id mollitia incidunt officia dolore.
                Vel quos nisi, numquam in aliquam atque itaque ex eligendi
                dolores provident, alias eum?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat nobis quae fugit natus incidunt accusamus facere ab eos,
                necessitatibus et officiis dolorem, veniam quisquam ratione,
                vitae blanditiis neque accusantium mollitia!
            </p>
        </div>
    )
}
function App() {
    return (
        <div>
            <Title />
            <Content />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {' '}
        <App />
    </React.StrictMode>
)
