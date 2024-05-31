module.exports = {
  // Update or remove the clientId and clientSecret if not needed
  clientId: '',
  obfuscatedClientSecret: '',

  // Update the redirectUri if needed
  redirectUri: 'http://localhost',

  // Remove or update API endpoints to point to your CDN
  authApi: '',
  driveApi: '',

  // Remove or update the scope if not needed
  scope: '',

  // Update Cache-Control header settings as needed
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',

  // Remove or update the email address
  email: '',

  // Update other configurations as needed
  googleFontSans: 'Inter',
  googleFontMono: 'Fira Mono',
  googleFontLinks: [
    'https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap',
  ],
  footer: 'Powered by your Novosta CDN. Made with ❤ by Jacob.',
  protectedRoutes: [],
  links: [],
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
};
