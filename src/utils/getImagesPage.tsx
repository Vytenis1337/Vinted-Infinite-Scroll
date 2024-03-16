// getPostsPage function: Fetches a page of images from the Pexels API.
// Parameters:
// pageParam: The page number to fetch.
// options: Fetch options, including the AbortController signal for cancellation.
// Returns:
// A promise that resolves to an array of image data.

export const getImagesPage = async (pageParam = 1, options = {}) => {
  try {
    const headers = {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    } as HeadersInit;

    const response = await fetch(
      `https://api.pexels.com/v1/curated?per_page=20&page=${pageParam}&size=medium`,
      {
        headers,
        ...options,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    return data.photos;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
