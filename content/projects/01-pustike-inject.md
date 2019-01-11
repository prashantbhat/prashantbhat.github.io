+++
title = "Pustike Inject"
slug = "pustike-inject"
+++

## Pustike Inject    [![][Maven Central img]][Maven Central] [![][Javadocs img]][Javadocs] [![][license img]][license]

[Pustike Inject](https://github.com/pustike/pustike-inject) is a simple dependency injection framework that implements the [JSR-330](https://javax-inject.github.io/javax-inject) specification.

Injector is the core part of this library and tracks all dependencies for all types configured by module binders. A module uses the binder to defines bindings, which will be used to create an Injector. When an instance of a type or of a binding key is requested, the injector returns the instance by creating it and injecting all its declared dependencies (fields and constructor/methods).

<img src="/images/projects/pustike-inject.png" width="760" height="200"> <!--align="right"-->

Following are some key features of this library:

* Programmatic configuration in plain Java using EDSL similar to that of [Guice Binder](https://google.github.io/guice/api-docs/latest/javadoc/com/google/inject/Binder.html).
* Field, Method and Constructor injections that can be Named or Annotated specifically
* Default Scopes: Prototype, Lazy Singleton and Eager Singleton
* Support for custom scopes: Thread Local Scope and HTTP Session Scope
* MultiBinder support to bind multiple values as List/Collection
* Hierarchical Injector support
* Optional dependencies using ```@Nullable``` or ```Optional<T>```
* BindingListener: useful for performing further configurations
* Events to allow publish-subscribe style communication between components
* Only ~60kB in size and no external dependencies
* It requires Java 11 or higher.

**Documentation:** 

* User's Guide is included in the project's [README.md](https://github.com/pustike/pustike-inject#injector) file.
* Latest API docs are accessible [here](https://pustike.github.io/pustike-inject/docs/latest/api/).

**Latest Release:** The most recent release is v1.5.0 (2018-09-28).

To add a dependency using Maven, use the following:

```xml
<dependency>
    <groupId>io.github.pustike</groupId>
    <artifactId>pustike-inject</artifactId>
    <version>1.5.0</version>
</dependency>
```
To add a dependency using Gradle:
```
dependencies {
    compile 'io.github.pustike:pustike-inject:1.5.0'
}
```
Or, download the [latest JAR](https://search.maven.org/remote_content?g=io.github.pustike&a=pustike-inject&v=LATEST)

**License:**
This library is published under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

[Maven Central]:https://maven-badges.herokuapp.com/maven-central/io.github.pustike/pustike-inject
[Maven Central img]:https://maven-badges.herokuapp.com/maven-central/io.github.pustike/pustike-inject/badge.svg

[Javadocs]:https://javadoc.io/doc/io.github.pustike/pustike-inject
[Javadocs img]:https://javadoc.io/badge/io.github.pustike/pustike-inject.svg

[license]:LICENSE
[license img]:https://img.shields.io/badge/license-Apache%202-blue.svg
