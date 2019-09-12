module.exports = class Sponsor extends Model
{
    async find(id, field = 'sponsor_id')
    {
        return await graphqlClient.request(`
            {
                sponsor(${field}: "${id}") {
                    sponsor_id
                    position
                    languages {
                        sponsors_language_id
                        sponsor_id
                        language_id
                        title
                        website
                        uri
                    }
                    images {
                        sponsors_images_id
                        sponsor_id
                        language_id
                        filename
                        date
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
                sponsor {
                    sponsor_id
                    position
                    languages {
                        sponsors_language_id
                        sponsor_id
                        language_id
                        title
                        website
                        uri
                    }
                    images {
                        sponsors_images_id
                        sponsor_id
                        language_id
                        filename
                        date
                        position
                    }
                }
            }
      `);
      
      return items.sponsor.map(item => {
        let language = item.languages[0];
        delete item.language;
        
        return {...item, ...language};
      });
    }
}
