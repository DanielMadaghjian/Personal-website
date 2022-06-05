import React from "react";
import { Link, Outlet } from "react-router-dom";
import './App.css';

export function Main() {
    return (
        <div>
            
            <Header></Header>
            <Titles></Titles>
            
            <Footer></Footer>
        </div>
    )
} 
//test 
export function Header() {
    return (
        <div>
        <header>
            <h1 class="App-header">Daniel Madaghjian</h1>
        </header>
        
        </div>
    )
}

export function Footer() {
    return (
        <div>
            <Outlet></Outlet>
        <footer>
            <br/><br/><p class = "App">Copyright 2022</p>
        </footer>
        
        </div>
       
    )
}

export function Titles() {
    return (
        <div>
            <nav class = "App-titles">
                <Link to="Home">Home</Link>
                <Link to="About">About</Link>
                <Link to="MyWork">MyWork</Link>
                <Link to="Contact">Contact</Link>
        </nav><br/>
        
        </div>
        
    )
}
export function Home() {
    return (
        <div>
            
            <h2>Home</h2>
            <Outlet></Outlet>
        </div>
        
    )
}

export function About() {
    return (
        <div>
            <h2>About</h2>
            <Outlet></Outlet>
        </div>      
    )
}

export function MyWork() {
    return (
        <div>
            <h2>MyWork</h2>
            <Outlet></Outlet>
        </div>  
    )
}

export function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <Outlet></Outlet>
        </div>
        
    )
}