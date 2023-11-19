import TestComponent from "@/app/components/TestComponent";
import ViewJob from "@/app/components/ViewJob";
const page = async ({ params }: { params: { slug: string } }) => {
    
    const language = decodeURIComponent(Object.values(params)[0]);
    const id = Object.values(params)[1];
    return (
        <ViewJob language={language} id={id} />
    )
}

export default page