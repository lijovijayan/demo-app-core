process.env.DEBUG = 'mongo-seeding';

const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
    database: {
        host: '127.0.0.1',
        port: 27017,
        name: 'oneshot'
    },
    dropDatabase: true
};

const collectionReadingOptions = {
    extensions: ['json'],
    ejsonParseOptions: {
        relaxed: true
    }
    // transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId]
};

const seeder = new Seeder(config);
const repositories = ['seeder/repository'];

repositories.forEach((repository) => {
    const collections = seeder.readCollectionsFromPath(
        path.resolve(repository),
        collectionReadingOptions
    );
    console.log(collections);
    seeder
        .import(collections)
        .then(() => {
            console.log(`seeding completed on repository '${repository}'!`);
        })
        .catch((err) => {
            console.log(`seeding failed on repository '${repository}'!`);
        });
});
