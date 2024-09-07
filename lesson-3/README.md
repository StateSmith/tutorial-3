# Connecting Your State Machine to the Outside World
A state machine is often part of a larger system.

So far, our designs have mostly been calling global functions to interact with the outside world. This is a simple way to get started, but it's not the only way to interact with the outside world. In this lesson, we'll look at a few ways to connect your state machine to other code.

Each language has various technical options for connecting your state machine to the outside world:

| Language   | Globals | Vars | Composition | Inheritance | .inc File | Partial Class |
| ---------- | ------- | ---- | ----------- | ----------- | --------- | ------------- |
| C99/C++    | ✅      | ✅   | ✅          | ❌          | ✅        | ❌            |
| C#         | ✅      | ✅   | ✅          | ✅          | ❌        | ✅            |
| JavaScript | ✅      | ✅   | ✅          | ✅          | ❌        | ❌            |
| Java       | ✅      | ✅   | ✅          | ✅          | ❌        | ❌            |

> C++ is still using the C99 transpiler. It will eventually support C++ features.

See [`RenderConfig`](https://github.com/StateSmith/StateSmith/blob/main/docs/settings.md) options for your particular language.

<br>

# Approaches
I recommend starting with the simplest option that works for your project.

You can also mix and match techniques. StateSmith doesn't care. Do what works best for you.



## Globals
Very simple. This usually works best if you only have a single state machine instance.


## Variable Based (no functions)
Your state machine doesn't need to call functions or access globals to be useful. It can simply use input and output variables.

See [variable-based](./variable-based/README.md) for more details.


## `C99/C++` .inc file
If you are using C/C++, check out this [.inc file tutorial](https://github.com/StateSmith/StateSmith-examples/tree/main/c-include-sm-basic-2-plantuml-tutorial).


## Composition
When compared to inheritance:

Pros:
- very flexible
- works for any language
- easy to test
- abstracts/hides state machine details

Cons:
- a bit more work to wire up
- might use a bit more RAM for function pointers (depending on language/platform)

See [composition](./composition/README.md) for more details.


## Inheritance
When compared to composition:

Pros:
- often less work wiring stuff up

Cons:
- less flexible
- doesn't abstract/hide state machine details

See [inheritance](./inheritance/README.md) for more details.

## `C#` Partial Class
Similar to inheritance approach.



<br>
<br>

# Onwards! ⏭️
The next lesson covers language specific details.

Head on over to [lesson 4 README.md](../lesson-4/README.md).

