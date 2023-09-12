import { useEffect, useState } from 'react';
import { createDirectus } from '@directus/sdk';
import { rest, readItems } from '@directus/sdk/rest';

// Initialize the SDK.
const directus = createDirectus('https://groundzerodirectus.azurewebsites.net/').with(rest());

const languageCode = 'en';

async function fetchAssociations() {
  // Call the Directus API using the SDK using the locale of the frontend.
  const pages = await directus.request(
    readItems('association', {
      deep: {
        translations: {
          _filter: {
            languages_code: { _eq: languageCode },
          },
        },
      },
      fields: ['*', { translations: ['*'] }],
      limit: 10,
    })
  );

  // return pages[0];
  return pages;
}

function getTranslation(page, languageCode) {
  return page.translations.find((translation) => translation.languages_code === languageCode);
}

export function AssociationsTest() {
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    fetchAssociations().then((associations) => {
      console.log(associations);
      setAssociations(associations);
    });
  }, []);

  return (
    <div>
      <h1>Associations</h1>
      <ul>
        {associations.map((association) => (
          <li key={association.id}>
            <h2>{association.name}</h2>

            {/* Display image */}
            <img width="100" src={`https://groundzerodirectus.azurewebsites.net/assets/${association.logo}`} alt={association.name} />

            {/* Read translated content */}
            <p>{getTranslation(association, languageCode)?.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
