import fs from 'node:fs';
import sql from  'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { error } from 'node:console';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay for demonstration
  //throw new Error('Database connection failed'); // Simulate an error for demonstration

  return db.prepare('SELECT * FROM meals').all();
  // const meals = db.prepare('SELECT * FROM meals').all();
  // return meals.map(meal => ({
  //   ...meal,
  //   image: meal.image || '/images/default-meal.jpg', // Fallback image if none provided
  // }));
}


export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true, strict: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split('.').pop();
  const imagePath = `public/images/${meal.slug}.${extension}`;
  const imageUrl = `/images/${meal.slug}.${extension}`;
  
  const bufferedImage = await meal.image.arrayBuffer();

  // Use a promise to wait for the stream to finish
  await new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(imagePath);
    stream.write(Buffer.from(bufferedImage), (err) => {
      if (err) {
        reject(new Error('Saving image failed!'));
      } else {
        resolve();
      }
    });
  });
  meal.image = imageUrl;

  const { slug, title, summary, instructions, image, creator, creator_email } = meal;
  db.prepare('INSERT INTO meals (slug, title, summary, instructions, image, creator, creator_email) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .run(slug, title, summary, instructions, image, creator, creator_email);
} 
