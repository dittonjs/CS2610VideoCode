
def find(data, condition_function):
    for x in data:
        if condition_function(x):
            return True

    return False


my_data = [1,45,32,34,43,2,3,6,4234]

def my_condition_function(num):
    return num > 50

def my_condition_function2(num):
    return num > 5000

print(find(my_data, my_condition_function))
print(find(my_data, my_condition_function2))
print(find(my_data, lambda x: x == 34))
print(find(my_data, lambda x: x == 7))

