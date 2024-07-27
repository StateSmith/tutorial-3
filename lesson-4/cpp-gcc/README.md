# C++ - Welcome!
This example uses gcc for convenience, but you can use any C++ compiler you like.

The only GCC specific things are:
- the tiny build shell script `build_run.sh`

# Diagram
See [LightSm.plantuml](./LightSm.plantuml) for the PlantUML code.

![](docs/fsm.png)

> NOTE: I just noticed a minor issue with StateSmith PlantUML support and `\n` characters.
C++ already has `std::endl` so this is less of an issue for C++ than for C.
See [issue 369](https://github.com/StateSmith/StateSmith/issues/369) for workaround and details.


# Run The Code Gen
Run in this directory:
```
ss.cli run -h
```

# Run The Example Project
Run in this directory:
```
./build_run.sh
```


# More examples
https://github.com/StateSmith/StateSmith-examples
* Highly recommend checking out tutorial on [how to use `.inc` files](https://github.com/StateSmith/StateSmith-examples/blob/main/c-include-sm-basic-2-plantuml-tutorial/README.md)


