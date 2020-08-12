---
published: false
tags: build make
---
=> have a pointer to diagram
see also:
[list of guild tool](https://en.wikipedia.org/wiki/List_of_build_automation_software)
[whatsinabuildtool](http://www.lihaoyi.com/post/WhatsinaBuildTool.html)
[In qest for ultimate build tool](http://blog.ltgt.net/in-quest-of-the-ultimate-build-tool/)

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
to when operation becames more complex (this was latter adressed by tool like CMake)

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

## [CMake (2000)](https://en.wikipedia.org/wiki/CMake)

The build process with CMake takes place in two stages. First, standard build files are created from configuration files. Then the platform's native build tools are used for the actual building.


## [Rake (2004?)](https://martinfowler.com/articles/rake.html)

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

## [Maven (2004)](https://en.wikipedia.org/wiki/Apache_Maven)

Keep XML as build description langage, but try to reduce overload by favoring 
convetion over explicit description.

As such the build process can be simplified with this convention in mind.
More specifically introduce the notion of _Build lifecycle_.

Build lifecycle is a list of named phases that can be used to give order to goal execution. One of Maven's standard lifecycles is the default lifecycle, which includes the following phases, in this order

1. validate
1.  generate-sources
1.  process-sources
1.  generate-resources
1.  process-resources
1.  compile
1. process-test-sources
1.  process-test-resources
1.  test-compile
1.  test
1.  package
1.  install
1.  deploy

In this respect, it's diverge from the common usage of make recipes, where dependencies were mixing asset dependencies and build step.

For example it is common to try to build makefile that only recompil what as changed when invoked. This imply a detail description of low level dependencies, but does make a differences with high level stage dependencies implied by this build lifecycle. (see moder ages).


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

Pros:

- integrate a view of what a full build process is (get / compile / test / package / deploy)
- Bills of Material (BOM) recursive / multiproject sharing (hierachical pom construction) so that you have consistent library names and versions across all your projects.

Cons:
- Like ant, rely on plugin for extension. While theoritically these plugin could habe been build by any other langage, in reallity support and use of other langage has been minimal.
- pretty much restricted to JVM ecosystem

## [Gradle (2007)](https://en.wikipedia.org/wiki/Gradle)

Designed for multi-project builds which can grow to be quite large, and supports incremental builds by intelligently determining which parts of the build tree are up-to-date, so that any task dependent upon those parts will not need to be re-executed (which is a pain point in maven)

introduces a Groovy-based domain-specific language (DSL) instead of the XML form used by Apache Maven, and allow to better customize maven convention


```groovy
apply plugin: 'java'
sourceSets.main.java.srcDirs = ['src/java']
```

Pros:
- can use maven project convention and ant build script

Cons:
- primarily focused around Java,[3] Groovy and Scala development and deployment

Notes:
[/migrating-from-maven](https://guides.gradle.org/migrating-from-maven/)

## [Buildr (2008?)](http://buildr.apache.org/)

Kind of Gradle like descending from Rake, understanding maven convention,
targeting Java ecosystem, but using a ruby DSL.

Now behind gradle in term of update.

## [sbt (2011?)](https://en.wikipedia.org/wiki/SBT_(software))

Dedicated tool for scala build, with it's own DSL that use scala.

As maven prefer convention over configuration, which make standard use case a breeze,
and customisation a nightmare.

_SBT lacks the simplicity of Make, where the number of core abstractions are small, the mental model is extremely simple to understand, and where it mainly does one thing and does that one thing really well without interfering in your abilities to customize your build tool chain with other scripts._[1]

```scala
def junit = "junit" % "junit" % "4.8"
def akkaVersion = "2.4.2"
def akkaActor = "com.typesafe.akka" %% "akka-actor" % akkaVersion
def akkaCluster = "com.typesafe.akka" %% "akka-cluster" % akkaVersion

lazy val root = (project in file(".")).
  aggregate(app).
  settings(
    inThisBuild(List(
      // Set the Scala version used by this build to 2.11.7.
      scalaVersion := "2.11.7",
      // Set the version to 0.1.0-SNAPSHOT.
      version := "0.1.0-SNAPSHOT"
    )),
    name := "my-project"
  )
```

Cons:
- support [only Java and scala](http://www.methodsandtools.com/tools/scalabuildtool.php) project

Notes:
[1](https://www.quora.com/Scala-programming-language-1/Is-sbt-the-best-way-to-manage-Scala-projects-if-your-first-priority-is-developer-efficiency)

# Modern Time

## [Blaze 2008](https://mike-bland.com/2012/10/01/tools.html)

Google internal build system.

[blaze](http://google-engtools.blogspot.fr/2011/08/build-in-cloud-how-build-system-works.html)

and the infant
[bazel](https://bazel.build/), 
[buck](https://buckbuild.com/), 
[pants](http://pantsbuild.github.io/index.html)


Notes
[1](https://www.quora.com/What-build-system-does-Facebook-use?share=1)
