const pburl = import.meta.env.VITE_POCKETBASE_URL;
import pb from '../lib/pocketbase';
import { useState } from "react";

export default function ConfigPreview({ thumbnail, description, type,  player, likes, id, collectionid, file, title}) {
    function downloadfile(){
        window.open(`${pburl}/api/files/${collectionid}/${id}/${file}`);
    }

    async function Like(bool){
        if (bool){
            setLikes(Likes + 1);
            setLiked(true);
        } else {
            setLikes(Likes - 1);
            setLiked(false);
        }

        const data = {
            "Player": player,
            "Likes": Likes,
            "type": type,
            "description": description,
            "name": title,
        }

        const record = await pb.collection('config_entries').update(id, data);
        console.log(record);
    }

    const [Liked, setLiked] = useState(false);
    const [Likes, setLikes] = useState(likes);
    return (
        <div className="bg-primary dark:bg-dark-primary w-56 h-76 m-4 rounded-lg hover:rounded-3xl transition-all group shadow-xl flex flex-col">
            <img src={`${pburl}/api/files/${collectionid}/${id}/${thumbnail}`}
            alt="" className="rounded-t-lg group-hover:rounded-t-3xl transition-all aspect-video"/>
            <div className="m-4 items-center justify-center">
                <h1 className='font-bold text-xl'>{title}</h1>
                <h1 className="font-semibold">{type} theme</h1>
                <h1>By {player}</h1>
                <p className="text-gray-400">{description}</p>
                <p>Likes: {Likes}</p>
                {pb.authStore && pb.authStore.model && pb.authStore.model.username &&
                    (Liked === false ? (
                        <button onClick={() => Like(true)} className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-2 transition-all">Like</button>
                    ) : (
                        <button onClick={() => Like(false)} className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-2 transition-all">Unlike</button>
                    ))
                }
                <button onClick={downloadfile} className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-2 transition-all">Download</button>
            </div>
        </div>
    )
}