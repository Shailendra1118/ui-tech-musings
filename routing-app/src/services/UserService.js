export async function getAllUsers() {
    try{
        const response = await fetch('/users');
        return await response.json();
    }catch(error) {
        return [];
    }
}