# Connecting Your State Machine to the Outside World
A state machine is often part of a larger system.

So far, our designs have mostly been calling global functions to interact with the outside world. This is a simple way to get started, but it's not the only way to interact with the outside world. In this lesson, we'll look at a few ways to connect your state machine to other code.

Each language has various technical options for connecting your state machine to the outside world:
* `C99/C++`: .inc file, composition, globals.
    * `C++` will eventually have its own proper transpiler to support C++ features.
* `C#`: composition, partial class, inheritance, globals.
* `JavaScript`: composition, inheritance, globals.

See [`RenderConfig`](https://github.com/StateSmith/StateSmith/blob/main/docs/settings.md) options for your particular language.

<br>


# C99/C++
If you are using C/C++, check out this [.inc file tutorial](https://github.com/StateSmith/StateSmith-examples/tree/main/c-include-sm-basic-2-plantuml-tutorial).


<br>

# Composition
Pros:
- generally more flexible
- works for any language
- easy to test

Cons:
- a bit more work to set up
- might use a bit more RAM for function pointers (depending on language/platform)

See [composition](./composition/README.md) for more details.


<br>

# Inheritance
> Not applicable to C99 or C++ (currently implemented in C style).

Pros:
- often less work

Cons:
- less flexible
- can feel un-natural for some designs

See [inheritance](./inheritance/README.md) for more details.


<br>

# Congratulations! 🎉
You now know how to create a state machine using PlantUML and StateSmith.

Here are some next steps if you are interested in learning more:
* [fundamentals page](https://statesmith.github.io/fundamentals-1/) - tons of useful interactive demos and information.
* [tutorial 2 lesson 5](https://github.com/StateSmith/tutorial-2/tree/main/lesson-5) for language specific details. You don't need to run code generation again. It's already done for you. You can run/explore the projects without needing to run .csx files.
* [examples](https://github.com/StateSmith/StateSmith-examples/blob/main/README.md)
    * [draw nicer diagrams with PlantUML](https://github.com/StateSmith/StateSmith-examples/blob/main/embedded-solar-1/README.md)
* [draw.io](https://github.com/StateSmith/StateSmith/wiki/draw.io) - great for large designs
* [YouTube channel](https://www.youtube.com/@statesmith)

