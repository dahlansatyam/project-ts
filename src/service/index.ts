const baseUrl = "http://localhost:8000/api/v1"; //"https://api.astrosevatalk.com/api/v1";

export const postFetcher = async (
  url: string,
  body: BodyInit | null | undefined,
  method: string = "POST"
) => {
  try {
   // console.log(body);
    const result = await fetch(`${baseUrl}${url}`, {
      method,
      headers: { 
        Accept:  "application/json",
        "Content-Type": "application/json",
      },
      body,
      credentials: "include",
    });

    const response = await result.json();
    return response;
  } catch (err) {
    return err;
  }
};


export const getFetcher = async (url: string) => {
  try {
    const result = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",  
    });
    const response = await result.json();
    return response;
  } catch (err) {
    return err;
  }
};
