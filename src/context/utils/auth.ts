export const isUserLoggedIn = (): boolean => {
  if (typeof window !== 'undefined') {
    // Ensure window is defined (i.e., code is running in the browser)
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  }
  // Return false by default if window is not defined (e.g., during server-side rendering)
  return false;
};