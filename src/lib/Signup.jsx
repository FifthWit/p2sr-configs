import { useState } from "react";
import pb from './pocketbase'
let createdUser
export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loggedin, setLoggedin] = useState(false)

    async function login() {
        await pb.collection('users').authWithPassword(username, password)
        setLoggedin(true)
    }

    async function signup() {
        try{
            const data = {
                "username": username,
                "password": password,
                "passwordConfirm": password,
                "name": username,
            }
            const createdUser = await pb.collection('users').create(data)
            setLoggedin(true)
            await login()

        } catch (error) {
            console.error(error)
        }
    }

    function signout() {
        pb.authStore.clear()
    }

    return (
        <>
        {!loggedin ? (        
        <div className="flex flex-col bg-primary dark:bg-dark-primary h-auto w-64 rounded-lg m-4">
            <h1 className="font-bold text-xl m-2 p-4">Login / Signup!</h1>
            <form onSubmit={(event) => event.preventDefault()}>
                <input className="rounded-md p-1 m-2" type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
                <input className="rounded-md p-1 m-2" type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                <button onClick={signup}>Sign Up!</button>
                <button onClick={login}>Login</button>
            </form>
        </div>) : (
            <div className="flex flex-col bg-primary dark:bg-dark-primary h-auto w-64 rounded-lg m-4 py-8">
                <h1 className="font-bold text-xl">Logged in as {username}!</h1>
            </div>
        )}
        </>
    )
}