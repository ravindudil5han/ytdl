import os
import time

def delete_file(audio,video):
    try:
        time.sleep(1)
        os.remove(audio)
        os.remove(video)
        
    except Exception as e:
        print(f"error: {e}")



def Garbage(directory_path):
    try:
        files = os.listdir(directory_path)
        for file_name in files:
            file_path = os.path.join(directory_path, file_name)
            if os.path.isfile(file_path):
                os.remove(file_path)
            else:
                print(f"emty: '{file_path}'")
    except Exception as e:
        print(f" error : {e}")


