const pburl = import.meta.env.VITE_pocketbaseurl;
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
        <div className="bg-primary dark:bg-dark-primary w-56 h-76 m-4 rounded-lg transition-all group shadow-xl flex flex-col">
            <img src={`${pburl}/api/files/${collectionid}/${id}/${thumbnail}`}
            alt="" className="thumbnail"/>
            <div className="config-preview-content">
                <h1>{title}</h1>
                <h2>{type} theme</h2>
                <h2>By {player}</h2>
                <p className="opaque">{description}</p>
                <p>Likes: {Likes}</p>
                {pb.authStore && pb.authStore.model && pb.authStore.model.username &&
                    (Liked === false ? (
                        <button onClick={() => Like(true)} className="special">Like</button>
                    ) : (
                        <button onClick={() => Like(false)} className="special">Unlike</button>
                    ))
                }
                <button onClick={downloadfile} className="special">Download</button>
            </div>
        </div>
    )
}