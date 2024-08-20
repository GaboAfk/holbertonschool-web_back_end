#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """get a dict with data in index, considering missing items

        Args:
            index (int, optional): index to show. Defaults to None.
            page_size (int, optional): page size. Defaults to 10.

        Returns:
            Dict:
            index: actual index,
            next_index: the next closest index or None if dosen't exists,
            page_size: page size,
            data: list with the request data, skipping missing items and
             showing the item per page size countity if is posible
        """
        indexed_dataset = self.indexed_dataset()
        assert isinstance(index, int) and 0 <= index < len(indexed_dataset)

        next_index = index
        data = []

        while len(data) < page_size and next_index < len(indexed_dataset):
            if next_index in indexed_dataset:
                data.append(indexed_dataset[next_index])
            next_index += 1

        return {
            'index': index,
            'next_index': next_index
            if next_index < len(indexed_dataset) else None,
            'page_size': page_size,
            'data': data,
        }
