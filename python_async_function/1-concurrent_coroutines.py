#!/usr/bin/env python3
"""concurrent coroutines module"""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """create an ordened list of n random max_delays using wait_random
      function

    Args:
        n (int): number of delays
        max_delay (int): max delay range

    Returns:
        List[float]: ascending list of n completed tasks of floating delays
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    res_list = []
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        res_list.append(delay)
    return (res_list)
