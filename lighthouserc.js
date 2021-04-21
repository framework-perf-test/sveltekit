module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
    },
    assert: {
      assertions: {
        "uses-long-cache-ttl": "off",
        "uses-http2": "off"
      }
    },
    upload: {
      target: "filesystem",
      outputDir: "./build/lighthouse"
    },
  },
};