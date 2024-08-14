#!/usr/bin/env python3
"""sum mixed list module"""


from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """calculates the sum of int and float in a list

    Args:
        mxd_lst (Union[int, float]): values to be summed

    Returns:
        float: sum of all elements in mxd_lst
    """
    return sum(mxd_lst)
