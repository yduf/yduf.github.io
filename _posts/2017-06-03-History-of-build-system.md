---
published: false
---
=> have a pointer to diagram

# Prehistoric Ages

People living naked and using ad-hoc command invocation (batched or manual).

[Great pictures!](https://karussell.wordpress.com/2009/09/29/evolution-of-build-systems/)
need to embed here

# [Make (1976)](https://en.wikipedia.org/wiki/Make_(software))

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

Make concept had give birth to a lot tools, trying to improve it or extends it in some ways.

Pros:
- very simple concept and low learning curve
- easy to customize and versatile
- availble everywhere on UNIX

Cons:
- tab format (bite everyone)
- shell limit: in term of expression and execution: 
	-- one shell process instanciated by row
    -- no possibility of sharing state except using file.

# Middle ages

Soemthing horrible happened, tied to the java brain washer...

## [Ant (2000)](https://en.wikipedia.org/wiki/Apache_Ant)

> It is similar to Make but is implemented using the Java language, requires the Java platform, and is best suited to building Java projects.

Well not that much. In these time xml was the new orange, so everyone thought xml was human friendly langage and should be put everywhere... (see below for yourself)

Add the overhead of the jvm on top of the build tool in order to gain portability for building
tomcat appserver.

[Adding custom task to ant require the usage of java](http://www.tutorialspoint.com/ant/ant_extending_ant.htm) and tight the whole ecosystem to Java (in respect to makefile which only execute a command into a shell, the command itself could use any kind of implementation).

```xml
<project name="Hello" default="compile">
    <target name="clean" description="remove intermediate files">
        <delete dir="classes"/>
    </target>
    <target name="clobber" depends="clean" description="remove all artifact files">
        <delete file="hello.jar"/>
    </target>
    <target name="compile" description="compile the Java source code to class files">
        <mkdir dir="classes"/>
        <javac srcdir="." destdir="classes"/>
    </target>
    <target name="jar" depends="compile" description="create a Jar file for the application">
        <jar destfile="hello.jar">
            <fileset dir="classes" includes="**/*.class"/>
            <manifest>
                <attribute name="Main-Class" value="HelloProgram"/>
            </manifest>
        </jar>
    </target>
</project>
```

# Renaissance

# [Rake (2004?)](https://martinfowler.com/articles/rake.html)

Try on its own to overcome make and ant shortcoming by using a dynamic langage (Ruby) for describing recipes and hosting environement. Keep make idea of using a DSL for describing rules
and dependancy by levering ruby ability to do so.

Ruby providing also a portable scripting environement, due to it's want to replace perl history
(have builting angostic file manipulation command like sh for eg).

- Rakefiles (rake's version of Makefiles) are completely defined in standard Ruby syntax. No XML files to edit. No quirky Makefile syntax to worry about (is that a tab or a space?)

- Users can specify tasks with prerequisites.

- Rake supports rule patterns to synthesize implicit tasks.

- Flexible FileLists that act like arrays but know about manipulating file names and paths.

```ruby
task :build_refact => [:clean] do
  target = SITE_DIR + 'refact/'
  mkdir_p target, QUIET
  require 'refactoringHome'
  OutputCapturer.new.run {run_refactoring}
end
```

Pros:
- as generic and flexible as original make
- much cleaner
- very portable

Cons:
- only known by Rubyist
- proablby too low level by default for mordern world
(does not come with a set of high level recipes and target to start right away compiling project)

# [Maven (2004)](https://en.wikipedia.org/wiki/Apache_Maven)

Keep XML as build description langage, but try to reduce overload by favoring 
convetion over explicit description.

As such the build process can be simplified with this convention in mind.

Like ant, rely on plugin for extension. While theoritically these plugin could habe been build by any other langage, in reallity support and use of other langage has been minimal.

```xml
<project>
  <!-- model version is always 4.0.0 for Maven 2.x POMs -->
  <modelVersion>4.0.0</modelVersion>
  
  <!-- project coordinates, i.e. a group of values which
       uniquely identify this project -->
  
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1.0</version>

  <!-- library dependencies -->
  
  <dependencies>
    <dependency>
    
      <!-- coordinates of the required library -->
      
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      
      <!-- this dependency is only used for running and compiling tests -->
      
      <scope>test</scope>
      
    </dependency>
  </dependencies>
</project>
```

graddle / sbt

## Modern Time

blaze, buck, plant
