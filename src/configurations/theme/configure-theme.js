const configureTheme = () => ({
  default: {
    primaryColor: '#e8e8e8',
    secondaryColor: '#333333',
    chatInputContainerBackground: '#808080',
    primaryBackground: '#ffffff',
    secondaryBackground: '#cccccc',
    border: '#666666'
  },
  dark: {
    primaryColor: '#333333',
    secondaryColor: '#808080',
    chatInputContainerBackground: '#cccccc',
    primaryBackground: '#e8e8e8',
    secondaryBackground: '#666666',
    border: '#ffffff'
  }
});

export default configureTheme;

// HeaderBackGround, ChatButtonDefault, ModalText: #333333
// HeaderIcon, MainBackground, ModalUnderline: #e8e8e8
// ChatInputContainerBackground #808080
// MessageBackground, ModalHeaderBackground, ModalIcon: #cccccc
// ChatInputBackground, ModalBackground: #ffffff
// ModalBorder, ChatInputBorder: #666666

// ModalSwitchValidate: #008800
// ModalSwitchDenied: #888888
