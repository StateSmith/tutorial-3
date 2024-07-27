# C/C++ - Welcome!
This example directory is tailored to using gcc, but you can use any C compiler you like.

The only GCC specific things are:
- the tiny build shell script `build_run.sh`
- the StateSmith `CEnumDeclarer` setting that makes GCC use fewer bytes for enums
    - IAR does this by default, but GCC and MSVC do not

# Diagram
See [LightSm.plantuml](./LightSm.plantuml) for the PlantUML code.

> NOTE: I just noticed a minor issue with StateSmith PlantUML support and `\n` characters.
I don't normally use `printf()` directly in my state machines, but I did in this example.
See [issue 369](https://github.com/StateSmith/StateSmith/issues/369) for workaround and details.

> This project defines a macro `NEWLINE` to get around this issue.


![](docs/fsm.png)

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


