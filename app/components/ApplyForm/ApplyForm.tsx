'use client';
import { RootState } from "@/app/store/store";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setName, setEmail, setJob, setCoverLatter, setResume } from "@/app/store/slice";
import { useRouter } from "next/navigation";

const ApplyFprm = () => {
    const { job, name, email, coverLetter, resume } = useSelector((state: RootState) => state.jobApplied);
    const dispatch = useDispatch();

    const router = useRouter();
    const [showForm, setShowForm] = useState(false);
    const formContainer = useRef<HTMLFormElement>(null);

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('')
    const [userCoverLatter, setUserCoverLatter] = useState('');
    const [userResume, setUserResume] = useState<File | null>(null);
    const [fileUrl, setFileUrl] = useState('');

    const handelNameChane = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const nameRegex = /^[A-Za-z\s.'-]+$/;
        if (!nameRegex.test(value)) event.target.classList.add('input-error');
        else event.target.classList.remove('input-error');
        setUserName(value);
    }

    const handelEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (emailRegex.test(value)) event.target.classList.remove('input-error');
        else event.target.classList.add('input-error');
        setUserEmail(value);
    }

    const handelCoverChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setUserCoverLatter(value);
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        if (file && file.type === 'application/pdf') {
            setUserResume(file);
            setFileUrl(file.name);
            event.target.classList.remove('input-error');
        } else {
            event.target.classList.add('input-error');
            setUserResume(null);
            alert('Please select a PDF file.');
        }
    };

    const [loading, setLoading] = useState(false);

    const handelSubmit = async (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (userName !== '' || userEmail !== '' || userResume !== null) {
            const heading = document.querySelector('h1');
            if (heading) {
                setLoading(true);
                const userJob: string = heading?.innerText;
                await dispatch(setName(userName));
                await dispatch(setEmail(userEmail));
                await dispatch(setJob(userJob));
                await dispatch(setCoverLatter(userCoverLatter))
                await dispatch(setResume(fileUrl));
                setLoading(false);
                router.push('/sucess');
            }
        }
    }

    const handelApply = () => {
        setShowForm(true);
    }
    return (
        <>
            <button onClick={handelApply} className="btn w-full glass my-5 bg-indigo-600 text-white hover:bg-indigo-950">Apply</button>
            {showForm &&
                <div className="inset-0 overflow-y-auto sticky">
                    <div className="w-full md:w-1/2 mx-auto glass p-3 shadow-xl rounded-2xl" style={{ background: 'rgba(255,255,255,.9)' }}>
                        <div className="w-full text-end">
                            <button onClick={() => setShowForm(false)} className="btn btn-circle btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                        <form id="applyForm" ref={formContainer} className="card-body">
                            <div className="form-control">
                                <input value={userName} onChange={handelNameChane} type="text" placeholder="Name" className="input bg-neutral-600 text-white placeholder:text-white" />
                            </div>
                            <div className="form-control">
                                <input value={userEmail} onChange={handelEmailChange} type="email" placeholder="Email" className="input bg-neutral-600 text-white placeholder:text-white" />
                            </div>
                            <div className="form-control">
                                <textarea value={userCoverLatter} onChange={handelCoverChange} placeholder="Cover letter" className="textarea textarea-bordered textarea-lg w-full bg-neutral-600 text-white placeholder:text-white" ></textarea>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Resume</span>
                                </label>
                                <input onChange={handleFileChange} type="file" className="file-input file-input-bordered w-full" accept=".pdf" />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handelSubmit} className="btn btn-primary" disabled={loading ? true : false} >
                                    {loading ? <span className="loading loading-spinner"></span> : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default ApplyFprm