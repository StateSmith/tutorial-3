# Composition 2
Very slight variation on the earlier composition example.

The only difference is that we avoid using the `DefaultAnyExpTemplate` setting and explicitly use a context variable `ctx` instead. You can name it whatever you want `i`, `iface`, `c`, `ctx`...

![](docs/explicit-ctx.png)

This is a bit more verbose, but allows us to also access global variables/functions/keywords normally without them being picked up by `DefaultAnyExpTemplate`.

## StateSmith Settings
```toml
RenderConfig.AutoExpandedVars = """
    // needs to be set before running the state machine
    ctx: null,
    """
```
