# Publishing Guide

This guide will help you publish your Angular age calculator package to npm.

## Prerequisites

1. **npm Account**: Create an account at [npmjs.com](https://www.npmjs.com/signup)
2. **npm CLI**: Make sure you have npm installed (comes with Node.js)

## Step-by-Step Publishing Process

### 1. Update Package Information

Before publishing, update the following in `package.json`:

```json
{
  "name": "@awaisbaig/age-calculator",  // Already set to your npm username
  "version": "1.0.0",
  "author": "Awais Baig <awais.baig@example.com>",  // Already set
  "repository": {
    "type": "git",
    "url": "https://github.com/AwaisBaig17/age-calculator.git"  // Already set
  }
}
```

**Note**: Package is already configured with your information!

### 2. Login to npm

Open your terminal and login to npm:

```bash
npm login
```

Enter your:
- Username
- Password
- Email
- One-time password (if 2FA is enabled)

### 3. Build the Package

```bash
npm install
npm run build
```

This will create a `dist` folder with your compiled library.

### 4. Test the Package Locally (Optional but Recommended)

Before publishing, test your package locally:

```bash
# Create a tarball
npm run pack

# This creates a .tgz file in the dist folder
# You can install this in a test project:
cd /path/to/test-project
npm install /path/to/your-package/dist/your-package-1.0.0.tgz
```

### 5. Publish to npm

#### For Public Package (Free)

```bash
npm run publish:npm
```

Or manually:

```bash
npm run build
cd dist
npm publish --access public
```

#### For Scoped Package

If using a scoped package like `@your-username/ng-age-calculator`, you need to specify public access:

```bash
npm publish --access public
```

### 6. Verify Publication

1. Visit `https://www.npmjs.com/package/@your-username/ng-age-calculator`
2. Check that all information is correct
3. Try installing it in a test project:

```bash
npm install @your-username/ng-age-calculator
```

## Updating Your Package

When you make changes and want to publish a new version:

### 1. Update Version Number

Use npm's version command:

```bash
# Patch release (1.0.0 -> 1.0.1) - for bug fixes
npm version patch

# Minor release (1.0.0 -> 1.1.0) - for new features
npm version minor

# Major release (1.0.0 -> 2.0.0) - for breaking changes
npm version major
```

This automatically updates `package.json` and creates a git tag.

### 2. Publish the Update

```bash
npm run publish:npm
```

## Best Practices

### 1. Semantic Versioning

Follow [semver](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality
- **PATCH** version for backwards-compatible bug fixes

### 2. Changelog

Maintain a `CHANGELOG.md` file documenting changes in each version:

```markdown
## [1.0.1] - 2024-01-15
### Fixed
- Fixed date calculation bug

## [1.0.0] - 2024-01-01
### Added
- Initial release
```

### 3. Git Tags

Tag your releases in git:

```bash
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

### 4. README

Keep your README.md updated with:
- Installation instructions
- Usage examples
- API documentation
- Breaking changes (for major versions)

## Common Issues and Solutions

### Issue: Package name already exists

**Solution**: Your package is scoped to `@awaisbaig/age-calculator` which should be unique

### Issue: 402 Payment Required

**Solution**: You're trying to publish a scoped package privately. Use `--access public`:

```bash
npm publish --access public
```

### Issue: 403 Forbidden

**Solution**: 
- Make sure you're logged in: `npm whoami`
- Check you have permission to publish to this package name
- For scoped packages, ensure the scope matches your username

### Issue: Build fails

**Solution**:
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Make sure all peer dependencies are correct

## Unpublishing (Use with Caution)

You can unpublish within 72 hours of publishing:

```bash
npm unpublish @awaisbaig/age-calculator@1.0.0
```

**Warning**: Unpublishing is discouraged. Instead, publish a new version with fixes.

## Making Your Package Private

If you have an npm Pro/Teams account, you can publish private packages:

```bash
npm publish  # Without --access public
```

## Additional Resources

- [npm Documentation](https://docs.npmjs.com/)
- [Creating and Publishing Scoped Packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)
- [Semantic Versioning](https://semver.org/)
- [Angular Library Guide](https://angular.io/guide/creating-libraries)

## Checklist Before Publishing

- [ ] Updated package name in `package.json`
- [ ] Updated author information
- [ ] Updated repository URL
- [ ] Tested the package locally
- [ ] Updated README.md
- [ ] Added LICENSE file
- [ ] Ran tests (`npm test`)
- [ ] Built successfully (`npm run build`)
- [ ] Logged into npm (`npm login`)
- [ ] Ready to publish!

## Quick Publish Commands

```bash
# First time setup
npm login

# Every time you publish
npm version patch  # or minor/major
npm run build
cd dist
npm publish --access public
cd ..
git push && git push --tags
```
