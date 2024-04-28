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
        setUploaded(true);
        const record = await pb.collection('config_entries').create(formData);
    }
    
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [config, setConfig] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    
    const handleThumbnailChange = (event) => {
        setThumbnail(event.target.files[0]);
    };
    
    const handleConfigChange = (event) => {
        setConfig(event.target.files[0]);
    };

    return (
        <>
        {uploaded ? (
            <div className="flex flex-col bg-primary dark:bg-dark-primary h-auto w-72 rounded-lg m-4 p-8 text-center items-center justify-center">
                <h1>Submitted!</h1>
            </div>
        ) : (
            <div className="flex flex-col bg-primary dark:bg-dark-primary h-auto w-72 rounded-lg m-4 p-8 text-center items-center justify-center">
                <h1>Upload Config!</h1>
                <form onSubmit={(event) => event.preventDefault()}>
                    <input  onChange={(event) => setName(event.target.value)} className="w-full rounded-md p-1 m-2" type="text" placeholder="Config Name" />
                    <input onChange={handleConfigChange} className="w-full rounded-md p-1 m-2" type="file" accept=".zip" />
                    <input   onChange={(event) => setType(event.target.value)} className="w-full rounded-md p-1 m-2" type="text" placeholder="Config Type" />
                    <label className='opaque'>^^ Types are ihud, ghost, hud, toasts, full.</label>
                    <input  onChange={(event) => setDescription(event.target.value)}  className="w-full rounded-md p-1 m-2" type="text" placeholder="Description (optional)" />
                    <label className='opaque' > Upload Thumbnail (optional)</label>
                    <input onChange={handleThumbnailChange} className="w-full rounded-md p-1 m-2" type="file" accept=".png, .jpg, .webp, .gif" />
    
                    <button onClick={submitConfig} className="special px-8">
                        Upload Config!
                    </button>
                </form>
            </div>
        )}
        </>
    )
}