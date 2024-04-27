import { useState, useEffect } from 'react'
import ConfigPreview from './ConfigPreview'
import pb from '../lib/pocketbase'

function Configitems(){
    const [configItems, setConfigItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await pb.collection('config_entries').getList(1, 20, {
                filter: ''
            });
            const sortedItems = result.items.sort((a, b) => b.Likes - a.Likes);
            setConfigItems(sortedItems);
        };
        fetchData();
    }, []);

    return (
        <div className='flex flex-wrap flex-row w-screen h-auto my-12'>
            <h1 className='text-center text-2xl font-bold w-full'>Configs by more Players!</h1>
            {configItems.map((item, index) => (
                <ConfigPreview 
                thumbnail={configItems[index].thumbnail}
                description={configItems[index].description}
                type={configItems[index].type}
                player={configItems[index].Player}
                likes={configItems[index].Likes}
                id={configItems[index].id}
                collectionid={configItems[index].collectionId}
                title={configItems[index].name}
                file={configItems[index].config_file_zip}
                key={index}
            />
            ))}
        </div>
    )
}

export default Configitems;