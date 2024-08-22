export type AndroidSubmitConfig = {
  /**
   * Path to the JSON file with [Google Service Account Key](https://expo.fyi/creating-google-service-account)
   * used to authenticate with Google Play.
   */
  serviceAccountKeyPath: string;

  /**
   * The track of the application to use. Can be one of the following:
   * - 'production'
   * - 'beta'
   * - 'alpha'
   * - 'internal'
   */
  track: "production" | "beta" | "alpha" | "internal";

  /**
   * The [status of a release](https://developers.google.com/android-publisher/api-ref/rest/v3/edits.tracks#status).
   * Can be one of the following:
   * - 'completed'
   * - 'draft'
   * - 'halted'
   * - 'inProgress'
   */
  releaseStatus?: "completed" | "draft" | "halted" | "inProgress";

  /**
   * The initial fraction of users who are eligible to receive the release.
   * Should be a value from 0 (no users) to 1 (all users).
   * Works only with `inProgress` [release status](https://developers.google.com/android-publisher/api-ref/rest/v3/edits.tracks#status).
   */
  rollout?: number;

  /**
   * Indicates that the changes sent with this submission will not be reviewed
   * until they are explicitly sent for review from the Google Play Console UI.
   * Defaults to `false`.
   */
  changesNotSentForReview?: boolean;

  /**
   * The application ID that is used when accessing Service Account Key managed by Expo.
   * It does not have any effect if you are using local credentials.
   * In most cases, this value will be autodetected. However, if you have multiple product flavors,
   * this value might be necessary.
   */
  applicationId?: string;
};
