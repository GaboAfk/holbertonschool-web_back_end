#!/usr/bin/env python3
"""async generator module"""


from typing import Generator
import asyncio
import random


async def async_generator() -> Generator[float, None, None]:
    """Generates 10 random floats numbers between 0 and 10 asynchronously.

    Iterating 10 times and waiting for 1 sec before yielding a random number

    Returns:
        Generator[float, None, None]: an asynchronous generator that
        yields float values

    Yields:
        Float: random float numbers between 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
