module.exports = class NewsItem extends Model
{
    async find(id, field = 'case_id')
    {
        return await graphqlClient.request(`
            {
                newsItem(${field}: "${id}") {
                    news_id
                    date
                    create
                    position
                    languages {
                        news_language_id
                        news_id
                        language_id
                        title
                        message
                        uri
                    }
                    images {
                        news_images_id
                        news_id
                        language_id
                        filename
                        position
                    }
                }
            }
      `);
    }
    
    async all()
    {
        let items = await graphqlClient.request(`
            {
                newsItem {
                    news_id
                    date
                    create
                    position
                    languages {
                        news_language_id
                        news_id
                        language_id
                        title
                        message
                        uri
                    }
                    images {
                        news_images_id
                        news_id
                        language_id
                        filename
                        position
                    }
                }
            }
      `);
      
      return items.newsItem.map(item => {
        let language = item.languages[0];
        delete item.language;
        
        return {...item, ...language};
      });
    }
}
