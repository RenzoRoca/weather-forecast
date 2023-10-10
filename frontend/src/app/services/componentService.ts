export async function getComponent() {
    const res = await fetch('http://localhost:1337/api/component')
    console.log('Response Status:', res.status); // Log the response status
    if (!res.ok) {
      throw new Error('Something went wrong')
    }
    const data = await res.json();
    console.log('API Response Data:', data); // Log the API response data
    return data;
}