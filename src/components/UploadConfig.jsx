import pb from '../lib/pocketbase'


export default function UploadConfig() {
    return (
        <div className="flex flex-col bg-primary dark:bg-dark-primary h-auto w-64 rounded-lg m-4 py-8">
            <h1 className="font-bold text-xl">Upload Config!</h1>
            <form onSubmit={(event) => event.preventDefault()}>
                <input className="rounded-md p-1 m-2" type="text" placeholder="Config Name" />
                <input className="rounded-md p-1 m-2" type="text" placeholder="Config Value" />
                <button>Upload Config!</button>
            </form>
        </div>
    )
}