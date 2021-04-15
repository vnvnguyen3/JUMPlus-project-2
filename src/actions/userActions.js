import { LOGIN, LOGOUT, SIGNUP, UPDATE_USER } from './types';

export const login = (user) => ({type: LOGIN, payload: {user}});

export const logout = () => ({type: LOGOUT, payload: {}});

export const signup = (user) => ({type: SIGNUP, payload: {user}});

export const updateUser = (user) => ({type: UPDATE_USER, payload: {user}});