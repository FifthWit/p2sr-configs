import { useState } from "react";
import pb from './pocketbase'
export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        await pb.collection('users').authWithPassword(username, password)
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
            await login()

        } catch (error) {
            console.error(error)
        }
    }

    function signout() {
        pb.authStore.clear()
    }

    return (
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                <input type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)} />
                <input type="text" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                <button onClick={signup}>Sign Up!</button>
                <button onClick={login}>Login</button>
            </form>
            <p>{username}</p>
            <p>{password}</p>
        </div>
    )
}