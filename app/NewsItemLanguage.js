module.exports = class NewsItemLanguage extends Model
{
    get routeKeyName()
    {
        return 'uri';
    }

    async find(id, field = 'news_language_id')
    {
        return await graphqlClient.request(`
          {
            newsItemLanguage(${field}: "${id}") {
              news_language_id
              news_id
              language_id
              title
              message
              uri
              newsItem {
                news_id
                date
                create
                position
                images {
                  news_images_id
                  news_id
                  language_id
                  filename
                  position
                }
              }
            }
          }
      `);
    }
}
