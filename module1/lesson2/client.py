import socket

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect(("192.168.1.28", 8081))
    while True:
        text = input("Type something: ")
        if text == "exit":
            break

        s.sendall(bytes(text, "UTF-8"))
        data = s.recv(8192)
        fuddified_text = str(data, "UTF-8")
        print(f"Fuddified Text: {fuddified_text}")
