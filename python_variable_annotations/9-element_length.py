#!/usr/bin/env python3
"""element length module"""


from typing import Iterable, Sequence, Tuple, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """calculate len of items in lst and return a tuple of it

    Args:
        lst (Iterable[Sequence]): iterable secuence (list, tuple, etc)

    Returns:
        List[Tuple[Sequence, int]]: a list of tuples where contains the element
        and len of it
    """
    return [(i, len(i)) for i in lst]
