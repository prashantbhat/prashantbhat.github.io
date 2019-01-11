+++
title = "Pustike Event Bus"
slug = "pustike-eventbus"
+++

## Pustike EventBus     [![][Maven Central img]][Maven Central] [![][Javadocs img]][Javadocs] [![][license img]][license]

[Pustike EventBus](https://github.com/pustike/pustike-eventbus) is a fork of [Guava EventBus](https://github.com/google/guava/wiki/EventBusExplained), which is probably the most commonly known event bus for Java. Most of the documentation here and test cases are from Guava itself.

EventBus is a library providing publisher/subscriber pattern for loose coupling between components(event senders and receivers), by sending messages to each other indirectly. Some objects register with the bus to be notified when certain events of interest occur. And some publish events on the bus. The bus notifies each of the registrants when the event is published. So registrant objects and event-source objects need not know about each other directly. Each may join or depart the bus at any time. Thus it enables central communication between components, simplifies the code and removes direct dependencies.

<img src="/images/projects/pustike-eventbus.png" width="760" height="200">

The [Guava Project](https://github.com/google/guava) contains several core libraries and is distributed as a single module that has a size of ~2.2MB (as of v19.0).
An application using only the EventBus will also need to include the full Guava dependency. So, this is an effort to extract only the event bus library from Guava project without any other dependencies.

This library also provides few additional features / changes, like:

* Typed Events supporting event type specific subscribers
* Error handling using ExceptionEvents
* WeakReference to target subscribers
* `@Subscribe(threadSafe = true)` instead of `@AllowConcurrentEvents`
* Unregistering a not-registered subscriber doesn't throw exception
* Allows using an external cache for loading subscriber methods and event type hierarchy
* Only ~20kB in size when using default subscriber cache
* Java 11 as the min requirement (Guava supports Java 6 onwards)

**Documentation:** 

* User's Guide is included in the project's [README.md](https://github.com/pustike/pustike-eventbus#event-bus) file.
* Latest API docs are accessible [here](https://pustike.github.io/pustike-eventbus/docs/latest/api/).

**Latest Release:** The most recent release is v1.5.0 (2018-09-28).

To add a dependency using Maven, use the following:
```xml
<dependency>
    <groupId>io.github.pustike</groupId>
    <artifactId>pustike-eventbus</artifactId>
    <version>1.5.0</version>
</dependency>
```
To add a dependency using Gradle:
```
dependencies {
    compile 'io.github.pustike:pustike-eventbus:1.5.0'
}
```
Or, download the [latest JAR](https://search.maven.org/remote_content?g=io.github.pustike&a=pustike-eventbus&v=LATEST)

**License:**
This library is published under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

[Maven Central]:https://maven-badges.herokuapp.com/maven-central/io.github.pustike/pustike-eventbus
[Maven Central img]:https://maven-badges.herokuapp.com/maven-central/io.github.pustike/pustike-eventbus/badge.svg

[Javadocs]:https://javadoc.io/doc/io.github.pustike/pustike-eventbus
[Javadocs img]:https://javadoc.io/badge/io.github.pustike/pustike-eventbus.svg

[license]:LICENSE
[license img]:https://img.shields.io/badge/license-Apache%202-blue.svg
