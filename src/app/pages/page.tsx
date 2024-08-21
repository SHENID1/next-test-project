import React, {Suspense} from 'react';
import {IPhoto} from "@/model/IPhoto";
import {Metadata} from "next";
import NotFound from "next/dist/client/components/not-found-error";
import ImagePreviewComponent from "@/components/ImagePreview/imagePreview.component";
import {Skeleton} from "antd";


export const revalidate = 10;

// const getCachedData = unstable_cache(async () => fetchData(), ['my-app-user'], {
//     revalidate: 10,
// })

export const metadata: Metadata = {
    title: 'Посты',
    description: 'крутое описание',
    openGraph: {
        title: "да я",
        description: "описание",
        locale: "ru-RU",
    }
}
const Page = async () => {
    // const data = await fetchData();
    const revalidatedData = await fetch(`http://localhost:5000/posts`, {
        next: {revalidate: 10},
    })
    const data: IPhoto[] = await revalidatedData.json()
    if (!data) NotFound()
    return (
        <>
            <Suspense fallback={<Skeleton active />}>
                <ImagePreviewComponent data={data}/>
            </Suspense>
        </>
    );
};

// export const generateStaticParams = async () => {
//     if (!data) {
//         return {
//             notFound: true,
//
//         }
//     }
//
//     return {
//         props: {
//             data
//         }, // will be passed to the page component as props
//         // revalidate: false,
//         revalidate: 60,
//     }
// }
export default Page;