import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xEa5BD18c34Cf0f4BFb91505a539116B447362FD3");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Leaf Village Headband",
                description: "This NFT will give you access to NarutoDAO!",
                image: readFileSync("scripts/assets/hacker-wallpaper.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();