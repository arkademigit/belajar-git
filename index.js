const getMovie = async () => {
	const options = {
		method: 'GET',
		url: 'https://moviesverse1.p.rapidapi.com/get-trending-trailers',
		headers: {
			'X-RapidAPI-Key': '7bf6656ad3mshbc4e1ffded286f5p1b9769jsn2bb7e62d3674',
			'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
		}
	}
	try {
		const response = await axios.request(options)
		const trailerList = response.data && response.data.trailers
		return trailerList || []
	} catch (error) {
		console.error(error)
	}
}

document.addEventListener('DOMContentLoaded', async () => {
	const trailerList = await getMovie()

	const movieList = document.getElementById('movieList')

	trailerList.forEach((trailer) => {
		const movieItem = document.createElement('li')
		movieItem.className = 'movie-item'

		const poster = document.createElement('img')
		poster.src = trailer.image
		poster.alt = trailer.title

		const trailerDetail = document.createElement('div')
		trailerDetail.className = 'movie-details'

		const title = document.createElement('h2')
		title.className = 'movie-title'
		title.textContent = trailer.title

		const released = document.createElement('p')
		released.className = 'movie-year'
		released.textContent = `Release Date : ${trailer.releaseDate}`

		const trailerLength = document.createElement('p')
		trailerLength.className = 'movie-year'
		trailerLength.textContent = `Trailer length : ${trailer.trailerLength}`

		trailerDetail.appendChild(title)
		trailerDetail.appendChild(released)
		trailerDetail.appendChild(trailerLength)

		movieItem.appendChild(poster)
		movieItem.appendChild(trailerDetail)

		movieList.appendChild(movieItem)
	})
})
