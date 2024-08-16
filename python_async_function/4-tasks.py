#!/usr/bin/env python3}
"""wait_n tasks module"""


from typing import List
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """create a list of tasks in order as they are compleated

    Args:
        n (int): number of tasks
        max_delay (int): max time delay

    Returns:
        List[float]: ordered task list
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    return [await task for task in asyncio.as_completed(tasks)]
