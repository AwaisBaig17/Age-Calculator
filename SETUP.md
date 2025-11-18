# Setup and Development Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Library

```bash
npm run build
```

The compiled library will be in the `dist` folder with both ESM and CommonJS formats.

### 3. Run Tests

```bash
npm test
```

### 4. Watch Mode (Development)

```bash
npm run test:watch
```

## Before Publishing

### Update Package Information

Edit `package.json` and update:

1. **Package Name**: Already set to `@awaisbaig/age-calculator`
   ```json
   "name": "@awaisbaig/age-calculator"
   ```

2. **Author**: Already set to Awais Baig
   ```json
   "author": "Awais Baig <awais.baig@example.com>"
   ```

3. **Repository**: Already set to your GitHub
   ```json
   "repository": {
     "type": "git",
     "url": "https://github.com/AwaisBaig17/age-calculator.git"
   }
   ```

4. **License**: Already updated with your name

## Development Workflow

### Making Changes

1. Edit files in the `src` directory
2. Run tests: `npm test`
3. Build: `npm run build`
4. Test locally in another project

### Testing Locally

To test your package in any project before publishing:

```bash
# In this package directory
npm run build
cd dist
npm pack

# In your test project (React, Angular, Vue, etc.)
npm install /path/to/this/package/dist/your-package-name-1.0.0.tgz
```

## Publishing to npm

See `PUBLISHING.md` for detailed publishing instructions.

Quick publish:

```bash
# Login to npm (first time only)
npm login

# Build and publish (prepublishOnly script runs automatically)
npm publish
```

## Package Structure

```
├── src/
│   ├── index.ts                            # Main entry point
│   └── index.test.ts                       # Tests
├── dist/                                   # Build output (generated)
│   ├── index.js                            # ESM build
│   ├── index.cjs                           # CommonJS build
│   ├── index.d.ts                          # TypeScript definitions
│   └── index.d.cts                         # CommonJS TypeScript definitions
├── package.json                            # Package configuration
├── tsconfig.json                           # TypeScript configuration
├── vitest.config.ts                        # Test configuration
├── README.md                               # Package documentation
├── LICENSE                                 # MIT License
├── PUBLISHING.md                           # Publishing guide
└── SETUP.md                                # This file
```

## Key Features Implemented

✅ **Framework Agnostic**
- Works with React, Angular, Vue, Svelte, and vanilla JS
- No framework dependencies
- Static methods for easy use

✅ **Enhanced Functionality**
- `getAge()` - Get age breakdown
- `getAgeIn()` - Get age in specific units (years, months, weeks, days, hours, minutes, seconds)
- `isAdult()` - Check if 18+
- `getNextBirthday()` - Get next birthday date
- `getDaysUntilNextBirthday()` - Countdown to birthday
- `getZodiacSign()` - Get zodiac sign

✅ **TypeScript Support**
- Full type definitions
- Exported interfaces and types
- Strict mode enabled

✅ **Modern Build**
- ESM and CommonJS support
- Tree-shakeable
- Zero dependencies
- Built with tsup

✅ **Well Tested**
- Comprehensive unit tests with Vitest
- Edge case handling
- Error validation

## Differences from Original Package

### Original (@dipaktelangre/age-calculator)
- Static class methods
- Basic functionality only
- CommonJS only
- Angular 5 compatible

### This Package
- Framework-agnostic static methods
- Enhanced features
- ESM + CommonJS support
- Works with all modern frameworks
- Modern build system with tsup
- Better TypeScript support
- Additional utility methods (zodiac sign, etc.)

## Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### No Dependencies Required

This package has zero runtime dependencies! Only dev dependencies for building and testing.

### Test Failures

Run tests in watch mode for debugging:

```bash
npm run test:watch
```

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Build the package: `npm run build`
3. ✅ Run tests: `npm test`
4. 📝 Update package.json with your information
5. 📝 Update LICENSE with your name
6. 🚀 Publish to npm: See PUBLISHING.md

## Framework Integration Examples

### React
```bash
npm install @awaisbaig/age-calculator
```

### Angular
```bash
npm install @awaisbaig/age-calculator
```

### Vue
```bash
npm install @awaisbaig/age-calculator
```

All frameworks use the same package with the same API!

## Support

For issues or questions:
- Check the README.md for usage examples
- Review PUBLISHING.md for publishing help
- Check package.json scripts for available commands
