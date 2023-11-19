import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const language = searchParams.get('language');
    if (language) {
        try {
            const response = await fetch(`https://findwork.dev/api/jobs/?search=${language}&sort_by=relevance`, {
                headers: {
                    Authorization: 'Token 99077419c399436197245091a584cf46fb0d61a5',
                },
            });
            if (response.ok) {
                const results = await response.json();
                if (id) {
                    const datas: [] = results?.results;
                    if (datas && datas.length > 0) {
                        const returnData = datas.filter((data: { id: string }) => data.id === id);
                        if (returnData && returnData.length > 0)
                            return NextResponse.json({ result: returnData }, { status: 200 });
                        else return NextResponse.json({ result: 'Not fund' }, { status: 200 });
                    }
                    return NextResponse.json({ results: 'sucess' }, { status: 200 });
                } else {
                    return NextResponse.json(results, { status: 200 });
                }
            }
        } catch (error) {
            return NextResponse.json({ ERROR: error }, { status: 500 });
        }
    } else {
        return NextResponse.json({ ERROR: 'Parameter not found' }, { status: 500 });
    }
}