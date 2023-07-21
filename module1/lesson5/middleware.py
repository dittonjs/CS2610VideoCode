def fizz_buzz(n):
    result = ""
    for x in range(1, n + 1):
        if x % 3 == 0 and x % 5 == 0:
            result += "fizzbuzz\n"
        elif x % 3 == 0:
            result += "fizz\n"
        elif x % 5 == 0:
            result += "buzz\n"
        else:
            result += f"{x}\n"
    return result

def constraint_middleware_factory(next):
    def middleware(n):
        if n > 0 and n <= 100:
            return next(n)
        else:
            return "Number must be between 1 and 100"

    return middleware

def capitalize_middleware_factory(next):
    def middleware(n):
        result = next(n)
        return result.upper()

    return middleware

middleware_chain = constraint_middleware_factory(fizz_buzz)
middleware_chain = capitalize_middleware_factory(middleware_chain)


num = int(input("Type a number: "))


print(middleware_chain(num))