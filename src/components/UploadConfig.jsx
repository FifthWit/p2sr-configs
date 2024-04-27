import pb from '../lib/pocketbase'
import { useState } from 'react';
export default function UploadConfig() {
    async function submitConfig() {
        const formData = {
        "Player": pb.authStore.model.username,
        "Likes": 0,
        "type": type,
        "description": description,
        "name": name,
        "thumbnail": thumbnail,
        "config_file_zip": config,
    }
        const record = await pb.collection('config_entries').create(formData);
    }
    
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [config, setConfig] = useState(null);
    
    const handleThumbnailChange = (event) => {
        setThumbnail(event.target.files[0]);
    };
    
    const handleConfigChange = (event) => {
        setConfig(event.target.files[0]);
    };

    return (
        <div className="flex flex-col bg-primary dark:bg-dark-primary h-auto w-72 rounded-lg m-4 p-8 text-center items-center justify-center">
            <h1 className="font-bold text-xl">Upload Config!</h1>
            <form onSubmit={(event) => event.preventDefault()}>
                <input  onChange={(event) => setName(event.target.value)} className="w-full rounded-md p-1 m-2" type="text" placeholder="Config Name" />
                <input onChange={handleConfigChange} className="w-full rounded-md p-1 m-2" type="file" accept=".zip" />
                <input   onChange={(event) => setType(event.target.value)} className="w-full rounded-md p-1 m-2" type="text" placeholder="Config Type" />
                <label className='text-md text-gray-400'>^^ Types are ihud, ghost, hud, toasts, full.</label>
                <input  onChange={(event) => setDescription(event.target.value)}  className="w-full rounded-md p-1 m-2" type="text" placeholder="Description (optional)" />
                <label className='text-md text-gray-400' > Upload Thumbnail (optional)</label>
                <input onChange={handleThumbnailChange} className="w-full rounded-md p-1 m-2" type="file" accept=".png .jpg .webp .gif" />

                <button onClick={submitConfig} className="w-full rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 transition-all">
                    Upload Config!
                </button>
            </form>
        </div>
    )
}