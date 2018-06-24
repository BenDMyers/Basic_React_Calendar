export function chunkArray(array, chunk_size=1) {
    if(chunk_size < 1 || !Number.isInteger(chunk_size)) {
        throw new Error(`Error: Expected chunk_size of type integer. Got ${typeof chunk_size} value ${chunk_size}.`)
    }
    else {
        let chunks = [];
        for (let i = 0; i < array.length; i += chunk_size) {
            let chunk = array.slice(i, i + chunk_size);
            chunks.push(chunk);
        }
        return chunks;
    }
}
