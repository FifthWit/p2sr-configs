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
            setConfigItems(result.items);
        };
        fetchData();
    }, []);

    return (
        <>
            {configItems.map((item, index) => (
                <ConfigPreview 
                thumbnail={configItems[index].thumbnail}
                description={configItems[index].description}
                type={configItems[index].type}
                player={configItems[index].Player}
                likes={configItems[index].Likes}
                id={configItems[index].id}
                collectionid={configItems[index].collectionId}
                key={index}
            />
            ))}
        </>
    )
}

export default Configitems;