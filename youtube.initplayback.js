const headers = { ...($response.headers || {}) };

delete headers["Content-Length"];
delete headers["content-length"];
delete headers["Content-Encoding"];
delete headers["content-encoding"];
delete headers["Transfer-Encoding"];
delete headers["transfer-encoding"];

$done({
    status: 200,
    headers,
    body: ""
});
