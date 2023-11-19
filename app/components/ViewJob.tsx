import ApplyFprm from "./ApplyForm/ApplyForm";
import GetJob from "./GetJob";
type Prop = {
    language: string;
    id: string;
}

const ViewJob = ({ language, id }: Prop) => {
    return (
        <div className="py-5 h-screen shadow-lg overflow-y-auto" style={{ background: 'url(https://picsum.photos/1740/1160)' }}>
            <div className="container mx-auto relative">
                <div className="glass p-5 rounded-lg">
                    {language && id && <GetJob language={language} id={id} />}
                    <ApplyFprm />
                </div>
            </div>
        </div>
    )
}

export default ViewJob