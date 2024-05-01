const CreateConfig = () => {
    const ghostProximityFade = document.querySelector("#ghostProximityFade");

    const handleDownload = () => {
        let configFile =
`/////////////////////////////////////
// P2SR Configs made by Wolfboy248 //
/////////////////////////////////////

// ghost settings
ghost_proximity_fade ${ghostProximityFade.value}
`
        const blob = new Blob([configFile], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "p2sr-config.cfg";
        link.click();

        URL.revokeObjectURL(url);
    }

    return (
        <div>
            <h1>This is in BETA, would not recommend using until wolf finishes</h1>
            <input id="ghostProximityFade"/>
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};

export default CreateConfig;
