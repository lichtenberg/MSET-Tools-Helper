# MSET-Tools-Helper

This project contains a small node.js based script to handle OAuth
authentication for github for the M-SET Tool Authorization sytstem.

The helper is intended to be deployed on public node.js services like
Heroku.

If you use this for your own app, you'll need to modify the heroku
process environment to include your Github API ID and client secret.

It needs some error checking and likely an audit of the node.js
modules used to be sure we're up to date security-wise.

Shout-out to the author of "github-oauth" for an easy-to-use package.



