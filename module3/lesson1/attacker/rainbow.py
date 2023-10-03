import sqlite3
import hashlib

conn = sqlite3.connect("rainbow_table.sqlite")

conn.execute(
"""
CREATE TABLE IF NOT EXISTS password_map(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    password TEXT NOT NULL,
    hash TEXT NOT NULL
);
"""
)

conn.execute(
"""
CREATE INDEX IF NOT EXISTS idx_password_map_hash ON password_map(hash);
"""
)

cursor = conn.cursor()


with open("passwords.txt") as f:
    for password in f:
        if not password:
            continue

        hash = hashlib.sha256(bytes(password.strip(), "UTF-8")).hexdigest()
        cursor.execute(
            "INSERT INTO password_map(password, hash) VALUES (?,?)",
            (password, hash)
        )

conn.commit()
