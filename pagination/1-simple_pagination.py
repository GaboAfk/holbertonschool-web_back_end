#!/usr/bin/env python3
import csv
import math
from typing import List, Tuple


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
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """get a list of dataset depending on the page and page_size

        Args:
            page (int, optional): page to show. Defaults to 1.
            page_size (int, optional): page size. Defaults to 10.

        Returns:
            List[List]: page of dataset or a empty list if page exceeds
             the range
        """
        assert isinstance(page, int) and isinstance(page_size, int), \
            "value must be integers"
        assert page > 0 and page_size > 0, \
            "page and page_size has to be greater to 0"
        star_index, end_index = index_range(page, page_size)
        dataset = self.dataset()

        if star_index > len(dataset):
            return []

        return dataset[star_index:end_index]
