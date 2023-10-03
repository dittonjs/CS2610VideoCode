from django.http import HttpRequest

def session_middleware(next):

    def middleware(req):
        # Go to db to find user based on session token cookie

        user = {
            "name": "Joseph",
            "email": "Joseph.ditton@usu.edu"
        }

        req.user = user

        res = next(req)
        return res

    return middleware