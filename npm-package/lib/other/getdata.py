# from lib.downloader.__main__ import YouTube
from pytube import YouTube

data = []
link_data=[]
res =[]

def start():
    yt = YouTube('https://youtu.be/ms3to8tnIDs?si=kOLRNFq3MOvgCs6F')
    video_streams = yt.streams.all()

    resolutions_sit = [stream.resolution for stream in video_streams if stream.resolution]
    resolutions = sorted(list(set(resolutions_sit)))
    v_res ={
        'resolution':resolutions
    }
    
    video_data = {
        'title': yt.title,
        'thumbnail': yt.thumbnail_url,
        'views': yt.views,
        'publish_date': yt.publish_date,
        'caption': yt.captions,
    }
    download ={
        'streams_data':yt.fmt_streams
    }

    link_data.append(download)
    data.append(video_data)
    res.append(v_res)
    return data,link_data,res

if __name__ == "__main__":
    result = start()
    