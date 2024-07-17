# Connecting Your State Machine to the Outside World
A state machine is often part of a larger system.

So far, our designs have mostly been calling global functions to interact with the outside world. This is a simple way to get started, but it's not the only way to interact with the outside world. In this lesson, we'll look at a few ways to connect your state machine to other code.

Each language has various technical options for connecting your state machine to the outside world:
* `C99/C++`: [preprocessor include .inc file](https://github.com/StateSmith/StateSmith-examples/tree/main/c-include-sm-basic-2-plantuml-tutorial) (recommended), composition, globals.
    * `C++` will eventually have its own proper transpiler to support C++ features.
* `C#`: composition, partial class, inheritance, globals.
* `JavaScript`: composition, inheritance, globals.

See [`RenderConfig`](https://github.com/StateSmith/StateSmith/blob/main/docs/settings.md) options for your particular language.

<br>

# Composition & Inheritance
There are two sub directories in this lesson for each pattern. The state machine design is the same in both cases. The difference is in how the state machine is connected to the outside world.

Use whatever pattern you prefer.
* Composition is generally more flexible and easier to test.
* Inheritance can be simpler and is usually less work.


<br>

# Congratulations! 🎉
You now know how to create a state machine using PlantUML and StateSmith.

Here's some next steps if you are interested in learning more:
* [tutorial 2 lesson 5](https://github.com/StateSmith/tutorial-2/tree/main/lesson-5) - language specific details. You don't need to run code generation again. It's already done for you. You can run/explore the projects.
* fundamentals page
* draw.io - great for large designs
* examples
* youtube channel

