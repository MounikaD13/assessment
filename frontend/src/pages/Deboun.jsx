import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Deboun() {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [error, setError] = useState('')

    function fetchUsers(searching) {
        const requestId = ++latestReq.current
        try {
            setLoading(true)
            setError("")
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/users?name_like=${searching}`
            )
            if (requestId !== latestReq.current) {
                return
            }
            setResults(response.data);
        } catch (err) {
            if (requestId !== latestReq.current) {
                return
            }
            setError(err.message)
            setResults([])
        } finally {
            if (requestId === latestReq.current) {
                setLoading(false)
            }
        }
    }

    const latestReq = useRef(0)
    useEffect(() => {
        if (!search.trim()) {
            setResults([])
            setError("")
            setLoading(false)
            return
        }
        const timer = setTimeout(() => {
            fetchUsers(search)
        }, 500)
        return () => clearTimeout(timer)
    }, [search])

    return (
        <div>
            {/* <h2>search</h2> */}
            <input type="text"
                placeholder='search name' value={search} className='border'
                onChange={(e) => setSearch(e.target.value)} />
            {
                loading &&
                <p>loading....</p>
            }
            {error &&
                <p>{error}</p>
            }
            {!loading && !error && search && results.length === 0 && (
                <p>No users found</p>
            )}
            {results.length > 0 && (
                <ul>
                    {results.map((user) => (
                        <li key={user.id}>
                            {user.name}-----{user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
