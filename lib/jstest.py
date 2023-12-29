from downloader.__main__ import YouTube
import sys
import json
from datetime import datetime

def serialize_datetime(obj):
    if isinstance(obj, datetime):
        return obj.strftime('%Y-%m-%d %H:%M:%S')
    return None

def get_video_info(youtube_video_url):
    yt = YouTube(youtube_video_url)
    all_streams = yt.streams
    result = []
    v_data = {
        'title': yt.title,
        'thumbnail': yt.thumbnail_url,
        'views': yt.views,
        'publish_date': yt.publish_date,
    }
    result.append(v_data)

    for stream in all_streams:
        info = {
            "resolution": stream.resolution,
            "format": stream.mime_type,
            "url": stream.url
        }
        result.append(info)

    return result

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <youtube_video_url>")
        sys.exit(1)

    video_url = sys.argv[1]
    result = get_video_info(video_url)

    # Use the custom serialization function for datetime objects
    print(json.dumps(result, default=serialize_datetime))
