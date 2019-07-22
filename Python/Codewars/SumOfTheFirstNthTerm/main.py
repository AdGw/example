# Your task is to write a function which returns the sum of following series upto nth term(parameter).

# Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

def series_sum(n):
    result = 0
    for i in range(0,n):
        result = result + 1/(1+3*i)
    return "%0.2f" % result
    
print(series_sum(0))