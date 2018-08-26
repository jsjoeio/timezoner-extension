# Timezoner Extension
A simple [Chrome extension](https://chrome.google.com/webstore/detail/timezoner/kfnfgcafkeoflpapeniggnnkcaijgbgk) to help you coordinate across timezones. Input the date and time of your event and then we give you a link where others can view the event in their respective timezone. BOOM! Timezoning made easy 👏🏼

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to get this project running locally, you'll need to have the following installed on your computer:

```Shell
node v8.11 or above
npm v5.6 or above
yarn v1.9.4 or above
```

### Installing & Developing Locally

A step by step series of examples that tell you have to get a development env running

1. Install the dependencies using yarn
```Shell
yarn install
```

2. Start the app
```Shell
yarn start
```

3. Navigate to [localhost:1234](http://localhost:1234/). You should see something like this.

![screenshot of timezoner-extension local development](http://res.cloudinary.com/dobfxs62e/image/upload/v1535315564/Timezoner-extension.png)

4. Go off and develop young one. 

![happy robert redford](https://media2.giphy.com/media/xSM46ernAUN3y/giphy.gif)

## Running the tests

*TODO - currently no tests written*

## Building
When you're ready to create a new version to deploy, run: 
```Shell
yarn build
```

This preps your app for deployment. It will create a build directory called `dist`. Compress/zip this folder and upload it to the Chrome Web Store when you need to release a new update. Don't forget to change the version number in the `manifest.json`. 

## Deployment

Unfortunatley, continuous deployment is not set up (it's not an easy task with a Chrome extension). You'll need to go into the Developer Dashboard and do the following:

1. Click on 'Timezoner'
2. Click on 'package'
3. Click 'Upload updated package' (this is the zip file from earlier).

## Built With

* [React](https://reactjs.org/) - The JavaScript framework used
* [Parcel](https://parceljs.org/) - application bundler
* [emotion](https://emotion.sh/) - styling 

## Contributing

*Coming Soon* - 

<!--Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.-->

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **JavaScript Joe** - [@jsjoeio](https://github.com/jsjoeio)
* **Shawn Wang** - *Initial work* - [@sw-yx](https://github.com/sw-yx)
He created `create-react-app-parcel` which served as a quick boilerplate for this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/jsjoeio/timezoner-extension/blob/master/LICENSE.md) file for details.

## Acknowledgments

* Hat tip to Shawn Wang who wrote created the boilerplate for  [`create-react-app-parcel`](https://medium.freecodecamp.org/building-chrome-extensions-in-react-parcel-79d0240dd58f) and [boilerplate repo](https://github.com/sw-yx/create-react-app-parcel).
