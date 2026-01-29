import { create } from 'zustand';
import { UserSessionDTO } from '../../api/models/users/UserSessionDTO';

type AuthState = {
  user: UserSessionDTO | null;
  isAuthenticated: boolean;
  setUser: (user: UserSessionDTO) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: true,
    }),

  clearUser: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
