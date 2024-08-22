/**
 * Android build config based on [source file](https://github.com/expo/expo/blob/e32d3209e488db4fab7b9200afcf69eea6131a7c/docs/public/static/schemas/unversioned/eas-json-build-android-schema.js)
 *
 */
export type AndroidBuildConfig = {
  /**
   * When set to `true`, EAS CLI won't require you to configure credentials when building the app.
   * This comes in handy when you want to build debug binaries, and the debug keystore is checked into the repository.
   * Defaults to `false`.
   */
  withoutCredentials?: boolean;

  /**
   * Image with build environment
   *
   * [Lear more](https://docs.expo.dev/build-reference/infrastructure/).
   */
  image?: string;

  /**
   * The Android-specific resource class that will be used to run this build.
   * Defaults to `medium`.
   *
   * For information on available build resources for each resource class, see
   * [Android build server configurations](https://docs.expo.dev/build-reference/infrastructure/#android-build-server-configurations).
   *
   * The `large` resource class is not available on the free plan.
   */
  resourceClass?: "default" | "medium" | "large";

  /**
   * Version of Android NDK.
   */
  ndk?: string;

  /**
   * Controls how EAS CLI bumps your application build version. Defaults to `false`.
   *
   * Allowed values:
   * - `"version"` - bumps the patch of `expo.version` (for example, `1.2.3` to `1.2.4`).
   * - `"versionCode"` (or `true`) - bumps `expo.android.versionCode` (for example, `3` to `4`).
   * - `false` - versions won’t be bumped automatically (default).
   *
   * Based on the value of [`cli.appVersionSource` in **eas.json**](https://docs.expo.dev/build-reference/app-versions/),
   * the values will be updated locally in your project or on EAS servers.
   */
  autoIncrement?: boolean | "version" | "versionCode";

  /**
   * Type of the artifact you want to build. It controls which Gradle task will be used to build the project.
   * It can be overridden by `gradleCommand` or `developmentClient: true` option.
   *
   * - `app-bundle` - `:app:bundleRelease` (creates **.aab** artifact)
   * - `apk` - `:app:assembleRelease` (creates **.apk** artifact)
   */
  buildType?: "app-bundle" | "apk";

  /**
   * Gradle task that will be used to build your project.
   * For example, `:app:assembleDebug` to build a debug binary.
   *
   * It’s not recommended unless you need to run a task that `buildType` does not support,
   * it takes priority over [`buildType`](https://docs.expo.dev/build-reference/infrastructure/#buildtype) and
   * [`developmentClient`](https://docs.expo.dev/build-reference/infrastructure/#developmentclient).
   */
  gradleCommand?: string;

  /**
   * Path (or pattern) where EAS Build is going to look for the application archive.
   * EAS Build uses the `fast-glob` npm library for [pattern matching](https://github.com/mrmlnc/fast-glob#pattern-syntax).
   * The default value is android/app/build/outputs/\*\*\/*.{apk,aab}.
   */
  applicationArchivePath?: string;

  /**
   * Custom workflow file name that will be used to run this Android build.
   * You can also specify this property on profile level for platform-agnostic workflows.
   * [Learn more](https://docs.expo.dev/custom-builds/get-started/).
   *
   * Example: `"config": "production-android.yml"` will use workflow from `.eas/build/production-android.yml`.
   */
  config?: string;
};
