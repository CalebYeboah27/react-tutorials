import React from 'react'

const Greeting = () => {
    return (
        <>
            <Person />
            <Message />
        </>
    )
}

const Person = () => <h2>Caleb Yeboah</h2>
const Message = () => <p>This is my message</p>

export default Greeting
