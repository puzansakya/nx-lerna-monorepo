```
lerna init
add workspace on root package json file
yarn create react-app <app_name> --template typescript

replace index wiht export on common project

lerna add @nxlerna/common --scope=@nxlerna/nomad
lerna add @nxlerna/ui --scope=@nxlerna/connect
create craco config paste stuff on main app
replace with craco command on package json file
use peer deps to use global verison of react

yarn nx g @nrwl/react:lib ui
yarn nx g @nrwl/react:app connect

```