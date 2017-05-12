# Notes

## Libraries
* material-ui
* lodash.debounce
* react-tap-event-plugin

## Troubleshooting
### click/tap events on card not registering
had to install react-tap-event-plugin and call 'injectTapEventPlugin();'

### Card.onExpandChange called twice
temporarily using lodash debounce to prevent multiple calls for the same event

