export const checkStatus = (setPlatformStatus) => {
    fetch('http://localhost:5000/api/status')
    .then(res => res.json())
    .then(data => setPlatformStatus(data[0]))
}