const API_KEY = process.env.TMDB_API_KEY;
const ACCOUNT_ID = process.env.ACCOUNT_ID;
const AUTH_TOKEN = process.env.AUTH_TOKEN;

const addToWatchlist = async (movieId) => {
    const options = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': AUTH_TOKEN,
        },
        body: JSON.stringify({
            media_type: 'movie',
            media_id: movieId,
            watchlist: true
        })
    };
    try {
        const response = await fetch(`https://api.themoviedb.org/3/account/${ACCOUNT_ID}/watchlist?api_key=${API_KEY}`, options);
        const responseData = await response.json();
        if (!response.ok) throw new Error('Failed to add to watchlist');
        return responseData;
    } catch (error) {
        throw new Error(error.message || 'Not able to add movie to the watchlist, Please try again later.');
        throw error;
    }
};
export {addToWatchlist};