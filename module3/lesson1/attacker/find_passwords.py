import sqlite3

db_conn = sqlite3.connect("my_app_db.sqlite")
rainbow_conn = sqlite3.connect("rainbow_table.sqlite")

cursor = db_conn.cursor()
cursor.execute("SELECT * FROM user")
users = cursor.fetchall()

for user in users:
    rb_cursor = rainbow_conn.cursor()
    rb_cursor.execute("SELECT password FROM password_map WHERE hash=?", (user[2],))
    password = rb_cursor.fetchone()
    if not password:
        print(f"Count not find password for user {user[1]}")
    else:
        print(f"Password for user {user[1]} is {password[0]}")
