import RemoveTag from "./RemoveTag";
import { convertDate } from "../utility/utility";
type Job = {
    id: string;
    role: string;
    company_name: string;
    employment_type: string;
    location: string;
    remote: string;
    logo: string;
    text: string;
    date_posted: string;
    keywords: string[];
}

type Prop = {
    language: string;
    id: string;
}
const GetJob = async ({ language, id }: Prop) => {
    const response = await fetch(`https://job-search-app-amber.vercel.app/api/getjobs?language=${language}&id=${id}`, { cache: 'force-cache' });
    const result = await response.json();
    const job: Job = result.result[0];

    return (
        <>
            <div className="pt-10 text-white">
                <div className="flex gap-10 items-center pb-10">
                    {job.logo &&
                        <div className="avatar">
                            <div className="w-24 mask mask-hexagon">
                                <img src={job.logo} alt={job.company_name} />
                            </div>
                        </div>}
                    {job.role && <h1 className="text-4xl text-indigo-500 font-bold">{job.role}</h1>}
                </div>
                {job.company_name && <p className="text-lg"><strong>Organization: <span className="text-cyan-500">{job.company_name}</span></strong></p>}
                {job.employment_type && <p className="text-lg"><strong>Employment type: <span className=" text-cyan-500">{job.employment_type}</span></strong></p>}
                {job.location && <p className="text-lg"><strong>Location: <span className=" text-cyan-500">{job.location}</span></strong></p>}
                {job.remote && <p className="text-lg"><strong>Remote: <span className=" text-cyan-500">Yes</span></strong></p>}
                {job.date_posted && <p className="text-lg"><strong>Date posted: <span className=" text-cyan-500">{convertDate(job.date_posted)}</span></strong></p>}
                {job.text && <div className="text-lg py-5">
                    <RemoveTag>
                        {job.text}
                    </RemoveTag>
                </div>}
                {job.keywords && job.keywords.length > 0 && <ul className="menu glass shadow-2xl w-full md:w-2/6 mx-auto rounded-box" style={{ background: 'rgba(245,158,11,.6)' }}>
                    <li>
                        <h2 className="menu-title text-white">Required Skills</h2>
                        <ul className="text-white">
                            {job.keywords.map(keyword => (
                                <li key={keyword}><a target="_blank" href={`https://www.google.com/search?q=${keyword}`}><strong>{keyword}</strong></a></li>
                            ))}
                        </ul>
                    </li>
                </ul>}
            </div>
        </>
    )
}

export default GetJob