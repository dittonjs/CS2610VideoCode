from dotenv import load_dotenv
import os
load_dotenv()


print(os.environ.get("DATABASE_URL"))
print(os.environ.get("FOO"))

