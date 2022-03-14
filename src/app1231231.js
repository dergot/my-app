import fetch from 'node-fetch';

async function getMoviesFromApi() {
	fetch('http://demo.pasakebap.sk/products.php')
		.then((response) => response.json())
		.then((jsonData) => {
			// jsonData is parsed json object received from url
			// console.log(jsonData[1]);
			return jsonData;
		})
		.catch((error) => {
			// handle your errors here
			console.error(error);
		});
}

export default getMoviesFromApi;
