import React from 'react'
import ReactDOM from 'react-dom/client'
import { isPropertySignature } from 'typescript'
import { Content } from './Content'
import { Title } from './Title'

function App() {
    return (
        <>
            <Title text="React" />
            <Title text="TS" />
            <Content
                text1="hfghfgdjfhjhghfdghdjhgf fhgjfhgjd gjgjghfh sjhdfkjgvb jhgdjhfgjdhfg"
                text2="Tempore explicabo, consectetur quaerat unde laboriosam dolore veniam magni assumenda nemo aspernatur, natus in est ipsam facilis, error corporis et veritatis. Numquam."
                year={2023}
            />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {' '}
        <App />
    </React.StrictMode>
)
