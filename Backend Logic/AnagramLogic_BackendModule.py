## Anagram Backend Logic
'''
Task1: Add Word pairs in dictionary to fetch top 10 Anagrams.
Task 2: Check whether two words are anagram or not.

'''

mydict = {}

def isAnagram(str1, str2):

    str1 = str1.strip()
    str2 = str2.strip()

    ## Task 1: Add Wordpairs to dictionary
    if (str1, str2) in mydict.keys():
            mydict[(str1, str2)] += 1
    elif (str2, str1) in mydict.keys():
        mydict[(str2, str1)] += 1
    else:
        mydict[(str1, str2)] = 1
    
    ## Condition: If length of both strings are not equal, return false i.e. 'Not Anagrams'
    if len(str1) != len(str2): return False

    ## Task 2: Initially HashMap for both strings (Maximum Number of characters is 256 [0-255]) 
    hashMap1 = [0] * 256
    hashMap2 = [0] * 256  
    for char in str1: hashMap1[ord(char)] += 1 # For each character in string 1 and string 2, update the count in hashmap
    for char in str2: hashMap2[ord(char)] += 1

    ## Condition: Check for same characters and same character count (If both the hashmaps are not equal, return false i.e. Not Anagrams)
    for each_char in range(256):
        if(hashMap1[each_char] != hashMap2[each_char]): return False    

    return True