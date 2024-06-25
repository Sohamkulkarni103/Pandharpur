import bz2
import collections
import gzip
import inspect
import itertools
import re
from collections import defaultdict
from contextlib import contextmanager
from os.path import splitext
from pathlib import Path
from typing import Callable, Sequence

from ..classes.graph import Graph
from ..utils import create_py_random_state, create_random_state

__all__ = [
    "not_implemented_for",
    "open_file",
    "nodes_or_number",
    "preserve_random_state",
    "random_state",
    "np_random_state",
    "py_random_state",
    "argmap",
]

def not_implemented_for(*graph_types): ...

# To handle new extensions, define a function accepting a `path` and `mode`.
# Then add the extension to _dispatch_dict.
fopeners: dict = ...
_dispatch_dict = ...  # type: ignore

def open_file(path_arg: str | int, mode: str = "r"): ...
def nodes_or_number(which_args: str | int | Sequence[str]): ...
def preserve_random_state(func): ...
def np_random_state(random_state_argument: str | int): ...
def random_state(random_state_argument): ...
def py_random_state(random_state_argument: str | int): ...

class argmap:
    def __init__(self, func: Callable, *args, try_finally=False): ...
    @staticmethod
    def _lazy_compile(func): ...
    def __call__(self, f: Callable) -> Callable: ...

    __count: int = ...

    @classmethod
    def _count(cls): ...

    _bad_chars = ...

    @classmethod
    def _name(cls, f): ...
    def compile(self, f: Callable) -> Callable: ...
    def assemble(self, f: Callable): ...
    @classmethod
    def signature(cls, f: Callable): ...

    Signature = ...

    @staticmethod
    def _flatten(nestlist, visited): ...

    _tabs = ...

    @staticmethod
    def _indent(*lines): ...
