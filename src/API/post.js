import { API_URL } from "./API_URL";

export const sendMessage = (data) => {
    fetch(`${API_URL}`, {
        headers: {
            "Content-Type": "application/json",
        },
        method: "PATCH",
        body: JSON.stringify(data)
    })
        .then(r => r.json())
        .then(r => console.log(r))
        .catch(err => console.log(err));
};

