import pytest
import test_operations

def test_operations():
    assert test_operations.suma(3,3) == 6
    assert test_operations.suma(0,0) == 0
    assert test_operations.suma(-3,3) == 0
    assert test_operations.suma(-4,-5) == -9
    assert test_operations.resta(4,2) == 2
    assert test_operations.resta(-2,2) == 2
    assert test_operations.resta(0,0) == 0
    assert test_operations.resta(-3,3) == 0
    assert test_operations.resta(-4,-5) == -9
    assert test_operations.factorial(6) == 720
    assert test_operations.exponent(4,2) == 16