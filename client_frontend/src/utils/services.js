// services.js

// Use the VITE_API_BASE_URL environment variable
export const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export const postRequest = async (url, body) => {
    try {
        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body), // Ensure the body is stringified
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

export const getRequest = async (url) => {
    try {
        const response = await fetch(`${url}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (!response.ok) {
            let message = 'An error occurred...';

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
