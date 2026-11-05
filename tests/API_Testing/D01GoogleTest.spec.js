import {test, expect} from "@playwright/test"

test("Google API Testing", async({request})=>{
    
    const res = request.get("https://www.google.com");

    console.log("Response Code: " + (await res).status());
    
})

