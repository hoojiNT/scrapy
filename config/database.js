module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'of6ykmg1of.n5nv7zil0b.tsdb.cloud.timescale.com'),
      port: env.int('DATABASE_PORT', 31260),
      database: env('DATABASE_NAME', 'tsdb'),
      user: env('DATABASE_USERNAME', 'tsdbadmin'),
      password: env('DATABASE_PASSWORD', 'utf2cwxkgwxiaplf'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
