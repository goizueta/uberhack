var development = {
  firebase: {
    rootRefUrl: 'https://uberhack.firebaseio.com/',
    secretKey: 'XdnvC4rydo94hwAQlhl7lcumFUNBUSnw8gYoMcw6'
  },
  calendar: {
    clientId: '453264479059-fc56k30fdhl07leahq5n489ct7ifk7md.apps.googleusercontent.com',
    clientSecret: 'XA-7mkghxVKC-iXkCR9VnAbe',
    callBackURL: 'http://localhost:5555/calendar/callback'
  },
  uber: {
    clientId:            'rr2NzvHi69QJalUHz0ImU1KidoE1KGc5',
    access_token_url:    "https://login.uber.com/oauth/token",
    authorize_url:       "https://login.uber.com/oauth/authorize",
    base_url:            "https://login.uber.com/",
    scopes:              ["profile", "history_lite"],
    base_uber_url:       "https://api.uber.com/v1/",
    base_uber_url_v1_1 : "https://api.uber.com/v1.1/",
    redirect_url:        "http://localhost/uber/callback"
    // start_latitude:      "37.781955",
    // start_longitude:     "-122.402367",
    // end_latitude:        "37.744352",
    // end_longitude:       "-122.416743"
  }
};


var test = {
  firebase: {
    rootRefUrl: 'https://uberhack.firebaseio.com/',
    secretKey: 'XdnvC4rydo94hwAQlhl7lcumFUNBUSnw8gYoMcw6'
  },
  calendar: {
    clientId: '453264479059-fc56k30fdhl07leahq5n489ct7ifk7md.apps.googleusercontent.com',
    clientSecret: 'XA-7mkghxVKC-iXkCR9VnAbe',
    callBackURL: 'http://localhost:5555/calendar/callback'
  }
};

var production = {
  firebase: {
    rootRefUrl: 'https://uberhack.firebaseio.com/',
    secretKey: 'XdnvC4rydo94hwAQlhl7lcumFUNBUSnw8gYoMcw6'
  },
  calendar: {
    clientId: '453264479059-fc56k30fdhl07leahq5n489ct7ifk7md.apps.googleusercontent.com',
    clientSecret: 'XA-7mkghxVKC-iXkCR9VnAbe',
    callBackURL: 'http://localhost:5555/calendar/callback'
  }
};

var staging = {
  firebase: {
    rootRefUrl: 'https://uberhack.firebaseio.com/',
    secretKey: 'XdnvC4rydo94hwAQlhl7lcumFUNBUSnw8gYoMcw6'
  },
  calendar: {
    clientId: '453264479059-fc56k30fdhl07leahq5n489ct7ifk7md.apps.googleusercontent.com',
    clientSecret: 'XA-7mkghxVKC-iXkCR9VnAbe',
    callBackURL: 'http://localhost:5555/calendar/callback'
  }
};

var config = {
  development: development,
  test: test,
  production: production,
  staging: staging
};

module.exports = config;
