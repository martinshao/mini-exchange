/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    const stage = input?.stage ?? "aws-new-dev";

    return {
      name: "mini-exchange",
      home: "aws",

      removal: stage === "prod" ? "retain" : "remove",
      protect: stage === "prod",

      providers: {
        aws: {
          region: "us-east-1",
          profile:
            stage === "prod"
              ? "mini-exchange-new-prod"
              : "mini-exchange-new-dev",
        },
      },
    };
  },

  async run() {
    new sst.aws.Nextjs("ExchangeWeb", {
      path: "apps/exchange-web",

      server: {
        memory: "512 MB",
      },

      imageOptimization: {
        memory: "512 MB",
      },

      transform: {
        revalidationEventsSubscriber(args) {
          args.memory = "512 MB";
        },

        revalidationSeeder(args) {
          args.memory = "512 MB";
        },

        server(args) {
          args.memory = "512 MB";
        },

        imageOptimizer(args) {
          args.memory = "512 MB";
        },
      },
    });
  },
});