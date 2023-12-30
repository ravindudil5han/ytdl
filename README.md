

# YouTube Downloader Module

A simple Node.js module for downloading YouTube video information and links.

## Overview

This Node.js module utilizes the `non-main.js` script to fetch detailed information and video links for a given YouTube video URL. It returns an array containing various details such as video title, thumbnail, views, publish date, and available video resolutions with their respective download links.

## Usage

```javascript
const ytd = require('./non-main.js');

const url = 'https://youtu.be/AWItYh5hqqo?si=vS7AoYBJyoBn6vre';

ytd(url)
  .then((result) => {
    // Handle the result
    console.log('Script executed successfully:', result);
  })
  .catch((error) => {
    // Handle errors
    console.error('Error running Python script:', error);
  });
```

## Example Output

```javascript
 [
  {
    title: '斗罗大陆所有歌曲（Soul Land Music）（动漫，手游，真人版）【破茧，斗罗大陆，不抛弃不放弃，不舍，蓝银色的海，与你，击溃，如影如芒，凤凰火，向宿命挥拳的人，食神，星河，绝恋，神祇】',
    thumbnail: 'https://i.ytimg.com/vi/AWItYh5hqqo/hq720.jpg?sqp=-oaymwEXCNUGEOADIAQqCwjVARCqCBh4INgESFo&rs=AOn4CLAQt2k9a43jcLZvOD-a9qHlYSX_sw',
    views: 1342392,
    publish_date: '2021-09-27 00:00:00'
  },
  {
    resolution: '144p',
    format: 'video/3gpp',
    url: 'https://rr1---sn-nau-jhcz.googlevideo.com/videoplayback?expire=1703956266&ei=yvqPZYXMNvLWz7sP2eGVyAE&ip=2402%3Ad000%3A8104%3A1128%3Ab02e%3Afc43%3A248b%3A368e&id=o-AM0foTg8eQgMSZLEzM6s0jnSdoBbC0zuyoC1OIPdzIjk&itag=17&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Af&mm=31%2C29&mn=sn-nau-jhcz%2Csn-npoe7nsy&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=53&initcwndbps=576250&vprv=1&mime=video%2F3gpp&gir=yes&clen=48899706&dur=6650.148&lmt=1633924513079602&mt=1703934314&fvip=1&fexp=24007246&c=ANDROID_MUSIC&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRQIhAKHZjisZ5VdbUd1Pf3Q_KthCspW9xmGNtO4Ut5xE_vaVAiBDA_M7HvSql2PrmEhf2hoIDfnq2iYG3VR5V4tfdAz3_Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AAO5W4owRgIhAIZYOFg_HGgu2SZQko3hn_5llAknFZ1cPvQb1Gci3VlfAiEA1zE7Ix84zXrVHHaWE6HpfwqdOpv1U0L-_T50JM7gf5g%3D'
  },
  {
    resolution: '360p',
    format: 'video/mp4',
    url: 'https://rr1---sn-nau-jhcz.googlevideo.com/videoplayback?expire=1703956266&ei=yvqPZYXMNvLWz7sP2eGVyAE&ip=2402%3Ad000%3A8104%3A1128%3Ab02e%3Afc43%3A248b%3A368e&id=o-AM0foTg8eQgMSZLEzM6s0jnSdoBbC0zuyoC1OIPdzIjk&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Af&mm=31%2C29&mn=sn-nau-jhcz%2Csn-npoe7nsy&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=53&initcwndbps=576250&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=6650.102&lmt=1665256526203217&mt=1703934314&fvip=1&fexp=24007246&c=ANDROID_MUSIC&txp=5438434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgEuSzPX6nNHNel8LOVRrSEfR1jipqtJUUdaGYHm8B1hECIEIKuHgp4exjl1jcRhWjjUjTeyYtUFJV1u0KNeem2VnX&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AAO5W4owRgIhAIZYOFg_HGgu2SZQko3hn_5llAknFZ1cPvQb1Gci3VlfAiEA1zE7Ix84zXrVHHaWE6HpfwqdOpv1U0L-_T50JM7gf5g%3D'
  },
  {
    resolution: '720p',
    format: 'video/mp4',
    url: 'https://rr1---sn-nau-jhcz.googlevideo.com/videoplayback?expire=1703956266&ei=yvqPZYXMNvLWz7sP2eGVyAE&ip=2402%3Ad000%3A8104%3A1128%3Ab02e%3Afc43%3A248b%3A368e&id=o-AM0foTg8eQgMSZLEzM6s0jnSdoBbC0zuyoC1OIPdzIjk&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=Af&mm=31%2C29&mn=sn-nau-jhcz%2Csn-npoe7nsy&ms=au%2Crdu&mv=m&mvi=1&pcm2cms=yes&pl=53&initcwndbps=576250&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=6650.102&lmt=1633926156667997&mt=1703934314&fvip=1&fexp=24007246&c=ANDROID_MUSIC&txp=5432434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIgRNrG9lLLwoV3Coi3SumYSAnAkx2xEXijLKgcXSI1LpgCIQDeuweEvYX-WIrAIC8rHjPtToydF10IIzHBpGdco7HY4Q%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&lsig=AAO5W4owRgIhAIZYOFg_HGgu2SZQko3hn_5llAknFZ1cPvQb1Gci3VlfAiEA1zE7Ix84zXrVHHaWE6HpfwqdOpv1U0L-_T50JM7gf5g%3D'
  }]
```

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ravindudil5han/ytdl.git
cd ytdl
npm install
```

## License

This project is licensed under the [MIT License](LICENSE).
