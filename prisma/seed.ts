import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const book1 = await prisma.book.upsert({
    where: { isbn: '978-0747532699' },
    update: {},
    create: {
      isbn: '978-0747532699',
      title: 'Harry Potter y la piedra filosofal',
      genre: 'Fantasía',
      pages: 223,
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg',
      synopsis:
        'Un niño descubre que es un mago y comienza una aventura en una escuela de magia.',
      year: 1997,
      author: 'J.K. Rowling',
      isRead: true,
    },
  });

  const book2 = await prisma.book.upsert({
    where: { isbn: '978-0451524935' },
    update: {},
    create: {
      isbn: '978-0451524935',
      title: '1984',
      genre: 'Ciencia ficción',
      pages: 328,
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg',
      synopsis: 'Una inquietante visión de un futuro distópico y totalitario.',
      year: 1949,
      author: 'George Orwell',
    },
  });

  const book3 = await prisma.book.upsert({
    where: { isbn: '978-0307743657' },
    update: {},
    create: {
      isbn: '978-0307743657',
      title: 'El resplandor',
      genre: 'Terror',
      pages: 688,
      cover:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg',
      synopsis:
        'Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.',
      year: 1977,
      author: 'Stephen King',
    },
  });

  console.log({ book1, book2, book3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
