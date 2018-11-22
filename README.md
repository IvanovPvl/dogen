# Dogen

[![Build Status](https://travis-ci.org/IvanovPvl/dogen.svg?branch=master)](https://travis-ci.org/IvanovPvl/dogen)

Generate docx from http request

## Info

Project uses [docxtemplater](https://docxtemplater.com/) library.

## Run

Put your templates into `templates` folder, then

```sh
npm i & npm i --dev
npm run build-ts & npm run start
```

Send POST request to http://localhost/gen/<templateName> with json body that contains values for substitution.

## Test

```sh
npm run test
```
