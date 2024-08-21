'use client'

import React from 'react';
import {NextPage} from "next";
import { useParams } from 'next/navigation'


const Page: NextPage = () => {
    const params = useParams<{ id: string }>()
    return (
        <div>
            fffff<br/>
            {params?.id}

        </div>
    );
};

export default Page;