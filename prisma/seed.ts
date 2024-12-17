import prisma from '../src/libs/prismadb'


async function main() {
  const tasks = [
    {
      title: 'Acme Corp',
      color: '#ff0000',
      completed: false,
      id: '1',
    },
    {
      title: 'Acme Corp',
      color: '#ff0000',
      completed: false,
      id: '2',
    },
    {
      title: 'Acme Corp',
      color: '#ff0000',
      completed: false,
      id: '3',
    },
    {
      title: 'Acme Corp',
      color: '#ff0000',
      completed: false,
      id: '4',
    },
    {
      title: 'Acme Corp',
      color: '#ff0000',
      completed: false,
      id: '5',
    }
  ];

  for (const task of tasks) {
    await prisma.task.create({ data: task });
  }

  console.log('Seed data created successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });