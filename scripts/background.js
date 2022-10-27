chrome.runtime.onMessage.addListener(function(message, sender, senderResponse) {
    if (message === "loaded") {
    fetch('https://dog.ceo/api/breeds/image/random'
        // method: "GET",
        // withCredentials: true,
        // headers: {
        //     'X-RapidAPI-Key': '3a0459353amsh5d58f0cb91c5ebep144016jsn2e9b23ae44f3',
        //     'X-RapidAPI-Host': 'dog-api.p.rapidapi.com',
        //     'Content-Type': 'application/json'
        // }
    )
        .then((data) => data.json())
        .then((data) => {
            // do stuff with data
            console.log(data);
            // dogPic.setAttribute('src', `${data.message}`);
            senderResponse(`${data.message}`);
            // let allImages = document.getElementsByTagName('img');
            // allImages[0].src = `${data.message}`;
        });
        console.log("Background function running")
    return true;
    }
})