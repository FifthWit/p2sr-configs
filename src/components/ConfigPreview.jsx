

export default function ConfigPreview({ thumbnail, description, type,  player }) {
    return (
        <div className="bg-primary dark:bg-dark-primary w-56 h-72 m-4 rounded-lg hover:rounded-3xl transition-all group shadow-xl flex flex-col">
            <img src={thumbnail} alt="" className="rounded-t-lg group-hover:rounded-t-3xl transition-all"/>
            <div className="">
                <h1 className="font-bold">{type} theme</h1>
                <h1>By {player}</h1>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    )
}