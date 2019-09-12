module.exports = class CaseLanguage extends Model
{
    get routeKeyName()
    {
        return 'uri';
    }

    async find(id, field = 'page_language_id')
    {
        return await graphqlClient.request(`
            {
                caseLanguage(${field}: "${id}") {
                  case_language_id
                  case_id
                  language_id
                  title
                  content
                  uri
                  case {
                    case_id
                    yield
                    date
                    end_date
                    location
                    show_on_website
                    pass
                    images {
                      case_image_id
                      case_id
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
