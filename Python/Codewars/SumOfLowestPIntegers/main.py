def sum_two_smallest_numbers(numbers):
    numbers.sort()
    print(numbers)
    print(numbers[0] + numbers[1])
    return numbers[0] + numbers[1]

arr = [5,6,1,2]
sum_two_smallest_numbers(arr)
