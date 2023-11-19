'use client';

import { RootState } from "@/app/store/store";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

const Sucess = () => {
    const { job, name, email, coverLetter, resume } = useSelector((state: RootState) => state.jobApplied);

    const [userJob, setUserJob] = useState(job);
    const [userName, setUserName] = useState(name);
    const [userEmail, setUserEmail] = useState(email);
    const [userCoverLatter, setUserCoverLatter] = useState(coverLetter);
    const [userResume, setUserResume] = useState(resume);

    useEffect(()=>{
        setUserJob(job);
        setUserName(name);
        setUserEmail(email);
        setUserCoverLatter(coverLetter);
        setUserResume(resume);
    },[job, email, coverLetter, resume])


    return (
        <div className="py-5 h-screen shadow-lg overflow-y-auto" style={{ background: 'url(https://picsum.photos/1740/1160)' }}>
            <div className="container mx-auto h-full">
                <div className="glass p-10 rounded-lg h-full">
                    <h1 className="text text-4xl text-green-600 font-bold">&#128519; Application Submitted Successfully!</h1>
                    <div className="py-5">
                        <p className="text-white">Thank you, {userName}, for applying for the position of {userJob}</p>
                        <ul className="menu glass shadow-2xl mx-auto rounded-box my-5 bg-indigo-600">
                            <li>
                                <h2 className="menu-title text-white">Your Application Details:</h2>
                                <ul className="text-white">

                                    <li><span>Name: <strong>{userName}</strong></span></li>
                                    <li><span>Job: <strong>{userJob}</strong></span></li>
                                    <li><span>Email: <strong>{userEmail}</strong></span></li>
                                    <li><span>Cover: <strong>{userCoverLatter}</strong></span></li>
                                    <li><span>Resume: <strong>{userResume}</strong></span></li>
                                </ul>
                            </li>
                        </ul>
                        <p className="text-white">We will review your application and contact you shortly. Good luck!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sucess