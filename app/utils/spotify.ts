const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string;

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

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const RECENT_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=3`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getRecentTracks = async () => {
  const { access_token } = await getAccessToken();

  const response = await fetch(RECENT_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.json();
};
