function loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    // xhr.open('GET', 'incorrect_path.json', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            try {
                var data = JSON.parse(xhr.responseText);
                console.log("Data:", data);
            }
            catch (error) {
                console.error("Error name:", error);
            }
        }
        else {
            console.error("Error code:", xhr.status);
        }
    };
    xhr.send();
}
document.addEventListener('DOMContentLoaded', loadData);
