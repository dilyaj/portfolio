import React from 'react'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-purple-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" 
                    exact
                    activeClassName="text-white" 
                    className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-yellow-300 text-4xl font-bold cursive tracking-widest">
                        Dilya
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-3 px-3 my-8 rounded text-red-200 hover:text-yellow-400"
                    activeClassName="text-red-100 bg-red-700" 
                    >
                        About Me
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-3 px-3 my-8 rounded text-red-200 hover:text-yellow-400"
                    activeClassName="text-red-100 bg-red-700" 
                    >
                        Projects
                    </NavLink>
                
                    <NavLink to="/post"
                    className="inline-flex items-center py-3 px-3 my-8 rounded text-red-200 hover:text-yellow-400"
                    activeClassName="text-red-100 bg-red-700" 
                    >
                        Blog Posts
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/dilyaj" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.linkedin.com/in/dilya-joseph/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://www.youtube.com/channel/UCBBKmgAo76QYqlUku4NeuKw/videos" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />                  
                </div>
            </div>
        </header>
    )
}
