## Birch

A Light Table plugin for viewing hierarchical data structures in a navigable tree view.

Have you ever wanted to quickly traverse a ClojureScript AST or be able to navigate the `:editor` objects in Light Table? Well now you can! This plugin was born out of those frustrations and the desire to quickly understand the structure of data.

An effort has been made to make this plugin extensible by third parties. I have attempted to write hooks for all the important aspects of how the tree view works. If you find the given API limiting in anyway, please open an issue to address the problem.

### Features

 * View inline results, including watch results (Clojure atoms not supported, yet)
 * Aleph integration for viewing internal Light Table objects
 * ClojureScript support for traversing atoms and JS objects.

### Eval and Watches

1. Evaluate a Clojure/ClojureScript form that returns some data.
2. Right click the inline result and select _Open in viewer_. This should parse the evaled data and open it in the eval viewer tab.

### Aleph

[Alpeh](https://github.com/ndr-qef/light-aleph) is a plugin for Light Table designed to help plugin developers see the structure of the editor at run time. It provides a high level view of how objects, behaviors and tags all work together. What Aleph does not provide is much detail the about specific objects and their structure. This plugin augments Aleph to provide a tree view for inspecting Light Table objects at runtime.

1. Open the Aleph browser and find the object you want to view.
2. Click the object in the filter list and the object viewer will open in a new tab.

### Contributing

This is still a work in progress, pull requests are always welcome.

### License

Copyright (C) 2014 by Eric Pritchett

Distributed under the GPLv3, see license.md for the full text.
