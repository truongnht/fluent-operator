const helmRegex = {
  customType: "regex",
  datasourceTemplate: "helm",
  matchStringsStrategy: "combination",
};

const customRegex = {
  customType: "regex",
  matchStringsStrategy: "combination",
};

module.exports = {
  username: "renovate[bot]",
  gitAuthor: "Renovate Bot <bot@renovateapp.com>",
  onboarding: false,
  platform: "github",
  forkProcessing: "disabled",
  dryRun: null,
  repositories: ["truongnht/fluent-operator"],
  enabledManagers: ["custom.regex"],
  extends: ["config:recommended"],
  customManagers: [
    {
      customType: "regex",
      matchStringsStrategy: "any",
      fileMatch: ["charts/fluent-operator/values.yaml"],
      matchStrings: [
        // "\# renovate:\\s+datasource=(?<datasource>\\S+?)\\s+registryUrl=(?<registryUrl>\\S+?)\\s+depName=(?<depName>\\S+?)\\s+(crdTargetRevision|targetRevision|chartVersion|version):\\s+(?<currentValue>\\S+?)\\s+?",
        '# renovate:\\s+datasource=(?<datasource>\\S+?)\\s+depName=(?<depName>\\S+?)\\s+tag:\\s+"(?<currentValue>\\S+?)"\\s+?',
      ],
    },
  ],
  packageRules: [
    {
      groupName: "fluent-bit",
      matchPackageNames: ["/^xpkg\\.upbound\\.io\\/crossplane-contrib\\//"],
    },
  ],
};
