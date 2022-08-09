set tag=%1

set COMMON_CONFIG_FILE=env/common.env

yarn run cucumber_windows --profile %tag% || yarn run postcucumber_windows