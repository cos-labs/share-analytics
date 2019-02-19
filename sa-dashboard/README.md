# api-gateway

[![Gitter](https://badges.gitter.im/cos-labs/api-gateway.svg)](https://gitter.im/cos-labs/api-gateway?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

The API gateway for the SHARE Analytics Dashboard. Provides a caching service in front of SHARE, and an endpoint to retrieve information about users from a list of IDs with a single POST request containing an array of the IDs to be returned.

This repository is intended for use in conjunction with the share-analytics project.

NGiNX is used as a caching server, and also routes requests to a lightweight node app that handles the bulk agent endpoint.

To run, install NGiNX, and add the provided `.conf` files to their correct locations, and start the proxy. Next, run the node app on the port specified in the NGiNX configuration.

In the share-analytics application, be sure to specify the url for SHARE as the now locally running proxy.

A `systemctl` file is provided to manage the node process.
