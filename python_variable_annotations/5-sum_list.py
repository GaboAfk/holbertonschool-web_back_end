#!/usr/bin/env python3
"""sum_list module"""


from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    calculates the sum a float list

    Args:
        input_list (List[float]): float list

    Returns:
        float: sum of floats in input_list
    """
    return sum(input_list)
