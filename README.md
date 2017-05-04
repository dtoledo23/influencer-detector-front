# Influencer Detector
Influencer Detector is a system designed with the purpose of minning Facebook pages info and analyzing their relations in order to calculate influence levels within certain category over a predefined graph.

![alt text](https://github.com/dtoledo23/influencer-detector-front/blob/master/src/assets/img/Arquitectura.png?raw=true Influencer Detector Architecture)

- [influencer-detector-front](https://github.com/dtoledo23/influencer-detector-front)
- [influencer-detector-back](https://github.com/dtoledo23/influencer-detector-back)
- [influencer-detector-crawler](https://github.com/dtoledo23/influencer-detector-crawler)
- [influencer-detector-analytics](https://github.com/dtoledo23/influencer-detector-analytics)

### About us
We developed Influencer Detector as a school project in the Advanced Databases course. The team:

- Monserrat Genereux
- Victor Garcia
- Diego Toledo

# influencer-detector-front
User facing interface. Built using Vue. It provides to the user an easy-to-use interface. It allows the user to select the Facebook pages to use as reference for building the graph to analyze. It also allows them to choose the depth for minning the Facebook pages.

## Requirements
- Node v7

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## How to deploy
1. The app is already dockerized. Make sure you have `git` and `docker` installed on your host server.
2. Create `.env` file with the configuration needed. Take `.env.example` format.
3. Build: `docker build -t influencer-detector-front .`
4. Run: `docker run -d -p 80:80 influencer-detector-front`
