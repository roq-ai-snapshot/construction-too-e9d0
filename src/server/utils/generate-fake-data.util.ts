import { prisma } from 'server/db';
import seed from 'const/seed.json';

export async function generateFakeDataUtil(mainEntityId: string, userId: string, count: number) {
  try {
    const data = !Number.isNaN(count) ? seed[count] : null;
    if (!data) {
      return;
    }
    const replacedData = JSON.stringify(data)
      .replaceAll('main_entity_pk', mainEntityId)
      .replaceAll('user_entity_pk', userId);
    const seedEntries = Object.entries(JSON.parse(replacedData));
    for (const [model, values] of seedEntries) {
      // @ts-ignore
      await prisma[model].createMany({
        data: values,
      });
    }
  } catch (err) {
    console.log('unable to generate seed data: ', err);
  }
}
