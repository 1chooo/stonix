#!/bin/bash

# Test without parameters
echo "Testing without parameters:"
go run ./test/test.go

# Test with id parameter
echo -e "\nTesting with id parameter:"
go run ./test/test.go id

# Test with slug parameter
echo -e "\nTesting with slug parameter:"
go run ./test/test.go slug

# Test with both id and slug parameters
echo -e "\nTesting with both id and slug parameters:"
go run ./test/test.go both
