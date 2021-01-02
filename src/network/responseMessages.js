'use estrict';

const responseMessages = (errorCode) => {
  switch(errorCode) {
    case 200:
      return 'Everything OKAY.';
    case 201:
      return 'Created correctly.';
    case 202:
      return 'Accepted';
    case 203:
      return 'Non-Authoritative Information.';
    case 204:
      return 'Not content.';
    case 205:
      return 'Reset content.';
    case 400:
      return 'Bad request.';
    case 401:
      return 'Unauthorized.';
    case 403:
      return 'Forbidden';
    case 404:
      return 'Not found.';
    case 405:
      return 'Method not allowed.';
    case 500:
      return 'Internal error.';
    case 501:
      return 'Not implemented.';
    case 502:
      return 'Bad gatway.';
    case 503:
      return 'Service unavailable.'
    default:
      return 'There are an error, try later again.'
  }
};

module.exports = responseMessages;