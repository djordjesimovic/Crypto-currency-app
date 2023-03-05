export const fetchFirstPairs = (setFirstPairs) => {
    fetch('http://localhost:5000/api/symbols')
    .then(res => res.json())
    .then(data => {
        const pairs = Array.isArray(data) ? data.slice(0, 5) : [];
        setFirstPairs(pairs)
    })
}