+++
title = "Pustike Maven Parent"
slug = "pustike-maven-parent"
+++

## Pustike Maven Parent     [![][Maven Central img]][Maven Central] [![][license img]][license]

This project contains common [Maven](https://maven.apache.org) configuration for Pustike projects and is published as a [GitHub Project](https://github.com/pustike/pustike-maven-parent) under Apache License.

**Usage:**

Include it in the parent section of pom.xml, as shown here:

```xml
<parent>
    <groupId>io.github.pustike</groupId>
    <artifactId>pustike-maven-parent</artifactId>
    <version>0.1.0</version>
</parent>
```

**Properties:**

 * Project's source encoding is set to: `UTF-8`
 * Compiler's source and target are set to Java version: `11`

**Dependencies:**

Test dependencies for [JUnit 5](https://junit.org/junit5) are included. 

| Group Id          | Artifact Id          | Version |
|-------------------|----------------------|---------|
| org.junit.jupiter | junit-jupiter-api    | 5.3.2   |
| org.junit.jupiter | junit-jupiter-engine | 5.3.2   |

**Build Plugins:**

Following maven build plugins are defined from the groupId: `org.apache.maven.plugins`

| Artifact Id            | Version  |
|------------------------|----------|
| maven-compiler-plugin  | 3.8.0    |
| maven-jar-plugin       | 3.1.1    |
| maven-javadoc-plugin   | 3.0.1    |
| maven-resources-plugin | 3.1.0    |
| maven-surefire-plugin  | 3.0.0-M3 |
| maven-site-plugin      | 3.7.1    |
| maven-deploy-plugin    | 3.0.0-M1 |
| maven-source-plugin    | 3.0.1    |
| maven-gpg-plugin       | 1.6      |

Source and GPG plugins are defined only in the `release` profile.

**Release Profile:**

Sonatype plugin `nexus-staging-maven-plugin` is defined in the release profile which provides support for publishing artifacts to Central Maven repository. 

**License:**
This library is published under the [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

[Maven Central]:https://maven-badges.herokuapp.com/maven-central/io.github.pustike/pustike-maven-parent
[Maven Central img]:https://maven-badges.herokuapp.com/maven-central/io.github.pustike/pustike-maven-parent/badge.svg

[license]:LICENSE
[license img]:https://img.shields.io/badge/license-Apache%202-blue.svg
