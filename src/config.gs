/** Google Analytics Manager
 * Manage your Google Analytics account in batch via a Google Sheet
 *
 * @license GNU LESSER GENERAL PUBLIC LICENSE Version 3
 * @author Rutger Meekers [rutger@meekers.eu]
 * @version 1.5
 * @see {@link http://rutger.meekers.eu/Google-Analytics-Manager/ Project Page}
 *
 ******************
 * Configuration
 ******************
 */

/**
 * Configuration
 ***************
 */

var colors = {
    primary: '#4CAF50',
    primaryDark: '#388E3C',
    primaryLight: '#C8E6C9',
    primaryText: '#FFFFFF',
    accent: '#FFC107',
    text: '#212121',
    textSecondary: '#727272',
    divider: '#B6B6B6'
};

var settings = {
    applicationName: 'Google Analytics Manager',
    applicationVersion: '1.5',
    googleOAuth2: {
        authorizationBaseUrl: 'https://accounts.google.com/o/oauth2/auth',
        tokenUrl: 'https://accounts.google.com/o/oauth2/token',
        clientIdScriptPropertyKey: 'GOOGLE_OAUTH_CLIENT_ID',
        clientSecretScriptPropertyKey: 'GOOGLE_OAUTH_CLIENT_SECRET',
    },
    searchConsoleApi: {
        oauth2Scope: 'https://www.googleapis.com/auth/webmasters',
        apiUrl: 'https://www.googleapis.com/webmasters/v3/sites/',
    },
};
