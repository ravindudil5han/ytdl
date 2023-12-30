import os
from datetime import datetime

def create_filename(name):
    current_time = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{name}_{current_time}"
    return filename

