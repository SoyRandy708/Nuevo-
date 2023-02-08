const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=8"
const sectionVideos = document.getElementById("videos")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74db032365mshfa27a263d126152p1c1961jsn5f29f7e068b9',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API)
        let vista = `
            ${videos.items.map(video => `
            <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
                <img class="video-foto" src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}">
                <h3 class="video-titulo">${video.snippet.title}</h3>
            </a>
            `).join('')}
        `
        sectionVideos.innerHTML = vista
    } catch(error) {
        console.log(error)
    }
})()


