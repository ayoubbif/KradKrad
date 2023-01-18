export const getIconByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return '/icons/iso.ico';
    case '.jsdos':
    case '.zip':
      return '/icons/compressed.png';
    default:
      return '/icons/unknown.ico';
  }
};
export const getProcessByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return 'V86';
    case '.jsdos':
    case '.zip':
      return 'JSDOS';
    default:
      return '';
  }
};
