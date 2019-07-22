# Take 2 strings s1 and s2 including only letters from ato z.
# Return a new sorted string, the longest possible, containing distinct letters,

def longest(s1,s2):
    combined = s1 + s2
    newstring = ''.join(sorted(set(combined), key=combined.index))
    newsorted = ''.join(sorted(newstring))
    print(newsorted)
    return newsorted

string1 = 'xyaabbbccccdefww'
string2 = 'xxxxyyyyabklmopq'

longest(string1, string2)
