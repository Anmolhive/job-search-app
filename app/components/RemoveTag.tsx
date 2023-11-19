'use client';

import { useState } from "react";

type Prop = {
    children: string;
}
const RemoveTag = ({ children }: Prop) => {
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: children }} />
        </>
    )
}

export default RemoveTag