import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const NavigationList = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const redirectAnecdotes = () => {
        navigate('/anecdotes')
    }
    const redirectMyAnecdotes = () => {
        navigate('/myanecdotes')
    }
    const redirectCreateAnecdotes = () => {
        navigate('/share')
    }

    return (
        <>
            <p className="text-navigation-anecdotes" style={location.pathname === '/anecdotes' ? {background: '#111', color: '#fff'} : {}} onClick={redirectAnecdotes}>Anecdotes</p>
            <p className="text-navigation-anecdotes" style={location.pathname === '/myanecdotes' ? {background: '#111', color: '#fff'} : {}} onClick={redirectMyAnecdotes}>My anecdotes</p>
            <p className="text-navigation-anecdotes" style={location.pathname === '/share' ? {background: '#111', color: '#fff'} : {}} onClick={redirectCreateAnecdotes}>Share an anecdote</p>
        </>
    )
}

export default NavigationList