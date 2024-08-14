#!/usr/bin/env python3
"""to kv module"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """create a tuple

    Args:
        k (str): some string
        v (Union[int, float]): some number (int or float)

    Returns:
        Tuple[str, float]: k str and v square tuple
    """
    return (k, v**2)
