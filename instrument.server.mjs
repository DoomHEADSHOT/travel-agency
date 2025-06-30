import * as Sentry from "@sentry/react-router";

Sentry.init({
    dsn: "https://f0956bf7312c5e720635ab6d54d7b6c1@o4509588295712768.ingest.de.sentry.io/4509588323434576",

    // Adds request headers and IP for users, for more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
});
