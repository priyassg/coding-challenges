/*
Shortest Word Edit Path

Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

If the task is impossible, return -1.

Examples:

source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
source = "no", target = "go"
words = ["to"]

output: -1


Solution: Breadth First Search

Finding a shortest path is typically done with a breadth first search. Here, we have some underlying graph of words, and two words are connected (neighbors) if they differ by exactly one letter (and have the same length).

The breadth first search explores all nodes distance 0 from the source, then all nodes distance 1, then all nodes distance 2, and so on. This ensure that if we find the target word, we found it at the least possible distance and thus the answer is correct.

One difficulty in this question is, given a word, what are all neighboring words? (Words that differ by exactly one letter.)

There are two strategies to enumerating these neighbors:

One strategy is, for every word2 in the given words, check that word and word2 differ by 1.

Another strategy is, for every index i from 0 .. word.length - 1 and for every lowercase letter c, clone word into word2, replace word2[i] with c, and check whether the resulting word2 is in words.

The decision to use one strategy or another depends on the input parameters. Here, we showcase the second strategy, with the first in the comments.

*/

/*
function shortestWordEditPath(source, target, words):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    wordset = new HashSet(words)
    queue = Queue()
    queue.add((source, 0))
    seen = new HashSet([source])

    while queue:
        word, depth = queue.popfront()
        if word == target: return depth
        for i from 0 to word.length:
            # First Strategy:
            # for word2 in words:
            #     if word2.length == word.length:
            #         diff = 0
            #         for j from 0 to word.length:
            #             if word[j] != word2[j]:
            #                 diff += 1
            #                 if diff == 2: break
            #         if diff == 1 and word2 not in seen:
            #             queue.append((word2, depth+1))
            #             seen.add(word2)

            # Second Strategy:
            for c in alphabet:
                word2 = word.clone()
                word2[i] = c
                if word2 in wordset and word2 not in seen:
                    queue.append((word2, depth+1))
                    seen.add(word2)
    return -1
    */