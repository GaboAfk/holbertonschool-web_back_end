#!/usr/bin/env python3
"""simple index range module"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """calculate and return a size of 2 tuple with start and end range of
      index's page

    Args:
        page (int): selected page
        page_size (int): size of page to show

    Returns:
        Tuple[int, int]: tuple with start and end index
    """
    start_index = (page - 1) * page_size
    end_index = start_index - page_size
    return start_index, end_index
