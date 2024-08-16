#!/usr/bin/env python3
"""measure time module"""


import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """calculates average time in compleate each tasks

    Args:
        n (int): number of tasks
        max_delay (int): max delay

    Returns:
        float: average time
    """
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end = time.perf_counter()
    return (end - start) / n
