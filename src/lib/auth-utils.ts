type TokenData = {
    token: string;
    expiresAt: number;
  };
  
  export const AUTH_STORAGE_KEY = 'auth_token';
  
  export const authUtils = {
    storeToken(token: string) {
      const tokenData: TokenData = {
        token,
        expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days
      };
      
      if (typeof window !== 'undefined') {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(tokenData));
      }
    },
  
    getToken(): string | null {
      if (typeof window === 'undefined') return null;
      
      const tokenData = localStorage.getItem(AUTH_STORAGE_KEY);
      if (!tokenData) return null;
  
      const { token, expiresAt } = JSON.parse(tokenData) as TokenData;
      if (Date.now() > expiresAt) {
        this.removeToken();
        return null;
      }
  
      return token;
    },
  
    removeToken() {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    },
  
    isAuthenticated(): boolean {
      return !!this.getToken();
    }
  };