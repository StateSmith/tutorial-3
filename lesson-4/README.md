> [🎥 A video for this lesson is available](https://www.youtube.com/watch?v=NHsyFOqH_yU&list=PLC7mUEDZkCILp_Xvi6wjHv2EqMn_MbEXl&index=6).

# Language specific party time 🎉 

About darn time we get to our favorite languages. Wait! What's this? It's the 🚨fuzzy logic cops!🚨

# 👮‍♀️ Concurrency Cops! 👮
> *"Hands off the keyboard! Did you just send multiple events to your state machine with no RESPECT for concurrency!?"*

Before we head on to our favorite languages, it is [important to consider concurrency](https://github.com/StateSmith/StateSmith/wiki/Concurrency).

Once you have got that figured out, continue on to your desired language/framework.

# Language Specifics

## C99
Below example uses gcc for convenience, but you can use any C99 compiler you like.

See [./c99-gcc/](./c99-gcc/README.md) directory.

## C++
Below example uses gcc for convenience, but you can use any C++ compiler you like.

See [./cpp-gcc/](./cpp-gcc/README.md) directory.

## C#
See [./csharp/](./csharp/README.md) directory.

## JavaScript
Most of this tutorial used JavaScript so you should have a good base already.

If you are using node.js, here are some relevant StateSmith config settings:

```toml
RenderConfig.JavaScript.UseExportOnClass = true

RenderConfig.FileTop = """
    "use strict";    
    import { LightSmBase } from "./LightSmBase.js"; // or whatever you need...
    """
```

I am still migrating/updating [tutorial 2 lesson 5](https://github.com/StateSmith/tutorial-2/tree/main/lesson-5) files for this tutorial.


## Java
See [./java/](./java/README.md) directory.


## Python
See [./python/](./python/README.md) directory.



<br>
<br>

# Congratulations! 🎉
You now know how to create a state machine using PlantUML and StateSmith.

Here are some next steps if you are interested in learning more:
* [fundamentals page](https://statesmith.github.io/fundamentals-1/) - tons of useful interactive demos and information.
* [examples](https://github.com/StateSmith/StateSmith-examples/blob/main/README.md)
* [draw.io](https://github.com/StateSmith/StateSmith/wiki/draw.io) - great for large designs
* [YouTube channel](https://www.youtube.com/@statesmith)


