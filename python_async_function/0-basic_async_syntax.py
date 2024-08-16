#!/usr/bin/env python3
"""wait_random module"""


import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """wait and return a random float between 0 and max_delay

    Args:
        max_delay (int, optional): delay to wait. Defaults to 10.

    Returns:
        float: random delay waited
    """
    wait = random.uniform(0, max_delay)
    await asyncio.sleep(wait)
    return (wait)
