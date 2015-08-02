var Promise = require('es6-promise').Promise;

const sources = {
  home : '../data/home.json',
  detail: '../data/detail.json',
  landing: '../data/landing.json',
  navigation: '../data/navigation.json',
  footer: '../data/footer.json'
}

class DataProxy {
  constructor() {
    this.sources = sources;
  }

  get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };

      // Make the request
      req.send();
    });
  }

  fetchSource(source){
    return this.get(sources[source]).then(JSON.parse);
  }

  fetchAll(){
    let all = [];
    Object.keys(sources).forEach((key) => {
      all.push(this.fetchSource(key));
    });

    return Promise.all(all);
  }

  fetchPages(){
    let all = [];
    Object.keys(sources).forEach((key) => {
      if(key !== 'navigation')
        all.push(this.fetchSource(key));
    });

    return Promise.all(all);
  }

  fetchNavigation(){
    return fetchSource('navigation')
  }
};

module.exports = DataProxy;
