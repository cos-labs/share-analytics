# SHARE Analytics Dashboard

As a primary driver of research, proper understanding of projects and investigations is crucial to focus resources, determine new opportunities, and align new projects with the needs of the scientific community.

From visualising trends in topics and authorship to seeing where on the Earth contributions come from, the SHARE Analytics Dashboard provides powerful tools for providing insight to instituitions about the publications, projects, data and preprints that their research team produces.

The SHARE Analytics Dashboard is a flexible extensible framework tightly integrated with the SHARE platform that provides open and collaborative tools to lead science into the future.

## Operation

> The SHARE Analytics Dashboard is currently in development. A testing server is available for rudimentary exploration of the possibilities available, though bear in mind that the state of code is in flux and may not be stable.
> 
> To sign up for updates about when new versions are released follow this repository and new fixes, features and releases will be emailed right to your inbox.

### Adding a Widget
### Removing a Widget
### Configuring a Widget

## Developing a Widget

Widgets can be developed as an Ember component or as a Polymer component.
A Widget manage provides an interface for the widget to communicate with the SHARE API and the SHARE Dashboard.
The manager provides a container for the widget supplying the DOM element that the widget is held in, handles the accessing of the API, the customisation of queries.

A widget provides a validator which asserts that given query parameters will provide data that can be validly displayed by the widget, logic to rerender the widget when the size of the container changes, and logic to render the result of the query as a chart. Optionally, logic to render the chart as an image may also be provided.

### Actions

Using `this.sendAction()` a widget may communicate

`refreshWall`


## Developing the Dashboard

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

#### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

#### Running Tests

* `ember test`
* `ember test --server`

#### Building

* `ember build` (development)
* `ember build --environment production` (production)

#### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

