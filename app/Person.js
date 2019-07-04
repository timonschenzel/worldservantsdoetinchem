module.exports = class PageLanguage extends Model
{
    get routeKeyName()
    {
        return 'name';
    }

    async all()
    {
        return await graphqlClient.request(`
            {
                person {
                    name
                    photo
                }
            }
      `);
    }

    async find(name)
    {
        return await graphqlClient.request(`
            {
                person(name: "${name}") {
                    name
                    photo
                }
            }
      `);
    }
}
