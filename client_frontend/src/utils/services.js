export const baseURL = "https://chit-chat-backend-97lm.onrender.com/api";

export const postRequest = async (url, body) => {
    try {
        console.log("Sending POST request to:", url);
        console.log("Request body:", body);
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            credentials: 'include' // Include credentials (e.g., cookies) with the request
        });

        const data = await response.json();

        if (!response.ok) {
            let message = data.message || 'Something went wrong';
            return { error: true, message };
        }

        return data;
    } catch (error) {
        return { error: true, message: 'Network error' };
    }
};

export const getRequest = async(url) => {
    try {
        const response = await fetch(url, { credentials: 'include' });

        const data = await response.json();

        if (!response.ok) {
            let message = "An error occurred...";

            if (data?.message) {
                message = data.message;
            }

            return { error: true, message };
        }

        return data;
    } catch (error) {
        return { error: true, message: 'Network error' };
    }
};
