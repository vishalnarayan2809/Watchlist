# Movie Watchlist App

A responsive web application that allows users to search for movies and save them to a personal watchlist.

#Live link
https://watchhhhlist.netlify.app/

## Features

- Search for movies using the OMDB API
- View detailed information about each movie including:
  - Title
  - IMDb Rating
  - Runtime
  - Genre
  - Plot summary
  - Movie poster
- Add movies to your watchlist
- Remove movies from your watchlist
- Persistent storage using localStorage
- Fully responsive design that works on desktop and mobile devices

## How to Use

### Search Page
1. Open the application and start on the search page
2. Enter a movie title in the search bar
3. Click the "Search" button to find movies
4. Browse through the search results
5. Click "Watchlist" on any movie to add it to your personal watchlist

### Watchlist Page
1. Click "My Watchlist" in the top right corner to view your saved movies
2. Browse through your saved movies
3. Click "Remove" on any movie to remove it from your watchlist
4. If your watchlist is empty, click "Let's add some movies" to return to the search page

## Project Structure

```
Watchlist/
├── assets/
│   ├── add.png
│   ├── remove.png
│   ├── reel.png
│   ├── search.png
│   └── star.png
├── search/
│   ├── index.html     # Search page HTML
│   ├── script.js      # Search functionality
│   └── style.css      # Styling for search page
├── watchlist/
│   ├── watchlist.html # Watchlist page HTML
│   ├── script.js      # Watchlist functionality
│   └── style.css      # Styling for watchlist page
└── README.md          # Project documentation
```

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- OMDB API for movie data
- localStorage for data persistence
- Responsive design principles

## API Information

This project uses the [OMDB API](http://www.omdbapi.com/) to fetch movie data. The API allows:
- Searching for movies by title
- Retrieving detailed information for specific movies by IMDb ID

## Future Enhancements

- Add user authentication
- Implement movie categories and tags
- Add sorting and filtering options
- Integrate with streaming services to show availability
- Add movie recommendations based on watchlist

## License

This project is available for personal and educational use.
