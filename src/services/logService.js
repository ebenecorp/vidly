// import Raven from "raven-js";

function init() {
  // Raven.config(
  //   "https://9a2d6e6e8497421b9ac78b269665f704@o462374.ingest.sentry.io/5465686",
  //   {
  //     release: "1-0-0",
  //     environment: "development-test",
  //   }
  // ).install();
}

function log(error) {
  console.error(error);
  // Raven.captureException(error);
}

export default {
  init,
  log,
};
