module.exports = class Page extends Model
{
    async find(id, field = 'page_id')
    {
        return await graphqlClient.request(`
            {
                page(${field}: "${id}") {
                    page_id
                    sub_id
                    level
                    hide
                    position
                    languages {
                        page_language_id
                        page_id
                        language_id
                        menu_name
                        title
                        metatags
                        content
                        uri
                    }
                }
            }
      `);
    }

    async menuItems()
    {
        let items = await graphqlClient.request(`
            {
                page (sub_id: 0, level: 1, hide: 0) {
                    page_id
                    sub_id
                    level
                    hide
                    position,
                    languages {
                        menu_name,
                        uri
                    }
                }
            }
      `);

      return items.page.map(item => {
          return item.languages[0];
      });
    }
}
