export type iOSSubmitConfig = {
  /**
   * Your Apple ID username (you can also set the `EXPO_APPLE_ID` env variable).
   */
  appleId: string;

  /**
   * [App Store Connect unique application Apple ID number](https://expo.fyi/asc-app-id).
   * When set, results in skipping the app creation step.
   */
  ascAppId?: string;

  /**
   * Your Apple Developer Team ID.
   */
  appleTeamId: string;

  /**
   * A unique ID for your app that is not visible on the App Store,
   * will be generated unless provided.
   */
  sku?: string;

  /**
   * Primary language. Defaults to "en-US".
   */
  language?: string;

  /**
   * The name of your company, needed only for the first submission of any app to the App Store.
   */
  companyName?: string;

  /**
   * The name of your app as it will appear on the App Store.
   * Defaults to `expo.name` from the [app config](/workflow/configuration/).
   */
  appName?: string;

  /**
   * The path to your [App Store Connect Api Key **.p8** file](https://expo.fyi/creating-asc-api-key).
   */
  ascApiKeyPath?: string;

  /**
   * The Issuer ID of your [App Store Connect Api Key](https://expo.fyi/creating-asc-api-key).
   */
  ascApiKeyIssuerId?: string;

  /**
   * The Key ID of your [App Store Connect Api Key](https://expo.fyi/creating-asc-api-key).
   */
  ascApiKeyId?: string;

  /**
   * The bundle identifier that will be used when accessing submit credentials managed by Expo.
   * It does not have any effect if you are using local credentials. In most cases, this value will be autodetected.
   * However, if you have multiple Xcode schemes and targets, this value might be necessary.
   */
  bundleIdentifier?: string;

  /**
   * The path to your [store configuration file](/eas/metadata/).
   */
  metadataPath?: string;
};
