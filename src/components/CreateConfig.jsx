import { useEffect } from "react";

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

    const btns = document.querySelectorAll(".create-tab-btn")

    // btns.forEach((btn) => {
    //     const underline = document.createElement("div");

    //     underline.style.content = ""
    //     underline.style. display = "flex"
    //     underline.style.left = "0"
    //     underline.style.top = "0"
    //     underline.style.width = "0%"
    //     underline.style.height = "4px"
    //     underline.style.backgroundColor = "white"
    //     underline.style.borderRadius = "200px"
    //     underline.style.transition = "all 0.2s ease"
    //     underline.style.justifyContent = "center"
    //     underline.style.marginLeft = "auto"
    //     underline.style.marginRight = "auto"
    //     underline.id = btn.id + "_underline"
    //     console.log(underline.id)

    //     btn.appendChild(underline)

    //     btn.setAttribute("active", false)
    //     if (btn.id == "hudBtn") {
    //         btn.setAttribute("active", true)
    //         document.querySelector("#" + btn.id + "_underline").style.width = "100%";
    //     }

    //     btn.addEventListener('click', () => {
    //         btns.forEach(otherBtn => {
    //             document.querySelector("#" + otherBtn.id + "_underline").style.width = "0%";
    //             otherBtn.setAttribute("active", false)
    //         });
    //         document.querySelector("#" + btn.id + "_underline").style.width = "100%";
    //         btn.setAttribute("active", true)
    //         const contents = document.querySelectorAll(".create-content");
    //         contents.forEach((content) => {
    //             content.style.display = "none"
    //         })

    //         if (btn.id == "hudBtn") {
    //             document.querySelector("#hud").style.display = "block";
    //         } else if (btn.id == "ihudBtn") {
    //             document.querySelector("#ihud").style.display = "block";
    //         } else if (btn.id == "toastsBtn") {
    //             document.querySelector("#toasts").style.display = "block";
    //         } else {
    //             document.querySelector("#ghost").style.display = "block";
    //         }
    //     });

    //     btn.addEventListener("mouseover", () => {
    //         document.querySelector("#" + btn.id + "_underline").style.width = "100%";
    //     })
    //     btn.addEventListener("mouseleave", () => {
    //         if (btn.getAttribute("active") !== "true") {
    //             document.querySelector("#" + btn.id + "_underline").style.width = "0%";
    //         }
    //     })
    // });

    changeTab(tab) {
        document.querySelectorAll(".create-content").forEach((content) => {
            content.style.display = "none";
        })
        if (tab == "hud") {
            document.querySelector("#hud").style.display = "block"
        } else if (tab == "ihud") {
            document.querySelector("#ihud").style.display = "block"

        } else if (tab == "toasts") {
            document.querySelector("#toats").style.display = "block"
        } else {
            document.querySelector("#ghost").style.display = "block"
        }
    }

    return (
        <div className="bg-primary dark:bg-dark-primary rounded-lg mt-20 overflow-hidden barlow-condensed-semibold text-left">
            {/* <h1>This is in BETA, would not recommend using until wolf finishes</h1> */}
            <div style={{background: "#1A1A1D"}} className="w-full flex flex-row justify-between flex-grow-1 px-24">
                <button onClick={changeTab("hud")} id="hudBtn" className="create-tab-btn">
                    <span>Hud</span>
                    <div className="flex left-0 top-0 w-0 h-1 rounded-2xl bg-white justify-center ml-auto mr-auto"></div>
                </button>
                <button id="ihudBtn" className="create-tab-btn">
                    <span>Ihud</span>
                </button>
                <button id="toastsBtn" className="create-tab-btn">
                    <span>Toasts</span>
                </button>
                <button id="ghostBtn" className="create-tab-btn">
                    <span>Ghost</span>
                </button>
            </div>

            <div className="px-24 py-6">

                <div id="hud" className="create-content">
                    <h3>Hud</h3>
                </div>

                <div style={{display: "none"}} id="ihud" className="create-content">
                    <h3>Ihud</h3>
                </div>

                <div style={{display: "none"}} id="toasts" className="create-content">
                    <h3>Toasts</h3>
                </div>

                <div style={{display: "none"}} id="ghost" className="create-content">
                    <h3>Ghost</h3>
                </div>

            </div>

            <div style={{background: "#1A1A1D"}} className="flex w-full justify-end">
                <button className="bg-blue-500 hover:rounded-md hover:bg-blue-700 text-2xl" onClick={handleDownload}>Download</button>
            </div>
        </div>
    );
};

export default CreateConfig;
