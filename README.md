# README

### Summary
A scoring app for the dart game Cricket that allows players to record their play. The app includes the options to set up match play with teams or to play with points. In the spirit of competitiveness, players can track matches across time, who played whom, and when necessary, save unfinished matches to resume at a later date.

### Technologies
#### Back End
Ruby 2.4.4
• Rails 5.1

#### Front End
React 16
• React Router 4.3.1
• Webpack 4.17.1

#### Testing
Rspec
• Enzyme
• Karma
• Jasmine

### Run locally
```
$ git clone https://github.com/benedictbutton/cricket.git
$ bundle install
$ rake db:create
$ rake db:migrate
$ rails s

```
& in a separate terminal session:
```
$ yarn install
$ yarn start

```
![Build Status](https://codeship.com/projects/e427e6a0-0f44-0135-f229-3e3b859db2c9/status?branch=master)
![Code Climate](https://codeclimate.com/github/benedictbutton/cricket.png)
[![Coverage Status](https://coveralls.io/repos/github/benedictbutton/cricket/badge.svg?branch=master)](https://coveralls.io/github/benedictbutton/cricket?branch=master)
