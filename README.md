# Add-on Mirror

This addon allow someone to sync the display of the same app on different devices.

## Good to know

 - The sync is done through URL so the template had to handle proper routing
 - To become master, you have to use a special hash in the URL first

## TODO

 - Monitor `pushState` and not only `hashchange`