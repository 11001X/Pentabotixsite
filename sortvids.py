import os
import cv2
templates = f'<div class="col-3"> <video width="200vw" controls> <source src="./vids/__" type="video/mp4"> Your browser does not support the video tag. </video></div>'
# print(os.listdir("./vids/"))

vidsfile = open("vids.txt", "w")
leftovers = []
for i in os.listdir("./vids/"):
    file_path = "./vids/"+i  # change to your own video path
    vid = cv2.VideoCapture(file_path)
    res = vid.get(cv2.CAP_PROP_FRAME_HEIGHT)/vid.get(cv2.CAP_PROP_FRAME_WIDTH)
    if res>1:
        vidsfile.write(templates.replace("__",i)+"\n")

