---
title: Proto buffer (serialisation)
published: true
tags: serialization  protobuf
---
## [Protocol Buffers](https://developers.google.com/protocol-buffers/)
Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data.

## [flatbuffers](https://google.github.io/flatbuffers/)

Binary message format faster than [protobuf]()

FlatBuffers is an efficient cross platform serialization library for C++, C#, C, Go, Java, JavaScript, TypeScript, PHP, and Python. It was originally created at Google for game development and other performance-critical applications.

## [Cap’n Proto]({% post_url 2023-09-26-serialisation-captain-proto %})

Cap’n Proto is the result of years of experience working on Protobufs, listening to user feedback, and thinking about how things could be done better.

## Overview (source [FlatBuffers](https://google.github.io/flatbuffers/flatbuffers_benchmarks.html))

- **Cap'n'Proto** promises to reduce Protocol Buffers much like FlatBuffers does, though with a more complicated binary encoding and less flexibility (no optional fields to allow deprecating fields or serializing with missing fields for which defaults exist). It currently also isn't fully cross-platform portable (lack of VS support).
    
- **msgpack**: has very minimal forwards/backwards compatibility support when used with the typed C++ interface. Also lacks VS2010 support.
    
- **Thrift**: very similar to Protocol Buffers, but appears to be less efficient, and have more dependencies.
    
- **YAML**: a superset of JSON and otherwise very similar. Used by e.g. Unity.
    
- **C#** comes with built-in serialization functionality, as used by Unity also. Being tied to the language, and having no automatic versioning support limits its applicability.
    
- **Project Anarchy** (the free mobile engine by Havok) comes with a serialization system, that however does no automatic versioning (have to code around new fields manually), is very much tied to the rest of the engine, and works without a schema to generate code (tied to your C++ class definition).
