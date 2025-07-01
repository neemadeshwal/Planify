import express from 'express';

export async function initServer() {
  try {
    const app = express();
    return { app };
  } catch (error) {
    console.log('Server initialization error: ', error);
    throw error;
  }
}
