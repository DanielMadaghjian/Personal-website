import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Main() {
    return (
        <div>
            
            <Header></Header>
            <nav>
                <Link to="Home">Home</Link>
                <Link to="About">About</Link>
                <Link to="MyWork">MyWork</Link>
                <Link to="Contact">Contact</Link>
            </nav><br/>
            
            <Footer></Footer>
        </div>
    )
} 

export function Header() {
    return (
        <div>
        <header>
            <center><h1>Daniel Madaghjian</h1></center>
        </header>
        
        </div>
    )
}

export function Footer() {
    return (
        <div>
            <Outlet></Outlet>
        <footer>
            <br/><br/><center>Copyright 2022</center>
        </footer>
        
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