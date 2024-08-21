import {IPhoto} from "@/model/IPhoto";

export const fetchData = async () => {
    const revalidatedData = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`, {
        next: {revalidate: 10},
    })
    const d: IPhoto[] = await revalidatedData.json()

    return d
}
