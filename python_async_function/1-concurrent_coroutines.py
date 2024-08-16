#!/usr/bin/env python3
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    res_list = []
    for completed_task in asyncio.as_completed(tasks):
        delay = await completed_task
        res_list.append(delay)
    return (res_list)
