import unittest
from AnagramLogic_BackendModule import isAnagram

class Testanagram(unittest.TestCase):

    # Length Not Equal Test Case
    def test_isanagram_1(self):
        self.assertEqual(isAnagram('aaa', 'aaaaa'), False)
    
    # Length not Equal and Characters not Equal
    def test_isanagram_2(self):
        self.assertEqual(isAnagram('Arctic', 'ArcticWolf'), False)
    
    # Characters not Equal
    def test_isanagram_3(self):
        self.assertEqual(isAnagram('cat', 'cad'), False)

    # True Anagrams
    def test_isanagram_4(self):
        self.assertEqual(isAnagram('Python', 'Python'), True)

    # True Anagrams
    def test_isanagram_5(self):
        self.assertEqual(isAnagram('React', 'React'), True)
    
    # Same Word pair
    def test_isanagram_6(self):
        self.assertEqual(isAnagram('Arctic', 'ArcticWolf'), False)
    
    # Same Word Pair but flipped
    def test_isanagram_7(self):
        self.assertEqual(isAnagram('ArcticWolf', 'Arctic'), False)
