#!/usr/bin/env python3
"""make multiplier module"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a funtion that multiplies its input by a multiplier

    Args:
        multiplier (float): an multiplier to be used in returned funct

    Returns:
        Callable[[float], float]: a funtion that takes a float and return
        the result of multiplies its value
    """
    def floatmultiplier(value: float) -> float:
        return multiplier*value

    return floatmultiplier
