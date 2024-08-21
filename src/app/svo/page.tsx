import React from 'react';
import {NextPage} from 'next';
import cl from './style.module.css'
import Image from 'next/image'
import ImgMilitary from '$/svo.jpg'
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'SVO',
    description: 'ZOV',
    openGraph: {
        title: "O o SVO",
        description: "ZOVZOVZOVZOV",
    }
}

const Page: NextPage = () => {
    return (
        <div className={cl.center}>
            <Image src={ImgMilitary} alt="" className={cl.image}
                   placeholder="blur"
                   quality={100}

                   fill={true}
                   sizes="100vw"
                   style={{
                       objectFit: 'cover',
                   }}
            />


            <div className={cl.t}>
                SVO
            </div>
        </div>
    );
};

export default Page;