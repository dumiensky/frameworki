import { Album, Post, User, Photo, Comment} from '../types/types';

const BASE = 'https://jsonplaceholder.typicode.com';

export const getAlbums = async () => {
  const response = await fetch(`${BASE}/albums`);
  return response.json() as Promise<Album[]>;
};

export const getAlbum = async (id: number) => {
  const response = await fetch(`${BASE}/albums/${id}`);
  return response.json() as Promise<Album>;
};

export const getPhotos = async () => {
  const response = await fetch(`${BASE}/photos`);
  return response.json() as Promise<Photo[]>;
};

export const getPhoto = async (id: number) => {
  const response = await fetch(`${BASE}/photos/${id}`);
  return response.json() as Promise<Photo>;
};

export const getPosts = async () => {
  const response = await fetch(`${BASE}/posts`);
  return response.json() as Promise<Post[]>;
};

export const getPost = async (id: number) => {
  const response = await fetch(`${BASE}/posts/${id}`);
  return response.json() as Promise<Post>;
};

export const getComments = async () => {
  const response = await fetch(`${BASE}/comments`);
  return response.json() as Promise<Comment[]>;
};

export const getPostComments = async (id: number) => {
  const response = await fetch(`${BASE}/posts/${id}/comments`);
  return response.json() as Promise<Comment[]>;
};

export const getUsers = async () => {
  const response = await fetch(`${BASE}/users`);
  return response.json() as Promise<User[]>;
};

export const getUser = async (id: number) => {
  const response = await fetch(`${BASE}/users/${id}`);
  return response.json() as Promise<User>;
};


