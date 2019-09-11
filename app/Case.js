module.exports = class Case extends Model
{
    async find(id, field = 'case_id')
    {
        return await graphqlClient.request(`
            {
                case(${field}: "${id}") {
                    case_id
                    yield
                    date
                    end_date
                    location
                    show_on_website
                    pass
                    languages {
                        case_language_id
                        case_id
                        language_id
                        title
                        content
                        uri
                    }
                    images {
                        case_image_id
                        case_id
                        language_id
                        filename
                        position
                    }
                }
            }
      `);
    }

    async inProgress()
    {
        let items = await graphqlClient.request(`
            {
                case(pass: false) {
                    case_id
                    yield
                    date
                    end_date
                    location
                    show_on_website
                    pass
                    languages {
                        case_language_id
                        case_id
                        language_id
                        title
                        content
                        uri
                    }
                    images {
                        case_image_id
                        case_id
                        language_id
                        filename
                        position
                    }
                }
            }
      `);

      return items.case.map(item => {
        let language = item.languages[0];
        delete item.language;
        
        return {...item, ...language};
      });
    }
    
    async completed()
    {
        let items = await graphqlClient.request(`
            {
                case(pass: true) {
                    case_id
                    yield
                    date
                    end_date
                    location
                    show_on_website
                    pass
                    languages {
                        case_language_id
                        case_id
                        language_id
                        title
                        content
                        uri
                    }
                    images {
                        case_image_id
                        case_id
                        language_id
                        filename
                        position
                    }
                }
            }
      `);
      
      return items.case.map(item => {
        let language = item.languages[0];
        delete item.language;
        
        return {...item, ...language};
      });
    }
}
