import React from 'react';
import {NextPage} from 'next';
import cl from './style.module.css'
import Image from 'next/image'
import ImgMilitary from '../../../public/svo.jpg'

const Page: NextPage = () => {
    return (
        <div className={cl.center}>
            <Image src={ImgMilitary} alt="" className={cl.image}
                   placeholder="blur"
                   quality={100}
                   fill
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