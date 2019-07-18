def longest_consec(strarr, k):
    newarray = []
    strarr.sort() # sorts normally by alphabetical order
    strarr.sort(key=len, reverse=True) # sorts by descending length
    n = len(strarr)
    if n ==0 or k>n or k <=0:
        return ''

    for k in range(k):
        if strarr:
            max(strarr, key=len)
            newarray.append(strarr[0])
        del strarr[0]
    return ''.join(newarray)

array=["zone","abigail","theta","form","libe","zas","theta","abigail"]
k = 3
print(longest_consec(array, k))
