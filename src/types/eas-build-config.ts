export type EasCommonBuildConfig = {
  /**
   * When set to `true`, EAS CLI won't require you to configure credentials when building the app.
   * This comes in handy when using EAS Build [custom builds](https://docs.expo.dev/custom-builds/get-started/).
   * Defaults to `false`.
   */
  withoutCredentials?: boolean;

  /**
   * The name of the build profile that the current one should inherit values from.
   * This value can't be specified per platform.
   */
  extends?: string;

  /**
   * The source of credentials used to sign the application archive.
   * - `local` - if you want to provide your own [**credentials.json**](https://docs.expo.dev/app-signing/local-credentials).
   * - `remote` - if you want to use the credentials managed by EAS (default option).
   */
  credentialsSource?: "local" | "remote";

  /**
   * **Deprecated**: Name of the release channel for the Classic Updates service, which is only supported in SDK 49 and lower.
   * If you do not specify a channel, your binary will pull releases from the `default` channel.
   *
   * EAS Update uses the `channel` field, so you can remove `releaseChannel` after [migrating to EAS Update](https://docs.expo.dev/eas-update/migrate-from-classic-updates/).
   */
  releaseChannel?: string;

  /**
   * The EAS Update channel where this build will look for updates.
   * [Learn more](https://docs.expo.dev/eas-update/how-it-works).
   * Standalone builds will check for and download updates matching platform, native runtime, and channel.
   *
   * This field has no effect when `developmentClient` is set to `true`,
   * as development builds can run updates from any channel.
   *
   * If you have not yet migrated from Classic Updates to EAS Update,
   * then continue to use the `releaseChannel` field instead.
   */
  channel?: string;

  /**
   * The method of distributing your app.
   * - `internal` - You'll be able to share your build URLs with anyone, and they will be able to install the builds to their devices straight from the Expo website.
   * - `store` - Produces builds for store uploads, and your build URLs won't be shareable.
   */
  distribution?: "store" | "internal";

  /**
   * If set to `true` (defaults to `false`), this field will produce a [development build](https://docs.expo.dev/workflow/overview/#development-builds).
   *
   * For the build to be successful, the project must have [`expo-dev-client`](https://docs.expo.dev/versions/latest/sdk/dev-client/) installed and configured.
   *
   * **Note**: This field is for setting the `gradleCommand` to `:app:assembleDebug` for Android
   * and `buildConfiguration` to `Debug` for iOS. If these fields are provided for the same build profile,
   * they will take precedence over `developmentClient`.
   */
  developmentClient?: boolean;

  /**
   * The resource class that will be used to run this build.
   *
   * The `large` resource class is not available on the free plan.
   *
   * To see mapping for each platform, see [Android-specific resource class field](#resourceclass-1)
   * and [iOS-specific resource class field](#resourceclass-2).
   */
  resourceClass?: "default" | "medium" | "large";

  /**
   * Optional override of the [prebuild](https://docs.expo.dev/more/expo-cli/#prebuild) command used by EAS.
   *
   * For example, you can specify `prebuild --template example-template` to use a custom template.
   *
   * **Note**: `--platform` and `--non-interactive` will be added automatically by the build engine,
   * so you do not need to specify them manually.
   */
  prebuildCommand?: string;

  /**
   * List of paths (or patterns) where EAS Build is going to look for the build artifacts.
   * Use `applicationArchivePath` for specifying the path for uploading the application archive.
   * Build artifacts are uploaded even if the build fails.
   * EAS Build uses the `fast-glob` npm library for [pattern matching](https://github.com/mrmlnc/fast-glob#pattern-syntax).
   */
  buildArtifactPaths?: string[];

  /**
   * Version of Node.js used for build.
   */
  node?: string;

  /**
   * Version of Yarn used for build.
   */
  yarn?: string;

  /**
   * Version of pnpm used for build.
   */
  pnpm?: string;

  /**
   * Version of Bun used for build. You can also use a specific version.
   * Learn [how to configure the exact version in eas.json](https://docs.expo.dev/guides/using-bun/#customize-bun-version-on-eas).
   */
  bun?: string;

  /**
   * **Deprecated**: Version of [`expo-cli`](https://www.npmjs.com/package/expo-cli) used to [prebuild](https://docs.expo.dev/more/expo-cli/#prebuild) your app.
   * It only affects managed projects on Expo SDK 45 and lower.
   *
   * For newer SDKs, EAS Build will use the versioned [Expo CLI](https://docs.expo.dev/more/expo-cli/).
   * It is included with `expo` library. You can opt out of using the versioned Expo CLI by setting the `EXPO_USE_LOCAL_CLI=0` environment variable in the build profile.
   */
  expoCli?: string;

  /**
   * [Environment variables](https://docs.expo.dev/guides/environment-variables/) that should be set during the build process.
   * It should only be used for values that you would commit to your git repository and not for passwords or [secrets](https://docs.expo.dev/build-reference/variables/).
   */
  env?: Record<string, null | string | number>;

  /**
   * Controls how EAS CLI bumps your application build version. Defaults to `false`.
   *
   * When enabled, for Android, bumps `expo.android.versionCode` (for example, `3` to `4`).
   * For iOS, bumps the last component of `expo.ios.buildNumber` (for example, `1.2.3.39` to `1.2.3.40`).
   */
  autoIncrement?: boolean;

  /**
   * Cache configuration. This feature is intended for caching values that require a lot of computation.
   * For example, compilation results (both final binaries and any intermediate files).
   * However, it doesn't work well for **node_modules** because the cache is not local to the machine,
   * so the download speed is similar to downloading from the npm registry.
   */
  cache?: {
    /**
     * Disables caching. Defaults to `false`.
     */
    disabled?: boolean;

    /**
     * Cache key. You can invalidate the cache by changing this value.
     */
    key?: string;

    /**
     * List of the paths that will be saved after a successful build and restored at the beginning of the next one.
     * Both absolute and relative paths are supported, where relative paths are resolved from the directory with **eas.json**.
     */
    paths?: string[];
  };

  /**
   * Custom workflow file name that will be used to run this build.
   * You can also specify this property on platform level for platform-specific workflows.
   * [Learn more](https://docs.expo.dev/custom-builds/get-started/).
   *
   * Example: `"config": "production.yml"` will use workflow from `.eas/build/production.yml`.
   */
  config?: string;
};
