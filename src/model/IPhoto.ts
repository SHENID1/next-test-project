export interface IPhoto {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface PageProps {
    data?: IPhoto[];
}

// {
//     "albumId": 1,
//     "id": 1,
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },