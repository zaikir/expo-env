import { AndroidBuildConfig } from "./eas-android-build-config";
import { AndroidSubmitConfig } from "./eas-android-submit-config";
import { EasCommonBuildConfig } from "./eas-build-config";
import { iOSBuildConfig } from "./eas-ios-build-config";
import { iOSSubmitConfig } from "./eas-ios-submit-config";

type EasProfileConfig = EasCommonBuildConfig & {
  android?: Omit<EasCommonBuildConfig, "extends"> & AndroidBuildConfig;
  ios?: Omit<EasCommonBuildConfig, "extends"> & iOSBuildConfig;
};

type BuildProfile = string;
type SubmitProfile = string;

/**
 * Eas config type declaration based on [source files](https://github.com/expo/expo/tree/e32d3209e488db4fab7b9200afcf69eea6131a7c/docs/public/static/schemas/unversioned)
 *
 */
export type EasConfig = {
  build?: Record<BuildProfile, EasProfileConfig>;
  submit?: Record<
    SubmitProfile,
    { ios?: iOSSubmitConfig; android?: AndroidSubmitConfig }
  >;
};
