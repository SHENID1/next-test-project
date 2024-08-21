"use client"

import React, {FC} from 'react';
import cl from "./style.module.css"
import {IPhoto} from "@/model/IPhoto";
import ImageComponent from "@/app/ui/image/image.component";

interface ImagePreviewProps {
    data: IPhoto[];
}

const ImagePreviewComponent: FC<ImagePreviewProps> = ({data}) => {

    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                {data?.map((photo: IPhoto) => (
                    <div key={photo.id} className={cl.previewBackground}>
                        <div className={cl.preview}>
                            <ImageComponent photo={photo}/>
                            <p>{photo.title}</p>
                        </div>


                    </div>
                ))}
            </div>

        </div>
    );
};

export default ImagePreviewComponent;