/**
 * iOS build config based on [source file](https://github.com/expo/expo/blob/e32d3209e488db4fab7b9200afcf69eea6131a7c/docs/public/static/schemas/unversioned/eas-json-build-ios-schema.js)
 *
 */
export type iOSBuildConfig = {
  /**
   * When set to `true`, EAS CLI won't require you to configure credentials when building the app.
   * This comes in handy when using EAS Build [custom builds](https://docs.expo.dev/custom-builds/get-started/).
   * Defaults to `false`.
   */
  withoutCredentials?: boolean;

  /**
   * If set to `true`, creates a build for iOS Simulator. Defaults to `false`.
   */
  simulator?: boolean;

  /**
   * Provisioning method used for `"distribution": "internal"` when you have an Apple account with Apple Developer Enterprise Program membership.
   * You can choose if you want to use `adhoc` or `universal` provisioning. The latter is recommended as it does not require you to register each individual device.
   * If you don't provide this option and still authenticate with an enterprise team, you'll be prompted to choose a provisioning method.
   */
  enterpriseProvisioning?: "universal" | "adhoc";

  /**
   * Controls how EAS CLI bumps your application build version. Defaults to `false`.
   *
   * Allowed values:
   * - `"version"` - bumps the patch of `expo.version` (for example, `1.2.3` to `1.2.4`).
   * - `"buildNumber"` (or `true`) - bumps the last component of `expo.ios.buildNumber` (for example, `1.2.3.39` to `1.2.3.40`).
   * - `false` - versions won’t be bumped automatically (default).
   *
   * Based on the value of [`cli.appVersionSource` in **eas.json**](https://docs.expo.dev/build-reference/app-versions/),
   * the values will be updated locally in your project or on EAS servers.
   */
  autoIncrement?: boolean | "version" | "buildNumber";

  /**
   * Image with build environment
   *
   * [Learn more] (https://docs.expo.dev/build-reference/infrastructure).
   */
  image?: string;

  /**
   * The iOS-specific resource class that will be used to run this build. Defaults to `${ResourceClasses.ios[0]}`.
   *
   * For information on available build resources for each resource class, see
   * [iOS build server configurations](https://docs.expo.dev/build-reference/infrastructure/#ios-build-server-configurations).
   *
   * The `large` resource class is not available on the free plan.
   */
  resourceClass?: "default" | "medium" | "large";

  /**
   * Version of [bundler](https://bundler.io/).
   */
  bundler?: string;

  /**
   * Version of fastlane.
   */
  fastlane?: string;

  /**
   * Version of CocoaPods.
   */
  cocoapods?: string;

  /**
   * Xcode project's scheme.
   * - If a project has multiple schemes, you should set this value.
   * - If a project has only one scheme, it will be detected automatically.
   * - If a project has multiple schemes and this value is **not** set, EAS CLI will prompt you to select one of them.
   */
  scheme?: string;

  /**
   * Xcode project's Build Configuration.
   * - For an Expo project, the value is `"Release"` or `"Debug"`. Defaults to `"Release"`.
   * - For a [bare React Native](https://docs.expo.dev/bare/overview/) project, defaults to the value specified in the scheme.
   *
   * It takes priority over [`developmentClient`](https://docs.expo.dev/build-reference/infrastructure/#developmentclient).
   */
  buildConfiguration?: string;

  /**
   * Path (or pattern) where EAS Build is going to look for the application archive.
   * EAS Build uses the `fast-glob` npm package for [pattern matching](https://github.com/mrmlnc/fast-glob#pattern-syntax).
   * You should modify that path only if you are using a custom **Gymfile**.
   * The default is `ios/build/Build/Products/*-iphonesimulator/*.app` when building for the simulator and `ios/build/*.ipa` in other cases.
   */
  applicationArchivePath?: string;

  /**
   * Custom workflow file name that will be used to run this iOS build.
   * You can also specify this property on the profile level for platform-agnostic workflows.
   * [Learn more](https://docs.expo.dev/custom-builds/get-started/).
   *
   * Example: `"config": "production-ios.yml"` will use the workflow from `.eas/build/production-ios.yml`.
   */
  config?: string;
};
