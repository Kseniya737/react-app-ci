set env=%1
set tag=%2

set COMMON_CONFIG_FILE=env/common.env
sen NODE_END=%env%

yarn run cucumber_windows:%env% --profile %tag% || yarn run postcucumber_windows