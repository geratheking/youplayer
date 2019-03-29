export default class YoutubeApi {

    // url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDwdlVAcf_UJDUNcfy_BP-DDADr6ftoq8k&part=snippet&type=video&maxResults=5&q=';
    // url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD-JXRYgyQDCxkQLguWj3t6R-zVFBrG-QY&part=snippet&type=video&maxResults=5&q=';
    url = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyA17tSukZkpT3U8erfEBF93nFLYrZ922kw&part=snippet&type=video&maxResults=5&q=';

    //statistics url
    //url2 = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD-JXRYgyQDCxkQLguWj3t6R-zVFBrG-QY&part=statistics&id=';
    // keys if ban
    //AIzaSyB-lmFcC49y_sq6ksvocDz3qnbcZYh_EHM
    //AIzaSyDwdlVAcf_UJDUNcfy_BP-DDADr6ftoq8k
    //AIzaSyA17tSukZkpT3U8erfEBF93nFLYrZ922kw

    getVideos = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
            console.log('error', res.status);
            console.log('~~~IF API BAN~~~ Open components/youtubeapi/ and find dummy response object, line 50');
        };
        const body = await res.json();
        return body;
    };

    getVideoInfo = async (url2) => {
        const res = await fetch(url2);
        if (!res.ok) {
            console.log('error', res.status);
        }
        ;
        const body = await res.json();
        return body.items[0].statistics;
    };

    getList = async (q) => {

        const list = await this.getVideos(`${this.url}${q}`);
        return list.items.map(this.transformData);
    };

    transformData = (data) => {
        return {
            link: data.id.videoId,
            name: data.snippet.title,
            logo: data.snippet.thumbnails.medium.url,
            desc: data.snippet.description,
        }
    };
};




// const body = /**
//  * API response
//  */
//     {
//         "kind": "youtube#searchListResponse",
//         "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/0_HR3jvZtDk9r4uNBsG4gH-u6sw\"",
//         "nextPageToken": "CAUQAA",
//         "regionCode": "UA",
//         "pageInfo": {
//             "totalResults": 1000000,
//             "resultsPerPage": 5
//         },
//         "items": [
//             {
//                 "kind": "youtube#searchResult",
//                 "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/WznjU0SpaKoMkx-E7Jf-iI4VIgs\"",
//                 "id": {
//                     "kind": "youtube#video",
//                     "videoId": "xU3iCjnlqx8"
//                 },
//                 "snippet": {
//                     "publishedAt": "2019-01-16T00:05:33.000Z",
//                     "channelId": "UCKo-NbWOxnxBnU41b-AoKeA",
//                     "title": "The Best Surf Clips of 2018 | SURFER Magazine",
//                     "description": "Drawing from SURFER's “Clips of the Month” series, here's a (very arguable) list of the “Clips of the Year.” No matter how you slice it, 2018 was an incredible trip ...",
//                     "thumbnails": {
//                         "default": {
//                             "url": "https://i.ytimg.com/vi/xU3iCjnlqx8/default.jpg",
//                             "width": 120,
//                             "height": 90
//                         },
//                         "medium": {
//                             "url": "https://i.ytimg.com/vi/xU3iCjnlqx8/mqdefault.jpg",
//                             "width": 320,
//                             "height": 180
//                         },
//                         "high": {
//                             "url": "https://i.ytimg.com/vi/xU3iCjnlqx8/hqdefault.jpg",
//                             "width": 480,
//                             "height": 360
//                         }
//                     },
//                     "channelTitle": "SURFER",
//                     "liveBroadcastContent": "none"
//                 }
//             },
//             {
//                 "kind": "youtube#searchResult",
//                 "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/E8GZG_CZfJeaVF75eZYmJHnGe0c\"",
//                 "id": {
//                     "kind": "youtube#video",
//                     "videoId": "rj7xMBxd5iY"
//                 },
//                 "snippet": {
//                     "publishedAt": "2017-11-12T11:09:52.000Z",
//                     "channelId": "UCiiFGfvlKvX3uzMovO3unaw",
//                     "title": "BIG WAVE SURFING COMPILATION 2017",
//                     "description": "BIG WAVE SURFING COMPILATION 2017 ** REVISED **AMAZING FOOTAGE ** WITH 60-100FT- HUGE SURF Please Subscribe if You Would like to see More ...",
//                     "thumbnails": {
//                         "default": {
//                             "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/default.jpg",
//                             "width": 120,
//                             "height": 90
//                         },
//                         "medium": {
//                             "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/mqdefault.jpg",
//                             "width": 320,
//                             "height": 180
//                         },
//                         "high": {
//                             "url": "https://i.ytimg.com/vi/rj7xMBxd5iY/hqdefault.jpg",
//                             "width": 480,
//                             "height": 360
//                         }
//                     },
//                     "channelTitle": "Absolutely Flawless",
//                     "liveBroadcastContent": "none"
//                 }
//             },
//             {
//                 "kind": "youtube#searchResult",
//                 "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/OOD6SlB-NumCjkurCLUxN68r25E\"",
//                 "id": {
//                     "kind": "youtube#video",
//                     "videoId": "nkhpGC10OVw"
//                 },
//                 "snippet": {
//                     "publishedAt": "2017-04-09T17:18:44.000Z",
//                     "channelId": "UCHeaHzQFLElUw__yG3SSzMg",
//                     "title": "World's best surfing 2017",
//                     "description": "World's best surfing 2017 — Enjoy the video. Rate, Comment, Share... Thanx Subscribe for new compilations: http://goo.gl/X017T If your Video is in this ...",
//                     "thumbnails": {
//                         "default": {
//                             "url": "https://i.ytimg.com/vi/nkhpGC10OVw/default.jpg",
//                             "width": 120,
//                             "height": 90
//                         },
//                         "medium": {
//                             "url": "https://i.ytimg.com/vi/nkhpGC10OVw/mqdefault.jpg",
//                             "width": 320,
//                             "height": 180
//                         },
//                         "high": {
//                             "url": "https://i.ytimg.com/vi/nkhpGC10OVw/hqdefault.jpg",
//                             "width": 480,
//                             "height": 360
//                         }
//                     },
//                     "channelTitle": "Monthly Winners",
//                     "liveBroadcastContent": "none"
//                 }
//             },
//             {
//                 "kind": "youtube#searchResult",
//                 "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/pg9eK--UdpUhwSbRiOQy4ngMKo0\"",
//                 "id": {
//                     "kind": "youtube#video",
//                     "videoId": "wxBtwCZtDAg"
//                 },
//                 "snippet": {
//                     "publishedAt": "2018-11-21T01:00:11.000Z",
//                     "channelId": "UCZFhj_r-MjoPCFVUo3E1ZRg",
//                     "title": "13-Year-Old FEARLESS Surfing Prodigy",
//                     "description": "Use promo code NODAYSOFF for a discount on NDO gear! https://whistle.video/NoDaysOffGear 13-Year-Old Kai Williams was born to surf. Nobody works ...",
//                     "thumbnails": {
//                         "default": {
//                             "url": "https://i.ytimg.com/vi/wxBtwCZtDAg/default.jpg",
//                             "width": 120,
//                             "height": 90
//                         },
//                         "medium": {
//                             "url": "https://i.ytimg.com/vi/wxBtwCZtDAg/mqdefault.jpg",
//                             "width": 320,
//                             "height": 180
//                         },
//                         "high": {
//                             "url": "https://i.ytimg.com/vi/wxBtwCZtDAg/hqdefault.jpg",
//                             "width": 480,
//                             "height": 360
//                         }
//                     },
//                     "channelTitle": "Whistle",
//                     "liveBroadcastContent": "none"
//                 }
//             },
//             {
//                 "kind": "youtube#searchResult",
//                 "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/v2hRwiMwr3kXfJcbvlZ7PWT_--A\"",
//                 "id": {
//                     "kind": "youtube#video",
//                     "videoId": "hXOWGNTOPNw"
//                 },
//                 "snippet": {
//                     "publishedAt": "2019-03-29T02:12:02.000Z",
//                     "channelId": "UCfNAMNoNxYWk-CccrE3Qkaw",
//                     "title": "Alana's birthday SURPRISE | Pro surfing camp with friends | HAPPY WAVES EPS 4",
//                     "description": "In episode 4 we go down the coast to Yamba and celebrate Alana's birthday. We also do a training camp with our coach Tom Whitaker before our contest ...",
//                     "thumbnails": {
//                         "default": {
//                             "url": "https://i.ytimg.com/vi/hXOWGNTOPNw/default.jpg",
//                             "width": 120,
//                             "height": 90
//                         },
//                         "medium": {
//                             "url": "https://i.ytimg.com/vi/hXOWGNTOPNw/mqdefault.jpg",
//                             "width": 320,
//                             "height": 180
//                         },
//                         "high": {
//                             "url": "https://i.ytimg.com/vi/hXOWGNTOPNw/hqdefault.jpg",
//                             "width": 480,
//                             "height": 360
//                         }
//                     },
//                     "channelTitle": "Alana Blanchard and Jack Freestone",
//                     "liveBroadcastContent": "none"
//                 }
//             }
//         ]
//     }