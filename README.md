# Let's try it quick!
With the goal of keeping things as simple as possible to start, this tutorial uses `PlantUML` as the diagram tool, but StateSmith also supports `draw.io` (covered in other tutorials). This is a good place to start.

The first design we will look at is a small Hierarchical State Machine (HSM) that represents the state of Mario in a game.

![](docs/fsm.png)

As you complete the lessons in this tutorial, you'll be able to interact with the generated state machines in your web browser. One of the later lessons will be programming language specific.

![](docs/interact.gif)

<br>
<br>

# Download This Tutorial
You should download the full contents of this tutorial to your computer so that you can follow along with the examples and complete the exercises.


<br>
<br>

# Downloading the StateSmith CLI
StateSmith is written in cross platform C# and can be run on Windows, Linux, and MacOS. I chose C# because I make heavy use of the open source Roslyn compiler to transpile the generated state machine code into C99/C++, CSharp, JavaScript...

There are two main ways to run the StateSmith CLI:
1. Download the pre-built binary for your computer (no need for dotnet).
2. Install the StateSmith CLI using the dotnet SDK.

## If you already have a dotnet SDK installed
If you already have a dotnet SDK (6,7,8) installed, you can quickly install the StateSmith CLI using the following command. It is the smallest (28 MB), fastest, and simplest way to install the StateSmith CLI.

```sh
dotnet tool install --global StateSmith.Cli
```
Make sure that the StateSmith.Cli version is at least `0.10.0`. You can check the version by running:

```sh
ss.cli --version
```

You can now skip to the next section (past downloading).

<br>

## Download the standalone binary (no dotnet required)
Download the correct binary for your computer from the StateSmith github repo.

Please note that binary files are about 145 MB in size, but will be trimmed down to about to 90 MB in the future.

>>>>>>>>>>>>>>>> FIXME use compressed files

### Windows
1. Download binary from [here](https://github.com/StateSmith/StateSmith/releases/tag/cli-v0.10.0-alpha-2). If unsure, use [windows-x64](https://github.com/StateSmith/StateSmith/releases/download/cli-v0.10.0-alpha-2/ss.cli-win-x64.exe).
2. Put the binary in this directory.
3. Rename the downloaded binary to `ss.cli.exe`.

### Linux
The below instructions assume Linux x64 (non-Alpine). Alpine and `ARM` binaries also available [here](https://github.com/StateSmith/StateSmith/releases/tag/cli-v0.10.0-alpha-2).

```sh
# download the binary
wget https://github.com/StateSmith/StateSmith/releases/download/cli-v0.10.0-alpha-2/ss.cli-linux-x64

# make binary executable
chmod +x ss.cli-linux-x64

# rename the binary so that following instructions are cross platform
mv ss.cli-linux-x64 ss.cli

# optional: move the binary to a location in your PATH
# If you choose not to do this, you will need to run the binary with `./ss.cli`
sudo mv ss.cli /usr/local/bin
```

### Mac
The below instructions assume MacOs x64 (minimum macOS version is 10.12 Sierra). More available [here](https://github.com/StateSmith/StateSmith/releases/tag/cli-v0.10.0-alpha-2).

>>>>>>>>>>>>>>>> FIXME note arm64 issue https://github.com/StateSmith/StateSmith/issues/260#issuecomment-2210249795

```sh
# download the binary
wget https://github.com/StateSmith/StateSmith/releases/download/cli-v0.10.0-alpha-2/ss.cli-osx-x64

# make binary executable
chmod +x ss.cli-osx-x64

# rename the binary so that following instructions are cross platform
mv ss.cli-osx-x64 ss.cli

# optional: move the binary to a location in your PATH
# If you choose not to do this, you will need to run the binary with `./ss.cli`
sudo mv ss.cli /usr/local/bin
```


<br>

# Quick Test of the StateSmith CLI
Let's test the StateSmith CLI to make sure it is working. Run the following command in your terminal:

```sh
ss.cli --version
```
You should see output similar to the following:

```
Using settings directory: /home/afk/.config/StateSmith.Cli
StateSmith.Cli 0.10.0-alpha-2+fe7b05401136da5df801e5371a7c303ed04465ed
```

Make sure the version is at least `0.10.0`.

<br>

Now let's see what commands are available:

```sh
ss.cli --help
```

You should see output similar to the following:

```
Usage:

  run       Run StateSmith code generation.

  create    Create a new StateSmith project from template.
  
  setup     Set up vscode for StateSmith & csx files.

To get help for a specific verb, use the command name followed by --help
```

<br>

Now let's see what commands are available for the `run` verb:

```sh
ss.cli run --help
```

You should see output similar to the following:

```
  -h, --here         Runs code generation in this directory.

  -b, --rebuild      Ensures code generation is run. Ignores change detection.

  -u, --up           Searches upwards for manifest file.

  -r, --recursive    Recursive. Can't use with -i.

  -x, --exclude      Glob patterns to exclude

  -i, --include      Glob patterns to include. ex: `**/src/*.csx`. Can't use
                     with -r.
<snip...>
```

<br>




# Onwards! ⏭️
Navigate to [lesson-0](./lesson-0/README.md) and see the readme there.
