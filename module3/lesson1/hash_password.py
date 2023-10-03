import hashlib
import secrets

def hash_password(password):
    salt = secrets.token_hex(8)
    hash = hashlib.sha256(bytes(password + salt, "UTF-8")).hexdigest()

    for _ in range(10):
        hash = hashlib.sha256(bytes(hash, "UTF-8")).hexdigest()

    return (hash, salt)
