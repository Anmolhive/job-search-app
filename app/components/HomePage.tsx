'use client';
import { useState } from "react"

const HomePage = () => {
    const [language, setLanguage] = useState('');
    const handelSearch = () => {
        window.location.href = `/jobs/${language}`;
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://picsum.photos/1740/1160)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl glass p-10 shadow-lg rounded-lg">
                    <h1 className="mb-5 text-5xl font-bold">Unlock Your Next Coding Adventure!</h1>
                    <p className="mb-5">Ready to level up your career? Enter your preferred programming language below and discover exciting developer opportunities that match your skills.</p>
                    <div className="flex gap-5">
                        <input value={language} onChange={event => setLanguage(event.target.value)} className="input input-bordered join-item text-slate-950 w-full" placeholder="E.g., JavaScript, Python, Java.." />
                        <button onClick={handelSearch} className="btn glass bg-indigo-700">Find Jobs</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage