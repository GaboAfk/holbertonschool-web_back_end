#!/usr/bin/env python3
"""measure runtime module"""


import asyncio
from time import perf_counter
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """execute async comprehension four times in parallel

    Returns:
        float: total runtime
    """
    start_time = perf_counter()
    tasks = [async_comprehension() for _ in range(4)]
    await asyncio.gather(*tasks)
    end_time = perf_counter()
    return end_time - start_time
