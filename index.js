// Description: This file is the script that generates the data for the database of JSON Server


// Import faker library and faker-js/faker package
const { faker } = require('@faker-js/faker');

// Read album data from json file albums.json
const albumData = require('./albums.json');

// Base URL for album covers
const baseUrl = 'https://cdn.sandbox.koodalabs.com/album_covers/';


module.exports = () => {
    const data = {
        artists: [],
        albums: [],
        songs: [],
        users: [],
        profiles: [],
        posts: []
    };

    // Create artists from album data
    Object.entries(albumData).forEach(([artistName, artistData], artistIndex) => {
        const artist = {
            id: artistIndex,
            name: artistName,
            bio: faker.lorem.paragraph(),
            genres: Array.from({length: faker.datatype.number({min: 1, max: 5})}, () => faker.music.genre()),
            country: faker.address.country(),
            yearsActive: faker.datatype.number({min: 1, max: 50}),
            listens: faker.datatype.number(),
            image: faker.internet.avatar(),
          };
          data.artists.push(artist);          

        // Create albums for each artist
        artistData.albums.forEach((albumData, albumIndex) => {
            const album = {
                id: (artistIndex * 5) + albumIndex,
                title: albumData.title,
                year: faker.datatype.number({min: 1923, max: 2023}),
                cover: `${baseUrl}${albumData.cover}`,
                color: faker.internet.color(),
                label: faker.company.name(),
                artistId: artist.id,
                listens: faker.datatype.number(),
            };
            data.albums.push(album);

            // Create songs for each album
            for (let k = 0; k < 10; k++) {
                const song = {
                    id: (album.id * 10) + k,
                    title: faker.music.songName(),  
                    lirics: faker.lorem.paragraph(),
                    albumId: album.id,
                    listens: faker.datatype.number(),
                    duration: faker.datatype.number({max: 600}),
                    isExplicit: faker.datatype.boolean(),
                    genre: faker.music.genre(),
                    artistId: artist.id,
                    createdAt: faker.date.past()
                };
                data.songs.push(song);
            }
        });
    });

    // Create users
    for (let i = 0; i < 100; i++) {
        const user = {
            id: i,
            name: faker.name.fullName(),
            nickname: faker.internet.userName(),
            email: faker.internet.email(),
            ip: faker.internet.ip(),
            userAgent : faker.internet.userAgent(),
            isBaned: faker.datatype.boolean(),
        };
        data.users.push(user);

        // Create profile for each user
        const profile = {
            id: i,
            userId: user.id,
            image: faker.internet.avatar(),
            createdAt: faker.date.past()
        };
        data.profiles.push(profile);

        // Create posts for each user
        for (let j = 0; j < 10; j++) {
            const post = {
                id: (i * 10) + j,
                userId: user.id,
                text: faker.lorem.paragraph(),
                createdAt: faker.date.past(),

                 };
            data.posts.push(post);
        }
    }
    return data;
};