'use client'

import React from 'react';
import Image from "next/image";
import cl from "@/components/ImagePreview/style.module.css";
import {IPhoto} from "@/model/IPhoto";
import {NextPage} from "next";


interface IProps {
    photo: IPhoto;
}

const ImageComponent: NextPage<IProps> = ({photo}) => {
    // const [loading, setLoading] = useState(true);

    return (
        <>
            {/*{loading ? <Skeleton.Avatar active shape={"square"} size={600}/> : null}*/}
            <Image src={photo.url} alt={""} className={cl.image} width={600} height={600}
                   placeholder="blur"
                   blurDataURL={photo.url}
                // onLoad={() => {
                //     setLoading(false);
                // }}
            />
        </>
    );
};

export default ImageComponent;