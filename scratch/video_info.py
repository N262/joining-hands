import cv2
import os

video_path = r"c:\Users\ASUS\Desktop\joing hands\linkedin-video-12149kbps.mp4"
output_dir = r"c:\Users\ASUS\Desktop\joing hands\scratch"

if not os.path.exists(output_dir):
    os.makedirs(output_dir, exist_ok=True)

cap = cv2.VideoCapture(video_path)
fps = cap.get(cv2.CAP_PROP_FPS)
frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
duration = frame_count / fps if fps > 0 else 0

print(f"FPS: {fps}")
print(f"Total Frames: {frame_count}")
print(f"Duration: {duration:.2f} seconds")

# Extract 5 evenly spaced frames
for i in range(5):
    frame_idx = int(frame_count * (i / 4.0)) if i < 4 else frame_count - 1
    cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)
    ret, frame = cap.read()
    if ret:
        out_path = os.path.join(output_dir, f"frame_{i}.jpg")
        cv2.imwrite(out_path, frame)
        print(f"Saved frame {i} (Index: {frame_idx}) to {out_path}")

cap.release()
