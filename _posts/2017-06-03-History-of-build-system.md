---
published: false
---
## pre-make

## [Make (1976)](https://en.wikipedia.org/wiki/Make_(software))

First tool to allows to break build operation in 2 parts:
- a set of task, and dependencies between them
- a set of recipes to execute the task

```make
    CFLAGS ?= -g

    all: helloworld

    helloworld: helloworld.o
	    # Commands start with TAB not spaces
	    $(CC) $(LDFLAGS) -o $@ $^

    helloworld.o: helloworld.c
	    $(CC) $(CFLAGS) -c -o $@ $<

    clean: FRC
	    rm -f helloworld helloworld.o
```

Done at a time were library or module were much less in <nombreu> than now.
Use of shell one line for building recipes give some flexibility, but does not scale well
to when operation becames more complex.

Recursive build description for package of package, was an issue.

Mixing description of build inside the build, make them non portable (when moving to an other compiler for ex).


Pros:
- very simple concept and low learning curve
- easy to customize and versatile
- availble everywhere on UNIX

Cons:
- tab format (bite everyone)
- shell limit: in term of expression and execution: 
	-- one shell process instanciated by row
    -- no possibility of sharing state except using file.

