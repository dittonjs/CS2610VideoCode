import socket

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind(("127.0.0.1", 5000))
    s.listen()
    print("Waiting for connection...")
    while True:
        conn, addr = s.accept()
        with conn:
            print(f"Connection recieved at {addr}")
            data = conn.recv(8192)
            text = str(data, "UTF-8")
            print(text)

            #close the connection to prevent the browser
            #from tying up resources
            conn.close()
