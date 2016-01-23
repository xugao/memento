install:
	pip install -e .

.PHONY: flake
flake: install
	flake8

.PHONY: test
test: install flake
