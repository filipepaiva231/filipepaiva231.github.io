const keyWrite = "SGUQ7K6F7GYGOPAQ";
const keyRead = "XC2I9Y61ICW0VMV5";

async function sendToServer() {
    const url = `https://api.thingspeak.com/update?api_key=${keyWrite}&field1=0`;
    const response = await fetch(url, {
        method: "GET",
        headers: {

        }
    })

    console.log(response.json());
}