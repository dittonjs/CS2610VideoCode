import socket

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind(("0.0.0.0", 8081))
    s.listen()
    print("Waiting for connection...")
    conn, addr = s.accept()
    with conn:
        print(f"Connection recieved at {addr}")
        while True:
            data = conn.recv(8192)
            text = str(data, "UTF-8")
            fuddified_text = text.replace("r", "w").replace("R", "W")
            conn.sendall(bytes(fuddified_text, "UTF-8"))

