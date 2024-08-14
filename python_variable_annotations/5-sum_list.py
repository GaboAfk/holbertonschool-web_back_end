#!/usr/bin/env python3
from typing import List
"""sum_list module"""


def sum_list(input_list: List[float]) -> float:
    """sum a float list

    Args:
        input_list (List[float]): float list

    Returns:
        float: sum of floats in input_list
    """
    return sum(input_list)
