const API_KEY = "AIzaSyCoKLP0t1So5PYIaNZIU5v92ohPcSX9Kw8";
//AIzaSyCoKLP0t1So5PYIaNZIU5v92ohPcSX9Kw8
//AIzaSyDAqFjpcE5tp4ll6SV232BDvPEYLtXJ0WQ
export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const SUGGESTION_API =
  "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";

export const SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  API_KEY +
  "&q=";

export const Comments = [
  {
    name: "Big Small",
    comment: "YEAAAAAAAAHHH LESSSGOOOOOOOOO",
    replies: [
      { name: "Small Akshai", comment: "LESSSGOOOOOOOOO", replies: [] },
    ],
  },
  {
    name: "Big Small",
    comment: "YEAAAAAAAAHHH LESSSGOOOOOOOOO",
    replies: [
      { name: "Small Akshai", comment: "LESSSGOOOOOOOOO", replies: [] },
      {
        name: "Big Small",
        comment: "YEAAAAAAAAHHH LESSSGOOOOOOOOO",
        replies: [
          { name: "Small Akshai", comment: "LESSSGOOOOOOOOO", replies: [] },
        ],
      },
    ],
  },
  {
    name: "Big Small",
    comment: "YEAAAAAAAAHHH LESSSGOOOOOOOOO",
    replies: [
      { name: "Small Akshai", comment: "LESSSGOOOOOOOOO", replies: [] },
    ],
  },
  {
    name: "Big Small",
    comment: "YEAAAAAAAAHHH LESSSGOOOOOOOOO",
    replies: [
      { name: "Small Akshai", comment: "LESSSGOOOOOOOOO", replies: [] },
    ],
  },
];
