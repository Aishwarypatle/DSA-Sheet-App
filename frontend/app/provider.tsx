"use client"

import { Provider, useDispatch } from "react-redux"
import { store } from "@/redux/store"
import { useEffect } from "react"
import { setCredentials } from "@/redux/slices/authSlice"

function InitAuth({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("user")

        if (token && user) {
            dispatch(
                setCredentials({
                    token,
                    user: JSON?.parse(user),
                })
            )
        }
    }, [])

    return <>{children}</>
}

export default function Providers({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Provider store={store}>
            <InitAuth>{children}</InitAuth>
        </Provider>
    )
}