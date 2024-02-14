import { Album, Post, User, Photo, Comment, Todo} from '../types/types';

const BASE = 'https://jsonplaceholder.typicode.com';

export const getAlbums = async () => {
  const response = await fetch(`${BASE}/albums`);
  return response.json() as Promise<Album[]>;
};

export const getAlbum = async (id: string) => {
  const response = await fetch(`${BASE}/albums/${id}`);
  return response.json() as Promise<Album>;
};

export const getAlbumPhotos = async (id: string) => {
  const response = await fetch(`${BASE}/albums/${id}/photos`);
  return response.json() as Promise<Photo[]>;
};

export const getPhotos = async () => {
  const response = await fetch(`${BASE}/photos`);
  return response.json() as Promise<Photo[]>;
};

export const getPhoto = async (id: string) => {
  const response = await fetch(`${BASE}/photos/${id}`);
  return response.json() as Promise<Photo>;
};

export const getPosts = async () => {
  const response = await fetch(`${BASE}/posts`);
  return response.json() as Promise<Post[]>;
};

export const getPost = async (id: string) => {
  const response = await fetch(`${BASE}/posts/${id}`);
  return response.json() as Promise<Post>;
};
export const getComments = async () => {
  const response = await fetch(`${BASE}/comments`);
  return response.json() as Promise<Comment[]>;
};

export const getPostComments = async (id: string) => {
  const response = await fetch(`${BASE}/posts/${id}/comments`);
  return response.json() as Promise<Comment[]>;
};

export const getUsers = async () => {
  const response = await fetch(`${BASE}/users`);
  return response.json() as Promise<User[]>;
};

export const getUser = async (id: number | string) => {
  const response = await fetch(`${BASE}/users/${id}`);
  return response.json() as Promise<User>;
};

export const getUserAlbums = async (id: number) => {
  const response = await fetch(`${BASE}/users/${id}/albums`);
  return response.json() as Promise<Album[]>;
};

export const getUserPosts = async (id: number) => {
  const response = await fetch(`${BASE}/users/${id}/posts`);
  return response.json() as Promise<Post[]>;
};

export const getUserTodos = async (id: number) => {
  const response = await fetch(`${BASE}/users/${id}/todos`);
  return response.json() as Promise<Todo[]>;
};