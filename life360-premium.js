let body = $response.body;
let obj = JSON.parse(body);

if (obj.features) {
    obj.features.premium = true;
    obj.features.driving = true;
    obj.features.location_history = true;
}

$done({ body: JSON.stringify(obj) });
