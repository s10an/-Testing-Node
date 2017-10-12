var irc = require('irc');
var client = new irc.Client('irc.quakenet.org', 's10anjs', {
  channels: ['#norge']
});

client.addListener('error', function(message) {
  console.error('error: ', message);
});

client.addListener('connect', function() {
  console.log('connected to the irc server');
});

client.addListener('message', function (from, to, message) {
  console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('pm', function (from, message) {
  console.log(from + ' => ME: ' + message);
});

