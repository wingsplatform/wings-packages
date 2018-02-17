import { articleToNode, query } from './utils';

const articleQuery = `
  {
    articles {
      id
      title
      slug
      content
      updatedAt
      createdAt
    }
  }
`;

export default async ({
  boundActionCreators: { createNode },
}, { endpoint, appSecret }) => {
  try {
    const res = await query({
      query: articleQuery,
      endpoint,
      token: appSecret,
    });
    if (res.error) {
      console.error('Something went wrong connecting to Wings:', res.error);
      process.exit(1);
    }
    res.data.articles.forEach(a => createNode(articleToNode(a)));
  } catch (e) {
    console.log(e);
  }
};