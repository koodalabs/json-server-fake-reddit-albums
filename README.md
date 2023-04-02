<p align="center"><img alt="Generate random data for JSON Server, along with meme fake album covers sourced from Reddit" src="https://user-images.githubusercontent.com/79823599/229337240-2dc10d14-81ac-444c-99b0-bc1274f12c02.png" width="100%">
</p>

# **Fake album data generator for JSON Server**
💻 Generate random data for JSON Server, along with fake album covers.

This repository contains the `index.js` script for generating fake data for [json-server](https://github.com/typicode/json-server), as well as cover images for fake albums, sourced from [Reddit](https://www.reddit.com/r/fakealbumcovers/). Should only be used in development purpose.

## How it Works
1. Install json-server.
2. Copy the images from the `covers` folder to your CDN or locally.
3. Modify the `index.js` file to specify your `path/to/images`. Also, feel free to change the data structure as you wish, the [Faker](https://github.com/faker-js/faker) module is used here.
4. Copy the `index.js` and `albums.json` files to where you have deployed the json-server, then run the command: `json-server index.js` ✅

## Contributing
Feel free to fork the repository, make changes, and submit pull requests.

## Articles
- [Building a 24/7 Fake REST API with JSON Server and [de]Generated Data in 5 minutes](https://medium.com/full-struggle-developer/building-a-24-7-fake-rest-api-with-json-server-and-de-generated-data-in-5-minutes-6226187026b)
