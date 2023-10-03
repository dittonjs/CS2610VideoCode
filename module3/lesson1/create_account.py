from hash_password import hash_password
import sqlite3

# connect to database and create table
conn = sqlite3.connect("my_app_db.sqlite")
conn.execute(
"""
CREATE TABLE IF NOT EXISTS user(
  id INTEGER PRIMARY KEY AUTOINCREMENT ,
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  salt TEXT NOT NULL
)
"""
)

# prompt user for their password
email = input("Type in your email: ")
password = input("Type in your password: ")

#hash the password
hash, salt = hash_password(password)

#store user in db
cursor = conn.cursor()
cursor.execute(
    "INSERT INTO user(email, password_hash, salt) VALUES (?,?,?)",
    (email, hash, salt)
)
conn.commit()

print("ACCOUNT CREATED!")

