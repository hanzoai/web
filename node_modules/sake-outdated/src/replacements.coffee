export default [
  from: 'Run ncu with -u to upgrade package.json'
  to:   "Run 'sake outdated:update' to update your package.json"
,
  from: 'The following dependencies are satisfied by their declared version range, but the installed versions are behind. You can install the latest versions without modifying your package file by using npm update. If you want to update the dependencies in your package file anyway, run ncu -a.'
  to:   """
        The following dependencies are satisfied by their declared version ranges. Run
        'sake outdated:all' to update your package.json to the latest versions.
        """
,
  from: 'The following dependency is satisfied by its declared version range, but the installed version is behind. You can install the latest version without modifying your package file by using npm update. If you want to update the dependency in your package file anyway, run ncu -a.'
  to:   """
        The following dependency is satisfied by its declared version range. Run 'sake
        outdated:all' to update your package.json to the latest version instead.
        """
,
  from: 'All dependencies match the latest package versions :)'
  to:   'All dependencies up to date'
,
  from: 'Upgraded /'
  to:   'Updated /'
]
