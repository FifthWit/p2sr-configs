const pburl = 'http://127.0.0.1:8090';

export default function ConfigPreview({ thumbnail, description, type,  player, likes, id, collectionid}) {
    return (
        <div className="bg-primary dark:bg-dark-primary w-56 h-72 m-4 rounded-lg hover:rounded-3xl transition-all group shadow-xl flex flex-col">
            
            <img src={`${pburl}/api/files/${collectionid}/${id}/${thumbnail}`}
            alt="" className="rounded-t-lg group-hover:rounded-t-3xl transition-all aspect-video"/>
            <div className="">
                <h1 className="font-bold">{type} theme</h1>
                <h1>By {player}</h1>
                <p className="text-gray-300">{description}</p>
                <p>Likes: {likes}</p>
            </div>
        </div>
    )
}