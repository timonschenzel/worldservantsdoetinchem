module.exports = class PageLanguage extends Model
{
    get routeKeyName()
    {
        return 'uri';
    }

    async find(id, field = 'page_language_id')
    {
        return await graphqlClient.request(`
            {
                pageLanguage(${field}: "${id}") {
                    page_language_id
                    page_id
                    language_id
                    menu_name
                    title
                    metatags
                    content
                    uri
                    page {
                        page_id
                        sub_id
                        level
                        hide
                        position
                    }
                }
            }
      `);
    }
}
