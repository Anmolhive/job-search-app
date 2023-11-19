import { convertDate } from "@/app/utility/utility";

const page = async ({ params }: { params: { slug: string } }) => {
    type Data = {
        id: string;
        role: string;
        company_name: string;
        employment_type: string;
        location: string;
        logo: string;
        date_posted: string;
    }
    const language = decodeURIComponent(Object.values(params)[0]);
    console.log(language);
    async function fetchData() {
        try {
            const response = await fetch(`/api/getjobs?language=${language}`, { cache: 'no-cache' });
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    const data = await fetchData();
    if (data) {
        const results = data?.results;
        if (results && results.length > 0) {
            return (
                <div className="py-5 h-screen overflow-y-auto" style={{ background: 'url(https://picsum.photos/1740/1160)'}}>
                    <div className="container mx-auto">
                        <div className="overflow-x-auto">
                            <table style={{ background: 'rgba(255, 255, 255, .8)' }} className="table glas">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Job</th>
                                        <th>Posted Date</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {results.map((result: Data) => (
                                        <tr key={result.id}>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={result.logo} alt={result.company_name} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{result.company_name}</div>
                                                        <div className="text-sm opacity-50">{result.location}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {result.role}
                                                <br />
                                                {result.employment_type ? <span className="badge badge-ghost badge-sm">{result.employment_type}</span> : null}
                                            </td>
                                            <td>{convertDate(result.date_posted)}</td>
                                            <th>
                                                <a href={`/jobs/${language}/${result.id}`} className="btn bg-indigo-700 text-white hover:bg-neutral-900 glass">Details</a>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                                {/* foot */}
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://picsum.photos/1740/1160)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Sorry &#128532;</h1>
                            <p className="mb-5">No result for this <span className="text text-red-500"><strong>{language}</strong></span></p>
                            <a href="/" className="btn btn-primary">Try Other Language</a>
                        </div>
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://picsum.photos/1740/1160)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Sorry &#128532;</h1>
                        <p className="mb-5"><span className="text-rose-600"><strong>Some techinical issue occoure</strong></span></p>
                        <a href="/" className="btn btn-primary">Try Again</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default page