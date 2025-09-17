
# Project Blueprint

## Overview
This is a starter Angular application configured to use modern features, including standalone components and a zoneless change detection strategy.

## Current Request: Switch to Zoneless

### Plan:
1. **Update `blueprint.md`**: Create and update the `blueprint.md` file to reflect the new goal of making the application zoneless.
2. **Modify Polyfills**: Remove the `zone.js` import from the application's polyfills. This is the library that Angular traditionally uses to automatically trigger change detection.
3. **Update Bootstrap Configuration**: Configure the application to bootstrap with a `'noop'` `ngZone`. This tells Angular not to use Zone.js, enabling the new zoneless change detection mechanism.
4. **Verify the Build**: Run `ng build` to ensure that the changes haven't introduced any compilation errors.
5. **Commit Changes**: Commit the changes to your Git repository.

### Completed Steps:
* Updated `app.config.ts` to use `provideZonelessChangeDetection`.
* Corrected `angular.json` to point to the correct `tsconfig.json` file.
* Verified the build was successful after the changes.
