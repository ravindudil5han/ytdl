from moviepy.editor import VideoFileClip, AudioFileClip
from lib.other.garbage import delete_file


def merge(video_filename, audio_filename, output_filename):
    video_clip = VideoFileClip(video_filename)
    
    # Check if an audio file exists
    try:
        audio_clip = AudioFileClip(audio_filename)
        video_with_audio = video_clip.set_audio(audio_clip)
        video_with_audio.write_videofile(output_filename, codec="libx264", audio_codec="aac")
        delete_file(audio_filename,video_filename)
        
    except OSError:
        print("No audio file found. The output video will have no sound.")