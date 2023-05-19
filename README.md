# SpaceXLaunchListAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

A small, sample application that display SpaceX launches in a data table. 

The pagination relies exclusively on the [SpaceX-API](https://github.com/r-spacex/SpaceX-API). As far as I could see in the docs there was no option to find out the total number of launches without actually fetching all of the records. In practice the full list of launches is fairly small (94 as of today). Performance-wise fetching the whole list upfront, or even in a staggered fashion, would still be very performant. But doing that would side-step most of the API's GET options, which include offsets, limits and sorting. For this reason the 'Last' pagination button stays disabled until the end of the list is reached and a maximum list size is 'discovered.' Once a maxium offset has been determined the 'Last' pagination option will remain enabled.

## Demo

A deployed version can be found here: [https://jgkingston.github.io/space-x-launch-list-angular/](https://jgkingston.github.io/space-x-launch-list-angular/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
