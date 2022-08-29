type SpotifyRecentParams = {
  token: string;
  limit: number;
};

export type RecentSongsResponse = {
  items: {
    played_at: string;
    track: {
      artists: {
        id: string;
        name: string;
      }[];
      name: string;
      external_urls: {
        spotify: string;
      };
    };
  }[];
};

export async function fetchSpotifyRecent({
  token,
  limit = 3,
}: SpotifyRecentParams) {
  if (!token) throw new Error("Missing spotify token");
  const response = await fetch(
    `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data: Promise<RecentSongsResponse> = response.json();
  return data;
}
