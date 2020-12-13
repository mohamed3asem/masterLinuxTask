// Create a theme instance.
const theme = {
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#FFFFFF',
        },
      },
    },
    MuiButton: {
      root: {
        padding: '15px 25px',
        textTransform: 'none',
      },
      outlined: {
        padding: '15px 32px',
      },
    },
    MuiGridListTileBar: {
      root: {
        backgroundColor: 'transparent',
      },
      title: {
        fontSize: 14,
        color: '#ffffff',
      },
    },
    MuiToolbar: {
      root: {
        height: 72,
        justifyContent: 'space-between',
        '@media (min-width: 600px)': {
          height: 96,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#1E272E',
    },
    secondary: {
      main: '#2A333B',
    },
    grey: {
      50: '#F8F8F8',
      100: '#F1F1F1',
      200: '#E5E5E5',
      300: '#979797',
      400: '#FAFAFA',
      500: '#E5E5E5',
      600: '#F4F4F4',
    },
    white: '#ffffff',
  },
  typography: {
    // fontFamily: 'Montserrat, sans-serif',

    h1: {
      fontSize: 48,
      marginBottom: 10,
      fontWeight: 840,
      '@media (max-width: 600px)': {
        fontSize: 28,
      },
    },
    h2: {
      fontSize: 32,
      fontWeight: 300,
      marginBottom: 15,
      '@media (max-width: 600px)': {
        fontSize: 20,
      },
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      '@media (max-width: 600px)': {
        fontSize: 18,
      },
    },
    button: {
      fontWeight: 700,
      fontSize: 18,
      color: '#FFFFFF',
    },
    body1: {
      fontWeight: 300,
      '@media (max-width: 600px)': {
        fontSize: 14,
      },
    },
    body2: {
      fontSize: 12,
      '@media (max-width: 600px)': {
        fontSize: 14,
      },
    },
    subtitle1: {
      fontSize: 36,
      fontWeight: 300,
      '@media (max-width: 600px)': {
        fontSize: 20,
      },
    },
    subtitle2: {
      fontSize: 45,
      fontWeight: 600,
      '@media (max-width: 600px)': {
        fontSize: 20,
      },
    },
    h4: {
      fontWeight: 500,
      fontSize: 24,
      '@media (max-width: 600px)': {
        fontSize: 12,
      },
    },
    h5: {
      fontWeight: 500,
      color: '#FFFFFF',
      fontSize: 17,
      '@media (max-width: 600px)': {
        fontSize: 14,
      },
    },
  },
  mixins: {
    toolbar: {
      minHeight: 72,
      '@media (min-width:600px)': {
        minHeight: 96,
      },
      desktopHeight: 96,
      mobileHeight: 72,
    },
  },
};

export default theme;
