#!/usr/bin/env python3
"""pagination module"""


import csv
from typing import List, Dict
index_range = __import__('0-simple_helper_function').index_range


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

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """returns a dirtionary from data of the requested page

        Args:
            page (int, optional): page to show. Defaults to 1.
            page_size (int, optional): page size. Defaults to 10.

        Returns:
            Dict: page size if return any data,
                  page,
                  data with data page or empty,
                  next and prev pages if they excists,
                  and total pages.
        """
        dataset = self.dataset()
        data = self.get_page(page, page_size)
        total_pages = (len(dataset) + page_size - 1) // page_size

        return {
            'page_size': page_size if len(data) > 0 else 0,
            'page': page,
            'data': data,
            'next_page': page + 1 if page + 1 < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages
        }
