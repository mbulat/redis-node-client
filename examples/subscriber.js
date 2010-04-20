#!/usr/bin/env node

// This script plays the role of listener/subscriber/consumer
// to **all** channels/classes.

var 
  sys = require("sys"),
  client = require("../lib/redis-client").createClient();

sys.puts("waiting for messages...");

client.subscribeTo("*", 
  function (channel, message) {
    sys.puts("[" + channel + "]: " + message);
  });
