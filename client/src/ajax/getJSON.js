export default function getJSON(url, callback) {
	let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
    	if (request.readyState === 4) {
        	try {
                const JSONRes = JSON.parse(request.responseText);
                return callback(null, request.status, JSONRes);
            } catch (err) {
                return callback(err);
            }
    	}
    }
    request.onerror = function(err) {
        return callback(err)
    }
    request.send();
}