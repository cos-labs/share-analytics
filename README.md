
# SHARE Analytics Dashboard

[![Gitter](https://badges.gitter.im/cos-labs/share-analytics.svg)](https://gitter.im/cos-labs/share-analytics?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

As a primary driver of research, proper understanding of projects and investigations is crucial to focus resources, determine new opportunities, and align new projects with the needs of the scientific community.

By visualising everything from trends in topics and authorship to seeing where on the Earth contributions come from, the SHARE Analytics Dashboard provides powerful insight to instituitions about the publications, projects, data and preprints that their research team produces.

The SHARE Analytics Dashboard is a flexible extensible framework tightly integrated with the SHARE platform that provides open and collaborative tools to guide science into the future.

## Operation

> The SHARE Analytics Dashboard is currently in development. A testing server is available for rudimentary exploration of the possibilities available, though bear in mind that the state of code is in flux and may not be stable.
> 
> To sign up for updates about when new versions are released follow this repository and new fixes, features and releases will be emailed right to your inbox.


#### Chart Engine
Change which charting library to use to render the chart. Choose from:
  - C3
  - dimple
  - NVD3
  - chart.js

Alternatively, the SHARE Analytics Dashboard also provides for a way to easily develop a custom widget.

## Developing a Widget

Widgets can be developed as an Ember component.
A Widget manage provides an interface for the widget to communicate with the SHARE API and the SHARE Dashboard.
The manager provides a container for the widget supplying the DOM element that the widget is held in, handles the accessing of the API, the customisation of queries.

A widget provides a validator which asserts that given query parameters will provide data that can be validly displayed by the widget, logic to rerender the widget when the size of the container changes, and logic to render the result of the query as a chart. Optionally, logic to render the chart as an image may also be provided.

### Actions

Using `this.sendAction()` a widget may communicate

`refreshWall`


## Developing the Dashboard

The SHARE Analytics Dashboard consists of three primary components. The app, which is an ember app that serves the front end for your bowser, the widget repo, which stores and shares widgets' types, configurations, and settings, and the dashboard repo, which stores, manages and shares dashboards' types configurations and settings.

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/)

### Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* `yarn install --lockfile`
* set up your config/local.yml (If this file does not exist, you may need to `ember g`)
```prod:
    CLIENT_ID: Add your client id here
    PERSONAL_ACCESS_TOKEN:
    OAUTH_SCOPES: osf.full_read osf.full_write
    REDIRECT_URI: http://localhost:4200/```

### Running / Development

* `ember serve`
* `./manage.py runserver`
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

Dockerfiles are in the repo that should provide a simple and easy way to deploy these ember and django apps.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

