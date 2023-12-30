from lib.downloader.__main__ import YouTube

def download(video_url, resolution_choice,video_file,audio_file):
    
    yt = YouTube(video_url)
    video_stream = yt.streams.filter(file_extension='mp4', res=resolution_choice, only_video=True).first()
    if video_stream:
        video_stream.download(filename= video_file)
    else:
        print("No audio stream available for the selected resolution.")

 
    audio_stream = yt.streams.filter(only_audio=True).first()
    if audio_stream:
        audio_stream.download(filename=audio_file)
    else:
        print("No audio stream available for the selected resolution.")